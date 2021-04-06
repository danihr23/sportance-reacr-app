import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { auth, db } from '../../firebase';
import Nav from '../../containers/LoginNav/nav'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import './postDetails.css'


export default function PostDetails(props) {


    const category = props.match.params.category;
    const idPost = props.match.params.id;
    const [user, setUser] = useState('');
    const [data, setData] = useState([])

    function getUserId() {
        auth.onAuthStateChanged((user) => {

            setUser(user.uid);

        });
    }
    const getInfo = () => {
        db.collection(category).doc(idPost).get()
            .then((doc) => {
                //console.log(doc.data());

                setData(doc.data());
            })
    }
    console.log(data.title);

    useEffect(() => {
        getUserId();
        getInfo();
    }, [])

    return (
        <div className='details'>
            <Nav />
            

            <article className="details-post">

                <p className="details-title">{data.title}</p>

                <p className="detail-img"><img src={data.imageURL} /></p>

                <div className='details-discription'>


                    <p>{data.description}</p>

                </div>


                <div className="details-btn">

                <ThumbUpIcon/>
                    <p>0</p>
                      
                    {user===data.userId ? <div>
                        <Link to={`/edit/${category}/${idPost}`}><button className="button-edit">Edit</button></Link>
                        <Link to={`/delete/${category}/${idPost}`}><button className="button-delete">Delete</button></Link>
                    </div>  : '' }
                   





                </div>  

        </article>
        </div>
    )
}
