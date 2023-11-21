import { Component, OnInit } from '@angular/core';
import { CHART_FILTER_OPTIONS } from 'src/app/constants/app.constant';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-chart-filter',
  templateUrl: './chart-filter.component.html',
  styleUrls: ['./chart-filter.component.scss'],
})
export class ChartFilterComponent implements OnInit {
  selectedFilter = CHART_FILTER_OPTIONS.allTime.toString();

  chartFilterOptions = Object.values(CHART_FILTER_OPTIONS);

  constructor(private appService: AppService) {}

  ngOnInit(): void {}

  onSelectFilter(value: string) {
    this.selectedFilter = value;
    this.appService.setCurrentExpenseFilter(this.selectedFilter);
  }
}
