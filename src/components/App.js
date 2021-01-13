import './styles/App.css';
import Nav from './Nav';
import About from './About';
import Home from './Home';
import { Lyrics, LyricsCreate } from './Lyrics';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename="/reign-react">
      <Nav />
      <div className="main-panel w-50 mx-auto text-center">
        <Switch>
          {/* Navigation */}
          <Route path="/" exact component={Home} />
          <Route path="/us" exact component={About} />

          {/* Lyrics */}
          <Route path="/lyrics" exact component={Lyrics} />
          <Route path="/lyrics/new" exact component={LyricsCreate} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
