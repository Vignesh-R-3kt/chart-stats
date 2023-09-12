import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import variablePie from 'highcharts/modules/variable-pie';
import { ApiService } from 'src/app/services/api.service';

variablePie(Highcharts);

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.scss']
})
export class HighchartsComponent implements OnInit {
  data: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.fetchAllData1().subscribe((result: any[]) => { 
      this.data = result;
      console.log("result");

      // Create the Highcharts chart here, inside the subscribe callback
      Highcharts.chart('container', {
        chart: {
          type: 'pie',
          backgroundColor: "#2B2B4B"
        },
        title: {
          text: '',
          align: 'left'
        },
        tooltip: {
          useHTML: true, 
          headerFormat: '',
          pointFormat: '<span style="color: black;">{point.y}</span>', 
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderColor: 'black', 
          borderWidth: 0.2,
          style: {
            whiteSpace: 'nowrap',
            color: 'black'
          }
        },
        series: [{
          type: 'variablepie',
          minPointSize: 10,
          innerSize: '0%',
          borderWidth: 0,
          zMin: 0,
          borderRadius: 0,
          dataLabels: {
            connectorWidth: 0,
            style: {
              fontSize: '0',
            },
          },
          
          colors: [
            '#FE502D',
            '#017BE4',
            '#0EBC56',
            '#7E2FE0'
          ],
          data: this.data 
        }]
      });
    });
  }
}
