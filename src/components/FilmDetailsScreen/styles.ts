import { StyleSheet } from 'react-native';
import YouTube from 'react-native-youtube';
import styled from 'styled-components/native';

import { TrailerContainerProps } from './types';

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  background-color: #1e1f27;
`;

export const CurrentFilmInfoContainer = styled.View`
  width: 329px;
  display: flex;
  align-items: flex-start;
  margin-top: 28px;
  margin-bottom: 30px;
`;

export const Title = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 10px;
  color: #ffffff;
`;

export const Description = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 11px;
  line-height: 17px;
  color: #ffffff;
`;

export const MoreButtonTitle = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 12px;
  line-height: 18px;
  color: #d98639;
`;

export const MoreButtonTitleWrapper = styled.Text`
  margin-top: 45px;
`;

export const YouTubeTrailer = styled(YouTube)<TrailerContainerProps>`
  width: ${({ windowWidth }) => {
    return windowWidth;
  }}px;
  height: 350px;
`;

export const TrailerContainer = styled.View`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  top: 158px;
  left: 178px;
`;

export const CurrentFilmDescriptionContainer = styled.View`
  padding: 4px 10px 4px 10px;
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

export const GenresContainer = styled.View`
  width: 300px;
`;

export const CurrentFilmAdditionalInfoContainer = styled.View`
  width: 90%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TimeDurationInfo = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 10px;
  line-height: 15px;
  color: #ffffff;
  margin-left: 4px;
`;

export const TimeInfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RedirectionArrowButton = styled.TouchableOpacity`
  position: absolute;
  top: 70px;
  left: 33px;
  z-index: 100;
`;

export const ArrowIMG = styled.Image`
  width: 150px;
  height: 15px;
  z-index: 500;
`;

export const BookingButtonContainer = styled.View`
  position: absolute;
  top: 280px;
  left: 110px;
`;

export const BookingButtonTitle = styled.Text`
  font-family: 'Poppins-ExtraBold';
  font-size: 15px;
  line-height: 23px;
  color: #ffffff;
  margin-left: 8px;
`;

export const CommentariesInfo = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 12px;
  line-height: 18px;
  color: #ffffff;
  width: 100%;
  margin-left: 65px;
  margin-bottom: 20px;
`;

export const CommentariesWrapper = styled.View`
  width: 100%;
  margin-top: 30px;
  max-height: 100px;
  height: 100px;
`;

export const linearGradientColor = ['rgba(30, 31, 39, 1)', 'rgba(0, 0, 0, 0)'];

export const inlineStyles = StyleSheet.create({
  youTubeInline: {
    borderRadius: 10,
  },
  linearGradient: {
    width: '100%',
    height: 60,
    zIndex: 10,
    position: 'absolute',
    bottom: -55,
  },
  flatList: {
    flexDirection: 'row',
  },
});
