import { ManagedStatusBar } from '@root';
import React from 'react';
import { Text } from 'react-native';

import { Wrapper } from './styles';

export default function TicketsInfoScreen() {
  return (
    <Wrapper>
      <ManagedStatusBar />
      <Text>TicketsInfoScreen</Text>
    </Wrapper>
  );
}
