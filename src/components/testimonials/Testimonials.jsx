import React from 'react';
import css from './testimonials.module.css';
import Hero from '../../assets/testimonialHero.png';

const Testimonials = () => {
  return (
    <div className={css.testimonials}>
        <div className={css.wrapper}>
            <div className={css.container}>
                <span>Top Rated</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <img src={Hero} alt="Testimonial Header" />
            <div className={css.container}>
                <span>300k</span>
                <span>Happy Customers</span>
            </div>
        </div>
    </div>
  );
}

export default Testimonials;