import Image from "next/image";
import { FiX } from "react-icons/fi";
import { arrowLeft, circles, waves } from "@/assets/images";
import React, { useState, ReactEventHandler } from "react";

const Toast = () => {
  const [active, setActive] = useState(true);

  return (
    <div>
      {active && (
        <div className="w-full bg-[#A21947] px-4 pt-[6px] p-[10px] flex text-sm place-content-between items-center relative">
          <div>
            <h3 className="leading-5 font-semibold text-white">
              Get instant cashback on your first purchase!
            </h3>
            <p className="text-white text-xs md:text-sm">
              The best way to top-up games
            </p>
          </div>
          <Image
            alt="circles"
            src={circles}
            className="absolute right-0 sm:right-5 bottom-0 "
          />
          <Image
            alt="arrowLeft"
            src={arrowLeft}
            className="absolute right-0 sm:right-5 top-1 "
          />
          <Image
            alt="waves"
            src={waves}
            className="absolute left-0 sm:right-5 bottom-0 "
          />
          <button onClick={() => setActive(!active)} className="z-10">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Toast;
