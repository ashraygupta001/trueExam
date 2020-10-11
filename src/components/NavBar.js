import React, { Fragment } from 'react';
import { Nav ,Navbar } from "react-bootstrap";
import { Link } from "@reach/router";
import styles from './NavBar.module.scss'

const NavBar = () => {
  return (
    <Fragment>
      <Navbar expand="sm" variant='dark' className={styles.navbar}>
        <Navbar.Brand className={styles.logo}>Editing-Bootcamp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className={styles.floatright}>
            <Nav>
                <Nav.Link><Link to='/' className={styles.login}>Student-Login</Link></Nav.Link>
                <Nav.Link><Link to='/' className={styles.login}>Instructor-Login</Link></Nav.Link>
              </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  )
}

export default NavBar;