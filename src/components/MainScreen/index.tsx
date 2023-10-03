import { ManagedStatusBar } from '@root';
import React from 'react';
import { Text } from 'react-native';

import { Wrapper } from './styles';

export default function MainScreen() {
  return (
    <Wrapper>
      <ManagedStatusBar />
      <Text>MainScreen</Text>
    </Wrapper>
  );
}
