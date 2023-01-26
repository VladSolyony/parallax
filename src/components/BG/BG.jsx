import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel, Parallax, Controller } from 'swiper';

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/mousewheel'
import 'swiper/css/parallax'

import './style.css'

function BgSwiper({
  setControlledSwiper
}) {
  return (
    <div className='main-container'>
      <Swiper
        modules={[FreeMode, Mousewheel, Parallax, Controller]}
        onSwiper={setControlledSwiper}
        spaceBetween={50}
        slidesPerView={3.5}
        mousewheel={true}
        parallax={true}
        freeMode={true}
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
        <SwiperSlide className='bg-container'>
            <div className="bg-img" data-swiper-parallax="20%"/>
        </SwiperSlide>
        <SwiperSlide className='bg-container'>
            <div className="bg-img1" data-swiper-parallax="20%"/>
        </SwiperSlide>
        <SwiperSlide className='bg-container'>
            <div className="bg-img2" data-swiper-parallax="20%"/>
        </SwiperSlide>
        <SwiperSlide className='bg-container'>
            <div className="bg-img3" data-swiper-parallax="20%"/>
        </SwiperSlide>
        <SwiperSlide className='bg-container'>
            <div className="bg-img4" data-swiper-parallax="20%"/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BgSwiper;
