import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import Nav from '../../containers/LoginNav/nav'

import './postDetails.css'


export default function PostDetails(props) {


    const category = props.match.params.category;
    const idPost = props.match.params.id;

    const [data, setData] = useState([])
    const getInfo = () => {
        db.collection(category).doc(idPost).get()
            .then((doc) => {
                //console.log(doc.data());

                setData(doc.data());
            })
    }
    console.log(data.title);

    useEffect(() => {
        getInfo();
    }, [])

    return (
        <div className='details'>
            <Nav />
            <h1 className='posts-title'>hello category</h1>

            <article className="details-post">

                <p className="details-title">{data.title}</p>

                <p className="detail-img"><img src={data.imageURL} /></p>

                <div className='details-discription'>

                
                    <p>{data.description}</p>

                 </div>


                <div className="details-btn">


                    <p>0</p>


                    <Link to="#"><button className="button">read more</button></Link>





                </div>   </article>









        </div>
    )
}
