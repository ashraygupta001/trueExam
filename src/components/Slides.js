import React from 'react';
import { Carousel } from 'react-bootstrap';
import styles from './Slides.module.scss'
const Slides = () => {
  return (
    <Carousel interval= {3000}>
      <Carousel.Item>
        <img
          className={styles.images}
          src="https://stamen.com/wp-content/uploads/2016/08/stamen-workshop-crop.jpg"
          alt="First slide"
        />
        <Carousel.Caption className={styles.caption}>
          <div className={styles.borders}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.images}
          src="https://www.nyfa.edu/img/program/digital_editing_4week_1400x500_1.jpg?v=2.2"
          alt="second slide"
        />
        <Carousel.Caption className={styles.caption}>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.images}
          src="https://images.squarespace-cdn.com/content/v1/591ca1f19de4bb5b8e395b42/1500418697473-FI3HGZ9R99WUR6PSSUJY/ke17ZwdGBToddI8pDm48kP-KnnJMxcDblfBnkOICOuJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mj0jfzTJBct9Y8e08WUVX3RJqdAm5hhGKFzHxD4xok-bsGASW1wu7YQtS8U_RRgCQ/2500x1000_banners_editing.png?format=1500w"
          alt="Third slide"
        />

        <Carousel.Caption className={styles.caption}>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slides;