import IMAGE_LIST from '@constants/registrationMenuImage';
import TextStrings from '@constants/strings';
import { ModsenLogoIMG } from '@helpers/images';
import useAuthButtons from '@hooks/useAuthButtons';
import {
  Button,
  LogInForm,
  ManagedStatusBar,
  ModalContainer,
  RegistrationForm,
} from '@root';
import React, { useState } from 'react';
import type { ListRenderItemInfo } from 'react-native';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';

import {
  AuthDescriptionContainer,
  AuthDescriptionItem,
  AuthImage,
  AuthInErrorText,
  AuthTextContent,
  ButtonsGroup,
  ErrorContainer,
  FooterDescription,
  FooterDescriptionContent,
  FooterImagesContainer,
  ImageContainer,
  TextDescription,
  TextDescriptionContainer,
  Wrapper,
} from './styles';
import type {
  AuthErrors,
  RenderAuthItemProps,
  RenderFooterImageItemProps,
} from './types';

export default function RegistrationScreen() {
  const [isModalOpened, setModalOpen] = useState<boolean>(false);
  const [modalName, setModalName] = useState<string>('registration');
  const { BUTTONS_LIST, authError } = useAuthButtons(
    setModalOpen,
    setModalName
  );

  const renderAuthItem = ({
    item,
  }: ListRenderItemInfo<RenderAuthItemProps>) => {
    const ButtonIMG = Image.resolveAssetSource(item.logo).uri;
    return (
      <Button
        mt={30}
        width={item.width}
        height={item.height}
        bgColor={item.bgColor}
        bRadius={item.bRadius}
        onPress={item.onPress}
      >
        <AuthTextContent textColor={item.textColor}>
          {item.textContent}
        </AuthTextContent>
        <AuthImage source={{ uri: ButtonIMG }} height={18} width={18} />
      </Button>
    );
  };

  const renderFooterImageItems = ({
    item,
  }: ListRenderItemInfo<RenderFooterImageItemProps>) => {
    const FooterIMG = Image.resolveAssetSource(item.logo).uri;

    return (
      <View>
        <Image
          width={item.width}
          height={item.height}
          source={{ uri: FooterIMG }}
        />
      </View>
    );
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalName('registration');
  };

  const handleOpenLogInModal = () => {
    setModalOpen(true);
    setModalName('login');
  };

  const checkAuthErrorType = (error: AuthErrors) => {
    if (error.googleError) {
      return error.googleError;
    }
    if (error.facebookError) {
      return error.googleError;
    }

    return '';
  };

  return (
    <Wrapper>
      <ManagedStatusBar />
      {isModalOpened && modalName === 'authErrors' && (
        <ModalContainer
          title="Oops, you have auth errors"
          modalVisible={isModalOpened}
          fSize={20}
          fLineHeight={30}
          width={350}
          handleModalOnClose={handleCloseModal}
        >
          <ErrorContainer>
            <AuthInErrorText>{checkAuthErrorType(authError)}</AuthInErrorText>
          </ErrorContainer>
        </ModalContainer>
      )}
      {isModalOpened && modalName === 'registration' && (
        <ModalContainer
          title="Create an account"
          modalVisible={isModalOpened}
          fSize={20}
          fLineHeight={30}
          width={310}
          handleModalOnClose={handleCloseModal}
        >
          <RegistrationForm modalName={modalName} setModalName={setModalName} />
        </ModalContainer>
      )}
      {isModalOpened && modalName === 'login' && (
        <ModalContainer
          title="Sign in to an account"
          modalVisible={isModalOpened}
          fSize={20}
          fLineHeight={30}
          width={310}
          handleModalOnClose={handleCloseModal}
        >
          <LogInForm setModalName={setModalName} setModalOpen={setModalOpen} />
        </ModalContainer>
      )}
      <ImageContainer>
        <Image source={{ uri: ModsenLogoIMG }} width={200} height={50} />
      </ImageContainer>
      <TextDescriptionContainer>
        <TextDescription>
          {TextStrings.RegistrationScreenDescription}
        </TextDescription>
      </TextDescriptionContainer>
      <ButtonsGroup>
        <FlatList
          contentContainerStyle={{
            alignItems: 'center',
          }}
          keyExtractor={({ id }) => {
            return id;
          }}
          data={BUTTONS_LIST}
          renderItem={renderAuthItem}
        />
      </ButtonsGroup>
      <AuthDescriptionContainer>
        <AuthDescriptionItem isUnderlined={false}>
          {TextStrings.RegistrationScreenAuthDescriptionQuestion}
        </AuthDescriptionItem>
        <TouchableOpacity onPress={handleOpenLogInModal}>
          <AuthDescriptionItem isUnderlined>
            {TextStrings.RegistrationScreenAuthDescriptionLink}
          </AuthDescriptionItem>
        </TouchableOpacity>
      </AuthDescriptionContainer>
      <FooterImagesContainer>
        <FlatList
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          numColumns={4}
          keyExtractor={({ id }) => {
            return id;
          }}
          data={IMAGE_LIST}
          renderItem={renderFooterImageItems}
        />
      </FooterImagesContainer>
      <FooterDescriptionContent>
        <FooterDescription>
          {TextStrings.RegistrationScreenFooterDescription}
        </FooterDescription>
      </FooterDescriptionContent>
    </Wrapper>
  );
}
