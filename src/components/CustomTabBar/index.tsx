import { BottomTabBarProps } from '@react-navigation/bottom-tabs/src/types';
import { TabBarItem } from '@root';
import React from 'react';

import { NavbarItemsContainer, Wrapper } from './styles';

export default function CustomTabBar({
  state,
  navigation,
  descriptors,
}: BottomTabBarProps) {
  return (
    <Wrapper>
      <NavbarItemsContainer>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = route.name;

          const isFocused = state.index === index;

          return (
            <TabBarItem
              navigation={navigation}
              options={options}
              label={label}
              isFocused={isFocused}
            />
          );
        })}
      </NavbarItemsContainer>
    </Wrapper>
  );
}
