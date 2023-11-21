export interface IExpense {
  period?: string;
  personal: number;
  shopping: number;
  phone: number;
  other: number;
}

export interface IChartData {
  category: string;
  expense: number;
  color: string;
}
