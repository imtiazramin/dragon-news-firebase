import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { app } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext=createContext()
const provider=new GoogleAuthProvider()
const auth =getAuth(app)
const AuthProvider = ({children}) => {
const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)
const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}
const googleSignIn=()=>{
    return signInWithPopup(auth,provider)
}
const signIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}
const updateUser=(update)=>{
return updateProfile(auth.currentUser,update)
}
const logOut=()=>{
    return signOut(auth)
}

useEffect(()=>{
    const unSubcribe=onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        setLoading(false)
    })
    return()=>{
        unSubcribe()
    }
},[])

const authData={
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    loading,
    setLoading,
    updateUser,
    googleSignIn,
}

    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;