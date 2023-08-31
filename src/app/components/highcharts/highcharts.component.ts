import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import variablePie from 'highcharts/modules/variable-pie';

variablePie(Highcharts);

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.scss']
})

export class HighchartsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
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
        headerFormat: '',
        pointFormat: '<span>{point.y}</span>'
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
        data: [{
          y: 555992,
          z: 130,
        }, {
          y:600000,
          z: 110
        }, {
          y: 252679,
          z: 90
        }, {
          y: 158865,
          z: 120
        }],
        colors: [
          '#FE502D',
          '#017BE4',
          '#0EBC56',
          '#7E2FE0'
        ]
      }]
    });
  }
}
