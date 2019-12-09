import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from '../components/Search';
import styles from './Home.css';

class Home extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render() {

    return (
      <div className={styles.Home}>
        <Header />
        <Search />
      </div>
    );
  }
}

export default Home;
