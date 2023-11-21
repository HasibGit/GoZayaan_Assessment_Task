import { Injectable } from '@angular/core';
import { IExpense } from '../interfaces/expense.interface';
import { EXPENSE_DATA } from '../constants/app.constant';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  expenseData: IExpense[] = EXPENSE_DATA;

  constructor() {}

  getExpenseByFilter(expensePeriod: string): IExpense {
    return this.expenseData.find((expense) => expense.period === expensePeriod);
  }
}
