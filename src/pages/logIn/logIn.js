import React,{useContext, useEffect, useRef} from 'react'
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/user';
import { auth } from '../../firebase';
import "./logIn.css"
import Logo from './logo-text.png'
import EmailIcon from '@material-ui/icons/Email';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { useRadioGroup } from '@material-ui/core';
import AuthInfo from '../../services/authInfo'

export default function LogIn({props,history}) {
        console.log(props);
 
        const [user,setUser] = useContext(UserContext).user;

       
        
        const LogInSubmit = (e)=> {
            e.preventDefault();

            const email = e.target.email.value;
           
            const password = e.target.password.value;
            
           
            
            
                auth.signInWithEmailAndPassword(email,password)
            .then(res=>{

                const currUser = res.user;
                const {user:{uid, email}}=res;
                localStorage.setItem('user',JSON.stringify({ uid,email}))
                if(currUser){
                    history.push('/sportance/logInHome')
                   }
                    
                 

            })
            .catch(err=>console.log(err));

                
            
        }


            
       useEffect(()=>{
           auth.onAuthStateChanged((user) => {
            setUser(user);
          
            //console.log(user);
            
           })
           
       },[])
       
       

    return (

        <div className="logIn">

                <img src={Logo} alt="Logo" />
            <h1 className="titleLogIn">Sing In</h1>
            

            <form className="logInForm" onSubmit={LogInSubmit}>



                <div className="field-logIn">
                    <p className="icon-logIn">
                    <EmailIcon/>
                    </p>
                    
                    <input type="email" id="email" name="email" placeholder="write your email" />

                </div>
                <div className="field-logIn">
                    <p className="icon-logIn">
                    <LockOpenIcon/>
                    </p>
                    
                    <input type="password" id="password" name="password" placeholder="write your password" />
                </div>

                <button className="btnLogIn" type="submit"> Sign In</button>

            </form>
        </div>
    )
}
