import React from 'react';
import { connect } from 'react-redux';
import { loadMenuStart } from '../redux/reducers/menu.reducer';

import Menu from '../components/menu/Menu.component';

const mapDispatchToProps = dispatch => ({
  loadMenu: () => dispatch(loadMenuStart())
});

class HomePage extends React.Component {
  componentDidMount() {
    const { loadMenu } = this.props;
    loadMenu();
  }

  render() {
    return (
      <section className="section-home">
        <Menu />
      </section>
    );
  }
}

export default connect(null, mapDispatchToProps)(HomePage);
