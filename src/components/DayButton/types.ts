export interface DayButtonProps {
  day: number;
  date: string;
  selectedDate: Date;
  onPress: (date: string) => void;
}

export type DateButtonType = 'disabled' | 'selected' | 'available';

export interface WrapperProps {
  bgColor: string;
}

export interface LabelProps {
  color: string;
}
