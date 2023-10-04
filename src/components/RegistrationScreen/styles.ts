import styled from 'styled-components/native';

import type { AuthDescriptionItemProps, AuthTextContentProps } from './types';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1f27;
`;

export const ImageContainer = styled.View`
  display: flex;
  align-items: center;
  margin-top: 52px;
`;

export const TextDescriptionContainer = styled.View`
  margin-top: 40px;
  display: flex;
  align-items: center;
`;

export const TextDescription = styled.Text`
  width: 297px;
  font-family: 'InriaSans-LightItalic';
  font-size: 32px;
  line-height: 38px;
  color: #ffffff;
`;

export const ButtonsGroup = styled.View`
  margin-top: 10px;
`;

export const AuthTextContent = styled.Text<AuthTextContentProps>`
  font-family: 'Inter-SemiBold';
  line-height: 19px;
  font-size: 16px;
  color: ${({ textColor }) => {
    return textColor;
  }};
`;

export const AuthImage = styled.Image`
  position: absolute;
  top: 14px;
  left: 17px;
`;

export const AuthDescriptionContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin: 15px 0 65px 39px;
`;

export const AuthDescriptionItem = styled.Text<AuthDescriptionItemProps>`
  font-family: 'InriaSans-LightItalic';
  font-size: 12px;
  line-height: 14px;
  text-decoration: ${({ isUnderlined }) => {
    return isUnderlined ? 'underline' : 'none';
  }};
  color: #ffffff;
  text-decoration-color: #ffffff;
`;

export const FooterImagesContainer = styled.View`
  margin: 0 32px 30px 32px;
`;

export const FooterDescriptionContent = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const FooterDescription = styled.Text`
  font-family: 'InriaSans-Light';
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
`;

export const AuthInErrorText = styled.Text`
  font-family: 'Poppins-Regular';
  color: #ed051c;
  line-height: 21px;
  font-size: 14px;
  max-width: 210px;
`;

export const ErrorContainer = styled.View`
  margin: 0 17px 15px 25px;
`;
