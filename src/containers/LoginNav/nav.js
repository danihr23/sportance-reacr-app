import React,{useEffect, useState} from 'react'
//import { auth } from '../firebase';
import './nav.css'
import Logo from './logo-text.png'
import { auth } from '../../firebase'
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

        <img src={Logo} alt="logo" className="logo" />

        <div className="welcome">
        <p>Welome {email} in SPORTANCE</p>
        </div>

        <article>
            <ul>
                <li>
                    <p>Create SportNew</p>    
                </li>
                <li>
                    <p>My Profile</p>
                </li>
               
                <li>
                    <p>Log Out</p>    
                </li>
            </ul>
               
        </article>

            
        </div>
    )
}
