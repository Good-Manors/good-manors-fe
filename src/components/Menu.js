import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { slide as HamburgerMenu } from 'react-burger-menu';
import styles from './Menu.css';

const mapStateToProps = (state) => ({
  username: state.username
});

class hamburgerMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <>
        <div className={styles.Menu}>
          <h5>hi, {this.state.username}</h5>
          <HamburgerMenu right width={'200px'} isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
            <Link to="/" onClick={() => this.closeMenu()} className={'menu-item'}>Dashboard</Link>
            <Link to="/about-us" onClick={() => this.closeMenu()} className={'menu-item'}>About Us</Link>
          </HamburgerMenu>
        </div>
      </>
    );
  }
}

hamburgerMenu.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(hamburgerMenu);
