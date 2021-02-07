import './config.css'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from './pages/home.js'
import Error404 from './pages/404.js'
import Service from './pages/service.js'
import End from './pages/end.js'

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/service:servicename" component={Service}/>
          <Route exact path="/end:options" component={End}/>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="*" component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
