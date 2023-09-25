import TextStrings from '@constants/strings';
import {
  UserEmail,
  UserNameIMG,
  UserPassword,
  UserSurnameImg,
} from '@helpers/images';
import { Button, Input } from '@root';
import React from 'react';
import { View } from 'react-native';

import { RegistrationButtonContainer, RegistrationText } from './styles';

export default function RegistrationForm() {
  const handleSubmitForm = () => {};

  return (
    <View>
      <Input
        icon={UserNameIMG}
        formType="default"
        placeholder="Enter your name"
        maxLength={30}
      />
      <Input
        icon={UserSurnameImg}
        formType="default"
        placeholder="Enter your surname"
        maxLength={30}
      />
      <Input
        icon={UserEmail}
        formType="default"
        placeholder="Enter your email"
        maxLength={30}
      />
      <Input
        icon={UserPassword}
        formType="default"
        placeholder="Enter strong password"
        maxLength={30}
      />
      <RegistrationButtonContainer>
        <Button
          width={100}
          height={31}
          bgColor="#D98639"
          bRadius={10}
          mt={30}
          onPress={handleSubmitForm}
        >
          <RegistrationText>
            {TextStrings.RegistrationFormButton}
          </RegistrationText>
        </Button>
      </RegistrationButtonContainer>
    </View>
  );
}
