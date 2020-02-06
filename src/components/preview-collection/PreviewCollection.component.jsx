import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Collection from '../collection/Collection.component';

import './PreviewCollection.styles.scss';
import { selectCollectionById } from '../../redux/selectors/shop.selectors';

const mapStateToProps = (state, { match }) => ({
  collection: selectCollectionById(state)(match.params.collectionId)
});

const PreviewCollection = ({ collection }) => {
  const { items, title } = collection;

  return (
    <div className="collection-preview">
      <Collection title={title} items={items} preview />
    </div>
  );
};

export default withRouter(connect(mapStateToProps, null)(PreviewCollection));
