import { FacebookIMG, GithubIMG, GoogleIMG, PersonIMG } from '@assets';
import { createNewUser } from '@slices/createUserSlice';
import {
  handleSignInWithFacebookServiceAPI,
  handleSignInWithGoogleServiceAPI,
} from '@src/api/authApi';
import { useAppDispatch } from '@src/store/hooks';
import React, { useState } from 'react';

type SetModalOpen = React.Dispatch<React.SetStateAction<boolean>>;
interface AuthErrors {
  googleError: string;
  facebookError: string;
  githubError: string;
}

export default function useAuthButtons(setModalOpen: SetModalOpen) {
  const dispatch = useAppDispatch();
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
    } else if (response && typeof response === 'string') {
      setAuthError((errors) => {
        return {
          ...errors,
          googleError: response,
        };
      });
    }
  };

  const handleSignInByFacebook = async () => {
    const response = await handleSignInWithFacebookServiceAPI();

    if (response && typeof response !== 'string') {
      dispatch(createNewUser);
    } else if (response && typeof response === 'string') {
      setAuthError((errors) => {
        return {
          ...errors,
          facebookError: response,
        };
      });
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
