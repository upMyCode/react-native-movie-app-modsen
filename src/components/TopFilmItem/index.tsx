import { StackNavigation } from '@components/TopFilmStack/types';
import { TopFilmItemDimensions } from '@constants/dimensions';
import TextStrings from '@constants/strings';
import { SingleArrowRight, Star } from '@helpers/images';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@root';
import { TopMovie } from '@src/api/types';
import { AwardScreenDarkTheme, TopFilmItemDarkTheme } from '@theme/allThemes';
import { Image } from 'react-native';

import {
  FilmInfoAuthors,
  FilmInfoContainer,
  FilmInfoDescription,
  FilmInfoTitle,
  MoreButtonTitle,
  PosterContainer,
  PosterImage,
  RankContainer,
  RankTitle,
  Wrapper,
} from './styles';

function TopFilmItem(item: TopMovie) {
  const { image, rank, title, genre, director, rating } = item;
  const navigation = useNavigation<StackNavigation>();

  return (
    <Wrapper>
      <PosterContainer>
        <PosterImage source={{ uri: image }} />
      </PosterContainer>
      <FilmInfoContainer>
        <FilmInfoTitle color={AwardScreenDarkTheme.color}>
          {`${rank}. ${title}`.toUpperCase()}
        </FilmInfoTitle>
        <FilmInfoDescription color={AwardScreenDarkTheme.color}>
          {TextStrings.TopFilmItemMoreGenre} {genre.join(', ')}
        </FilmInfoDescription>
        <FilmInfoAuthors color={AwardScreenDarkTheme.color}>
          {TextStrings.TopFilmItemMoreAuthors} {director.join(', ')}
        </FilmInfoAuthors>
        <RankContainer>
          <RankTitle color={AwardScreenDarkTheme.color}>{rating}</RankTitle>
          <Image
            source={{ uri: Star }}
            width={TopFilmItemDimensions.starImageWidth}
            height={TopFilmItemDimensions.starImageHeight}
          />
        </RankContainer>
        <Button
          onPress={() => {
            return navigation.navigate('DetailsScreen', { movie: item });
          }}
          width={TopFilmItemDimensions.buttonWidth}
          height={TopFilmItemDimensions.buttonHeight}
          bRadius={TopFilmItemDimensions.buttonRadius}
          bgColor={TopFilmItemDarkTheme.redirectionButton}
        >
          <MoreButtonTitle color={AwardScreenDarkTheme.color}>
            {TextStrings.TopFilmItemMoreButton}
          </MoreButtonTitle>
          <Image
            source={{ uri: SingleArrowRight }}
            width={TopFilmItemDimensions.singleArrowRightImageWidth}
            height={TopFilmItemDimensions.singleArrowRightImageHeight}
          />
        </Button>
      </FilmInfoContainer>
    </Wrapper>
  );
}

export default TopFilmItem;
