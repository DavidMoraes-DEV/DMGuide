import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cassinos from "./pages/Cassinos";
import history from "./util/history";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Promotions from "./pages/Promotions";
import Feedback from "./pages/Feedback";

const Routes = () => {
  return (
    <BrowserRouter>
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/cassinos">
            <Cassinos />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/promotions">
            <Promotions />
          </Route>
          <Route path="/feedback">
            <Feedback />
          </Route>
        </Switch>
      </Router>
    </BrowserRouter>
  );
};

export default Routes;