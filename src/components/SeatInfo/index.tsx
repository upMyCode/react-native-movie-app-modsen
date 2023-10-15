import { SeatButtonDarkTheme } from '@theme/allThemes';
import React from 'react';

import { SeatItem, SeatItemText, Wrapper } from './styles';
import { SeatButtonProps } from './types';

export default function SeatInfo({ text }: SeatButtonProps) {
  return (
    <Wrapper>
      {text === 'Available' ? (
        <SeatItem
          bgColor={SeatButtonDarkTheme.available}
          bWidth={2}
          bColor={SeatButtonDarkTheme.borderColor}
        />
      ) : text === 'Reserved' ? (
        <SeatItem bgColor={SeatButtonDarkTheme.reserved} />
      ) : (
        <SeatItem bgColor={SeatButtonDarkTheme.selected} />
      )}

      <SeatItemText>{text}</SeatItemText>
    </Wrapper>
  );
}
