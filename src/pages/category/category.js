import React, { useEffect, useState } from 'react'

import { db } from '../../firebase';
import { Link, NavLink } from 'react-router-dom';
import './category.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Nav from '../../containers/LoginNav/nav'
export default function Categoty(props) {

    const category = props.match.params.category;
    console.log(category);


    const [dataStor, setDataStor] = useState([]);
    const dataInfo= [{id:'',info:''}];
    const fetchData = () => {
        db.collection(category).get()
            .then((data) => {
                 data.docs.map(doc =>  dataInfo.push({id:doc.id, info:doc.data()}));
                //console.log(dataInfo);
                setDataStor(dataInfo)
            })
    }

    useEffect(() => {
        fetchData();
    }, [])

    console.log(dataStor)





    return (
        <div className="posts">
            <Nav/>
           
            <ul className="post-groups">
                {dataStor.map(x => {

                    if(x.id !=''){
                    return (

                        <li className="otherPet" key={x.id}> 
                         
                     <article className="info-post">
                            <p className="post-img"><img src={x.info.imageURL} /></p>
                            
                            
                                
                                <div className="post-description">
                                <p>{x.info.title}</p>
                                
                                </div>
                                <div className="buttons-wrap">
                                
                                <div className="likes">
                 
                                <p><ThumbUpIcon/></p>
                                <p>0</p>
                                
                                </div>
                                
                                <Link to={`/details/${category}/${x.id}`}><button className="button-info">read more</button></Link>
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
