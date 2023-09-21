import { Component, OnInit ,Input } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

function numberValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const value = control.value;
  if (isNaN(value)) {
    return { invalidNumber: true };
  }
  return null;
}

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss'],
})
export class GoalsComponent implements OnInit {
  
  goals: any[] = [];
  goalColors: any[] = [];
selectedGoalIndex: number = 0;
  isDescriptionPopupOpen: boolean = false;
  selectedGoalDescription: string | null = null;
  currentColorIndex: number = 0;
  indexColour: number = 0;

  showDescriptionPopup(description: string, i: number) {
    this.selectedGoalDescription = description;
    this.indexColour = i;
    this.isDescriptionPopupOpen = true;
    this.currentColorIndex = (this.currentColorIndex + 1) % 4;
  }

  closeDescriptionPopup() {
    this.selectedGoalDescription = null;
    this.isDescriptionPopupOpen = false;
  }

  getGradientClass(index: number): string {
    const gradientClasses = [
      'linear-gradient-orange',
      'linear-gradient-blue',
      'linear-gradient-green',
      'linear-gradient-purple',
    ];
    return gradientClasses[index % gradientClasses.length];
  }

  colorIndex: number = 0;
  isPopupOpen: boolean = false;
  todayDate: Date = new Date();
  startDate: Date = new Date();
  goalFormVisible: boolean = false;
  newGoal: any = {};
  constructor(private fb: FormBuilder, private http: ApiService) {}

  goalsForm = this.fb.group({
    goalName: ['', [Validators.required, Validators.minLength(5)]],
    Estimatedhours: [
      '',
      [Validators.required, Validators.minLength(1), numberValidator],
    ],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    description: ['', [Validators.required, Validators.minLength(15)]],
  });

  ngOnInit(): void {
    this.fetchAllGoals();
  }

  fetchAllGoals() {
    this.http.fetchAllGoals().subscribe((res: any) => {
      this.goals = res;
    });
  }

  deleteGoal(id: number) {
    this.http.deleteGoal(id).subscribe((res: any) => {
      this.fetchAllGoals();
    });
  }

  openPopup() {
    this.isPopupOpen = true;
    this.goalFormVisible = true;
  }

  closePopup() {
    this.isPopupOpen = false;
    this.goalFormVisible = false;
  }

  submitGoal() {
    this.goalFormVisible = false;
    this.newGoal.color = this.goalColors[this.colorIndex];
    this.goals.push(this.newGoal);
    this.colorIndex = (this.colorIndex + 1) % this.goalColors.length;
    this.newGoal = {};
  }

  getCardColor(index: number): string {
    if (index < 4) {
      return this.goalColors[index];
    } else {
      return this.goalColors[(index - 4) % this.goalColors.length];
    }
  }

  updateEndDate(e: any) {
    const startDate = new Date(e.target.value);
    this.startDate = startDate;
  }

  fetchFormData(e: any) {
    e.preventDefault();

    const formData = this.goalsForm.value;

    // Create a new goal object with form data
    const newGoal = {
      goalName: formData.goalName,
      Estimatedhours: formData.Estimatedhours, // Make sure this line is correct
      startDate: formData.startDate,
      endDate: formData.endDate,
      description: formData.description,
      color: this.getCardColor(this.goals.length),
    };

    if (this.goalsForm.valid) {
      this.http.sendGoalToDB(newGoal).subscribe((res) => {
        // Push the new goal to the goals array
        this.goals.push(newGoal);

        // Clear the form
        this.goalsForm.reset();

        // Close the popup
        this.isPopupOpen = false;
        this.goalFormVisible = false;
      });
    }
  }

  expandText(e: any) {
    e.target.classList.remove('active');
    e.target.closest('div').querySelector('h4').classList.add('active');
    e.target
      .closest('div')
      .querySelector('.see-less-btn')
      .classList.add('active');
  }

  collapseText(e: any) {
    e.target.classList.remove('active');
    e.target.closest('div').querySelector('h4').classList.remove('active');
    e.target
      .closest('div')
      .querySelector('.see-more-btn')
      .classList.add('active');
  }
}
