import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderProducts } from '../../data/products';
import { Navigation, Pagination } from 'swiper';
import './slider.css';
import 'swiper/css';
import 'swiper/css/navigation';


const Slider = () => {
  return (
    <div className="s-container">
        <Swiper 
        modules={[Navigation, Pagination]}
        className="mySwiper"
        navigation={true}
        loopFillGroupWithBlank={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
        breakpoints={{
            640: {slidesPerView: 3},
            0: {slidesPerView: 1}
        }}>
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