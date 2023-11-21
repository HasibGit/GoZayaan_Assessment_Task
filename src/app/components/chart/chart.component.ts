import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IExpense } from 'src/app/interfaces/expense.interface';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit, OnDestroy {
  selectedFilter: string;
  chartData: IExpense;
  filterChangeSubscription: Subscription;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.currentExpenseFilter.subscribe((filter) => {
      this.selectedFilter = filter;
      this.chartData = this.appService.getExpenseByFilter(this.selectedFilter);
    });
  }

  ngOnDestroy(): void {
    this.filterChangeSubscription.unsubscribe();
  }
}
