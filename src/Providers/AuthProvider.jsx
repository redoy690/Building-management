import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import UseAxiosPublic from "../hooks/useAxiosPublic";



export const AuthContext = createContext()
const axiosPublic = UseAxiosPublic()
const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            
            if (currentUser) {
                const userInfo = { email: currentUser.email }
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                        }
                    })
                  
            }
            else {
                localStorage.removeItem('access-token')
            }
            if (currentUser && currentUser.email && currentUser.displayName) {
                const userInfo = {
                    email: currentUser.email,
                    name: currentUser.displayName,
                    role: 'user'
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                    })
            }
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])


    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleprovider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)

    }


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleLogin,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;