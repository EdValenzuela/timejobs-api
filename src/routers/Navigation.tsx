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
import UbicationBeer from "../components/Main/UbicationBeer";
import ShopBeer from "../components/Main/ShopBeer";

const Navigation = () => {
  return (
    <Router>
      <div className="bg-gray-100">
        <Header />
          <Switch>
            <Route exact path="/" component={ Beer } />
            <Route exact path="/detail/:id" component={ DetailBeer } />
            <Route exact path="/maps" component={ UbicationBeer } />
            <Route exact path="/shop" component={ ShopBeer } />
            <Redirect to="/" />
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default Navigation;