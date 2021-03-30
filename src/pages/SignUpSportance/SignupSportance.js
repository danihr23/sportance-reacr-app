
import React,{useContext} from 'react'
import signupButton from '../../components/signupButton/signupButton';

import { auth } from '../../firebase';

import{UserContext}from '../../context/user'
import Logo from './logo-text.png'

import "./SignupSportance.css"
import { useHistory } from 'react-router';
import EmailIcon from '@material-ui/icons/Email';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import VpnLockIcon from '@material-ui/icons/VpnLock';

export default function SignupSportance() {

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
               
                
                setUser(res.user);
            })


    }

    if(user){
            history.push('/sportance/logIn')    
    }

    return (
        <div className="sportanceSignup" >
                <img  src={Logo} alt="Logo" />


                    <h1>Sing Up</h1>
                  

            <form className="sigupForm" onSubmit={SingUpSubmit}>

                

                    <p className="field">
                    <div className="icon">
                    <EmailIcon/>
                    </div>
                        <input type="email" id="email" name="email" placeholder="write your email" />

                    </p>
                    <p className="field">
                    <div className="icon">
                    <LockOpenIcon/>
                    </div>
                        <input type="password" id="password" name="password" placeholder="write your password" />

                    </p>
                    <p className="field">
                    <div className="icon">
                    <VpnLockIcon/>
                    </div>
                        <input type="password" id="passwordConf" name="passwordConf" placeholder="Confirm your password" />

                    </p>
                    <button type="submit"> Sign Up</button>
               
            </form>
            
        </div>
    )
}
