import React from 'react';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../redux/reducers/shop.reducer';

import CollectionOverview from '../components/collections-overview/CollectionOverview.component';

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollectionsStart())
});

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollections } = this.props;
    fetchCollections();
  }

  render() {
    return (
      <section className="section-shop">
        <CollectionOverview />
      </section>
    );
  }
}

export default connect(null, mapDispatchToProps)(ShopPage);
