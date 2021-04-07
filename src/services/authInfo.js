
import React,{useContext,useEffect} from 'react'
import { UserContext } from '../context/user';
import { auth } from '../firebase';


 export default function  AuthInfo(){

    const [user,setUser] = useContext(UserContext).user;

    useEffect(()=>{

        auth.onAuthStateChanged((user)=>{
            console.log(user)
            setUser(user);
            
            
        })

    },[])
}

