import TextStrings from '@constants/strings';
import { UserEmail, UserPassword } from '@helpers/images';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input } from '@root';
import React from 'react';
import { useForm } from 'react-hook-form';
import { TouchableOpacity, View } from 'react-native';

import {
  FormWrapper,
  LogInButtonContainer,
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

  const handleSubmitForm = (data: FormValues) => {
    setModalName('registration');
    setModalOpen(false);
    console.log(data);
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
