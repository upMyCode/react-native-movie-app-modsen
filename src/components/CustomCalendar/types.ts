export interface CustomCalendarProps {
  selectedDate: Date;
  onSelectDate: (date: string) => void;
}

export interface MonthLabelProps {
  color: string;
}

export interface DateObject {
  day: number;
  dateString: string;
  month: number;
  timestamp: number;
  year: number;
}

export interface DateInfo {
  date: DateObject;
}
