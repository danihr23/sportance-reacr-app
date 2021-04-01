import React, { useEffect, useState } from 'react'

import { db } from '../../firebase';
import { Link, NavLink } from 'react-router-dom';
import './category.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

export default function Categoty(props) {

    const category = props.match.params.category;
    console.log(category);


    const [dataStor, setDataStor] = useState([]);

    const fetchData = () => {
        db.collection(category).get()
            .then((data) => {
                const dataInfo = data.docs.map(doc => doc.data());
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
            <h1 className='posts-title'>hello category</h1>
            <ul className="post-groups">
                {dataStor.map(x => {
                    return (

                        <li className="otherPet">
                           
                            <article className="info-post">
                            <p className="post-img"><img src={x.imageURL} /></p>
                            
                            
                                
                                <div className="post-description">
                                <p>{x.title}</p>
                                
                                </div>
                                <div className="buttons-wrap">
                                
                                <div className="likes">
                 
                                <p><ThumbUpIcon/></p>
                                <p>0</p>
                                <Link to="#"><button className="button-like"> Pet</button></Link>
                                </div>
                                <Link to="#"><button className="button-info">read more</button></Link>
                                
                                
                                </div>
                               
                                
                                </article>
                           
                        </li>


                    )

                })}

            </ul>
        </div>
    )
}
