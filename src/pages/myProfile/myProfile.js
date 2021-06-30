
import Nav from '../../containers/CreatePostNav/createPostNav'

export default function MyProfile(params) {

    

    let user = JSON.parse(localStorage.getItem('user'));
    const userId = user.uid;
    console.log(user.uid)

    let category =["basketball","tennis","football","Other","NFL"]
    return (
        <div>
            <Nav />

            <h1> Welcome {user.email} </h1>
        </div>


    )

}