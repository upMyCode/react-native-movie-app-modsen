import React from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import { View } from 'react-native';

import {
  CustomInput,
  FormContainer,
  FormImage,
  InputErrorText,
  PasswordComplicityContainer,
  PasswordComplicityItem,
  Wrapper,
} from './styles';
import type { InputProps } from './types';

export default function Input<T extends FieldValues>({
  formType,
  maxLength,
  placeholder,
  icon,
  control,
  name,
  secureTextEntry,
  error,
  modalName,
}: InputProps<T>) {
  const checkPasswordComplicity = (value: string) => {
    if (
      name === 'userpassword' &&
      value &&
      modalName === 'registration' &&
      !/[A-Z]{1,}/g.test(value)
    ) {
      return (
        <PasswordComplicityContainer>
          <PasswordComplicityItem bgColor="#737373" />
          <PasswordComplicityItem bgColor="#737373" />
          <PasswordComplicityItem bgColor="#737373" />
        </PasswordComplicityContainer>
      );
    }
    if (
      name === 'userpassword' &&
      value &&
      modalName === 'registration' &&
      /[A-Z]{1,}/g.test(value) &&
      ((!/[.|,|!|?/]/g.test(value) &&
        /^((?=^\S+$)(?=.*\d)(?=.*[A-Za-z]).{1,7})$/.test(value)) ||
        (/[.|,|!|?/]/g.test(value) &&
          /^((?=^\S+$)(?=.*\d)(?=.*[A-Za-z]).{1,7})$/.test(value)))
    ) {
      return (
        <PasswordComplicityContainer>
          <PasswordComplicityItem bgColor="#04c711" />
          <PasswordComplicityItem bgColor="#737373" />
          <PasswordComplicityItem bgColor="#737373" />
        </PasswordComplicityContainer>
      );
    }
    if (
      name === 'userpassword' &&
      value &&
      modalName === 'registration' &&
      /[A-Z]{1,}/g.test(value) &&
      ((!/[.|,|!|?/]/g.test(value) &&
        /^((?=^\S+$)(?=.*\d)(?=.*[A-Za-z]).{8,})$/.test(value)) ||
        (/[.|,|!|?/]/g.test(value) &&
          /^((?=^\S+$)(?=.*\d)(?=.*[A-Za-z]).{8,11})$/.test(value)))
    ) {
      return (
        <PasswordComplicityContainer>
          <PasswordComplicityItem bgColor="#04c711" />
          <PasswordComplicityItem bgColor="#c77204" />
          <PasswordComplicityItem bgColor="#737373" />
        </PasswordComplicityContainer>
      );
    }
    if (
      name === 'userpassword' &&
      value &&
      modalName === 'registration' &&
      /[A-Z]{1,}/g.test(value) &&
      /[.|,|!|?/]/g.test(value) &&
      /^((?=^\S+$)(?=.*\d)(?=.*[A-Za-z]).{12,16})$/.test(value)
    ) {
      return (
        <PasswordComplicityContainer>
          <PasswordComplicityItem bgColor="#04c711" />
          <PasswordComplicityItem bgColor="#c77204" />
          <PasswordComplicityItem bgColor="#db0016" />
        </PasswordComplicityContainer>
      );
    }
    return null;
  };

  return (
    <Wrapper>
      <FormImage source={{ uri: icon }} width={24} height={26} />
      <FormContainer>
        <Controller
          control={control}
          name={name}
          render={({ field: { value, onChange, onBlur } }) => {
            return (
              <View>
                <CustomInput
                  editable
                  value={value}
                  onChangeText={onChange}
                  maxLength={maxLength}
                  placeholder={placeholder}
                  keyboardType={formType}
                  placeholderTextColor="#FFFFFF"
                  secureTextEntry={secureTextEntry}
                  onBlur={onBlur}
                  autoCapitalize="none"
                />
                {checkPasswordComplicity(value)}
              </View>
            );
          }}
        />
        {error && <InputErrorText>{error}</InputErrorText>}
      </FormContainer>
    </Wrapper>
  );
}
