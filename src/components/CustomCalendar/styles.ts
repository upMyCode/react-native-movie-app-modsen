import { Calendar } from 'react-native-calendars';
import styled from 'styled-components/native';

import { MonthLabelProps } from './types';

export const MonthLabel = styled.Text<MonthLabelProps>`
  color: ${({ color }) => {
    return color;
  }};
`;

export const CalendarPicker = styled(Calendar)`
  width: 90%;
  max-width: '90%';
  min-width: '90%';
  align-self: center;
`;

export const ModsenLogoContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 15px;
`;
