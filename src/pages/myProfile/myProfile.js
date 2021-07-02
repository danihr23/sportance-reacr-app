
import Nav from '../../containers/CreatePostNav/createPostNav'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { Link, NavLink } from 'react-router-dom';
import './myProfile.css'


const infoArr = [];
export default function MyProfile(params) {

 

    let user = JSON.parse(localStorage.getItem('user'));
    const currUserId = user.uid;
    console.log(user.uid)
    
    const [dataStor, setDataStor] = useState([]);
    const dataInfo= [{id:'',info:''}];

    
    let category =["basketball","tennis","football","NFL","volleyball","Other"]

    useEffect(() => {
        for (let index = 0; index < category.length; index++) {
            
                        var currCategory = category[index];
                        
                    
                    db.collection(currCategory).get()
                        .then((data) => {
                             data.docs.map(doc =>  
              
                                
                                dataInfo.push({id:doc.id, info:doc.data()}));
                                infoArr.length=0;
                                if(index== category.length-1){
                               
                                    
                                    
                                    dataInfo.forEach(res =>{

                                        // console.log(res);
                                        
                                         if(res.info.userId == currUserId){
                                              //console.log(res);
                                              //setDataStor(res)  
    
                                              infoArr.push(res)
                                          }
                                     }) 
                                }
                                //console.log(dataInfo);
                                
                            //setDataStor(dataInfo)
                        })
                        .catch(err=>console.log(err));

                        
                }

             
                

                
    }, [])

    console.log(infoArr);


    
    return (
        <div>
            <Nav />

            {/* <h1> Welcome {user.email} </h1> */}

            <h1 className="myProfile-title"> My Posts</h1>

            <ul className="myProfile-groups">
                { infoArr.map(x => {

                    if(x.id !=''){
                    return (

                        <li className="otherPet" key={x.id}> 
                         
                     <article className="myProfile-info-post">
                            <p className="myProfile-img"><img src={x.info.imageURL} /></p>
                            
                            
                                
                                <div className="myProfile-post-description">
                                <p>{x.info.title}</p>
                                
                                </div>
                                <div className="buttons-wrap">
                                
                                <div className="myProfile-likes">
                 
                                <p><ThumbUpIcon/></p>
                                <p>{x.info.likes}</p>
                                
                                </div>
                                
                                <Link to={`/details/${x.info.category}/${x.id}`}><button className="myProfile-button-info">read more</button></Link>
                                </div>
                               
                                
                            </article>
                           
                        </li>


                    )
                    }
                })}
            
            </ul>
        </div>


    )

}