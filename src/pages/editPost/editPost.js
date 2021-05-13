import React,{useState,useEffect} from 'react'
import './editPost.css'
import Nav from '../../containers/LoginNav/nav'
import { auth, db,storage } from '../../firebase';
import { useHistory } from 'react-router-dom';
import makeId from '../../containers/helper/helpId';

export default function EditPost(props) {

    const category = props.match.params.category;
    const idPost = props.match.params.id;
   
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
   
    const [image, setImage] = useState(null)
    const [progress, setProgress] = useState(0)
    const [click, setClick] = useState(false)
    
    const history =useHistory();

      
    const getInfo = () => {
        db.collection(category).doc(idPost).get()
            .then((doc) => {
                //console.log(doc.data());

                setData(doc.data());
          })
    }

    const onClickFnc=()=>{
        setClick(true)
    }
    const onChangeUpload = (e)=>{
        if(e.target.files[0]){
            setImage(e.target.files[0]);

        var selectedImageSrc = URL.createObjectURL(e.target.files[0]);

        var imagePreview = document.getElementById("imageURLEdit");
        imagePreview.src =
        selectedImageSrc;
        imagePreview.style.display='block';
        }
    }
    const OnChangeSubmit=(e)=>{
       
            
            setData({...data, [e.target.name]:e.target.value})
        
        
    }
    

    const OnSubmitChanges=(e)=>{
        e.preventDefault();

        const title = e.target.title.value;
        const description = data.description
        const likes = data.likes;
        const userId = data.userId;
        console.log(data)

        
            if(category!='' && title!=''&& description!=''  ){


                if(click==true){
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
                    collection(category).doc(idPost).set({
                        likes,
                        userId,
                        title,
                        description,
                        imageURL,
                        
                    })
                    .then(res=>{
                        //console.log(res.id);
                    })
                    .catch(err=>console.log(err));
                  
            
                    console.log(category);
                    history.push('/sportance/logInHome')
    
                        })
                    })
                }
                else{


                    db.
                    collection(category).doc(idPost).set({
                        ...data,
                        
                      
                        title,
                        description,
                       
                        
                    })
                    .then(res=>{
                        history.push('/sportance/logInHome')
                    })
                    .catch(err=>console.log(err));

                }

                
              
            }
            else{
               setError(true);
            }

    }

  
    

   
    
    useEffect(() => {
        
        
        getInfo();
    }, [])



    return (
        <div className="editPost">

        <Nav/>
           

    <section className="edit" >


        <form onSubmit={OnSubmitChanges} >
            <fieldset>
                <legend className='legend-edit'>Edit your SPORTANCE Post</legend>
                <div className="field-edit">
                    <label htmlFor="name" className="label-edit">Title</label>
                    <span className="input-edit">
                        <input type="text" name="title" id="titleS" value={data.title} onChange={OnChangeSubmit}  />
                    </span>
                </div>
                <p className="field-edit">
                    <label  className="label-edit" htmlFor="description">Description</label>
                    <span className="input-edit">
                        <textarea rows="4" cols="45" type="text" name="description" value={data.description} onChange={OnChangeSubmit}
                            placeholder="Description"></textarea>
                       
                    </span>
                </p>
                <p className="field-edit">
                    <label className="label-edit" htmlFor="image"> Choose Image</label>
                    <span className="input-edit-upload">
                        <input type="file" name='imageURl' accept="image/*" onClick={onClickFnc} onChange={click==true ? onChangeUpload : OnChangeSubmit} />
                        <div>
                            <img   id="imageURLEdit" src={data.imageURL} />
                        </div>
                    </span>
                </p>
                <p className="field-edit">
                    <label  className="label-edit" htmlFor="category">Category</label>
                    <span className="input-edit">
                        <select type="text" name="category"onChange={OnChangeSubmit}>
                            <option value="basketball">Basketball</option>
                            <option value="football">Football</option>
                            <option value="tennis">Tennis</option>
                            <option value="volleyball">Volleyball</option>
                            <option value="NFL">NFL</option>
                            <option value="Other">Other</option>
                        </select>
                      
                    </span>
                </p>
                <input className="button-save" type="submit" value="Save changes" />

                {error==true ? <h1 className="error">You have to fill all fields</h1> : ''} 

            </fieldset>
        </form>
    </section>
        
            
        </div>
    )

}
