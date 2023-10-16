import { AwardScreenDimensions } from '@constants/dimensions';
import TextStrings from '@constants/strings';
import { Filters, Search } from '@helpers/images';
import findMoviesByPartialTitle from '@helpers/workWithFilm';
import { ManagedStatusBar, ModalContainer, TopFilmItem } from '@root';
import { getTop100Movies } from '@src/api/filmAPI/filmApi';
import { TopMovie } from '@src/api/types';
import { AwardScreenDarkTheme } from '@theme/allThemes';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, View } from 'react-native';
import Snackbar from 'react-native-snackbar';

import validationSchema from './constants';
import {
  inlineStyles,
  SearchContainer,
  SearchInput,
  Settings,
  Wrapper,
} from './styles';

export default function AwardScreen() {
  const [searchInput, setSearchInput] = useState('');
  const [topMovies, setTopMovies] = useState<TopMovie[]>([]);
  const [filteredtopMovies, setFilteredtopMovies] = useState<TopMovie[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const result = await getTop100Movies();
      setTopMovies(result);
      setFilteredtopMovies(result);
    }

    fetchData();
  }, []);

  const renderItem = ({ item }: { item: TopMovie }) => {
    return (
      <TopFilmItem
        description={item.description}
        director={item.director}
        genre={item.genre}
        id={item.id}
        image={item.image}
        imdbid={item.imdbid}
        rank={item.rank}
        rating={item.rating}
        thumbnail={item.thumbnail}
        title={item.title}
        trailer={item.trailer}
        writers={item.writers}
        year={item.year}
      />
    );
  };

  const toggleModalVisible = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleSubmit = () => {
    validationSchema
      .validate({ searchInput })
      .then(() => {
        if (searchInput !== '') {
          setFilteredtopMovies(
            findMoviesByPartialTitle(topMovies, searchInput)
          );
        }
      })
      .catch((error) => {
        Snackbar.show({
          text: error.message,
          duration: Snackbar.LENGTH_LONG,
        });
      });
  };

  return (
    <Wrapper>
      <ModalContainer
        title={TextStrings.AwardScreenModalTitle}
        width={AwardScreenDimensions.modalWidth}
        modalVisible={isModalVisible}
        handleModalOnClose={toggleModalVisible}
        fSize={AwardScreenDimensions.modalFSize}
        fLineHeight={AwardScreenDimensions.modalFLineHeight}
      />
      <ManagedStatusBar />
      <SearchContainer bgColor={AwardScreenDarkTheme.searchContainer}>
        <Image
          source={{ uri: Search }}
          width={AwardScreenDimensions.searchIconWidth}
          height={AwardScreenDimensions.searchIconHeight}
        />
        <View>
          <SearchInput
            onSubmitEditing={handleSubmit}
            onChangeText={(text: string) => {
              setSearchInput(text);
            }}
            value={searchInput}
            placeholder="Search movie in the top"
          />
        </View>
        <Settings onPress={toggleModalVisible}>
          <Image
            source={{ uri: Filters }}
            width={AwardScreenDimensions.filtersIconWidth}
            height={AwardScreenDimensions.filtersIconHeight}
          />
        </Settings>
      </SearchContainer>
      <FlatList
        style={inlineStyles.flatList}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
        data={filteredtopMovies}
        renderItem={renderItem}
        keyExtractor={(_item, index) => {
          return index.toString();
        }}
      />
    </Wrapper>
  );
}
