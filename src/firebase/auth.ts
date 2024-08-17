import { auth } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
} from "firebase/auth";

type AuthError = Error | null;

export const doCreateUserWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<UserCredential | AuthError> => {
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    return error as AuthError;
  }
};

export const doSignInWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<UserCredential | AuthError> => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    return error as AuthError;
  }
};

export const doSignInWithGoogle = async (): Promise<
  UserCredential | AuthError
> => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    // todo: complete this function
    return result;
  } catch (error) {
    return error as AuthError;
  }
};

export const doSignOut = async (): Promise<void | AuthError> => {
  try {
    await auth.signOut();
  } catch (error) {
    return error as AuthError;
  }
};

export const doPasswordReset = async (
  email: string,
): Promise<void | AuthError> => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    return error as AuthError;
  }
};

export const doPasswordChange = async (
  password: string,
): Promise<void | AuthError> => {
  try {
    const user = auth.currentUser;
    if (user) {
      await updatePassword(user, password);
    } else {
      throw new Error("No user is currently signed in.");
    }
  } catch (error) {
    return error as AuthError;
  }
};

export const doSendEmailVerification = async (): Promise<void | AuthError> => {
  try {
    const user = auth.currentUser;
    if (user) {
      await sendEmailVerification(user, {
        url: `${window.location.origin}`, //! Verification link redirect user to "MainPage"
      });
    } else {
      throw new Error("No user is currently signed in.");
    }
  } catch (error) {
    return error as AuthError;
  }
};
