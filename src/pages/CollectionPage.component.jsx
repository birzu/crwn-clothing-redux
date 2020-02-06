import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchCollectionsStart } from '../redux/reducers/shop.reducer';

import Spinner from '../components/loading-spinner/Spinner.component';
import PreviewCollection from '../components/preview-collection/PreviewCollection.component';
import { selectCollectionsExists } from '../redux/selectors/shop.selectors';

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollectionsStart())
});

const mapStateToProps = createStructuredSelector({
  collecionsExist: selectCollectionsExists
});

class CollectionPage extends React.Component {
  componentDidMount() {
    const { fetchCollections } = this.props;
    fetchCollections();
  }

  render() {
    const { collecionsExist } = this.props;
    return !collecionsExist ? (
      <Spinner />
    ) : (
      <section className="section-collection">
        <PreviewCollection />
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage);
