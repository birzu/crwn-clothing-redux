import React from 'react';
import CollectionItemCard from '../collection-item-card/CollectionItemCard.component';
import _ from 'lodash';

import './Collection.styles.scss';

const Collection = ({ title, items }) => {
  return (
    <div className="collection">
      <h2 className="collection__header heading-2">{title.toUpperCase()}</h2>
      <div className="collection__content">
        {items
          ? items
              .filter((el, i) => i < 4)
              .map(item => (
                <CollectionItemCard
                  key={item.id}
                  item={_.omit(item, '_collection')}
                />
              ))
          : null}
      </div>
    </div>
  );
};

export default Collection;
