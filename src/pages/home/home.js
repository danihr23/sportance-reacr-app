import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import SignupButton from '../../components/signupButton/signupButton'
import { UserContext } from '../../context/user';
import { auth } from '../../firebase';

import"./home.css";

export default function Home(props) {

   
  
    return (
        <div className="home" style={{ 
            backgroundImage: `url("background.jpg")`}}>
                <img className="logo-text" src="logo-text.png" alt="Logo"/> 
            <div className="home-nav">

            <img src="logo-image.png" alt="Logo"/> 

            <SignupButton/>

            <p className="home-text"> Already have an account? <Link to="/sportance/logIn">Log in!</Link> </p>
            </div> 
            
          
            
        </div>
    )
}
