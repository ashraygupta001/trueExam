import React, { useState } from 'react';
import styles from './StudentLogin.module.scss';
import { Button, Card, Form,Row,Col,Container } from 'react-bootstrap';
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
    <div className={styles.page}>  
    <Container fluid>
       <Row>
        <Col lg="12" md="12">
          <Card style={{ marginTop: '2rem',boxShadow:'5px 5px 5px #aaaaaa',height:'600px'}}>
            <Card.Body>
              <div className={styles.logo}>
              Editing-Bootcamp
            </div>
                <Container fluid>
                  <Row>
                    <Col lg="7" md="12" >
                    <img src={login} alt="login" style={{width:'100%'}}/>
                      </Col> 
                      <Col lg="5" md="12">
                      <p className={styles.welcomeLogo} align="center">Welcome Back <span aria-label="happy" role="img" className={styles.welcomeLogo}>😀</span></p>
                       <p align="center">Thanks For joining us On this amazing jounery of Editing.<span role="img" aria-label="happy">🎉</span> </p>
                       <Container fluid> 
                         <p align="center">
                  <Row>
                  <Col lg="6">
                  <Button variant="outline-primary" onClick={studentClick}>Student-Login{ student && <span role="img" aria-label="here">📌</span> }</Button>
                    </Col>
                    <Col lg="6">
                     <Button variant="outline-primary" onClick={teacherClick}>Instructor-Login{ !student && <span role="img" aria-label="here">📌</span> }</Button>

                    </Col>
                  </Row>
                  </p>
                  </Container>
                    <>
                    <Card style={{ marginTop: '2rem',width:'auto' }}>
            <Card.Body>
                     {
                student && (
                  <div>
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
              </Card.Body>
              </Card>
              </>
                        </Col>
                    </Row>
                  </Container>
              </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default StudentLogin;