import { CircularProgress } from '@material-ui/core';
import { logDOM } from '@testing-library/dom';
import React,{useContext,useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import Nav from '../../containers/LoginNav/nav';

import { UserContext } from '../../context/user';
import { db,auth } from '../../firebase';
import './createPost.css';


export default function CreatePost(props) {

  console.log(props);
    const [user,setUser] = useContext(UserContext).user;

    const [error, setError] = useState(false)

    const history =useHistory();

    useEffect(()=>{

        auth.onAuthStateChanged((user)=>{
            setUser(user);
            
        })

    },[])

    const CreateCategorySubmit =(e)=>{
        e.preventDefault();
        

        
        console.log(user.uid); 
     
        const userId=user.uid;
        const category = e.target.category.value;
        const title = e.target.category.value;
        const description = e.target.description.value;
        const imageURL = e.target.imageURL.value;

        
            if(category!='' && title!=''&& description!='' && imageURL!='' ){
                db.
                collection(category).add({
                    title,
                    description,
                    imageURL,
                    userId
                })
                .then(res=>{
                    console.log(res.id);
                })
              
        
                console.log(category);
                history.push('/sportance/logInHome')
              
            }
            else{
               setError(true);
            }

            
    }
            



    return (
        <div className="createPost">
           <Nav/>

        <section class="create" >
            <form  onSubmit={CreateCategorySubmit}>
                <fieldset>
                    <legend className='legend'>Create your SPORTANCE Post</legend>
                    <div class="field-create">
                        <label htmlFor="name">Title</label>
                        <span class="input">
                            <input type="text" name="title" id="name" placeholder="title" />
                        </span>
                    </div>
                    <p className="field-create">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea rows="4" cols="45" type="text" name="description" id="description"
                                placeholder="Description"></textarea>
                           
                        </span>
                    </p>
                    <p className="field-create">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageURL" id="image" placeholder="Image" />
                            
                        </span>
                    </p>
                    <p className="field-create">
                        <label htmlFor="category">Category</label>
                        <span className="input">
                            <select type="text" name="category">
                                <option value="basketball">Basketball</option>
                                <option value="football">Football</option>
                                <option value="volleyball">Volleyball</option>
                                <option value="NFL">NFL</option>
                                <option value="Other">Other</option>
                            </select>
                          
                        </span>
                    </p>
                    <input className="button-submit" type="submit" value="Create Post" />

                    {error==true ? <h1 className="error">You have to fill all fields</h1> : ''} 

                </fieldset>
            </form>
        </section>
            
        </div>
    )
}
