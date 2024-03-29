import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Loginpage";
import './index.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/authentication" exact>
            <Login />
          </Route>
          <Route path="/chats">
            <h1>Chats</h1>
          </Route>
          <Route path="/" exact>
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
