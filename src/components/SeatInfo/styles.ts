import { WindowDimensions } from '@constants/dimensions';
import styled from 'styled-components/native';

import { SeatItemProps } from './types';

export const Wrapper = styled.View`
  width: 100px;
  display: flex;
  flex-direction: row;
`;

export const SeatItem = styled.View<SeatItemProps>`
  width: ${WindowDimensions.windowWidth * 0.05};
  height: ${WindowDimensions.windowWidth * 0.05};
  border-radius: 5px;
  background-color: ${({ bgColor }) => {
    return bgColor;
  }};
  border-width: ${({ bWidth }) => {
    return bWidth ?? 0;
  }}px;
  border-color: ${({ bColor }) => {
    return bColor ?? 'transparent';
  }};
  margin-right: 4px;
`;

export const SeatItemText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 13px;
  line-height: 20px;
  color: #ffffff;
`;
