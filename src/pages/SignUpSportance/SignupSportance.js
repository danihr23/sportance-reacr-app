
import React,{useContext} from 'react'
import signupButton from '../../components/signupButton/signupButton';

import { auth } from '../../firebase';

import{UserContext}from '../../context/user'


import "./SignupSportance.css"
import { useHistory } from 'react-router';
export default function SignupSportance(props) {

    const [user, setUser] = useContext(UserContext).user;
    console.log(user);
    let history =useHistory();

    const  SingUpSubmit=(e)=>{ 
            e.preventDefault();


        
            const email = e.target.email.value;
            const password = e. target.password.value;
            const passConf = e.target.passwordConf.value;
        

            console.log(email);
            console.log(password);
            console.log(passConf);

            if(password!==passConf){
                return console.log("error");
            }
            
            auth.createUserWithEmailAndPassword(email,password)
            .then(res =>{
                console.log(res.user)
                let user = res.user;
                setUser(user);
            })


    }

    if(user){
            history.push('/')    
    }

    return (
        <div className="sportanceSignup" >

                    <h1>Sing Up</h1>
                   <img  src="logo512.png" alt="Logo" />

            <form className="sigupForm" onSubmit={SingUpSubmit}>

                

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
