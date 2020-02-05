import React from 'react';
import CollectionItemCard from '../collection-item-card/CollectionItemCard.component';

import './Collection.styles.scss';

const Collection = ({ title, items }) => {
  return (
    <div className="collection">
      <h2 className="collection__header heading-2">{title.toUpperCase()}</h2>
      <div className="collection__content">
        {items
          ? items
              .filter((_, i) => i < 4)
              .map(({ id, name, price, imageUrl }) => (
                <CollectionItemCard
                  key={id}
                  name={name}
                  price={price}
                  imageUrl={imageUrl}
                />
              ))
          : null}
      </div>
    </div>
  );
};

export default Collection;
