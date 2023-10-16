import { CustomCalendarDimensions } from '@constants/dimensions';
import { ArrowLeft, ArrowRight, ModsenLogoIMG } from '@helpers/images';
import { DayButton } from '@root';
import { CustomCalendarDarkTheme } from '@theme/allThemes';
import React from 'react';
import { Image, View } from 'react-native';

import { CalendarPicker, ModsenLogoContainer, MonthLabel } from './styles';
import { CustomCalendarProps, DateInfo } from './types';

export default function CustomCalendar({
  selectedDate,
  onSelectDate,
}: CustomCalendarProps) {
  const currentDate = new Date();
  const minDate = new Date().toISOString();
  const futureDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 2,
    currentDate.getDate()
  );
  const maxDate = futureDate.toISOString();

  const handleSetSelectedDate = (date: string) => {
    onSelectDate(date);
  };

  return (
    <View>
      <CalendarPicker
        theme={{
          backgroundColor: CustomCalendarDarkTheme.calendar.backgroundColor,
          calendarBackground: CustomCalendarDarkTheme.calendar.backgroundColor,
          selectedDayBackgroundColor:
            CustomCalendarDarkTheme.calendar.selectedDayBackgroundColor,
          selectedDayTextColor: CustomCalendarDarkTheme.calendar.dayTextColor,
          todayTextColor: CustomCalendarDarkTheme.calendar.dayTextColor,
          dayTextColor: CustomCalendarDarkTheme.calendar.dayTextColor,
          textDisabledColor: CustomCalendarDarkTheme.calendar.textDisabledColor,
        }}
        dayComponent={({ date }: DateInfo | any) => {
          return date ? (
            <DayButton
              date={date.dateString}
              day={date.day}
              selectedDate={selectedDate}
              onPress={handleSetSelectedDate}
            />
          ) : (
            <View />
          );
        }}
        renderArrow={(direction: 'left' | 'right') => {
          return (
            <Image
              width={CustomCalendarDimensions.arrowIconWidth}
              height={CustomCalendarDimensions.modsenIconHeight}
              source={{ uri: direction === 'left' ? ArrowLeft : ArrowRight }}
            />
          );
        }}
        renderHeader={(date: Date) => {
          const monthName = date.toString();
          return (
            <View>
              <MonthLabel
                color={CustomCalendarDarkTheme.calendar.monthTextColor}
              >
                {monthName}
              </MonthLabel>
            </View>
          );
        }}
        hideExtraDays
        hideDayNames
        minDate={minDate}
        maxDate={maxDate}
      />
      <ModsenLogoContainer>
        <Image
          width={CustomCalendarDimensions.modsenIconWidth}
          height={CustomCalendarDimensions.modsenIconHeight}
          source={{ uri: ModsenLogoIMG }}
        />
      </ModsenLogoContainer>
    </View>
  );
}
