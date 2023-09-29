import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/database';

interface USER {
  id: string;
  username: string;
  usersurname: string;
  useremail: string;
  userpassword: string;
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
          userpassword: password,
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
