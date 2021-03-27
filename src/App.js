
import './App.css';
import Home from './pages/home/home'
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/" exact component={Home} />
      </Switch>
    
    </div>
  );
}

export default App;
