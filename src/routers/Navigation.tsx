import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Footer from '../components/shared/Footer/index';
import Header from "../components/shared/Header";

import Beer from "../components/Main";
import DetailBeer from "../components/Main/DetailBeer";
import LocationBeer from "../components/Main/LocationBeer";
import CartBeer from "../components/Main/CartBeer";

const Navigation = () => {
  return (
    <Router>
      <div className="bg-gray-100">
        <Header />
          <Switch>
            <Route exact path="/" component={ Beer } />
            <Route exact path="/detail/:id" component={ DetailBeer } />
            <Route exact path="/maps" component={ LocationBeer } />
            <Route exact path="/shop" component={ CartBeer } />
            <Redirect to="/" />
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default Navigation;