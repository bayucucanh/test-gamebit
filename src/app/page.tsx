"use client";
import { FiX, FiSearch, FiBell, FiShoppingCart } from "react-icons/fi";
import { Banner, Menu, QuickBuySection, SearchBar, Toast } from "@/components";
import Image from "next/image";
import { menu } from "@/service";
import { useState } from "react";

import "swiper/css";
import "swiper/css/bundle";
import { mobileGames } from "@/service/mobileGames";

export default function Home() {
  const [toggleState, setToggleState] = useState(1);

  return (
    <div>
      <Toast />

      <SearchBar />
      <Banner />
      <Menu menu={menu} />

      <QuickBuySection
        title="Quick Buy"
        tabs={["Mobile Games", "PC Games", "Game Voucher"]}
        activeTab={toggleState}
        onTabClick={setToggleState}
      >
        {/* Tab 1 Content */}
        <div className="grid grid-cols-3 gap-4 mt-5">
          {mobileGames.map((item, index) => (
            <button
              key={index}
              onClick={() => console.log("redirect to Genshin")}
            >
              <div className="p-2 bg-white shadow grid rounded-lg">
                <Image
                  alt={item?.name}
                  className="rounded place-self-center"
                  src={item?.image}
                />
                <p className="text-xs font-medium text-center mt-3">
                  {item?.name}
                </p>
              </div>
            </button>
          ))}

          <button className="col-span-3 text-center border border-[#CB1F59] text-[#CB1F59] w-full rounded-md px-4 py-2">
            See More
          </button>
        </div>

        {/* Tab 2 Content */}
        <h2>No Games</h2>

        {/* Tab 3 Content */}
        <h2>No Games</h2>
      </QuickBuySection>
    </div>
  );
}
