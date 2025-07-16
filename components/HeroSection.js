import React from "react";
import Button from "./Button";

const HeroSection = () => (
  <section className="flex flex-col [@media(min-width:841px)]:flex-row items-center justify-between px-4 sm:px-8 [@media(min-width:841px)]:px-16 py-12 [@media(min-width:841px)]:py-24 bg-orange-50 bg-gradient-to-br from-orange-50 via-[#FFF9F7] to-white min-h-[75vh] min-h-screen">
    <div className="[@media(min-width:841px)]:w-1/2 w-full mb-6 [@media(min-width:841px)]:mb-0 flex flex-col gap-4">
      <h1 className="text-4xl sm:text-5xl [@media(min-width:841px)]:text-6xl font-extrabold text-black leading-tight mb-4 tracking-tight hero-title">
        Fresh & Affordable<br />
        Tasty <span className="text-orange-500">Foods</span>
      </h1>
      <p className="text-gray-500 text-base sm:text-lg mb-8 sm:mb-10 max-w-xl">
      Pre-order meals from your college cafeteria.<br/>
      Pick a slot. Get it fresh.
      </p>
      <Button className="order-btn bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl rounded-full shadow-lg hover:scale-105 hover:bg-orange-600 transition-transform duration-200 cursor-pointer">Order Now</Button>
    </div>
    <div className="[@media(min-width:841px)]:w-1/2 w-full flex justify-center">
      <div className="[@media(min-width:841px)]:p-2 p-0 flex items-center justify-center">
        <img src="/biryani.png" alt="Biryani" className="hero-img w-[380px] h-[380px] object-cover rounded-full max-w-full" />
      </div>
    </div>
  </section>
);

export default HeroSection; 