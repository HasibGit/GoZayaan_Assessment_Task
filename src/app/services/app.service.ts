import { Injectable } from '@angular/core';
import { IExpense } from '../interfaces/expense.interface';
import { CHART_FILTER_OPTIONS, EXPENSE_DATA } from '../constants/app.constant';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  currentExpenseFilter: Subject<string> = new BehaviorSubject<string>(
    CHART_FILTER_OPTIONS.allTime
  );

  expenseData: IExpense[] = EXPENSE_DATA;

  constructor() {}

  setCurrentExpenseFilter(filter: string) {
    this.currentExpenseFilter.next(filter);
  }

  getExpenseByFilter(expensePeriod: string): IExpense {
    return this.expenseData.find((expense) => expense.period === expensePeriod);
  }
}
