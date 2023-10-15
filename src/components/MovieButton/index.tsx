import { MovieButtonDimensions } from '@constants/dimensions';
import { Button } from '@root';
import movieButtonColor from '@theme/movieButtonColor';
import React from 'react';
import { View } from 'react-native';

import { TextContent } from './styles';
import { MovieButtonProps } from './types';

export default function MovieButton({
  text,
  onPress,
  movieButtonStatusList,
}: MovieButtonProps) {
  const getActiveStatus = (label: string) => {
    const movie = movieButtonStatusList.filter((item) => {
      return item.text === label;
    });

    return movie[0].active;
  };

  return (
    <View>
      <Button
        bRadius={MovieButtonDimensions.buttonBRadius}
        width={MovieButtonDimensions.buttonWidth}
        height={MovieButtonDimensions.buttonHeight}
        onPress={onPress}
        bgColor={
          getActiveStatus(text)
            ? movieButtonColor.activeButtonColor
            : movieButtonColor.unActiveButtonColor
        }
      >
        <TextContent>{text}</TextContent>
      </Button>
    </View>
  );
}
