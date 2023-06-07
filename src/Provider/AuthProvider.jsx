import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { getRole } from '../api/auth';


export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const [role,setRole] = useState(null)
   
    useEffect(()=>{
        if(user){
         getRole(user?.email)
         .then(data => setRole(data))
        }
       },[user])

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
   const login = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
   }
   const loginWithGoogle =()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
   }
   
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (name,photo)=>{
        setLoading(true)
      return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })
       }

       useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth,currentUser =>{
             setUser(currentUser);
             
         });
         return ()=>{
             return unsubscribe();
         }
        },[])
    const authInfo = {
        user,
        role,
        createUser,
        login,
        loginWithGoogle,
        logOut,
        updateUserProfile,
        setRole
    }

    return (
       <AuthContext.Provider value={authInfo}>
{children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;