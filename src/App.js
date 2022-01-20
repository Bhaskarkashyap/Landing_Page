import './App.css';
import { BrowserRouter as Router, Switch ,Route} from 'react-router-dom';
import Home from './Pages/index';
import Signin from './Pages/Signin';

function App() {
  
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={Signin} />
    </Switch>
    </Router>
  );
}

export default App;
