import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className={styles.Navbar} data-testid="Navbar">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/thumbnail">Thumbnail</Link></li>
          <li><Link to="/editor">Home</Link></li>
        </ul>
  </div>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
