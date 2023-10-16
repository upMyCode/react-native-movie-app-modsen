import { RegistrationFormDimensions } from '@constants/dimensions';
import FIREBASE_ERROR from '@constants/firebaseError';
import TextStrings from '@constants/strings';
import {
  UserEmail,
  UserNameIMG,
  UserPassword,
  UserSurnameImg,
} from '@helpers/images';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input } from '@root';
import { handleSignUpAPI } from '@src/api/authAPI/authApi';
import { RegistrationFormDarkTheme } from '@theme/allThemes';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';

import {
  FormWrapper,
  RegistrationButtonContainer,
  RegistrationErrorText,
  RegistrationText,
} from './styles';
import { FormValues, RegistrationFormProps } from './types';
import validationSchema from './validationShema';

export default function RegistrationForm({
  setModalName,
  modalName,
}: RegistrationFormProps) {
  const [registrationError, setRegistrationError] = useState<string>('');

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

  const handleSubmitForm = async (data: FormValues) => {
    const response = await handleSignUpAPI(
      data.useremail,
      data.userpassword,
      data.username,
      data.usersurname
    );

    if (response && typeof response === 'string') {
      setRegistrationError(FIREBASE_ERROR[response]);
    } else if (response && typeof response !== 'string') {
      setModalName('login');
    }
  };

  return (
    <View>
      <FormWrapper>
        <Input
          control={control}
          name={TextStrings.RegistrationFormInut1Name}
          icon={UserNameIMG}
          formType="default"
          placeholder={TextStrings.RegistrationFormInut1placeholder}
          maxLength={RegistrationFormDimensions.inputMLength}
          error={errors.username?.message ?? ''}
        />
        <Input
          control={control}
          name={TextStrings.RegistrationFormInut2Name}
          icon={UserSurnameImg}
          formType="default"
          placeholder={TextStrings.RegistrationFormInut2placeholder}
          maxLength={RegistrationFormDimensions.inputMLength}
          error={errors.usersurname?.message ?? ''}
        />
        <Input
          control={control}
          name={TextStrings.RegistrationFormInut3Name}
          icon={UserEmail}
          formType="default"
          placeholder={TextStrings.RegistrationFormInut3placeholder}
          maxLength={RegistrationFormDimensions.inputMLength}
          error={errors.useremail?.message ?? ''}
        />
        <Input
          control={control}
          name={TextStrings.RegistrationFormInut4Name}
          icon={UserPassword}
          formType="default"
          placeholder={TextStrings.RegistrationFormInut4placeholder}
          maxLength={RegistrationFormDimensions.inputMLengthXL}
          secureTextEntry
          error={errors.userpassword?.message ?? ''}
          modalName={modalName}
        />
        {registrationError && (
          <RegistrationErrorText>{registrationError}</RegistrationErrorText>
        )}
      </FormWrapper>
      <RegistrationButtonContainer>
        <Button
          width={RegistrationFormDimensions.buttonWidth}
          height={RegistrationFormDimensions.buttonHeight}
          bgColor={RegistrationFormDarkTheme.button}
          bRadius={RegistrationFormDimensions.buttonBRadius}
          mt={RegistrationFormDimensions.buttonBRadius}
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
