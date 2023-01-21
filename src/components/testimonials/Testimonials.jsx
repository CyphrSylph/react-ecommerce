import React from 'react';
import css from './testimonials.module.css';
import Hero from '../../assets/testimonialHero.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TestimonialsData } from '../../data/testimonials';

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
        <div className={css.reviews}>Reviews</div>
        <div className={css.carousel}>
          <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className={css.tCarousel}
          breakpoints={{
            856: {slidesPerView: 3},
            640: {slidesPerView: 2},
            0: {slidesPerView: 1}
          }}
          >
            {
              TestimonialsData.map((testimonial, i) => (
                <SwiperSlide>
                  <div className={css.testimonial}>
                    <img src={testimonial.image} alt="testimonial" />
                    <span>{testimonial.comment}</span>
                    <hr/>
                    <span>{testimonial.name}</span>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
    </div>
  );
}

export default Testimonials;