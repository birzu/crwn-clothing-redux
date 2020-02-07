import React from 'react';
import CollectionItemCard from '../collection-item-card/CollectionItemCard.component';
import { omitItem } from '../../utils/utils.functions';

import './Collection.styles.scss';

const Collection = ({ title, items, overview, preview }) => {
  return (
    <div className="collection">
      <h2 className="collection__header heading-2">{title.toUpperCase()}</h2>
      <div className="collection__content">
        {items && overview
          ? items
              .filter((el, i) => i < 4)
              .map(item => (
                <CollectionItemCard
                  key={item.id}
                  item={omitItem(item, '_collection')}
                />
              ))
          : null}
        {items && preview
          ? items.map(item => (
              <CollectionItemCard
                key={item.id}
                item={omitItem(item, '_collection')}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default Collection;
