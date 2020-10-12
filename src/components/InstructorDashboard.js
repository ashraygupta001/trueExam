import React, {Fragment, useState} from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { Link } from '@reach/router';
import styles from './InstructorDashboard.module.scss';

const InstructorDashboard = () => {
   const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Fragment>
      <div className={styles.page}>
        <div className={styles.inner}>
          <div className={styles.logo}>
          <Link to='/'>
            <p className={styles.linkLogo}>
                Editing-Bootcamp
            </p>
          </Link>
          </div>
          <div className={styles.instructorName}>
            <p>
              Instructor-A
            </p>
          </div>
          <div className={styles.uploadTask}>
            <Button variant="outline-success" onClick={handleShow}>Upload Task</Button>
            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>Upload The Task</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name Of the Task</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Details About editing</Form.Label>
                    <Form.Control type="Text" placeholder="Enter Details" />
                  </Form.Group>
                  <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="File input" />
                 </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="outline-secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <div className={styles.showTasks}>
            <Link to='/review-tasks'>
              <Button variant="outline-info">Review Task</Button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default InstructorDashboard;