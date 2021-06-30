
import Nav from '../../containers/CreatePostNav/createPostNav'

export default function MyProfile(params) {

    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user.uid)
    return (
        <div>
            <Nav />
        </div>


    )

}