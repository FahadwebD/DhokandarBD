import { useEffect, useState } from "react"
import initializeAuthetication from "../Firebase/firebase.initialize";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged ,signOut} from "firebase/auth";


initializeAuthetication()
const useFirebas = ()=>{
    const [user , setUser] = useState({});
    const [error , setError] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle =()=>{
        signInWithPopup(auth , googleProvider)
        .then(result=>{
            console.log(result.user)
            setUser(user)
        })
        .catch(error=>{
            setError(error.message)
        })
    }
   const logOut =()=>{
        signOut(auth )
        .then(()=>{
            setUser({})
        })
   }
    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
           
            if(user){
                setUser(user);
            }
        })
    } ,[])


    return {
        signInWithGoogle,
        user,
        error,
        logOut
    }
}

export default useFirebas;