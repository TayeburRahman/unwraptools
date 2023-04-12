import axios from 'axios';
import { getAuth, getIdToken, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import initializeFirebase from "../FirebaseInit";


// initialize Firebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIstLoading] = useState(true);
  const [authError, setError] = useState("");
  const [admin, setAdmin] = useState('');
  const { pathname } = useLocation('');

  const auth = getAuth();
  const provider = new GoogleAuthProvider();


  const signImWithGoogle = (location, navigate) => {
    setIstLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        // user data save or update
        const user = result.user;
        saveUser(user.email, user.displayName, user.photoURL, 'PUT');
        const destination = location?.state?.from || "/";
        navigate(destination);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIstLoading(false));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        getIdToken(user)
          .then((idToken) => localStorage.setItem('idToken', idToken))
        setUser(user);
      } else {
        setUser({});
      }
      // Loading
      setIstLoading(false);
    });
    return () => unsubscribe;
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      // Loading
      .finally(() => setIstLoading(false));
  };

  // save User to the database
  const saveUser = (email, displayName, photoURL, method) => {
    // const user = { email, displayName, photoURL }; 

    axios.post(`https://server.unwraptools.io/api/v1/user/signup`, {
      email, displayName, photoURL
    })
      .then(res => {
        if (res.status === 200) {
          // setState(state ? false : true)
        } else {
          console.log('', res)
        }
      })

  };

  useEffect(() => {

    axios.get(`https://server.unwraptools.io/api/v1/user/admin/${user?.email}`)
      .then(res => {
        setAdmin(res.data?.admin)
      })

  }, [user, pathname])

  return {
    user,
    logOut,
    isLoading,
    authError,
    signImWithGoogle,
    admin,
  };
};

export default useFirebase;
