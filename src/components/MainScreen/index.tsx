import Strings from '@constants/strings';
import useGetMovieButton from '@hooks/useGetMovieButton';
import { ManagedStatusBar, MovieButton } from '@root';
import React from 'react';
import { FlatList, ListRenderItemInfo, Text } from 'react-native';

import { ComingSoonSection, Title, Wrapper } from './styles';
import { RenderItemMovieButtonProps } from './types';

export default function MainScreen() {
  const { MOVIE_BUTTONS, movieButtonStatusList } = useGetMovieButton();

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

  return (
    <Wrapper>
      <ManagedStatusBar />
      <ComingSoonSection>
        <Title>{Strings.MainScreenComingSoonTitle}</Title>
        <FlatList
          columnWrapperStyle={{
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}
          data={MOVIE_BUTTONS}
          keyExtractor={({ id }) => {
            return id;
          }}
          numColumns={5}
          renderItem={renderItemMovieButton}
        />
      </ComingSoonSection>
      <Text>MainScreen</Text>
    </Wrapper>
  );
}
