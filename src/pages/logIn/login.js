import React,{useContext, useEffect, useRef} from 'react'
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/user';
import { auth } from '../../firebase';
import "./logIn.css"
import Logo from './logo-text.png'
import EmailIcon from '@material-ui/icons/Email';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { useRadioGroup } from '@material-ui/core';


export default function LogIn(props) {
        console.log(props);
 
        const [user,setUser] = useContext(UserContext).user;
        //const history = useHistory();
        
        const LogInSubmit = (e)=> {
            e.preventDefault();

            const email = e.target.email.value;
           
            const password = e.target.password.value;
            console.log(user);

            
            
                auth.signInWithEmailAndPassword(email,password)
            .then(res=>{
            
               
               
            })

                
            
        }
       useEffect(()=>{
           auth.onAuthStateChanged((user) => {
            setUser(user);
            
            
           })
       })
        
       if(user){
        props.history.push('/sportance/logInHome')
       }
        

    return (

        <div className="logIn">

                <img src={Logo} alt="Logo" />
            <h1 className="titleLogIn">Sing In</h1>
            

            <form className="logInForm" onSubmit={LogInSubmit}>



                <p className="field-logIn">
                    <div className="icon-logIn">
                    <EmailIcon/>
                    </div>
                    
                    <input type="email" id="email" name="email" placeholder="write your email" />

                </p>
                <p className="field-logIn">
                    <div className="icon-logIn">
                    <LockOpenIcon/>
                    </div>
                    
                    <input type="password" id="password" name="password" placeholder="write your password" />
                </p>

                <button className="btnLogIn" type="submit"> Sign In</button>

            </form>
        </div>
    )
}
