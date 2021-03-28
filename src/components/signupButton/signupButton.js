import React from 'react'
import {Link} from 'react-router-dom'
import "./signupButton.css";
export default function signupButton() {
    return (
        <div className="signupButton">
            <p><Link to="/stortance/signup">Sign Up</Link></p>
        </div>
    )
}
