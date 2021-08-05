import React, { lazy, Suspense } from "react";
import "./shop.styles.scss";
import { Route } from "react-router-dom";
import { fetchCollectionStart } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";
import Spinner from "../../components/spinner/spinner.component";
const CollectionOverviewContainer = lazy(() =>
  import("../../components/collection-overview/collection-overview.container")
);
const CollectionContainer = lazy(() =>
  import("../collection/collection.container")
);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStart } = this.props;
    fetchCollectionStart();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Suspense fallback={<Spinner />}>
          <Route
            exact
            path={`${match.path}`}
            component={CollectionOverviewContainer}
          />
          <Route
            exact
            path={`${match.path}/:collectionId`}
            component={CollectionContainer}
          />
        </Suspense>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
