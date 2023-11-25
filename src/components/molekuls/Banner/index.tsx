"use client";
import { FiX, FiSearch, FiBell, FiShoppingCart } from "react-icons/fi";
import { Toast } from "@/components";
import Image from "next/image";
import { account } from "@/assets/icons";
import { menu } from "@/service";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { banner } from "@/assets/images";
import { useState } from "react";

import "swiper/css";
import "swiper/css/bundle";
import { mobileGames } from "@/service/mobileGames";

export default function Banner() {
  return (
    <div className="mb-4 mx-4">
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          renderBullet: (index, className) => {
            return '<span class="' + className + '"></span>';
          },
        }}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
      >
        <SwiperSlide>
          <Image alt="banner" src={banner} className="!w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="banner" src={banner} className="!w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="banner" src={banner} className="!w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="banner" src={banner} className="!w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="banner" src={banner} className="!w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="banner" src={banner} className="!w-full" />
        </SwiperSlide>
      </Swiper>

      <div className="flex justify-between mt-3">
        <div className="custom-pagination !w-auto"></div>
        <button>
          <div className="font-medium text-[#CB1F59]">See all promotions</div>
        </button>
      </div>
    </div>
  );
}
