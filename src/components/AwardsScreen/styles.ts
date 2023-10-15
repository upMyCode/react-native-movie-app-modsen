import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { SearchContainerProps } from './types';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1f27;
`;

export const SearchContainer = styled.View<SearchContainerProps>`
  width: 90%;
  gap: 10px;
  flex-direction: row;
  align-items: center;
  align-self: center;
  padding: 14px 15px;
  border-radius: 50px;
  background-color: ${({ bgColor }) => {
    return bgColor;
  }};
`;

export const SearchInput = styled.TextInput`
  font-family: 'Poppins-Regular';
  font-size: 13px;
  margin-top: 5px;
`;

export const Settings = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-left: 60px;
  flex: 1;
`;

export const inlineStyles = StyleSheet.create({
  flatList: {
    alignSelf: 'center',
    width: '90%',
    height: '80%',
  },
});
