
import './App.css';
import Home from './pages/home/home'
import { Route, Switch } from 'react-router-dom';
import SignupSportance from './pages/SignUpSportance/SignupSportance';
import { UserContextProvider } from './context/user';
import LogIn from './pages/logIn/logIn'
import LogInHome from './pages/LogInHome/LogInHome';
import CreatePost from './pages/createPost/createPost'
import Category from './pages/category/category'
import LogOut from './containers/logOut/logOut'
import PostDetails from './pages/postDetails/postDetails'
import EditPost from './pages/editPost/editPost'
import Delete from './containers/deletePost/deletePost'
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import MyProfile from './pages/myProfile/myProfile';
function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sportance/logIn" component={LogIn} />
          <Route path="/stortance/signup" component={SignupSportance} />
          <Route path="/sportance/logInHome" component={LogInHome} />
          <Route path="/sportance/createPost" component={CreatePost} />
          <Route path="/sponrance/:category" component={Category} />
          <Route path="/sportance/logOut" component={LogOut} />
          <Route path="/sportance/myProfile" component={MyProfile} />
          <Route path="/details/:category/:id" component={PostDetails} />
          <Route path="/edit/:category/:id" component={EditPost} />
          <Route path="/delete/:category/:id" component={Delete} />
        </Switch>


      </div>
    </UserContextProvider>
  );
}

export default App;
