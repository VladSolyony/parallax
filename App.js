import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from 'swiper';

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/mousewheel'

import './style.css'

function App() {
  return (
    <Swiper
      modules={[FreeMode, Mousewheel]}
      spaceBetween={50}
      slidesPerView={3}
      mousewheel={true}
      freeMode={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat, esse modi necessitatibus ex est, ratione sed tenetur illo ipsum fuga ab labore cumque doloremque, dolor animi provident debitis repellendus officiis architecto. Corrupti pariatur labore aliquam, omnis quae ad dolorem laborum ullam soluta veritatis quisquam in reiciendis perspiciatis debitis sapiente!
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat, esse modi necessitatibus ex est, ratione sed tenetur illo ipsum fuga ab labore cumque doloremque, dolor animi provident debitis repellendus officiis architecto. Corrupti pariatur labore aliquam, omnis quae ad dolorem laborum ullam soluta veritatis quisquam in reiciendis perspiciatis debitis sapiente!
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat, esse modi necessitatibus ex est, ratione sed tenetur illo ipsum fuga ab labore cumque doloremque, dolor animi provident debitis repellendus officiis architecto. Corrupti pariatur labore aliquam, omnis quae ad dolorem laborum ullam soluta veritatis quisquam in reiciendis perspiciatis debitis sapiente!
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat, esse modi necessitatibus ex est, ratione sed tenetur illo ipsum fuga ab labore cumque doloremque, dolor animi provident debitis repellendus officiis architecto. Corrupti pariatur labore aliquam, omnis quae ad dolorem laborum ullam soluta veritatis quisquam in reiciendis perspiciatis debitis sapiente!
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat, esse modi necessitatibus ex est, ratione sed tenetur illo ipsum fuga ab labore cumque doloremque, dolor animi provident debitis repellendus officiis architecto. Corrupti pariatur labore aliquam, omnis quae ad dolorem laborum ullam soluta veritatis quisquam in reiciendis perspiciatis debitis sapiente!
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default App;
