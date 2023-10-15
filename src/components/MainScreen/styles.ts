import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import YouTube from 'react-native-youtube';
import styled from 'styled-components/native';

import { ImageWrapperProps, TitleProps } from './types';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1f27;
`;

export const ComingSoonSection = styled.View`
  margin-top: 33px;
  margin-bottom: 20px;
`;

export const NowShowingSection = styled.View`
  margin-top: 20px;
  margin-bottom: 25px;
`;

export const Title = styled.Text<TitleProps>`
  margin-left: 30px;
  font-family: 'Poppins-Medium';
  font-size: 22px;
  line-height: 33px;
  color: #ffffff;
  margin-bottom: ${({ mBot }) => {
    return mBot;
  }};
`;

export const MovieButtonsGroup = styled.View`
  margin-left: 15px;
  margin-right: 11px;
`;

export const MovieImage = styled.Image`
  width: 178px;
  height: 263px;
  border-radius: 10px;
`;

export const ImageWrapper = styled(Animated.View)<ImageWrapperProps>`
  width: 180px;
  height: 243px;
  overflow: hidden;
  border-radius: 15px;
  margin-left: ${({ mLeft }) => {
    return mLeft;
  }}px;
  margin-right: ${({ mRight }) => {
    return mRight;
  }}px;
`;

export const CurrentFilmInfoContainer = styled.View`
  display: flex;
  align-items: center;
`;

export const CurrentFilmInfoTitle = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

export const CurrentFilmDescriptionContainer = styled.View`
  padding: 1px 4px 1px 4px;
  border-radius: 5px;
  background-color: #484747;
  margin-right: 10px;
`;

export const CurrentFilmDescription = styled.Text`
  font-family: 'Poppins-Medium';
  size: 13px;
  line-height: 20px;
  color: #ffffff;
`;

export const TrailerContainer = styled.View`
  position: relative;
  margin-top: 8px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const YouTubeTrailer = styled(YouTube)`
  width: 330px;
  height: 200px;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  top: 90px;
  left: 177px;
`;

export const inlineStyles = StyleSheet.create({
  flatList: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  youTubeInline: {
    borderRadius: 10,
  },
});
