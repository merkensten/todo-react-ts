import React from 'react';
import { Link } from 'react-router-dom';
import { RoutingPath } from '../../routes/RoutingPath';

// styles
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <header className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <div>
          <Link to={RoutingPath.start}>
            <h2>Todo App</h2>
          </Link>
          {/* <img src='../../shared/assets/images/todo-app-logo.svg' alt="logo" /> */}
        </div>
        <nav>
          <Link className="btn-global" to={RoutingPath.createAccount}>
            Create Account
          </Link>
        </nav>
      </div>
    </header>
  );
};
