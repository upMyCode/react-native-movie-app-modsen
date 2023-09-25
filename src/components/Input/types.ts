import type { KeyboardType } from 'react-native';

export interface InputProps {
  formType: KeyboardType | undefined;
  maxLength: number;
  placeholder: string;
  icon: string;
}
