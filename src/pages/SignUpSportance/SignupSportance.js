
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

export default function SignupSportance({props, history}) {

    const [user, setUser] = useContext(UserContext).user;
    //console.log(user);
   
    const  SingUpSubmit=(e)=>{ 
            e.preventDefault();


        
            const email = e.target.email.value;
            const password = e. target.password.value;
            const passConf = e.target.passwordConf.value;
        
     
            console.log(email);
            console.log(password);
            console.log(passConf);

            if(password!== passConf){
                return console.log("error");
            }
            
            auth.createUserWithEmailAndPassword(email,password)
            .then(res =>{
                //console.log(res.user)
               
                
                setUser(res.user);
            })

            if(user){
                history.push('/sportance/logIn')

            }


    }
    

    

    return (
        <div className="sportanceSignup" >
                <img  src={Logo} alt="Logo" />


                    <h1 className="titleSignUp">Sing Up</h1>
                  

            <form className="sigupForm" onSubmit={SingUpSubmit}>

                

                    <div className="field-signUp">
                    <p className="icon-signUp">
                    <EmailIcon/>
                    </p>
                        <input type="email" id="email" name="email" placeholder="write your email" />

                    </div>
                    <div className="field-signUp">
                    <p className="icon-signUp">
                    <LockOpenIcon/>
                    </p>
                        <input type="password" id="password" name="password" placeholder="write your password" />

                    </div>
                    <div className="field-signUp">
                    <p className="icon-signUp">
                    <VpnLockIcon/>
                    </p>
                        <input type="password" id="passwordConf" name="passwordConf" placeholder="Confirm your password" />

                    </div>
                    <button className="btnSignUp" type="submit"> Sign Up</button>
               
            </form>
            
        </div>
    )
}
