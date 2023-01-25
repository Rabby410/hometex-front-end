import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./prefooter.module.css";

// import required modules
import { Autoplay, FreeMode} from "swiper";

function Prefooter() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-3 mb-5">
      <Swiper
                    slidesPerView={6}
                    spaceBetween={30}
                    freeMode={true}
                    loop={true}
                    centeredSlides={false}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}

                    modules={[Autoplay, FreeMode]}
                    className="mySwiper"
                >
          <SwiperSlide><img
            src="../../assets/prefooter/hometexbrand1-350x150.webp"
            className="h-auto max-w-full m-1 sm:h-auto"
            alt="Hometex Bangladesh"
          /></SwiperSlide>
          <SwiperSlide><img
            src="../../assets/prefooter/Perfetti_Van_Melle_logo-350x150.webp"
            className="h-auto max-w-full m-1 sm:h-auto"
            alt="Hometex Bangladesh"
          /></SwiperSlide>
          <SwiperSlide><img
            src="../../assets/prefooter/PWD_hometex-350x150.webp"
            className="h-auto max-w-full m-1 sm:h-auto"
            alt="Hometex Bangladesh"
          /></SwiperSlide>
          <SwiperSlide><img
            src="../../assets/prefooter/vivo-350x150.webp"
            className="h-auto max-w-full m-1 sm:h-auto"
            alt="Hometex Bangladesh"
          /></SwiperSlide>
           <SwiperSlide><img
            src="../../assets/prefooter/nabil-350x150.webp"
            className="h-2 m-1 sm:h-auto"
            alt="Hometex Bangladesh"
          />
          </SwiperSlide>
          <SwiperSlide>
            <img
            src="../../assets/prefooter/ziska_pharma-350x150.png"
            className="h-auto max-w-full sm:h-auto"
            alt="Hometex Bangladesh"
          />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Prefooter;