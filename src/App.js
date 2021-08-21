import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Styles from "./Styles";
import Contact from "./Contact";

import Navbar from "./Navbar";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/styles" component={Styles} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </>
  );
}

export default App;
