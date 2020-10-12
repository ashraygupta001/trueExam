import React, { Fragment, useState } from 'react';
import styles from './StudentLogin.module.scss';
import { Button } from 'react-bootstrap';
import login  from "./../assets/login.jpg";
const StudentLogin = () => {
  const [student, setStudent] = useState(true);
  const [teacher, setTeacher] = useState(false);
  return (
    <Fragment>
      <div className={styles.page} >
        <div className={styles.inner}>
          <div className={styles.logo}>
            <p>
              Editing-Bootcamp
            </p>
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
               <Button variant="outline-primary">Student-Login</Button>
              </div>
              <div style={{justifySelf:"start", alignSelf:"center",paddingLeft:20}}>
               <Button variant="outline-primary">Instructor-Login</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default StudentLogin;