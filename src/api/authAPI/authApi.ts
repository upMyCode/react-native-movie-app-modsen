/* eslint-disable import/no-unresolved */
import { API_KEY_DATABASE } from '@env';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/database';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { AccessToken, LoginManager } from 'react-native-fbsdk-next';

import type { Error, USER, UserProfile } from '../types';

function isError(candidate: unknown): candidate is Error {
  if (candidate && typeof candidate === 'object' && 'code' in candidate) {
    return true;
  }
  return false;
}

function isFirebaseFacebookUser(candidate: unknown): candidate is UserProfile {
  if (
    candidate &&
    typeof candidate === 'object' &&
    'email' in candidate &&
    'first_name' in candidate &&
    'last_name' in candidate &&
    'id' in candidate
  ) {
    return true;
  }
  return false;
}

export const handleSignUpAPI = async (
  email: string,
  password: string,
  name: string,
  surname: string
): Promise<FirebaseAuthTypes.User | null | string> => {
  try {
    const isUserCreated = await auth().createUserWithEmailAndPassword(
      email,
      password
    );

    if (isUserCreated) {
      const authReference = firebase
        .app()
        .database(API_KEY_DATABASE)
        .ref(`/users/${isUserCreated.user.uid}`);

      if (authReference) {
        await authReference.set({
          id: isUserCreated.user.uid,
          username: name,
          useremail: email,
          usersurname: surname,
        });

        return isUserCreated.user;
      }
    }

    return null;
  } catch (error: unknown) {
    if (isError(error)) {
      return error.code;
    }
    return '';
  }
};

export const handleSignInAPI = async (
  email: string,
  password: string
): Promise<USER | null | string> => {
  try {
    const isUserAuth = await auth().signInWithEmailAndPassword(email, password);

    if (isUserAuth) {
      const authReference = firebase
        .app()
        .database(API_KEY_DATABASE)
        .ref(`/users/${isUserAuth.user.uid}`);

      const userDataSnapshot = await authReference.once('value');
      const userData = userDataSnapshot.val();
      if (userData) {
        return userData;
      }
    }
    return null;
  } catch (error: unknown) {
    if (isError(error)) {
      return error.code;
    }
    return '';
  }
};

export const handleSignInWithGoogleServiceAPI = async (): Promise<
  null | USER | string
> => {
  GoogleSignin.configure();

  try {
    await GoogleSignin.hasPlayServices();
    const isUserCreated = await GoogleSignin.signIn();

    if (isUserCreated) {
      const authReference = firebase
        .app()
        .database(API_KEY_DATABASE)
        .ref(`/users/${isUserCreated.user.id}`);

      if (authReference) {
        const USER = {
          id: isUserCreated.user.id,
          username: isUserCreated.user.name || '',
          useremail: isUserCreated.user.email,
          usersurname: isUserCreated.user.familyName || '',
        };
        await authReference.set(USER);

        return USER;
      }
    }

    return null;
  } catch (error) {
    if (isError(error)) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        return 'Sign-in was canceled';
      }
      if (error.code === statusCodes.IN_PROGRESS) {
        return 'Sign-in in progress';
      }
      if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        return 'Play service wasn`t be available';
      }
      return error.code;
    }

    return '';
  }
};

export const handleSignInWithFacebookServiceAPI = async (): Promise<
  null | USER | string
> => {
  try {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      return 'User cancelled the login process';
    }

    // Once signed in, get the users AccessToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      return 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken
    );

    // Sign-in the user with the credential
    const isUserCreated = await auth().signInWithCredential(facebookCredential);

    if (isUserCreated) {
      if (isUserCreated.additionalUserInfo) {
        const currentUserInfo = isUserCreated.additionalUserInfo.profile;
        if (isFirebaseFacebookUser(currentUserInfo) && currentUserInfo) {
          const authReference = firebase
            .app()
            .database(API_KEY_DATABASE)
            .ref(`/users/${currentUserInfo.id}`);

          if (authReference) {
            const USER = {
              id: currentUserInfo.id,
              username: currentUserInfo.first_name || '',
              useremail: currentUserInfo.email,
              usersurname: currentUserInfo.last_name || '',
            };
            await authReference.set(USER);

            return USER;
          }
        }
      }
    }
    return null;
  } catch (error) {
    if (isError(error)) {
      return error.code;
    }
    return '';
  }
};

export const getCurrentUserId = () => {
  try {
    return new Promise((res, rej) => {
      const getUserInfo = firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          res(user.uid);
        }

        rej(new Error('user is not search'));
      });

      getUserInfo();
    });
  } catch (error) {
    if (isError(error)) {
      return error.code;
    }

    return '';
  }
};

export const getCurrentUserById = async (): Promise<USER | string | null> => {
  try {
    const USER_ID = await getCurrentUserId();

    if (USER_ID) {
      const authReference = firebase
        .app()
        .database(API_KEY_DATABASE)
        .ref(`/users/${USER_ID}`);

      if (authReference) {
        const snapshot = await authReference.once('value');

        if (snapshot) {
          const currentUser = snapshot.val();

          if (snapshot) {
            return currentUser;
          }
        }
      }
    }

    return null;
  } catch (error) {
    if (isError(error)) {
      return error.code;
    }

    return '';
  }
};
