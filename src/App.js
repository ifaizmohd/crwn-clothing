import React, { lazy, Suspense } from "react";
import "./App.css";

import { Redirect, Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";

import Header from "./components/header/header.component";

import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import { checkUserSession } from "./redux/user/user.actions";
import MacSpinner from "./components/mac-spinner/mac-spinner.component";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const SignUpAndSignInPage = lazy(() =>
  import("./pages/sign-up-and-sign-in/sign-up-and-sign-in.component")
);
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));

class App extends React.Component {
  componentDidMount() {
    const { getCurrentUser } = this.props;
    getCurrentUser();
  }

  componentWillUnmount() {}

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<MacSpinner />}>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route
                exact
                path="/signin"
                render={() =>
                  this.props.currentUser ? (
                    <Redirect to="/" />
                  ) : (
                    <SignUpAndSignInPage />
                  )
                }
              />
              <Route exact path="/checkout" component={CheckoutPage} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentUser: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
