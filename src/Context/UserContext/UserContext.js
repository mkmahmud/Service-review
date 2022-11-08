import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../../components/Firebase/Firebase.config'

const auth = getAuth(app);

export const AuthContext = createContext()


const UserContext = ({ children }) => {

    
    const [user, setUser] = useState(null) 
    const [loading, setLoading] = useState(true)


    // Create User
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Update User information
    const updateUser = (userInfo) => {
        setLoading(true)
        return updateProfile(auth.currentUser,userInfo)
    }


    // Log in
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // User log in 
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
        });

        return () => unsubscribe();
    }, [])


    // sign out 
    const logOut = () => {
        return signOut(auth)
         
    }

    const authInfo = { user: 'user' }

    return (
        <AuthContext.Provider value={{ createUser, updateUser, login, user, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;