import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/database';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure();
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
        return 'auth/sign-in-canceled';
      }
      if (error.code === statusCodes.IN_PROGRESS) {
        return 'in-in-progress';
      }
      if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        return 'play-service-not-available';
      }
      return error.code;
    }

    return '';
  }
};
