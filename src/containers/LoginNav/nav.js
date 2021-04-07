import React,{useEffect, useState,useContext} from 'react'
//import { auth } from '../firebase';
import './nav.css'
import LogOut from "../logOut/logOut"
import Logo from './logo-text.png'
import { auth } from '../../firebase'
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../context/user';

export default function Nav(props) {

    console.log(props);

    //const [user,setUser] = useContext(UserContext).user;
   




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
        <div className="navigation">
        <Link to="/sportance/logInHome" style={{ textDecoration: 'none' }} >
        <img src={Logo} alt="logo" className="logo" />
        </Link>
        <div className="welcome">
        <p>Welcome {email} in SPORTANCE</p>
        </div>

        <article>
            <ul>
                <li>
                    <Link to='/sportance/createPost' style={{ textDecoration: 'none',color:'#F7D23C' }}>
                    Create Post
                    </Link>    
                </li>
                <li>
                    <p>My Profile</p>
                </li>
               
                
                    <LogOut/>  
                
            </ul>
               
        </article>

            
        </div>
    )
}
