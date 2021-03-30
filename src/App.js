
import './App.css';
import Home from './pages/home/home'
import { Route, Switch } from 'react-router-dom';
import SignupSportance from './pages/SignUpSportance/SignupSportance';
import { UserContextProvider } from './context/user';
import LogIn from './pages/logIn/logIn'


function App() {
  return (
  <UserContextProvider>
    <div className="App">
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path= "/sportance/logIn" component={LogIn} />
      <Route path="/stortance/signup" component={SignupSportance} />
      </Switch>

     
    </div>
    </UserContextProvider>
  );
}

export default App;
