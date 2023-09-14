import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent implements OnInit {
  ngOnInit(): void {
    this.generateChart();
  }

  generateChart() {
    const options: Highcharts.Options = {
      chart: {
        type: 'column',
        backgroundColor: '#2B2B4B',
      },
      title: {
        text: 'Projects | Year wise',
      },
      xAxis: {
        categories: ['2018', '2019', '2020', '2021', '2022', '2023'],
        title: {
          text: 'Year',
          style: {
            fontSize: "18px",
          }
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: 'No of Projects',
        },
      },
      tooltip: {
        backgroundColor: "#000033"
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          type: 'column',
          name: 'No of Projects',
          data: [100, 150, 80, 60, 160, 50],
        },
      ],
    };

    Highcharts.chart('progress-container', options);
  }
}
