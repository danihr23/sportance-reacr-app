import React,{useContext} from 'react'
import { useHistory } from 'react-router';
import { UserContext } from '../../context/user';
import { auth } from '../../firebase';
import "./logIn.css"
import Logo from './logo-text.png'
import EmailIcon from '@material-ui/icons/Email';
import LockOpenIcon from '@material-ui/icons/LockOpen';


export default function LogIn() {
 
        const [user,setUser] = useContext(UserContext).user;
       
        const history = useHistory();
        const LogInSubmit = (e)=> {
            e.preventDefault();

            const email = e.target.email.value;
            const password = e.target.password.value;
            console.log(email);

            auth.signInWithEmailAndPassword(email,password)
            .then(res=>{
                console.log(res.user);
                setUser(res.user);
            })
        }

        

    return (

        <div className="logIn">

                <img src={Logo} alt="Logo" />
            <h1>Sing In</h1>
            

            <form className="logInForm" onSubmit={LogInSubmit}>



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

                <button type="submit"> Sign In</button>

            </form>
        </div>
    )
}
