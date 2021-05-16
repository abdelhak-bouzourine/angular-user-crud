import { HttpClient } from '@angular/common/http';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { getInstanceByDom, connect } from 'echarts';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/User';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-connect-charts',
  templateUrl: './connect-charts.component.html',
  styleUrls: ['./connect-charts.component.scss'],
})
export class ConnectChartsComponent implements OnInit {
  users: User[] = [];
  numberMales: number = 0;
  numberFemales: number = 0;
  options: any;
  options2!: Observable<any>;

  constructor(private userService: UserService, private http: HttpClient) {}

  async ngOnInit(): Promise<void> {
    this.users = await this.userService.getUsers().toPromise();

    this.users.forEach((user) => {
      if (user.sexe === 'M') {
        this.numberMales++;
      } else {
        this.numberFemales++;
      }
    });

    this.options = {
      title: {
        text: 'Male to Female Ratio in the Enterprise',
        x: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: {
        x: 'center',
        y: 'bottom',
        data: ['Male', 'Female'],
      },
      calculable: true,
      series: [
        {
          name: 'Ratio',
          type: 'pie',
          radius: [50, 150],
          roseType: 'area',
          data: [
            { value: this.numberMales, name: 'Male' },
            { value: this.numberFemales, name: 'Female' },
          ],
        },
      ],
    };

    this.options2 = this.http
      .get('assets/data/life-expectancy-table.json', { responseType: 'json' })
      .pipe(
        map((data: any) => ({
          grid3D: {},
          tooltip: {},
          xAxis3D: {
            type: 'category',
          },
          yAxis3D: {
            type: 'category',
          },
          zAxis3D: {},
          visualMap: {
            max: 1e8,
            dimension: 'Population',
          },
          dataset: {
            dimensions: [
              'Income',
              'Life Expectancy',
              'Population',
              'Country',
              { name: 'Year', type: 'ordinal' },
            ],
            source: data,
          },
          series: [
            {
              type: 'bar3D',
              // symbolSize: symbolSize,
              shading: 'lambert',
              encode: {
                x: 'Year',
                y: 'Country',
                z: 'Life Expectancy',
                tooltip: [0, 1, 2, 3, 4],
              },
            },
          ],
        })),
      );

  }

  theme!: string;






}
