import { Injectable } from '@angular/core';
import { IExpense } from '../interfaces/expense.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  expenseData: IExpense[] = [
    {
      period: '1M',
      personal: 150,
      shopping: 90,
      phone: 60,
      other: 80,
    },
    {
      period: '6M',
      personal: 320,
      shopping: 240,
      phone: 255,
      other: 298,
    },
    {
      period: '1Y',
      personal: 950,
      shopping: 930,
      phone: 738,
      other: 490,
    },
    {
      period: 'ALL TIME',
      personal: 1800,
      shopping: 1420,
      phone: 1265,
      other: 1000,
    },
  ];

  constructor() {}

  getExpenseByFilter(expensePeriod: string): IExpense {
    return this.expenseData.find((expense) => expense.period === expensePeriod);
  }
}