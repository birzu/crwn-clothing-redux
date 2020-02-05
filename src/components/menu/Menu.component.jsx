import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectSections,
  selectMenuLoading
} from '../../redux/selectors/menu.selectors';

import MenuItem from '../menu-item/MenuItem.component';
import Spinner from '../loading-spinner/Spinner.component';

import './Menu.styles.scss';

const mapStateToProps = createStructuredSelector({
  sections: selectSections,
  loading: selectMenuLoading
});
const Menu = ({ sections, loading }) => {
  const renderMenu = sections => {
    return (
      <div className="menu">
        {sections.map(sec => (
          <MenuItem key={sec.id} {...sec} />
        ))}
      </div>
    );
  };

  return loading ? <Spinner /> : renderMenu(sections);
};

export default connect(mapStateToProps, null)(Menu);
