import logo from "./logo.svg";
import "./App.css";
import { Router, Route, Switch } from "react-router-dom";

import { createBrowserHistory } from "history";
import firstPage from "./firstPage";
import secondPage from "./secondPage";
import SearchAppBar from "./AppBar";

const history = createBrowserHistory();

function App(props) {
  return (
    <Router history={history}>
      <SearchAppBar {...props} history={history} />
      <Route exact path="/first" component={firstPage} />
      <Route exact path="/second/:id" component={secondPage} />
    </Router>
  );
}

export default App;
