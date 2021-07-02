import React,{useEffect, useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/user'
import Logo from './logo-text.png';

import { auth } from '../../firebase';
import LogOut from '../logOut/logOut'


export default function CreatePostNav(props) {

    const [email, setEmail] = useState('')
    const [user, setUser]= useContext(UserContext).user
      useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            console.log(user);
            if(!user){
            return ;
            }
            setEmail(user.email)
        })
        
     
    
      },[])




    return (
        <div className="navigation-create">
        <Link to="/sportance/logInHome" style={{ textDecoration: 'none' }} >
        <img src={Logo} alt="logo" className="logo-create" />
        </Link>
        <div className="welcome-create">
        <p>Welcome {email} </p>
        </div>

        <article>
            <ul>
               
                <li>
                <Link to='/sportance/createPost' style={{ textDecoration: 'none',color:'#F7D23C' }}>
                    Create Post
                    </Link>   
                </li>
               
                
                    <LogOut/>  
                
            </ul>
            
        </article>
            
        </div>
    )
}
