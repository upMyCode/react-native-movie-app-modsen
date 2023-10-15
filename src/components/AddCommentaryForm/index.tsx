import { AddCommentaryFormDimensions } from '@constants/dimensions';
import TextStrings from '@constants/strings';
import { UserProfile } from '@helpers/images';
import { addCommentToFilm } from '@src/api/filmAPI/filmApi';
import { AddCommentaryFormDarkTheme } from '@theme/allThemes';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';

import { CommentaryInput, Wrapper } from './styles';
import { AddCommentaryFormProps, FormValues } from './types';

export default function AddCommentaryForm({
  imdbid,
  setCommentChangeStatus,
}: AddCommentaryFormProps) {
  const defaultValues = {
    comment: '',
  };
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues,
  });

  const handleSubmitForm = async (data: FormValues) => {
    await addCommentToFilm(imdbid, data.comment);
    setCommentChangeStatus((prev) => {
      return !prev;
    });
  };
  return (
    <Wrapper>
      <Image
        source={{ uri: UserProfile }}
        width={AddCommentaryFormDimensions.imageWidth}
        height={AddCommentaryFormDimensions.imageHeight}
      />
      <Controller
        control={control}
        name={TextStrings.AddCommentaryFormControllerName}
        render={({ field: { value, onChange, onBlur } }) => {
          return (
            <KeyboardAvoidingView
              behavior="padding"
              keyboardVerticalOffset={AddCommentaryFormDimensions.imageWidth}
            >
              <TouchableWithoutFeedback
                onPress={() => {
                  return Keyboard.dismiss();
                }}
              >
                <CommentaryInput
                  editable
                  value={value}
                  onChangeText={onChange}
                  maxLength={30}
                  placeholder={TextStrings.AddCommentaryFormPlaceholder}
                  placeholderTextColor={
                    AddCommentaryFormDarkTheme.placeholderTextColor
                  }
                  onBlur={onBlur}
                  autoCapitalize="none"
                  onSubmitEditing={handleSubmit(handleSubmitForm)}
                />
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
          );
        }}
      />
    </Wrapper>
  );
}
