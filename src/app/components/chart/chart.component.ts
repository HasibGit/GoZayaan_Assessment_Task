import { Component, OnInit } from '@angular/core';
import { IExpense } from 'src/app/interfaces/expense.interface';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  chartData: IExpense;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.chartData = this.appService.getExpenseByFilter('ALL TIME');
  }
}
