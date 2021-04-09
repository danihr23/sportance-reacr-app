import React from 'react'
import {Link} from 'react-router-dom'
import "./signupButton.css";
export default function signupButton() {
    return (

        <Link to="/stortance/signup"><button className="signupButton">Sign Up</button></Link>
        
    )
}
