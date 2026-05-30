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

const HotTopicData = [
  { id: "1", title: "Voyage", subtitle: "36 articles", image: HotTopic1 },
  { id: "2", title: "Culture", subtitle: "18 articles", image: HotTopic2 },
  { id: "3", title: "Mode de vie", subtitle: "44 articles", image: HotTopic3 },
  { id: "4", title: "Mode", subtitle: "65 articles", image: HotTopic4 },
  { id: "5", title: "Cuisine", subtitle: "36 articles", image: HotTopic5 },
  { id: "6", title: "Espace", subtitle: "35 articles", image: HotTopic6 },
  { id: "7", title: "Sport", subtitle: "32 articles", image: HotTopic7 },
  { id: "8", title: "Espace", subtitle: "28 articles", image: HotTopic8 },
  { id: "9", title: "Intérieur", subtitle: "35 articles", image: HotTopic9 },
];

export default function Hero() {
  return (
    <>
      <div className="hero hero-header section-container text-(--white)">
        {/* Hero Section */}
        <div className="hero-content flex flex-col lg:flex-row gap-5 justify-between items-center">
          <div className="w-full z-10 lg:w-1/2">
            <span className="text-(--text-light) Unbounded font-bold text-[13px]">
              Bonjour !
            </span>
            <h1 className="text-(--text) section-title-hero my-5">
              Je suis Olivier Djablé
            </h1>
            <p className="Unbounded text-[15px] text-(--text-light)">
              Je crée des expériences numériques fluides grâce à un design épuré, des interactions pertinentes et des technologies web modernes. Chaque animation, couleur et élément que je conçois a un but précis : rendre le web plus intuitif et inspirant.
            </p>
            <div className="flex gap-2 items-center justify-between p-1 mt-10">
              <div className="hero-inputs border border-(--prim-color) rounded p-1 w-full md:w-[60%]">
                <input
                  type="text"
                  placeholder="Saisissez votre adresse e-mail"
                  className="w-full outline-none ps-3 text-sm sm:text-base min-w-0"
                />
                <button className="bg-linear-to-r from-indigo-500 to-purple-600 text-white font-medium px-4 sm:px-5 py-2 rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-700 transition-all cursor-pointer text-sm sm:text-base whitespace-nowrap shrink-0">
                  S'abonner
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
                width={280}
                height={280}
                className="w-full max-w-[260px] sm:max-w-[280px] h-auto"
                priority
              />
            </div>
          </div>
        </div>
        {/* Hot Topics Section */}
        <div className="z-10 p-4 sm:p-5 mt-8 rounded-md border border-(--prim-light) bg-(--bg-color) relative">
          <div className="w-full relative">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pe-0 md:pe-24">
              <div>
                <h2 className="text-(--text) NotoSerif text-xl sm:text-2xl font-bold">
                  Sujets populaires
                </h2>
                <p className="text-(--text-light) text-sm sm:text-base mt-1">
                  Ne manquez pas les dernières actualités : conseils voyage, avis
                  d'hôtels, guide gastronomique...
                </p>
              </div>

              <div className="hero-swiper-nav">
                <div className="swiper-button-prev hero-swiper-prev swiper-btn w-8 h-8 bg-(--prim-light) hover:bg-(--prim-color) rounded-full flex items-center justify-center cursor-pointer text-white">
                  <i className="bi bi-arrow-left"></i>
                </div>
                <div className="swiper-button-next hero-swiper-next swiper-btn w-8 h-8 bg-(--prim-light) hover:bg-(--prim-color) rounded-full flex items-center justify-center cursor-pointer text-white">
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="w-full hero-swiper">
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
                  640: { slidesPerView: 2 },
                  0: { slidesPerView: 1.2 },
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
                          width={180}
                          height={120}
                          className="w-full h-full rounded object-cover"
                        />
                        <div className="hot-topic-info absolute bottom-2 left-2">
                            <h2 className="NotoSerif text-white text-sm">{topic.title}</h2>
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
