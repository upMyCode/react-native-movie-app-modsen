import React from 'react';

import { CustomInput, FormImage, Wrapper } from './styles';
import type { InputProps } from './types';

export default function Input({
  formType,
  maxLength,
  placeholder,
  icon,
}: InputProps) {
  return (
    <Wrapper>
      <FormImage source={{ uri: icon }} width={24} height={26} />
      <CustomInput
        editable
        maxLength={maxLength}
        placeholder={placeholder}
        keyboardType={formType}
        placeholderTextColor="#FFFFFF"
      />
    </Wrapper>
  );
}
