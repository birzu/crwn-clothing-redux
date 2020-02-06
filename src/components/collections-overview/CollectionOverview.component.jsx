import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCollections,
  selectCollectionsExists
} from '../../redux/selectors/shop.selectors';

import Collection from '../collection/Collection.component';
import Spinner from '../loading-spinner/Spinner.component';

import './CollectionOverview.styles.scss';

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
  collectionsExist: selectCollectionsExists
});

const CollectionOverview = ({ collections, collectionsExist }) => {
  const renderCollections = collections => {
    return (
      <div className="collection-overview">
        {Object.keys(collections).map(el => {
          return (
            <Collection
              key={collections[el].id}
              title={collections[el].title}
              items={collections[el].items}
              overview
            />
          );
        })}
      </div>
    );
  };

  return !collectionsExist ? <Spinner /> : renderCollections(collections);
};

export default connect(mapStateToProps, null)(CollectionOverview);
