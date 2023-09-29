import FIREBASE_ERROR from '@constants/firebaseError';
import TextStrings from '@constants/strings';
import { UserEmail, UserPassword } from '@helpers/images';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input } from '@root';
import { createNewUser } from '@slices/createUserSlice';
import { handleSignInAPI } from '@src/api/authApi';
import { useAppDispatch } from '@src/store/hooks';
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
import { FormValues, LogInFormProps } from './types';
import validationSchema from './validationShema';

export default function LogInForm({
  setModalName,
  setModalOpen,
}: LogInFormProps) {
  const dispatch = useAppDispatch();
  const [logInError, setLogInError] = useState<string>('');
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
    }
  };

  return (
    <View>
      <FormWrapper>
        <Input
          control={control}
          name="useremail"
          icon={UserEmail}
          formType="default"
          placeholder="example@gmail.com"
          maxLength={30}
          error={errors.useremail?.message ?? ''}
        />
        <Input
          control={control}
          name="userpassword"
          icon={UserPassword}
          formType="default"
          placeholder="*************************"
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
          width={100}
          height={31}
          bgColor="#D98639"
          bRadius={10}
          mt={21}
          onPress={handleSubmit(handleSubmitForm)}
        >
          <LogInText>{TextStrings.LogInFormButton}</LogInText>
        </Button>
      </LogInButtonContainer>
    </View>
  );
}
