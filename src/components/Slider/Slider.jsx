import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderProducts } from '../../data/products';
import { Navigation, Pagination } from 'swiper';
import './slider.css';
import 'swiper/css';


const Slider = () => {
  return (
    <div className="s-container">
        <Swiper 
        modules={[Navigation, Pagination]}
        className="theSwiper"
        navigation={true}
        loopFillGroupWithBlank={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}>
                {SliderProducts.map((slide, i) => (
                    <SwiperSlide>
                        <div className="left-s">
                            <div className="name">
                                <span>{slide.name}</span>
                                <span>{slide.detail}</span>
                            </div>
                            <span>${slide.price}</span>
                            <div>Shop now</div>
                        </div>
                        <img src={slide.img} alt="product" className="img-p" />
                    </SwiperSlide>
                ))}
        </Swiper>
    </div>
  );
}

export default Slider;