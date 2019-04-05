import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
public idlingTimeChartLabels = ['Moving', 'Idling'];
public idlingTimeChartData = [74, 26];
public doughnutChartType = 'doughnut';

public speedingViolationsChartLabels = ['Acceptable', 'Excesive'];
public speedingViolationsChartData = [1, 5];

public distanceChartLabels = ['A 4042', 'XG 4022', 'D 0700', 'DZ 12984', 'Z 4320', 'B 0790', 'D 0756'];
public distanceTimeChartData = [566, 436, 410, 385, 380, 321, 298, 200];
public barChartType = 'bar';

public fuelChartLabels = ['A 4042', 'XG 4022', 'D 0700', 'DZ 12984', 'Z 4320', 'B 0790', 'D 0756'];
public fuelChartData = [180, 176, 174, 170, 120, 80, 78];
public fuelChartType = 'pie';

  constructor() { }

  ngOnInit() {
  }

}
