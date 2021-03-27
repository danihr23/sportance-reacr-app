import React from 'react'
import SignupButton from '../../components/signupButton/signupButton'

import"./home.css";

export default function Home() {
    return (
        <div className="home" style={{ 
            backgroundImage: `url("background.jpg")`}}>
                <img className="logo-text" src="logo-text.png" alt="Logo"/> 
            <div className="home-nav">

            <img src="logo-image.png" alt="Logo"/> 

            <SignupButton/>

            <p className="home-text"> Already have an account? <a href="#">Log in!</a> </p>
            </div> 
            
          
            
        </div>
    )
}
