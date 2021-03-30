
import './App.css';
import Home from './pages/home/home'
import { Route, Switch } from 'react-router-dom';
import SignupSportance from './pages/SignUpSportance/SignupSportance';
import { UserContextProvider } from './context/user';



function App() {
  return (
  <UserContextProvider>
    <div className="App">
      <Switch>
      <Route path="/" exact component={Home} />

      <Route path="/stortance/signup" component={SignupSportance} />
      </Switch>

     
    </div>
    </UserContextProvider>
  );
}

export default App;
