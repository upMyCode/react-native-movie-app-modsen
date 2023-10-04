import { FacebookIMG, GithubIMG, GoogleIMG, PersonIMG } from '@assets';
import { useNavigation } from '@react-navigation/core';
import type { StackNavigationProp } from '@react-navigation/stack';
import { createNewUser } from '@slices/createUserSlice';
import {
  handleSignInWithFacebookServiceAPI,
  handleSignInWithGoogleServiceAPI,
} from '@src/api/authApi';
import { useAppDispatch } from '@src/store/hooks';
import React, { useState } from 'react';

type SetModalOpen = React.Dispatch<React.SetStateAction<boolean>>;
type SetModalName = React.Dispatch<React.SetStateAction<string>>;
interface AuthErrors {
  googleError: string;
  facebookError: string;
  githubError: string;
}

type StackScreensParamList = {
  WelcomeScreen: undefined;
  TabScreens: undefined;
};

export default function useAuthButtons(
  setModalOpen: SetModalOpen,
  setModalName: SetModalName
) {
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<StackNavigationProp<StackScreensParamList>>();
  const [authError, setAuthError] = useState<AuthErrors>({
    googleError: '',
    facebookError: '',
    githubError: '',
  });
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleSignInByGoogle = async () => {
    const response = await handleSignInWithGoogleServiceAPI();

    if (response && typeof response !== 'string') {
      dispatch(createNewUser);
      navigation.navigate('TabScreens');
    } else if (response && typeof response === 'string') {
      setAuthError((errors) => {
        return {
          ...errors,
          googleError: response,
        };
      });
      setModalName('authErrors');
      handleOpenModal();
    }
  };

  const handleSignInByFacebook = async () => {
    const response = await handleSignInWithFacebookServiceAPI();

    if (response && typeof response !== 'string') {
      dispatch(createNewUser);
      navigation.navigate('TabScreens');
    } else if (response && typeof response === 'string') {
      setAuthError((errors) => {
        return {
          ...errors,
          facebookError: response,
        };
      });
      console.log(authError, response);
      setModalName('authErrors');
      handleOpenModal();
    }
  };

  const BUTTONS_LIST = [
    {
      id: '1',
      bgColor: '#404040',
      textContent: 'Create an Account',
      textColor: '#FFFFFF',
      logo: PersonIMG,
      bRadius: 10,
      width: 310,
      height: 45,
      onPress: handleOpenModal,
    },
    {
      id: '2',
      bgColor: '#FFFFFF',
      textContent: 'Continue with Google',
      textColor: '#000000',
      logo: GoogleIMG,
      bRadius: 10,
      width: 310,
      height: 45,
      onPress: handleSignInByGoogle,
    },
    {
      id: '3',
      bgColor: '#1877F2',
      textContent: 'Sign up with Facebook',
      textColor: '#FFFFFF',
      logo: FacebookIMG,
      bRadius: 10,
      width: 310,
      height: 45,
      onPress: handleSignInByFacebook,
    },
    {
      id: '4',
      bgColor: '#000000',
      textContent: 'Sign up with GitHub',
      textColor: '#FFFFFF',
      logo: GithubIMG,
      bRadius: 10,
      width: 310,
      height: 45,
      onPress: () => {
        console.log(4);
      },
    },
  ];

  return { BUTTONS_LIST, authError };
}
