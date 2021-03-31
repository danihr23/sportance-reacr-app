
import './App.css';
import Home from './pages/home/home'
import { Route, Switch } from 'react-router-dom';
import SignupSportance from './pages/SignUpSportance/SignupSportance';
import { UserContextProvider } from './context/user';
import LogIn from './pages/logIn/logIn'
import LogInHome from'./pages/LogInHome/LogInHome';
import CreatePost from './pages/createPost/createPost'
import Category from './pages/category/category'
function App() {
  return (
  <UserContextProvider>
    <div className="App">
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path= "/sportance/logIn" component={LogIn} />
      <Route path="/stortance/signup" component={SignupSportance} />
      <Route path="/sportance/logInHome" component={LogInHome}/>
      <Route path="/sportance/createPost" component={CreatePost}/>
      <Route path="/sponrance/:category" component={Category}/>
      </Switch>

     
    </div>
    </UserContextProvider>
  );
}

export default App;
