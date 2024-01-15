/* eslint-disable react/prop-types */
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //google log in
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // create a observer
  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
  //       setUser(loggedUser);
  //       if (loggedUser) {
  //         //using axios for fetch
  //         axios
  //           .post("https://skill-builder-server.vercel.app/jwt", {
  //             email: loggedUser.email,
  //           })
  //           .then((data) => {
  //             localStorage.setItem("access-token", data.data.token);
  //             setLoading(false);
  //           });
  //       } else {
  //         localStorage.removeItem("access-token");
  //       }
  //     });

  //     return () => {
  //       return unsubscribe();
  //     };
  //   }, []);
  const authDetails = {
    user,
    loading,
    setLoading,
    logOut,
    googleLogin,
  };
  return (
    <AuthContext.Provider value={authDetails}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
