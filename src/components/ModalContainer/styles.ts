import styled from 'styled-components/native';

import type { ContentProps, HeaderTextProps } from './types';

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Content = styled.View<ContentProps>`
  display: flex;
  background-color: #2e2e2e;
  width: ${({ width }) => {
    return width;
  }}px;
  border-radius: 10px;
`;

export const ContentHeader = styled.View`
  margin: 37px 17px 0 25px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderText = styled.Text<HeaderTextProps>`
  font-family: 'Poppins-Medium';
  color: #dbdbdb;
  font-size: ${({ fSize }) => {
    return fSize;
  }}px;
  line-height: ${({ fLineHeight }) => {
    return fLineHeight;
  }}px;
`;

export const ContentMain = styled.View`
  display: flex;
  align-items: center;
  max-height: 310px;
`;

export const HeaderButtonContainer = styled.View`
  position: relative;
`;
