import TextStrings from '@constants/strings';
import {
  UserEmail,
  UserNameIMG,
  UserPassword,
  UserSurnameImg,
} from '@helpers/images';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input } from '@root';
import React from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';

import {
  FormWrapper,
  RegistrationButtonContainer,
  RegistrationText,
} from './styles';
import { FormValues, RegistrationFormProps } from './types';
import validationSchema from './validationShema';

export default function RegistrationForm({
  setModalName,
  modalName,
}: RegistrationFormProps) {
  const defaultValues = {
    username: '',
    usersurname: '',
    useremail: '',
    userpassword: '',
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const handleSubmitForm = (data: FormValues) => {
    console.log(data);
    setModalName('login');
  };

  return (
    <View>
      <FormWrapper>
        <Input
          control={control}
          name="username"
          icon={UserNameIMG}
          formType="default"
          placeholder="Enter your name"
          maxLength={30}
          error={errors.username?.message ?? ''}
        />
        <Input
          control={control}
          name="usersurname"
          icon={UserSurnameImg}
          formType="default"
          placeholder="Enter your surname"
          maxLength={30}
          error={errors.usersurname?.message ?? ''}
        />
        <Input
          control={control}
          name="useremail"
          icon={UserEmail}
          formType="default"
          placeholder="Enter your email"
          maxLength={30}
          error={errors.useremail?.message ?? ''}
        />
        <Input
          control={control}
          name="userpassword"
          icon={UserPassword}
          formType="default"
          placeholder="Enter strong password"
          maxLength={16}
          secureTextEntry
          error={errors.userpassword?.message ?? ''}
          modalName={modalName}
        />
      </FormWrapper>

      <RegistrationButtonContainer>
        <Button
          width={100}
          height={31}
          bgColor="#D98639"
          bRadius={10}
          mt={30}
          onPress={handleSubmit(handleSubmitForm)}
        >
          <RegistrationText>
            {TextStrings.RegistrationFormButton}
          </RegistrationText>
        </Button>
      </RegistrationButtonContainer>
    </View>
  );
}
