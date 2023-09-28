import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/database';

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

export const handleSignup = async (
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
        .ref(`/users/${name}`);

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

export const handleSignIn = async (email: string, password: string) => {
  try {
    const isUserAuth = await auth().signInWithEmailAndPassword(email, password);

    return isUserAuth;
  } catch (error: unknown) {
    return error;
  }
};
