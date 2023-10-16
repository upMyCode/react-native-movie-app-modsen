import { WindowDimensions } from '@constants/dimensions';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { SeatItemProps } from './types';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #1e1f27;
`;

export const RedirectBackContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  height: 30px;
`;

export const ArrowIMG = styled.Image`
  width: 150px;
  height: 15px;
  z-index: 500;
`;

export const RedirectionArrowButton = styled.TouchableOpacity`
  width: 30px;
`;

export const RedirectionDescription = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 15px;
  line-height: 23px;
  color: #ffffff;
`;

export const ScheduleContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  height: 42px;
  margin: 33px 0 26px 0;
`;

export const ScheduleContainerTitle = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

export const DateInfo = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 12px;
  line-height: 18px;
  color: #ffffff;
`;

export const DateContainer = styled.View`
  width: 131px;
  height: 42px;
`;

export const CalendarButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  height: 42px;
`;

export const SeatItem = styled.TouchableOpacity<SeatItemProps>`
  width: ${WindowDimensions.windowWidth * 0.075}px;
  height: ${WindowDimensions.windowWidth * 0.075}px;
  margin: 5px;
  border-radius: 5px;
  background-color: ${({ bgColor }) => {
    return bgColor;
  }};
  border-width: ${({ bWidth }) => {
    return bWidth;
  }}px;
  border-color: ${({ bColor }) => {
    return bColor;
  }};
`;

export const inlineStyles = StyleSheet.create({
  flatList: {
    width: '90%',
    minHeight: 80,
    maxHeight: 100,
  },
  lFlatList: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  rFlatList: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  bottomFlatList: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
  },
  todaySessionsFlatList: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const SeatsContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 40%;
  margin-top: 20px;
`;

export const SeatsTitle = styled.Text`
  width: 90%;
  margin-top: 33px;
  font-family: 'Poppins-Medium';
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

export const SeatsInfo = styled.Text`
  width: 90%;
  margin-top: 5px;
  marg-bottom: 20px;
  text-align: center;
  font-family: 'Poppins-Regular';
  color: 13px;
  line-height: 20px;
  color: #ffffff;
`;

export const BookButtonTitle = styled.Text`
  font-family: 'Poppins-ExtraBold';
  font-size: 15px;
  line-height: 23px;
  color: #ffffff;
`;

export const SeatInfoContainer = styled.View`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const BookingContainer = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 38px;
`;

export const BookingContainerSeatInfoText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 13px;
  line-height: 20px;
  color: #ffffff;
`;

export const BookingContainerSeatPriceInfoText = styled.Text`
  font-family: 'Poppins-ExtraBold';
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
`;
