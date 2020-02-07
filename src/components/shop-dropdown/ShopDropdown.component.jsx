import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectSections } from '../../redux/selectors/menu.selectors';

import './ShopDropdown.styles.scss';

const mapStateToProps = createStructuredSelector({
  sections: selectSections
});

const ShopDrowdownMenu = ({ sections, history }) => {
  return (
    <div className="shop-dropdown">
      <ul className="shop-dropdown__list">
        {sections.map(({ _collectionId, title }) => (
          <li className="shop-dropdown__list-item" key={_collectionId}>
            <p
              onClick={e => {
                e.stopPropagation();
                history.push(`/collections/${_collectionId}`);
              }}
              className="link shop-dropdown__link"
            >
              {title.toUpperCase()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withRouter(connect(mapStateToProps, null)(ShopDrowdownMenu));
