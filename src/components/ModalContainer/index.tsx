import { CrossButtonIMG } from '@helpers/images';
import { Button } from '@root';
import React from 'react';
import { Image, Modal } from 'react-native';

import {
  Content,
  ContentHeader,
  ContentMain,
  HeaderButtonContainer,
  HeaderText,
  Wrapper,
} from './styles';
import { ModalProps } from './types';

export default function ModalContainer({
  children,
  title,
  modalVisible,
  handleModalOnClose,
  fSize,
  fLineHeight,
  width,
}: ModalProps) {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={modalVisible}
      onRequestClose={() => {
        handleModalOnClose();
      }}
    >
      <Wrapper>
        <Content width={width}>
          <ContentHeader>
            <HeaderText fSize={fSize} fLineHeight={fLineHeight}>
              {title}
            </HeaderText>
            <HeaderButtonContainer>
              <Button
                width={20}
                height={20}
                bgColor="#616161"
                bRadius={20}
                boxShadow={false}
                onPress={handleModalOnClose}
              >
                <Image
                  source={{ uri: CrossButtonIMG }}
                  width={15}
                  height={15}
                />
              </Button>
            </HeaderButtonContainer>
          </ContentHeader>
          <ContentMain>{children}</ContentMain>
        </Content>
      </Wrapper>
    </Modal>
  );
}
