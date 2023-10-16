/* eslint-disable import/no-unresolved */
import { StackNavigation } from '@components/HomeStackScreen/types';
import {
  CARD_LENGTH,
  MainScreenDimensions,
  SPACING,
} from '@constants/dimensions';
import Strings from '@constants/strings';
import { API_KEY_YOUTUBE } from '@env';
import { Play } from '@helpers/images';
import useGetMovieButton from '@hooks/useGetMovieButton';
import { useNavigation } from '@react-navigation/core';
import { Button, MovieButton } from '@root';
import { handleGetThrailerYouTubeMovieByID } from '@src/api/filmAPI/filmApi';
import { useAppSelector } from '@src/store/hooks';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import {
  ButtonContainer,
  ComingSoonSection,
  CurrentFilmDescription,
  CurrentFilmDescriptionContainer,
  CurrentFilmInfoContainer,
  CurrentFilmInfoTitle,
  ImageWrapper,
  inlineStyles,
  MovieButtonsGroup,
  MovieImage,
  NowShowingSection,
  Title,
  TrailerContainer,
  Wrapper,
  YouTubeTrailer,
} from './styles';
import {
  CarouselItem,
  ImageItemProps,
  RenderItemMovieButtonProps,
  RenderItemMovieProps,
  ViewableItems,
  YoTubePlayerState,
  YouTubeEvent,
} from './types';

function ImageItem({ id, image, scrollX }: ImageItemProps) {
  const size = useSharedValue(0.8);

  const inputRange = [
    (id - 1) * CARD_LENGTH,
    id * CARD_LENGTH,
    (id + 1) * CARD_LENGTH,
  ];

  size.value = interpolate(
    scrollX,
    inputRange,
    [0.8, 1, 0.8],
    Extrapolate.CLAMP
  );

  const cardStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scaleY: size.value }],
    };
  });
  return (
    <ImageWrapper
      style={cardStyle}
      mLeft={id === 0 ? SPACING * 5 : SPACING}
      mRight={id === 9 ? SPACING * 5 : SPACING}
    >
      <MovieImage source={{ uri: image }} />
    </ImageWrapper>
  );
}

export default function MainScreen() {
  const { MOVIE_BUTTONS, movieButtonStatusList, genreStatus } =
    useGetMovieButton();
  const navigation = useNavigation<StackNavigation>();
  const [scrollX, setScrollX] = useState<number>(0);
  const movies = useAppSelector((state) => {
    return state.getMoviesSlice;
  });
  const [currentFilmInCarousel, setFilmInCarousel] = useState<CarouselItem>({
    id: '',
    title: '',
    genres: [],
  });
  const UPLOAD_MOVIES = movies[genreStatus].filter(
    (film: RenderItemMovieProps) => {
      const isImageUrl = !!film.imageurl;

      return !!film.imageurl === isImageUrl;
    }
  );
  const UPLOAD_TRAILER_FOR_MOVIE = UPLOAD_MOVIES[4];
  const [youTubeId, setYouTubeId] = useState<string>('');
  const [youTubePlayer, setYouTubePlayer] = useState<YoTubePlayerState>({
    isPlaying: false,
    status: null,
  });

  useEffect(() => {
    if (UPLOAD_TRAILER_FOR_MOVIE) {
      const IMDB_ID = UPLOAD_TRAILER_FOR_MOVIE.imdbid;
      const getYouTubeId = async () => {
        const youTubeID = await handleGetThrailerYouTubeMovieByID(IMDB_ID);

        if (youTubeID) {
          setYouTubeId(youTubeID);
        }
      };
      getYouTubeId();
    }
  }, []);

  const renderItemMovieButton = ({
    item,
  }: ListRenderItemInfo<RenderItemMovieButtonProps>) => {
    return (
      <MovieButton
        text={item.text}
        onPress={item.onPress}
        movieButtonStatusList={movieButtonStatusList}
      />
    );
  };

  const handleRedirectionToMovieDetails = (item: RenderItemMovieProps) => {
    navigation.navigate('DetailsScreen', { movie: item });
  };

  const renderItemMovie = ({
    item,
    index,
  }: ListRenderItemInfo<RenderItemMovieProps>) => {
    return (
      <TouchableOpacity
        onPress={() => {
          return handleRedirectionToMovieDetails(item);
        }}
      >
        <ImageItem id={index} image={item.imageurl[0]} scrollX={scrollX} />
      </TouchableOpacity>
    );
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
  const onViewableItemsChanged = React.useCallback(
    ({ viewableItems }: ViewableItems): void => {
      if (viewableItems) {
        if (viewableItems[0].index === 0 && viewableItems.length <= 2) {
          if (viewableItems[0].item) {
            const { genre, title, imdbid } = viewableItems[0].item;
            setFilmInCarousel({
              title,
              genres: genre,
              id: imdbid,
            });
          }
        }
      }
      if (
        (viewableItems[1] && viewableItems.length > 2) ||
        (viewableItems[1] &&
          viewableItems.length === 2 &&
          viewableItems[1].index === 9)
      ) {
        if (viewableItems[1].item) {
          const { genre, title, imdbid } = viewableItems[1].item;
          setFilmInCarousel({
            title,
            genres: genre,
            id: imdbid,
          });
        }
      }
    },
    []
  );

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

  return (
    <Wrapper>
      <ComingSoonSection>
        <Title mBot={8}>{Strings.MainScreenComingSoonTitle}</Title>
        <TrailerContainer>
          <YouTubeTrailer
            play={youTubePlayer.isPlaying}
            onChangeState={handleChangePlayerVideo}
            loop={false}
            controls={0}
            showinfo={false}
            modestbranding
            apiKey={API_KEY_YOUTUBE}
            videoId={youTubeId}
            fullscreen
            style={inlineStyles.youTubeInline}
          />
          {youTubePlayer.status !== 'playing' && (
            <ButtonContainer>
              <Button
                width={MainScreenDimensions.youTubePlayWidth}
                height={MainScreenDimensions.youTubePlayHeight}
                bgColor="#D98639"
                bRadius={MainScreenDimensions.youTubePlayBorderRadius}
                onPress={handlePlayVideo}
              >
                <Image
                  source={{ uri: Play }}
                  width={MainScreenDimensions.playImageWidth}
                  height={MainScreenDimensions.playImageHeight}
                />
              </Button>
            </ButtonContainer>
          )}
        </TrailerContainer>
        <MovieButtonsGroup>
          <FlatList
            columnWrapperStyle={inlineStyles.flatList}
            data={MOVIE_BUTTONS}
            keyExtractor={({ id }) => {
              return id;
            }}
            numColumns={5}
            renderItem={renderItemMovieButton}
          />
        </MovieButtonsGroup>
      </ComingSoonSection>
      <NowShowingSection>
        <Title mBot={18}>{Strings.MainScreenNowShowingTitle}</Title>
        <Animated.View>
          <FlatList
            horizontal
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            disableIntervalMomentum
            disableScrollViewPanResponder
            snapToInterval={CARD_LENGTH + SPACING * 0.8}
            snapToAlignment="center"
            onViewableItemsChanged={onViewableItemsChanged}
            data={UPLOAD_MOVIES}
            bounces={false}
            keyExtractor={({ imdbid }) => {
              return imdbid;
            }}
            renderItem={renderItemMovie}
            extraData={UPLOAD_MOVIES}
            onScroll={(event) => {
              setScrollX(event.nativeEvent.contentOffset.x);
            }}
          />
        </Animated.View>
        <CurrentFilmInfoContainer>
          <CurrentFilmInfoTitle>
            {currentFilmInCarousel.title}
          </CurrentFilmInfoTitle>
          <FlatList
            columnWrapperStyle={inlineStyles.flatList}
            data={currentFilmInCarousel.genres}
            keyExtractor={(item) => {
              return item;
            }}
            numColumns={5}
            renderItem={renderItemCurrentMovieTitle}
          />
        </CurrentFilmInfoContainer>
      </NowShowingSection>
    </Wrapper>
  );
}
