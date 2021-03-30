import React,{useContext} from 'react'
import { useHistory } from 'react-router';
import { UserContext } from '../../context/user';
import { auth } from '../../firebase';
import "./logIn.css"
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


            <h1>Sing In</h1>
            <img src='logo-text.png' alt="Logo" />

            <form className="logInForm" onSubmit={LogInSubmit}>



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
