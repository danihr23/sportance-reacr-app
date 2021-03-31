import React, { useEffect, useState } from 'react'

import { db } from '../../firebase';
import { Link, NavLink } from 'react-router-dom';
export default function Categoty(props) {

    const category = props.match.params.category;
    console.log(category);


    const [dataStor, setDataStor] = useState([]);

    useEffect(() => {
        db.collection(category).get()
            .then((data) => {
                data.forEach((doc) => {
                    setDataStor([...dataStor, doc.data()])
                });
            })
    }, [])

    console.log(dataStor)





    return (
        <div>
            <h1>hello category</h1>

            {dataStor.map(x => {
                return (
                    <ul>
                        <li className="otherPet">
                            <h3>Name:{x.title}</h3>

                            <p className="img"><img src={x.imageURL} /></p>
                            <p className="description">{x.description}</p>
                            <div className="pet-info">
                                <Link to="#"><button className="button"> Pet</button></Link>
                                <Link to="#"><button className="button">Details</button></Link>

                            </div>
                        </li>
                    </ul>

                )
            })}


        </div>
    )
}
