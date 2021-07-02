import { CircularProgress } from '@material-ui/core';
import { logDOM } from '@testing-library/dom';
import React,{useContext,useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import CreateNav from '../../containers/CreatePostNav/createPostNav'
import makeId from '../../containers/helper/helpId';
import Nav from  '../../containers/LoginNav/nav'
import { UserContext } from '../../context/user';
import { db,auth,storage } from '../../firebase';
import './createPost.css';


export default function CreatePost(props) {

  console.log(props);
    const [user,setUser] = useContext(UserContext).user;

    const [error, setError] = useState(false)

    const [image, setImage] = useState(null)

    const [progress, setProgress] = useState(0)

    const history =useHistory();

    const handlechange =(e)=>{ 
        if(e.target.files[0]){
            setImage(e.target.files[0]);

            var selectedImageSrc = URL.createObjectURL(e.target.files[0]);

            var imagePreview = document.getElementById("imageUploadPreview");
            imagePreview.src =selectedImageSrc;
            imagePreview.style.display='block';
        }
    };

    useEffect(()=>{

        auth.onAuthStateChanged((user)=>{
            setUser(user);
            
        })
       

    },[])

    console.log(user);

    const CreateCategorySubmit =(e)=>{
        e.preventDefault();
        

        
       
     
        const userId=user.uid;
        const category = e.target.category.value;
        const title = e.target.title.value;
        const description = e.target.description.value;
        
        
            if(category!='' && title!=''&& description!=''  ){
                
                var imageName = makeId(10);

                const uploadTask = storage.ref(`images/${imageName}.jpg`).put(image); 
                
                uploadTask.on("state_changes", (snapshot)=>{

                    const progres = Math.random((snapshot.bytesTransferred/snapshot.totalBytes)*100)

                    setProgress(progres);
                },(error) =>{
                    console.log(error);
                },()=>{
                    storage.ref("images").child(`${imageName}.jpg`).getDownloadURL()
                    .then((imageURL)=>{
                        db.
                collection(category).add({
                    title,
                    description,
                    imageURL,
                    userId,
                    likes:'0',
                    category
                })
                .then(res=>{
                    console.log(res.id);
                })
                .catch(err=>console.log(err));
              
        
                console.log(category);
                history.push('/sportance/logInHome')

                    })
                })
                
                
              
            }
            else{
               setError(true);
            }

            
    }
            



    return (
        <div className="createPost">

            <CreateNav/> 

        <section className="create" >
            <form  onSubmit={CreateCategorySubmit}>
                <fieldset>
                    <legend className='legend'>Create your SPORTANCE Post</legend>
                    <div className="field-create">
                        <label htmlFor="name" className="label">Title</label>
                        <span className="input">
                            <input type="text" name="title" id="name" placeholder="title" />
                        </span>
                    </div>
                    <p className="field-create">
                        <label  className="label" htmlFor="description">Description</label>
                        <span className="input">
                            <textarea rows="4" cols="45" type="text" name="description" id="description"
                                placeholder="Description"></textarea>
                           
                        </span>
                    </p>
                    <p className="field-create">
                        <label className="label" htmlFor="image">Choose Image</label>
                        <span className="input-upload">
                            <input type="file"  accept="image/*" id="image" onChange={handlechange} />
                            <div className="image-preview">
                                <img  id="imageUploadPreview" alt="" />
                            </div>
                            </span>
                    </p>
                    <p className="field-create">
                        <label  className="label" htmlFor="category">Category</label>
                        <span className="input">
                            <select type="text" name="category">
                                <option value="basketball">Basketball</option>
                                <option value="football">Football</option>
                                <option value="tennis">Tennis</option>
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
