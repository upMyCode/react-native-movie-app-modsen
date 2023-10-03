import { ManagedStatusBar } from '@root';
import React from 'react';
import { Text } from 'react-native';

import { Wrapper } from './styles';

export default function UserProfileScreen() {
  return (
    <Wrapper>
      <ManagedStatusBar />
      <Text>UserProfileScreen</Text>
    </Wrapper>
  );
}
