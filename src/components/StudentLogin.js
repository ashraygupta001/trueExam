import React, { Fragment, useState } from 'react';
import styles from './StudentLogin.module.scss';
import { Button, Form } from 'react-bootstrap';
import login from "./../assets/login.jpg";
import { Link } from '@reach/router'
const StudentLogin = () => {
  const [student, setStudent] = useState(true);
  const studentClick = (e) => {
   setStudent(true)
  }
  const teacherClick = (e) => {
    setStudent(false)
  }
  return (
    <Fragment>
      <div className={styles.page} >
        <div className={styles.inner}>
          <div className={styles.logo}>
            <Link to='/'>
              <p className={styles.linkLogo}>
                Editing-Bootcamp
              </p>
            </Link>
          </div>
          <div className={styles.image}>
            <img src={login} alt="login" />
          </div>
          <div className={styles.welcomeLogo}>
            <p>Welcome Back <span aria-label="happy" role="img">😀</span></p>
          </div>
          <div className={styles.welcomeContent}>
            <div className={styles.ranContent}>
              <p>Thanks For joining us On this amazing jounery of Editing.<span role="img" aria-label="happy">🎉</span> </p>
            </div>
            <div className={styles.loginOptions}>
              <div style={{justifySelf:"end", alignSelf:"center", paddingRight:20}}>
                <Button variant="outline-primary" onClick={studentClick}>Student-Login{ student && <span role="img" aria-label="here">📌</span> }</Button>
              </div>
              <div style={{justifySelf:"start", alignSelf:"center",paddingLeft:20}}>
               <Button variant="outline-primary" onClick={teacherClick}>Instructor-Login{ !student && <span role="img" aria-label="here">📌</span> }</Button>
              </div>
              {
                student && (
                  <div className={styles.loginForm}>
                <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                      </Form.Group>
                      <Link to='/stuent-dashboard'>
                        <Button variant="info" type="submit">
                                  Submit
                        </Button>
                      </Link>
              </Form>
              </div>
                )
              }
              {
                !student && (
                  <div className={styles.loginForm}>
                <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Link to='/instructor-dashboard'>
                        <Button variant="info" type="submit">
                                  Submit
                        </Button>
                </Link>
              </Form>
              </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default StudentLogin;