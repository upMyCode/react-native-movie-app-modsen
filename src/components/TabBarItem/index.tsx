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
import { Image, TouchableOpacity } from 'react-native';

import { ActivityIndicator, Wrapper } from './styles';
import { Item } from './types';

export default function TabBarItem({
  label,
  isFocused,
  options,
  navigation,
}: Item) {
  const handleGetItemImage = (imageLabel: string) => {
    switch (imageLabel) {
      case 'HomeScreen':
        return (
          <Image
            width={24}
            height={24}
            source={{ uri: isFocused ? ActiveHome : UnActiveHome }}
          />
        );
      case 'TopFilmsScreen':
        return (
          <Image
            width={24}
            height={24}
            source={{ uri: isFocused ? ActiveAward : UnActiveAward }}
          />
        );
      case 'TicketsScreen':
        return (
          <Image
            width={24}
            height={24}
            source={{ uri: isFocused ? ActiveTicket : UnActiveTicket }}
          />
        );
      case 'ProfileScreen':
        return (
          <Image
            width={24}
            height={24}
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
  const handlePressed = () => {
    navigation.navigate(label);
  };

  return (
    <Wrapper>
      <TouchableOpacity
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={handlePressed}
      >
        {handleGetItemImage(label)}
      </TouchableOpacity>
      {isFocused && <ActivityIndicator />}
    </Wrapper>
  );
}
