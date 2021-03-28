import "./App.css";
import Login from "./container/Login/Login.js";
import AccountDetails from "./container/AccountDetails/AccountDetails.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/accountDetails">
            <AccountDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
