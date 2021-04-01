
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

export default function SignupSportance(props) {

    const [user, setUser] = useContext(UserContext).user;
    //console.log(user);
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
                //console.log(res.user)
               
                
                setUser(res.user);
            })

            if(user){
                props.history.push('/sportance/logIn')

            }


    }
    

    

    return (
        <div className="sportanceSignup" >
                <img  src={Logo} alt="Logo" />


                    <h1 className="titleSignUp">Sing Up</h1>
                  

            <form className="sigupForm" onSubmit={SingUpSubmit}>

                

                    <p className="field-signUp">
                    <div className="icon-signUp">
                    <EmailIcon/>
                    </div>
                        <input type="email" id="email" name="email" placeholder="write your email" />

                    </p>
                    <p className="field-signUp">
                    <div className="icon-signUp">
                    <LockOpenIcon/>
                    </div>
                        <input type="password" id="password" name="password" placeholder="write your password" />

                    </p>
                    <p className="field-signUp">
                    <div className="icon-signUp">
                    <VpnLockIcon/>
                    </div>
                        <input type="password" id="passwordConf" name="passwordConf" placeholder="Confirm your password" />

                    </p>
                    <button className="btnSignUp" type="submit"> Sign Up</button>
               
            </form>
            
        </div>
    )
}
