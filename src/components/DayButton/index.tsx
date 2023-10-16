import { formatDateToYYYYMMDD, isDateInRange } from '@helpers/workWithDate';
import { CustomCalendarDarkTheme } from '@theme/allThemes';
import React, { useEffect, useState } from 'react';

import { Label, Wrapper } from './styles';
import { DateButtonType, DayButtonProps } from './types';

function DayButton({ onPress, date, day, selectedDate }: DayButtonProps) {
  const [calendarButtonState, setCalendarButtonState] =
    useState<DateButtonType>('disabled');

  useEffect(() => {
    const isAvaliable = isDateInRange(date);

    setCalendarButtonState(isAvaliable ? 'available' : 'disabled');

    if (date === formatDateToYYYYMMDD(selectedDate)) {
      setCalendarButtonState('selected');
    }
  }, [date]);

  return (
    <Wrapper
      onPress={() => {
        // eslint-disable-next-line no-unused-expressions, @typescript-eslint/no-unused-expressions
        calendarButtonState !== 'disabled' && onPress(date);
      }}
      bgColor={
        calendarButtonState === 'disabled'
          ? CustomCalendarDarkTheme.calendar.disableBackground
          : calendarButtonState === 'selected'
          ? CustomCalendarDarkTheme.calendar.selectedBackground
          : CustomCalendarDarkTheme.calendar.dateBackground
      }
    >
      <Label
        color={
          calendarButtonState === 'disabled'
            ? CustomCalendarDarkTheme.calendar.textDisabledColor
            : CustomCalendarDarkTheme.calendar.dayTextColor
        }
      >
        {day}
      </Label>
    </Wrapper>
  );
}

export default React.memo(DayButton);
