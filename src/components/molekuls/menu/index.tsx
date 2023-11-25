"use client";
import { FiX, FiSearch, FiBell, FiShoppingCart } from "react-icons/fi";
import { Toast } from "@/components";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import { banner } from "@/assets/images";

import "swiper/css";
import "swiper/css/bundle";

interface MenuItem {
  name: string;
  icons: string;
}

interface MenuProps {
  menu: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ menu }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg mx-4 py-3 px-6">
      <Swiper
        modules={[Navigation, Scrollbar]}
        scrollbar={{
          el: ".custom-scrollbar",
          draggable: true,
          dragSize: 25,
        }}
        spaceBetween={0}
        slidesPerView={5}
      >
        {menu?.map((item) => (
          <SwiperSlide>
            <div className="flex flex-col items-center text-center">
              <Image alt={item?.name} src={item?.icons} />
              <p className="text-xs font-medium leading-4 mt-1">{item?.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex w-full justify-center ">
        <div className="relative w-1/3 mt-4">
          <div className="h-8 custom-scrollbar swiper-scrollbar"></div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
