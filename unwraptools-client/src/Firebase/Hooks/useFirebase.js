import axios from 'axios';
import { getAuth, getIdToken, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../FirebaseInit";


// initialize Firebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIstLoading] = useState(true);
  const [authError, setError] = useState("");
  const [admin, setAdmin] = useState('');
  // console.log(admin)

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

    axios.post(`http://localhost:5000/api/v1/user/signup`, {
      email, displayName, photoURL 
    })
      .then(res => {
        if (res.status === 200) {
          // setState(state ? false : true)
        }else{
          console.log('jhhd',res)
        }
      })


      // fetch("http://localhost:5000/api/v1/user/signup", {
      //   method: "POST",
      //   headers: {
      //     "content-type": "application/json",
      //   },
      //   body: JSON.stringify({email, displayName, photoURL }),
      // }) 
      // .then(res => {
      //   if (res.status === 200) {
      //     // setState(state ? false : true)
      //   }else{
      //     console.log('jhhd',res)
      //   }
      // }) 
  };

  useEffect(() => {

    axios.get(`http://localhost:5000/api/v1/user/admin/${user?.email}`)
    .then(res => {
      if (res.status === 200) {
        console.log('sssss',res?.data) 
         setAdmin(res.data?.admin)
      }else{
        console.log(res)
      }
    })
    



    // fetch(`http://localhost:5000/api/v1/user/admin/${user?.email}`)
    //   .then(res => res.json())
    //   .then(data =>{ 
    //     console.log(data)
    //     //  setAdmin(data?.admin)
    //     })
  }, [user?.email])

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
