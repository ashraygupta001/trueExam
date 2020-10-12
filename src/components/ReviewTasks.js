import React, {Fragment, useState} from 'react';
import styles from './ReviewTasks.module.scss';
import { Link } from '@reach/router';
import { Card, Button } from 'react-bootstrap';

const ReviewTasks = () => {
  const [range, setRange] = useState(0)
  const handelChange = (e) => {
    setRange(e.target.value)
  }
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
            <div className={styles.cardTasks}>
              <div>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  <input type='range' min='0' max='10' name='score-1' value={range} onChange={handelChange} ></input>
                  <input type='text' value={range} onChange={handelChange}></input>
                    <label for='score-1'>Score</label>
                  </Card.Body>
                  </Card>
                </div>
                <div>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                  </Card>
              </div>
              <div>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                  </Card>
                </div>
                <div>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                  </Card>
                </div>
            </div>
          </div>
        </div>
      </Fragment>
  );
}
export default ReviewTasks;