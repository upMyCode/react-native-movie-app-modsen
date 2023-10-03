import { ManagedStatusBar } from '@root';
import React from 'react';
import { Text } from 'react-native';

import { Wrapper } from './styles';

export default function AwardScreen() {
  return (
    <Wrapper>
      <ManagedStatusBar />
      <Text>AwardScreen</Text>
    </Wrapper>
  );
}
