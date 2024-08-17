import { create } from "zustand";
import { auth } from "../firebase/firebaseConfig";
import { User, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";

type AuthState = {
  currentUser: User | null;
  userLoggedIn: boolean;
  isEmailUser: boolean;
  isGoogleUser: boolean;
  loading: boolean;
  initializeUser: (user: User | null) => Promise<void>;
  setCurrentUser: (user: User | null) => void;
};

const useAuthStore = create<AuthState>((set) => ({
  currentUser: null,
  userLoggedIn: false,
  isEmailUser: false,
  isGoogleUser: false,
  loading: true,

  initializeUser: async (user) => {
    if (user) {
      const isEmail = user.providerData.some(
        (provider) => provider.providerId === "password",
      );

      const isGoogle = user.providerData.some(
        (provider) => provider.providerId === GoogleAuthProvider.PROVIDER_ID,
      );

      set({
        currentUser: { ...user },
        isEmailUser: isEmail,
        isGoogleUser: isGoogle,
        userLoggedIn: true,
        loading: false,
      });
    } else {
      set({
        currentUser: null,
        userLoggedIn: false,
        loading: false,
      });
    }
  },

  setCurrentUser: (user) => set({ currentUser: user }),
}));

onAuthStateChanged(auth, (user) => {
  useAuthStore.getState().initializeUser(user);
});

export default useAuthStore;
