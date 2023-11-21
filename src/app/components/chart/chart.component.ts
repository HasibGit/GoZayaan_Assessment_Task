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

  items: Array<{ name: string; count: number; color: string }> = [
    { name: 'Orange', count: 50, color: 'orange' },
    { name: 'Apple', count: 25, color: 'red' },
    { name: 'Pear', count: 15, color: 'green' },
  ];
  private _total: number = 0;

  constructor(private appService: AppService) {
    if (this.items.length > 0) {
      this._total = this.items.map((a) => a.count).reduce((x, y) => x + y);
    }
  }

  ngOnInit(): void {
    this.appService.currentExpenseFilter.subscribe((filter) => {
      this.selectedFilter = filter;
      this.chartData = this.appService.getExpenseByFilter(this.selectedFilter);
    });
  }

  getPerimeter(radius: number): number {
    return Math.PI * 2 * radius;
  }

  getColor(index: number): string {
    return this.items[index].color;
  }

  getOffset(radius: number, index: number): number {
    var percent = 0;
    for (var i = 0; i < index; i++) {
      percent += this.items[i].count / this._total;
    }
    var perimeter = Math.PI * 2 * radius;
    return perimeter * percent;
  }

  ngOnDestroy(): void {
    this.filterChangeSubscription.unsubscribe();
  }
}
