import React, { useEffect } from 'react'
import { useHistory } from 'react-router';
import { db } from '../../firebase';

export default function DeletePost(props) {
    const category = props.match.params.category;
    const idPost = props.match.params.id;
    const history =useHistory();
    useEffect(()=>{
        db.collection(category).doc(idPost).delete()
        .then(res =>{
             
            history.push('/sportance/logInHome');
        })
        .catch(err=>console.log(err));
    },[])

    

   

    return (
        <div>
            
        </div>
    )
}
