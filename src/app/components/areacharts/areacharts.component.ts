// areacharts.component.ts
import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-areacharts',
  templateUrl: './areacharts.component.html',
  styleUrls: ['./areacharts.component.scss']
})
export class AreachartsComponent implements OnInit, AfterViewInit {
  constructor(private http: ApiService) { }
  data: any[] = [];

  ngOnInit() { }

  ngAfterViewInit() {
    this.http.fetchNumberOfProjectsData().subscribe((res: any) => {
      res.forEach((item: any) => {
        this.data.push(item.projects)
      });
      this.generateChart(this.data);
    });
  }

  generateChart(data: any) {
    const options: Highcharts.Options = {
      chart: {
        type: 'area',
        backgroundColor: '#2b2b4b',
        style: {
          color: '#ffffff'
        }
      },
      accessibility: {
        description: '',
      },
      title: {
        text: 'Projects',
        style: {
          color: '#ffffff'
        }
      },
      xAxis: {
        allowDecimals: false,
      },
      yAxis: {
        title: {
          text: 'No of Projects'
        }
      },
      tooltip: {
        useHTML: true,
        pointFormat: '<span style="color: black;"><b>No of Projects {point.y:,.0f}</b><br/></span>',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderColor: 'black',
        borderWidth: 0.2,
        style: {
          whiteSpace: 'nowrap',
          color: 'black',
        }
      },
      plotOptions: {
        area: {
          pointStart: 2010,
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true
              }
            }
          }
        }
      },
      series: [
        {
          name: 'Year',
          type: 'area',
          data: data
        }
      ]
    };

    Highcharts.chart('container-1', options);
  }
}
