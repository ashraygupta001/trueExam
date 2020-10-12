import React, { Fragment } from 'react';
import { Nav ,Navbar } from "react-bootstrap";
import { Link } from "@reach/router";
import styles from './NavBar.module.scss'

const NavBar = () => {
  return (
    <Fragment>
      <Navbar expand="sm" variant='dark' className={styles.navbar}>
        <Navbar.Brand><Link to='/' className={styles.logo}>Editing-Bootcamp</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className={styles.floatright}>
            <Nav>
                <Nav.Link><Link to='/student-login' className={styles.login}>Student-Login</Link></Nav.Link>
                <Nav.Link><Link to='/instructor-login' className={styles.login}>Instructor-Login</Link></Nav.Link>
              </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  )
}

export default NavBar;