import React,{useEffect, useState} from 'react'
import { auth } from '../firebase';
import './nav.css'
export default function Nav() {

const [email, setEmail] = useState('')

  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
        console.log(user);
        setEmail(user.email)
        
    })

  },[])




    return (
        <div className="navigation">

        <img src="logo-text.png" alt="logo" />

        <article>
            <ul>
                <li>
                    <p>Create SportNew</p>    
                </li>
                <li>
                    <p>My Profile</p>
                </li>
                <li>
                <p>Welome {email} in SPORTANCE</p>
                </li>
                <li>
                    <p>Log Out</p>    
                </li>
            </ul>
               
        </article>

            
        </div>
    )
}
