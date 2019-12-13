import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSessionUsername } from '../selectors/sessionSelectors';
import { sessionEnd } from '../actions/sessionActions';
import { slide as HamburgerMenu } from 'react-burger-menu';
import styles from './Menu.css';
import { PropTypes } from 'prop-types';

const mapStateToProps = (state) => ({
  username: getSessionUsername(state)
});

const mapDispatchToProps = dispatch => ({
  handleSignOut() {
    dispatch(sessionEnd());
  }
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
    this.handleSignOut = props.handleSignOut;
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  signOutClick(){
    this.closeMenu();
    this.handleSignOut();
  }

  render() {

    return (
      <>
        <div className={styles.Menu}>
          <h5>hi, {this.props.username}</h5>
          <HamburgerMenu right width={'200px'} isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
            <Link to="/" onClick={() => this.closeMenu()} className={'menu-item'}>Dashboard</Link>
            <Link to="/home" onClick={() => this.closeMenu()} className={'menu-item'}>Current Home</Link>
            <Link to="/about-us" onClick={() => this.closeMenu()} className={'menu-item'}>About Us</Link>
            <Link to="/home" onClick={() => this.signOutClick()} className={'menu-item'}>Sign Out</Link>
          </HamburgerMenu>
        </div>
      </>
    );
  }
}

hamburgerMenu.propTypes = {
  handleSignOut: PropTypes.func,
  username: PropTypes.string
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(hamburgerMenu);
