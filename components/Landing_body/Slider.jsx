import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../Landing_body/swiper.module.css";

// import required modules
import { Pagination, Autoplay } from "swiper";
function Slider() {
    return (
        <div className="item-center object-fill">
            <Swiper
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <a href="#">
                        <img className="rounded-t-lg" src="../../assets/mslider/Slider-1920x601.webp" alt="product image" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#">
                        <img className="rounded-t-lg" src="../../assets/mslider/Bath Support-1920x601.webp" alt="product image" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#">
                        <img className=" rounded-t-lg" src="../../assets/mslider/Curtains-1920x601.webp" alt="product image" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#">
                        <img className=" rounded-t-lg" src="../../assets/mslider/Cushion Cover-1920x601.webp" alt="product image" />
                    </a>
                </SwiperSlide>
                <SwiperSlide><a href="#">
                        <img className="p-8 rounded-t-lg" src="../../assets/mslider/2 Double-1920x601.webp" alt="product image" />
                    </a>
                    </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Slider;