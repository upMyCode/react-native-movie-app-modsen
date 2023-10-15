import styled from 'styled-components/native';

import {
  AvailableSeatsProps,
  CinemaTextProps,
  SessionButtonContainerProps,
  TimeTextProps,
} from './types';

export const Wrapper = styled.View`
  width: 120px;
  height: 81px;
`;

export const SessionButtonContainer = styled.TouchableOpacity<SessionButtonContainerProps>`
  background-color: ${({ bgColor }) => {
    return bgColor;
  }};
  border-color: ${({ bColor }) => {
    return bColor;
  }};
  border-width: ${({ bWidth }) => {
    return bWidth;
  }}px;
  flex: 1;
  border-radius: 15px;
  padding: 7px;
  justify-content: space-evenly;
  margin-right: 10px;
`;

export const TimeText = styled.Text<TimeTextProps>`
  font-family: 'Poppins-Bold';
  font-size: 10px;
  line-height: 15px;
  color: ${({ color }) => {
    return color;
  }};
`;

export const CinemaText = styled.Text<CinemaTextProps>`
  font-family: 'Poppins-Regular';
  font-size: 10px;
  line-height: 15px;
  color: ${({ color }) => {
    return color;
  }};
`;

export const AvailableSeatsContainer = styled.View`
  flex-direction: row;
  gap: 5px;
`;

export const AvailableSeatsDescription = styled.Text<AvailableSeatsProps>`
  font-family: 'Poppins-Light';
  font-size: 7px;
  line-height: 11px;
  color: ${({ color }) => {
    return color;
  }};
`;
