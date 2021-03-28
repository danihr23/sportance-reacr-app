import React,{useContext} from 'react'
import signupButton from '../../components/signupButton/signupButton';
import { UserContext } from '../../context/user';
import { CreateAccount } from '../../services/auth';
import "./SignupSportance.css"
export default function SignupSportance() {


    const [user, setUser]  = useContext(UserContext).user ;

    const singUpSubmit=(e)=>{ 
            e.preventDefault();

            const email = e.targer.email.value;
            const password = e. targer.password.value;
            const passConf = e.targer.passwordConf.value;

            if ( password != passConf){
                return "greshka"
            }

            let userInfo = CreateAccount(email,password)
            setUser(user);

    }



    return (
        <div className="sportanceSignup" >

         
            <form className="sigupForm" onSubmit={singUpSubmit}>

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
