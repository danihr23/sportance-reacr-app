import {auth} from "../firebase"

 export const CreateAccount =async ()=>{
    let user;
     await auth.createUserWithEmailAndPassword(email,password)
    .then((res)=>{
        console.log(res.user);
        user= res.user;
    })
    .catch((error)=>{
        console.log(error.message);
    })
    return user;
}


export const logout =()=>{
    let logoutSuccess;
    
    auth.signOut()
    .then(()=>{
        logoutSuccess =true;

    })
    .catch((error)=>{
        console.log(error.message);
    })
    return logoutSuccess;
}