import React from 'react'
import "./logIn.css"
export default function logIn() {


    


    return (

        <div className="logIn">


            <h1>Sing In</h1>
            <img src='logo-text.png' alt="Logo" />

            <form className="logInForm" >



                <p className="field">
                    <input type="email" id="email" name="email" placeholder="write your email" />

                </p>
                <p className="field">
                    <input type="password" id="password" name="password" placeholder="write your password" />
                </p>

                <button type="submit"> Sign In</button>

            </form>
        </div>
    )
}
