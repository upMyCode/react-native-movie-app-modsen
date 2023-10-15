import { LogInFormDimensions } from '@constants/dimensions';
import FIREBASE_ERROR from '@constants/firebaseError';
import TextStrings from '@constants/strings';
import { UserEmail, UserPassword } from '@helpers/images';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/core';
import type { StackNavigationProp } from '@react-navigation/stack';
import { Button, Input } from '@root';
import { createNewUser } from '@slices/createUserSlice';
import { handleSignInAPI } from '@src/api/authAPI/authApi';
import { useAppDispatch } from '@src/store/hooks';
import { LogInFormDarkTheme } from '@theme/allThemes';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TouchableOpacity, View } from 'react-native';

import {
  FormWrapper,
  LogInButtonContainer,
  LogInErrorText,
  LogInRedirectionToForgotPasswordContainer,
  LogInRedirectionToForgotPasswordText,
  LogInText,
} from './styles';
import { FormValues, LogInFormProps, StackScreensParamList } from './types';
import validationSchema from './validationShema';

export default function LogInForm({
  setModalName,
  setModalOpen,
}: LogInFormProps) {
  const dispatch = useAppDispatch();
  const [logInError, setLogInError] = useState<string>('');
  const navigation =
    useNavigation<StackNavigationProp<StackScreensParamList>>();
  const defaultValues = {
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
    const response = await handleSignInAPI(data.useremail, data.userpassword);

    if (response && typeof response === 'string') {
      setLogInError(FIREBASE_ERROR[response]);
    } else if (response && typeof response !== 'string') {
      const USER = {
        id: response.id,
        username: response.username,
        usersurname: response.usersurname,
        useremail: response.useremail,
      };
      dispatch(createNewUser(USER));
      setModalOpen(false);
      setModalName('registration');
      navigation.navigate('TabScreens');
    }
  };

  return (
    <View>
      <FormWrapper>
        <Input
          control={control}
          name={TextStrings.LogInFormInputNameUserEmail}
          icon={UserEmail}
          formType="default"
          placeholder={TextStrings.LogInFormInputNameUserEmailPlaceHolder}
          maxLength={30}
          error={errors.useremail?.message ?? ''}
        />
        <Input
          control={control}
          name={TextStrings.LogInFormInputNameUserPassword}
          icon={UserPassword}
          formType="default"
          placeholder={TextStrings.LogInFormInputNameUserPasswordPlaceHolder}
          maxLength={16}
          secureTextEntry
          error={errors.userpassword?.message ?? ''}
        />
        {logInError && <LogInErrorText>{logInError}</LogInErrorText>}
      </FormWrapper>
      <LogInRedirectionToForgotPasswordContainer>
        <TouchableOpacity>
          <LogInRedirectionToForgotPasswordText>
            {TextStrings.LogInFormRedirectionToForgotPassword}
          </LogInRedirectionToForgotPasswordText>
        </TouchableOpacity>
      </LogInRedirectionToForgotPasswordContainer>
      <LogInButtonContainer>
        <Button
          width={LogInFormDimensions.loginButtonWidth}
          height={LogInFormDimensions.loginButtonHeight}
          bgColor={LogInFormDarkTheme.buttonColor}
          bRadius={LogInFormDimensions.loginButtonBorderRadius}
          mt={LogInFormDimensions.loginButtonMTop}
          onPress={handleSubmit(handleSubmitForm)}
        >
          <LogInText>{TextStrings.LogInFormButton}</LogInText>
        </Button>
      </LogInButtonContainer>
    </View>
  );
}
