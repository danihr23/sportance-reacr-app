import React,{useContext,} from 'react'
import { UserContext } from '../../context/user'
import { auth } from '../../firebase'
import './logOut.css'
import {Redirect,useHistory} from 'react-router-dom'

export default function LogOut() {

    
    
            const [user,setUser] = useContext(UserContext).user
            const history = useHistory();

        const LogOutSubmit= ()=>{
            auth.signOut().then(()=>{
                setUser('');
              history.push('/')
             
                
        })
        }
        
  


    return (
        <div>
            <button className="btnLogOut" type='submit' onClick={LogOutSubmit}>Log Out</button>
        </div>
    )
}
