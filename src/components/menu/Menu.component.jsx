import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { loadMenuStart } from '../../redux/reducers/menu.reducer';
import {
  selectSections,
  selectMenuLoading
} from '../../redux/selectors/menu.selectors';
import MenuItem from '../menu-item/MenuItem.component';

import './Menu.styles.scss';
import Spinner from '../loading-spinner/Spinner.component';

const mapDispatchToProps = dispatch => ({
  loadMenu: () => dispatch(loadMenuStart())
});

const mapStateToProps = createStructuredSelector({
  sections: selectSections,
  loading: selectMenuLoading
});

class Menu extends React.Component {
  componentDidMount() {
    const { loadMenu } = this.props;
    loadMenu();
  }

  renderMenu = sections => {
    return (
      <div className="menu">
        {sections.map(sec => (
          <MenuItem key={sec.id} {...sec} />
        ))}
      </div>
    );
  };

  render() {
    const { sections, loading } = this.props;
    return loading ? <Spinner /> : this.renderMenu(sections);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
