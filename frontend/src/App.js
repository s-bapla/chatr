import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Route } from "react-router-dom";
import Homepage from './Pages/Homepage'

function App() {
  return (
    <div className="App">
      <Route path="/" exact/>
        <Homepage/>
      <Route />
      <Route path="/chats" exact/>

      <Route />
    </div>
  );
}

export default App;
