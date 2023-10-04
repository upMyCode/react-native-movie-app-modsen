import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/database';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import axios from 'axios';
import { AccessToken, LoginManager } from 'react-native-fbsdk-next';

type UserProfile = FirebaseAuthTypes.AdditionalUserInfo['profile'];

interface USER {
  id: string;
  username: string;
  usersurname: string;
  useremail: string;
}
interface FirebaseErrorAPI {
  code: string;
  message: string;
}

function isFirebaseError(candidate: unknown): candidate is FirebaseErrorAPI {
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
        .database(
          'https://modsen-movie-default-rtdb.europe-west1.firebasedatabase.app'
        )
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
    if (isFirebaseError(error)) {
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
        .database(
          'https://modsen-movie-default-rtdb.europe-west1.firebasedatabase.app'
        )
        .ref(`/users/${isUserAuth.user.uid}`);

      const userDataSnapshot = await authReference.once('value');
      const userData = userDataSnapshot.val();
      if (userData) {
        return userData;
      }
    }
    return null;
  } catch (error: unknown) {
    if (isFirebaseError(error)) {
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
        .database(
          'https://modsen-movie-default-rtdb.europe-west1.firebasedatabase.app'
        )
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
    if (isFirebaseError(error)) {
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
            .database(
              'https://modsen-movie-default-rtdb.europe-west1.firebasedatabase.app'
            )
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
    if (isFirebaseError(error)) {
      return error.code;
    }
    return '';
  }
};

export const handleGetMovies = async (label: string) => {
  const options = {
    method: 'GET',
    url: 'https://ott-details.p.rapidapi.com/advancedsearch',
    params: {
      start_year: '1970',
      end_year: '2020',
      min_imdb: '7',
      genre: label,
      language: 'english',
      type: 'movie',
      sort: 'latest',
      page: '1',
    },
    headers: {
      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
      'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
