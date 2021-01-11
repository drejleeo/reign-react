import './styles/App.css';
import Nav from './Nav';
import About from './About';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename="/reign-react">
      <Nav />
      <div className="main-panel">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/us" exact component={About}/>
          {/* <Route path="/us" exact component={}/> */}
          {/* <Route path="/lyrics" exact component={Lyrics}/> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
