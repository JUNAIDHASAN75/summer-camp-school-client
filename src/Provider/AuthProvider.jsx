import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
// import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    };

    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    };
    const updateUserProfile =(name, photo)=>{
        return updateProfile(auth.currentUser,{
            displayName: name, photoURL: photo
        })
    };
    // useEffect(() => {
    //    const unsubscribe = onAuthStateChanged(auth, currenUser => {
    //         setUser(currenUser)
    //         console.log('current user', currenUser);
    //         // get and set token
    //         if(currenUser){
    //             axios.post('https://summer-camp-school-server-junaidhasan75.vercel.app/jwt', {email:currenUser.email})
    //             .then(data =>{
    //                 // console.log(data.data.token)
    //                 localStorage.setItem('access-token', data.data.token)
    //             })
    //             setLoading(false)
    //         }
    //         else{
    //             localStorage.removeItem('access-token')
    //         }
    //     })
    //     return ()=>{
    //         return unsubscribe()
    //     }
    // }, [])
    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, (currentUser)=>{
              setUser(currentUser);
              setLoading(false);
          })
          return ()=>{
              return unsubscribe()
          }
      },[]);

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
