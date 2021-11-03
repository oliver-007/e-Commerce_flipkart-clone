import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage";
import ProductListPage from "./containers/ProductListPage/ProductListPage";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./redux/actions/actions";
import ProductDetailsPage from "./containers/ProductDetailsPage/ProductDetailsPage";
import CartPage from "./containers/CartPage/CartPage";
import { updateCart } from "./redux/actions/cart.action";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);

  useEffect(() => {
    dispatch(updateCart());
  }, [auth.authenticate]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cart" component={CartPage} />
          <Route
            path="/:productSlug/:productId/p"
            component={ProductDetailsPage}
          />
          <Route path="/:slug" component={ProductListPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
