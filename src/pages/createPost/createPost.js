import { CircularProgress } from '@material-ui/core';
import { logDOM } from '@testing-library/dom';
import React,{useContext,useState,useEffect} from 'react'
import Nav from '../../containers/nav'
import { UserContext } from '../../context/user';
import { db,auth } from '../../firebase';
import './createPost.css';


export default function CreatePost() {

  
    const [user,setUser] = useContext(UserContext).user;

    

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

      
    }



    return (
        <div className="createPost">
            <Nav/>

        <section class="create">
            <form  onSubmit={CreateCategorySubmit}>
                <fieldset>
                    <legend>Add new Pet</legend>
                    <p class="field-create">
                        <label htmlFor="name">Title</label>
                        <span class="input">
                            <input type="text" name="title" id="name" placeholder="Name" />
                           
                        </span>
                    </p>
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
                                <option value="voleyball">Volleyball</option>
                                <option value="NFL">NFL</option>
                                <option value="Other">Other</option>
                            </select>
                          
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Add Pet" />
                </fieldset>
            </form>
        </section>
            
        </div>
    )
}
