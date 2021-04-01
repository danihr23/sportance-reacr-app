import React, { useEffect, useState } from 'react'

import { db } from '../../firebase';
import { Link, NavLink } from 'react-router-dom';
import './category.css'


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
                            <h3>Name:{x.title}</h3>

                            <p className="post-img"><img src={x.imageURL} /></p>
                            <p className="description">{x.description}</p>
                            <div className="pet-info">
                                <Link to="#"><button className="button"> Pet</button></Link>
                                <Link to="#"><button className="button">Details</button></Link>

                            </div>
                        </li>


                    )

                })}

            </ul>
        </div>
    )
}
