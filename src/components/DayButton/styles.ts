import styled from 'styled-components/native';

import { LabelProps, WrapperProps } from './types';

export const Wrapper = styled.TouchableOpacity<WrapperProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => {
    return bgColor;
  }};
  width: 20px;
  height: 20px;
  border-radius: 5px;
`;

export const Label = styled.Text<LabelProps>`
  color: ${({ color }) => {
    return color;
  }};
`;
