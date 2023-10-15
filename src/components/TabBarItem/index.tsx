import { TabBarItemDimensions } from '@constants/dimensions';
import {
  ActiveAward,
  ActiveHome,
  ActiveTicket,
  ActiveUserProfile,
  UnActiveAward,
  UnActiveHome,
  UnActiveTicket,
  UnActiveUserProfile,
} from '@helpers/images';
import React from 'react';
import { Image } from 'react-native';

import { ActivityIndicator, Wrapper } from './styles';
import { Item } from './types';

export default function TabBarItem({ label, isFocused }: Item) {
  const handleGetItemImage = (imageLabel: string) => {
    switch (imageLabel) {
      case 'HomeStackScreen':
        return (
          <Image
            width={TabBarItemDimensions.imageWidth}
            height={TabBarItemDimensions.imageHeight}
            source={{ uri: isFocused ? ActiveHome : UnActiveHome }}
          />
        );
      case 'TopFilmStack':
        return (
          <Image
            width={TabBarItemDimensions.imageWidth}
            height={TabBarItemDimensions.imageHeight}
            source={{ uri: isFocused ? ActiveAward : UnActiveAward }}
          />
        );
      case 'TicketsScreen':
        return (
          <Image
            width={TabBarItemDimensions.imageWidth}
            height={TabBarItemDimensions.imageHeight}
            source={{ uri: isFocused ? ActiveTicket : UnActiveTicket }}
          />
        );
      case 'ProfileScreen':
        return (
          <Image
            width={TabBarItemDimensions.imageWidth}
            height={TabBarItemDimensions.imageHeight}
            source={{
              uri: isFocused ? ActiveUserProfile : UnActiveUserProfile,
            }}
          />
        );
      default: {
        return null;
      }
    }
  };

  return (
    <Wrapper>
      {handleGetItemImage(label)}
      {isFocused && <ActivityIndicator />}
    </Wrapper>
  );
}
