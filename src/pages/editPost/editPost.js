import React,{useState,useEffect} from 'react'
import './editPost.css'
import Nav from '../../containers/LoginNav/nav'
import { auth, db } from '../../firebase';
import { useHistory } from 'react-router-dom';

export default function EditPost(props) {

    const category = props.match.params.category;
    const idPost = props.match.params.id;
   
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
   

    
    const history =useHistory();

      
    const getInfo = () => {
        db.collection(category).doc(idPost).get()
            .then((doc) => {
                //console.log(doc.data());

                setData(doc.data());
          })
    }
    const OnChangeSubmit=(e)=>{
        setData({...data, [e.target.name]:e.target.value})
    }
    

    const OnSubmitChanges=(e)=>{
        e.preventDefault();
        

        
        
        //const userId=user.uid;
        //const currCategory = data.category;
      
        const title = e.target.title.value;
        const description = data.description
        const imageURL = data.imageURL
        console.log(title)

        
            if(category!='' && title!=''&& description!='' && imageURL!='' ){
                db.
                collection(category).doc(idPost).set({
                    ...data,
                    title,
                    description,
                    imageURL,
                    
                })
                .then(res=>{
                    //console.log(res.id);
                })
              
        
                console.log(category);
                history.push('/sportance/logInHome')
              
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
           

    <section class="edit" >


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
                    <label className="label-edit" htmlFor="image">Image</label>
                    <span className="input-edit">
                        <input type="text" name="imageURL" id="imageURL" value={data.imageURL} onChange={OnChangeSubmit} />
                        
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
