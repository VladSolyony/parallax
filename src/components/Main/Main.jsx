import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel, Parallax, Controller } from 'swiper';

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/mousewheel'
import 'swiper/css/parallax'
import 'swiper/css/controller'

import './style.css'
import Description from '../Description/Description';
import { array } from './utils';

function MainSwiper({
  controlledSwiper,
}) {
  
  const [slide, setSlide] = useState(0)

  return (
    <div>
      <Description slide={slide} />
      <Swiper
        modules={[FreeMode, Mousewheel, Parallax, Controller]}
        controller={{ control: controlledSwiper }}
        spaceBetween={50}
        slidesPerView={3.5}
        mousewheel={true}
        parallax={true}
        freeMode={true}
        centeredSlides={true}
        onSlideChange={() => setSlide(slide + 1)}
        breakpoints={{
          0: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          680: {
            slidesPerView: 3.5,
            spaceBetween: 60,
          }
        }}
      >
        <div>
          {array.map((item, index) => (
            <SwiperSlide>
                <img
                  alt=''
                  src={item}
                  key={index}
                  className="slider-img"
                  data-swiper-parallax="15%"
                />
            </SwiperSlide>
            ))}
        </div>
      </Swiper>
      </div>
  );
}

export default MainSwiper;
