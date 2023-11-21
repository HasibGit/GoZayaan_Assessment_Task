import { Component, OnInit } from '@angular/core';
import { CHART_FILTER_OPTIONS } from 'src/app/constants/app.constant';

@Component({
  selector: 'app-chart-filter',
  templateUrl: './chart-filter.component.html',
  styleUrls: ['./chart-filter.component.scss'],
})
export class ChartFilterComponent implements OnInit {
  selectedFilter = 'ALL TIME';

  chartFilterOptions = CHART_FILTER_OPTIONS;

  constructor() {}

  ngOnInit(): void {}

  onSelectFilter(value: string) {
    this.selectedFilter = value;
  }
}
