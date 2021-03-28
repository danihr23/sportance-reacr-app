import React from 'react'
import "./SignupSportance.css"
export default function SignupSportance() {
    return (
        <div className="sportanceSignup" >

             

            <form className="sigupForm">
              
                    <p className="field">
                        <input type="email" id="email" name="email" placeholder="write your email" />

                    </p>
                    <p className="field">
                        <input type="password" id="password" name="password" placeholder="write your password" />

                    </p>
                    <p className="field">
                        <input type="password" id="passwordConf" name="passwordConf" placeholder="Confirm your password" />

                    </p>
                    <button type="submit"> Sign Up</button>
               
            </form>
            
        </div>
    )
}
