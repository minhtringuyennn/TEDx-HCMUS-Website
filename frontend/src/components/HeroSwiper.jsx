import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { HeroImages } from "../assets";

function HeroSwiper() {
  const fromSlide = 0;
  const toSlide = 3;
  const slidesToShow = HeroImages.slice(fromSlide, toSlide);
  const timeDelay = 5000;

  return (
    <Styles>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: timeDelay,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper"
      >
        {slidesToShow.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="TEDx HCMUS Activities" className="image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Styles>
  );
}

const Styles = styled.div`
  .swiper {
    width: 100%;
    height: 100%;
    z-index: 0;
    position: absolute;

    .swiper-pagination-bullet {
      background-color: red;
    }
  }

  .image {
    width: 100%;
    height: 100%;
    align-items: center;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 20%,
      transparent 100%
    );
    object-fit: cover;
  }
`;

export default HeroSwiper;
