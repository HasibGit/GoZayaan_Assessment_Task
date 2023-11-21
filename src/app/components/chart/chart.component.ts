import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IChartData, IExpense } from 'src/app/interfaces/expense.interface';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit, OnDestroy {
  selectedFilter: string;
  data: IExpense;
  chartData: IChartData[] = [];
  totalExpense: number;

  filterChangeSubscription: Subscription;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.currentExpenseFilter.subscribe((filter) => {
      this.chartData = [];
      this.selectedFilter = filter;
      this.data = this.appService.getExpenseByFilter(this.selectedFilter);

      delete this.data.period;

      this.calculateTotalExpense();
      this.prepareChartData();
    });
  }

  prepareChartData() {
    for (const [key, value] of Object.entries(this.data)) {
      this.chartData.push({
        category: key,
        expense: value,
        color: this.getColor(key),
      });
    }
  }

  calculateTotalExpense(): void {
    this.totalExpense = Object.values(this.data).reduce(
      (acc, value) => acc + value,
      0
    );
  }

  getPerimeter(radius: number): number {
    return Math.PI * 2 * radius;
  }

  getColor(category: string): string {
    switch (category) {
      case 'personal':
        return '#4c49ed';
      case 'shopping':
        return '#afadfe';
      case 'phone':
        return '#4fd18b';
      case 'other':
        return '#141197';
      default:
        return '#999';
    }
  }

  getOffset(radius: number, index: number): number {
    var percent = 0;
    for (var i = 0; i < index; i++) {
      percent += this.chartData[i].expense / this.totalExpense;
    }
    var perimeter = Math.PI * 2 * radius;
    return perimeter * percent;
  }

  ngOnDestroy(): void {
    this.filterChangeSubscription.unsubscribe();
  }
}
