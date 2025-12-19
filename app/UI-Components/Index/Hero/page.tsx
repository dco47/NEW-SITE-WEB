"use client";

import Image from "next/image";
import Link from "next/link";

import HeroImg from "@/public/hero.webp";

import HotTopic1 from "@/public/hot-topic1.webp";
import HotTopic2 from "@/public/hot-topic2.webp";
import HotTopic3 from "@/public/hot-topic3.webp";
import HotTopic4 from "@/public/hot-topic4.webp";
import HotTopic5 from "@/public/hot-topic5.webp";
import HotTopic6 from "@/public/hot-topic6.webp";
import HotTopic7 from "@/public/hot-topic7.webp";
import HotTopic8 from "@/public/hot-topic8.webp";
import HotTopic9 from "@/public/hot-topic9.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { title } from "process";
import { subtle } from "crypto";

const HotTopicData = [
  { id: "1", title: "Travel", subtitle: "36 Articles", image: HotTopic1 },
  { id: "2", title: "Culture", subtitle: "18 Articles", image: HotTopic2 },
  { id: "3", title: "Lifestyle", subtitle: "44 Articles", image: HotTopic3 },
  { id: "4", title: "Fashion", subtitle: "65 Articles", image: HotTopic4 },
  { id: "5", title: "Food", subtitle: "36 Articles", image: HotTopic5 },
  { id: "6", title: "Space", subtitle: "35 Articles", image: HotTopic6 },
  { id: "7", title: "Sports", subtitle: "32 Articles", image: HotTopic7 },
  { id: "8", title: "Space", subtitle: "28 Articles", image: HotTopic8 },
  { id: "9", title: "Interior", subtitle: "35 Articles", image: HotTopic9 },
];

export default function Hero() {
  return (
    <>
      <div className="hero hero-header px-[8%] lg:px-[16%] pt-10 text-(--white)">
        {/* Hero Section */}
        <div className="w-full flex flex-col lg:flex-row gap-5 justify-between items-center">
          <div className="w-full z-10 lg:w-1/2">
            <span className="text-(--text-light) Unbounded font-bold text-[13px]">
              Hey There!
            </span>
            <h1 className="text-(--text) NotoSerif text-7xl font-bold my-5">
              I'm Olivier Djablé
            </h1>
            <p className="Unbounded text-[15px] text-(--text-light)">
              I craft seamless digital experiences witch clean design,
              meaningful interactions, and modern web technologies. Every
              animation, color, and element I create serves a purpose - to make
              the web more intuitive and inspiring.
            </p>
            <div className="flex gap-2 items-center justify-between p-1 mt-10">
              <div className="hero-inputs border border-(--prim-color) rounded p-1 w-full md:w-[60%] flex gap-5 justify-between">
                <input
                  type="text"
                  placeholder="Type your Email Address"
                  className="w-full outline-none ps-3"
                />
                <button className="bg-linear-to-r from-indigo-500 to-purple-600 text-white font-medium px-5 py-2 rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-700 transition-all cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          {/* Hero Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="hero-image relative z-1">
              <Image
                alt="HeroImage"
                src="/hero.webp"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
        {/* Hot Topics Section */}
        <div className="flex-col lg:flex-row justify-between gap-5 z-10 p-5 rounded-md border border-(--prim-light) bg-(--bg-color)     relative">
          <div className="w-full lg:1/1 relative">
            <h2 className="text-(--text) NotoSerif text-2xl font-bold">
              Hot Topics
            </h2>
            <p className="text-(--text-light">
              Do not miss out on the latest news about Travel tips, Hotels
              review, Food guide...
            </p>

            <div className="gap-2">
              <div className="swiper-button-next hero-swiper-next swiper-btn w-8 h-8 bg-(--prim-light) hover:bg-(--prim-color) rounded-full flex items-center justify-center cursor-pointer text-white">
                <i className="bi bi-arrow-right"></i>
              </div>

              <div className="swiper-button-prev hero-swiper-prev swiper-btn w-8 h-8 bg-(--prim-light) hover:bg-(--prim-color) rounded-full flex items-center justify-center cursor-pointer text-white">
                <i className="bi bi-arrow-left"></i>
              </div>
            </div>
            <div className="w-full lg:w-80% hero-swiper">
              <Swiper
                modules={[Autoplay, Navigation]}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                slidesPerView={4}
                spaceBetween={20}
                loop={true}
                breakpoints={{
                  1200: { slidesPerView: 4 },
                  991: { slidesPerView: 3 },
                  575: { slidesPerView: 2 },
                  0: { slidesPerView: 2 },
                }}
                className="mt-5"
              >
                {HotTopicData.map((topic, index) => (
                  <SwiperSlide key={index}>
                    <Link href="/UI-Components/Blogs/blog">
                      <div className="relative hot-topic-card cursor-pointer">
                        <Image
                          src={topic.image}
                          alt={topic.title}
                          className="w-full h-full rounded object-contain"
                        />
                        <div className="hot-topic-info absolute bottom-2 left-2">
                            <h2 className="NotoSerif text-white">{topic.title}</h2>
                            <p className="text-gray-400">{topic.subtitle}</p>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
