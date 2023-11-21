import { IExpense } from '../interfaces/expense.interface';

export const EXPENSE_DATA: IExpense[] = [
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

export const CHART_FILTER_OPTIONS: string[] = ['1M', '6M', '1Y', 'ALL TIME'];
