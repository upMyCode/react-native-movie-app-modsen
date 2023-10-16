/* eslint-disable import/no-unresolved */
import {
  RootRouteProps,
  StackNavigation,
} from '@components/HomeStackScreen/types';
import {
  FilmDetailsScreenDimensions,
  WindowDimensions,
} from '@constants/dimensions';
import MOCK_YOUTUBE_ID from '@constants/mockData';
import TextStrings from '@constants/strings';
import { API_KEY_YOUTUBE } from '@env';
import convertCommentsToArray from '@helpers/convertCommentsToArray';
import { Arrow, Clock, Play, Ticket } from '@helpers/images';
import filmDescriptionChecker from '@helpers/stringWorkers';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AddCommentaryForm, Button, UserComment } from '@root';
import { getCurrentUserById } from '@src/api/authAPI/authApi';
import { checkCommentByFilmId } from '@src/api/filmAPI/filmApi';
import { FilmDetailsScreenDarkTheme } from '@theme/allThemes';
import React, { useEffect, useState } from 'react';
import type { ListRenderItemInfo } from 'react-native';
import { FlatList, Image, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
  ArrowIMG,
  BookingButtonContainer,
  BookingButtonTitle,
  ButtonContainer,
  CommentariesInfo,
  CommentariesWrapper,
  CurrentFilmAdditionalInfoContainer,
  CurrentFilmDescription,
  CurrentFilmDescriptionContainer,
  CurrentFilmInfoContainer,
  Description,
  GenresContainer,
  inlineStyles,
  linearGradientColor,
  MoreButtonTitle,
  MoreButtonTitleWrapper,
  RedirectionArrowButton,
  TimeDurationInfo,
  TimeInfoContainer,
  Title,
  TrailerContainer,
  Wrapper,
  YouTubeTrailer,
} from './styles';
import type { Comment, USER, YoTubePlayerState, YouTubeEvent } from './types';

export default function FilmDetailsScreen() {
  const route = useRoute<RootRouteProps<'DetailsScreen'>>();
  const { movie } = route.params;
  const descriptionState = filmDescriptionChecker(movie.synopsis);
  const [isHideMoreText, setHideMoreText] = useState<boolean>(false);
  const [youTubePlayer, setYouTubePlayer] = useState<YoTubePlayerState>({
    isPlaying: true,
    status: null,
  });
  const navigation = useNavigation<StackNavigation>();
  const [currentUserInformation, setUserInformation] = useState<null | USER>(
    null
  );
  const [isCommentChange, setCommentChangeStatus] = useState<boolean>(false);
  const [commentaries, setCommentaries] = useState<Comment[] | null>(null);

  const handleSetHide = () => {
    setHideMoreText((hide) => {
      return !hide;
    });
  };

  const handlePlayVideo = () => {
    setYouTubePlayer((player) => {
      return {
        ...player,
        isPlaying: !player.isPlaying,
      };
    });
  };

  const handleChangePlayerVideo = (e: YouTubeEvent) => {
    setYouTubePlayer((player) => {
      return {
        ...player,
        status: e.state,
      };
    });
  };

  const handleRedirectionToPreviusScreen = () => {
    navigation.goBack();
  };

  const renderItemCurrentMovieTitle = ({
    item,
  }: ListRenderItemInfo<string>) => {
    return (
      <CurrentFilmDescriptionContainer>
        <CurrentFilmDescription>{item}</CurrentFilmDescription>
      </CurrentFilmDescriptionContainer>
    );
  };

  useEffect(() => {
    const getUserAndFilmInformation = async () => {
      const user = await getCurrentUserById();
      const commentariesResponse = await checkCommentByFilmId(movie.imdbid);

      if (user && typeof user !== 'string') {
        setUserInformation(user);
      }

      if (commentariesResponse && typeof commentariesResponse !== 'string') {
        const convertedComments = convertCommentsToArray(commentariesResponse);

        setCommentaries(convertedComments);
      }
    };

    getUserAndFilmInformation();
  }, [isCommentChange]);

  const renderCommentItem = ({ item }: ListRenderItemInfo<Comment>) => {
    return <UserComment comment={item} userData={currentUserInformation} />;
  };

  const handleRedirectToBookingSeats = () => {
    navigation.navigate('ChooseSeatsScreen', { movie });
  };

  return (
    <>
      <StatusBar hidden />
      <Wrapper>
        <TrailerContainer>
          <YouTubeTrailer
            windowWidth={WindowDimensions.windowWidth}
            play={youTubePlayer.isPlaying}
            onChangeState={handleChangePlayerVideo}
            loop={false}
            controls={0}
            showinfo={false}
            modestbranding
            apiKey={API_KEY_YOUTUBE}
            videoId={MOCK_YOUTUBE_ID}
            fullscreen
            style={inlineStyles.youTubeInline}
          />
          {youTubePlayer.status !== 'playing' && (
            <ButtonContainer>
              <Button
                width={FilmDetailsScreenDimensions.youTubePlayWidth}
                height={FilmDetailsScreenDimensions.youTubePlayHeight}
                bgColor={FilmDetailsScreenDarkTheme.buttonColor}
                bRadius={FilmDetailsScreenDimensions.youTubePlayBorderRadius}
                onPress={handlePlayVideo}
              >
                <Image
                  source={{ uri: Play }}
                  width={FilmDetailsScreenDimensions.playImageWidth}
                  height={FilmDetailsScreenDimensions.playImageHeight}
                />
              </Button>
            </ButtonContainer>
          )}
          <RedirectionArrowButton onPress={handleRedirectionToPreviusScreen}>
            <ArrowIMG source={{ uri: Arrow }} />
          </RedirectionArrowButton>
          <BookingButtonContainer>
            <Button
              width={FilmDetailsScreenDimensions.bookingButtonWidth}
              height={FilmDetailsScreenDimensions.bookingButtonHeight}
              bgColor={FilmDetailsScreenDarkTheme.buttonColor}
              bRadius={FilmDetailsScreenDimensions.bookingButtonBorderRadius}
              onPress={handleRedirectToBookingSeats}
            >
              <Image
                source={{ uri: Ticket }}
                width={FilmDetailsScreenDimensions.ticketImageWidth}
                height={FilmDetailsScreenDimensions.ticketImageHeight}
              />
              <BookingButtonTitle>
                {TextStrings.FilmDetailsScreenBookingButtonTitle}
              </BookingButtonTitle>
            </Button>
          </BookingButtonContainer>
          <LinearGradient
            colors={linearGradientColor}
            style={inlineStyles.linearGradient}
          />
        </TrailerContainer>
        <CurrentFilmAdditionalInfoContainer>
          <GenresContainer>
            <FlatList
              columnWrapperStyle={inlineStyles.flatList}
              data={movie.genre}
              keyExtractor={(item) => {
                return item;
              }}
              numColumns={5}
              renderItem={renderItemCurrentMovieTitle}
            />
          </GenresContainer>
          <TimeInfoContainer>
            <Image
              source={{ uri: Clock }}
              width={FilmDetailsScreenDimensions.clockImageWidth}
              height={FilmDetailsScreenDimensions.clockImageHeight}
            />
            <TimeDurationInfo>
              {TextStrings.FilmDetailsScreenTimeDurationInfo}
            </TimeDurationInfo>
          </TimeInfoContainer>
        </CurrentFilmAdditionalInfoContainer>
        <CurrentFilmInfoContainer>
          <Title>{movie.title}</Title>
          <Description>
            {descriptionState.isShorted && !isHideMoreText
              ? descriptionState.description
              : movie.synopsis}
            {descriptionState.isShorted && (
              <MoreButtonTitleWrapper>
                <Button
                  width={FilmDetailsScreenDimensions.moreButtonWidth}
                  height={FilmDetailsScreenDimensions.moreButtonHeight}
                  mt={FilmDetailsScreenDimensions.moreButtonMTop}
                  onPress={handleSetHide}
                >
                  <MoreButtonTitle>
                    {!isHideMoreText
                      ? TextStrings.FilmDetailsScreenMoreButtonTitleMore
                      : TextStrings.FilmDetailsScreenMoreButtonTitleHide}
                  </MoreButtonTitle>
                </Button>
              </MoreButtonTitleWrapper>
            )}
          </Description>
        </CurrentFilmInfoContainer>
        <CommentariesInfo>{`${
          (commentaries && commentaries.length) ?? '0'
        } Comments`}</CommentariesInfo>
        <AddCommentaryForm
          imdbid={movie.imdbid}
          setCommentChangeStatus={setCommentChangeStatus}
        />
        {commentaries && commentaries.length > 0 && currentUserInformation && (
          <CommentariesWrapper>
            <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              overScrollMode="never"
              data={commentaries}
              renderItem={renderCommentItem}
              keyExtractor={(_item, index) => {
                return index.toString();
              }}
            />
          </CommentariesWrapper>
        )}
      </Wrapper>
    </>
  );
}
