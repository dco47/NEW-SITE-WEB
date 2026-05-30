"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import serviceIcon1 from "@/public/service-Icon1.svg";
import serviceIcon2 from "@/public/service-Icon2.svg";
import serviceIcon3 from "@/public/service-Icon3.svg";
import serviceIcon4 from "@/public/service-Icon4.svg";
import serviceIcon5 from "@/public/service-Icon5.svg";
import serviceIcon6 from "@/public/service-Icon6.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import testiAuthor1 from "@/public/testi-author1.webp";
import testiAuthor2 from "@/public/testi-author2.webp";
import testiAuthor3 from "@/public/testi-author3.webp";
import testiQoute from "@/public/testi-quote.svg";

import partner1 from "@/public/partner1.svg";
import partner2 from "@/public/partner2.svg";
import partner3 from "@/public/partner3.svg";
import partner4 from "@/public/partner4.svg";
import partner5 from "@/public/partner5.svg";

import projects from "@/app/JsonData/Projects.json";

const tabs = [
  { id: "all projects", label: "Tous les projets" },
  { id: "web development", label: "Développement web" },
  { id: "mobile app", label: "Application mobile" },
  { id: "motion", label: "Motion" },
  { id: "graphic design", label: "Design graphique" },
];

const service = [
  {
    Icon: serviceIcon1,
    name: "Motion & web design",
    pere: "Des animations fluides et un design web moderne pour captiver vos visiteurs.",
  },
  {
    Icon: serviceIcon2,
    name: "Conseil UI/UX",
    pere: "Une expérience utilisateur optimisée pour des interfaces intuitives et efficaces.",
  },
  {
    Icon: serviceIcon3,
    name: "Branding & Design",
    pere: "Une identité visuelle forte et cohérente pour valoriser votre marque.",
  },
  {
    Icon: serviceIcon4,
    name: "Photographie produit",
    pere: "Des visuels professionnels qui mettent en valeur vos produits et services.",
  },
  {
    Icon: serviceIcon5,
    name: "Optimisation SEO",
    pere: "Améliorez votre visibilité sur les moteurs de recherche et attirez plus de trafic.",
  },
  {
    Icon: serviceIcon6,
    name: "Gestion des réseaux sociaux",
    pere: "Développez votre présence en ligne et engagez votre communauté.",
  },
];

const testimonials = [
  {
    img: testiAuthor1,
    name: "Karen Adderiy",
    company: "Alithemes",
    desc: "Dignissim quis turpis, semper vehicula dolor. Suspendisse tincidunt consequat quam, ac posuere leo dapibusid. ",
  },
  {
    img: testiAuthor2,
    name: "Sophia Calwell",
    company: "Codeverse",
    desc: "Dignissim quis turpis, semper vehicula dolor. Suspendisse tincidunt consequat quam, ac posuere leo dapibusid. ",
  },
  {
    img: testiAuthor3,
    name: "Lillian Mercer",
    company: "Webify",
    desc: "Dignissim quis turpis, semper vehicula dolor. Suspendisse tincidunt consequat quam, ac posuere leo dapibusid. ",
  },
  {
    img: testiAuthor1,
    name: "Eleanor Winslow",
    company: "Devoria",
    desc: "Dignissim quis turpis, semper vehicula dolor. Suspendisse tincidunt consequat quam, ac posuere leo dapibusid. ",
  },
  {
    img: testiAuthor2,
    name: "Olivia Redford",
    company: "Pixelify",
    desc: "Dignissim quis turpis, semper vehicula dolor. Suspendisse tincidunt consequat quam, ac posuere leo dapibusid. ",
  },
  {
    img: testiAuthor3,
    name: "Clara Whitmore",
    company: "Softora",
    desc: "Dignissim quis turpis, semper vehicula dolor. Suspendisse tincidunt consequat quam, ac posuere leo dapibusid. ",
  },
];

export default function Project() {
  const [activeTab, setActiveTab] = useState("all projects");
  return (
    <>
      {/* Projects */}
      <div className="px-[8%] lg:px-[16%] py-10">
        <div className="heading border-b border-(--light-border) pb-5 px-5 mb-10">
          <div className="flex">
            <Link href="/" className="text-(--text-light)">
              <i className="bi bi-house text-white me-2 px-2 py-1 rounded-full bg-(--prim-color)"></i>
              Accueil
            </Link>
            <span className="mx-0">
              <i className="ri-arrow-right-wide-line text-(--text-white)"></i>
            </span>
            <h2 className="text-(--text-light)">Projets</h2>
          </div>
        </div>
        <div className="title flex flex-col justify-center items-center">
          <h1 className="text-5xl mb-5 leading-15 NotoSerif font-bold">
            Mes derniers projets
          </h1>
          <p className="text-xl text-(--text-light) text-center lg:w-[60%] mb-10 NotoSerif">
            Le rendez-vous incontournable de l'année pour les professionnels du
            design et de l'architecture.
          </p>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-(--prim-color) text-(--white) font-semibold"
                  : "border-2 text-(--white) border-(--prim-color) hover:bg-(--prim-color) hover:border-transparent cursor-pointer hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="mt-5">
          {activeTab === "all projects" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Link
                  href={`/UI-Components/Projects/ProjectDeatails/${project.id}`}
                  key={index}
                >
                  <div className="projects-section rounded-2xl overflow-hidden z-10 cursor-pointer relative group">
                    <div className="project-image">
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={400}
                        height={400}
                        className="rounded-lg object-cover w-full transition-all duration-500"
                      />
                    </div>
                    <div className="project-content absolute p-3 bottom-0 left-0 z-20">
                      <h3 className="text-3xl text-(--prim-color) NotoSerif mb-3 font-bold">
                        {project.title}
                      </h3>
                      <p className="NotoSerif text-gray-400 text-sm">
                        {project.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {activeTab === "web development" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {projects.slice(0, 3).map((project, index) => (
                <Link
                  href={`/UI-Components/Projects/ProjectDeatails/${project.id}`}
                  key={index}
                >
                  <div className="projects-section rounded-2xl overflow-hidden z-10 cursor-pointer relative group">
                    <div className="project-image">
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={400}
                        height={400}
                        className="rounded-lg object-cover w-full transition-all duration-500"
                      />
                    </div>
                    <div className="project-content absolute p-3 bottom-0 left-0 z-20">
                      <h3 className="text-3xl text-(--prim-color) NotoSerif mb-3 font-bold">
                        {project.title}
                      </h3>
                      <p className="NotoSerif text-gray-400 text-sm">
                        {project.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {activeTab === "mobile app" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {projects.slice(2, 4).map((project, index) => (
                <Link
                  href={`/UI-Components/Projects/ProjectDeatails/${project.id}`}
                  key={index}
                >
                  <div className="projects-section rounded-2xl overflow-hidden z-10 cursor-pointer relative group">
                    <div className="project-image">
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={400}
                        height={400}
                        className="rounded-lg object-cover w-full transition-all duration-500"
                      />
                    </div>
                    <div className="project-content absolute p-3 bottom-0 left-0 z-20">
                      <h3 className="text-3xl text-(--prim-color) NotoSerif mb-3 font-bold">
                        {project.title}
                      </h3>
                      <p className="NotoSerif text-gray-400 text-sm">
                        {project.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {activeTab === "motion" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {projects.slice(1, 3).map((project, index) => (
                <Link
                  href={`/UI-Components/Projects/ProjectDeatails/${project.id}`}
                  key={index}
                >
                  <div className="projects-section rounded-2xl overflow-hidden z-10 cursor-pointer relative group">
                    <div className="project-image">
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={400}
                        height={400}
                        className="rounded-lg object-cover w-full transition-all duration-500"
                      />
                    </div>
                    <div className="project-content absolute p-3 bottom-0 left-0 z-20">
                      <h3 className="text-3xl text-(--prim-color) NotoSerif mb-3 font-bold">
                        {project.title}
                      </h3>
                      <p className="NotoSerif text-gray-400 text-sm">
                        {project.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {activeTab === "graphic design" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {projects.slice(2, 5).map((project, index) => (
                <Link
                  href={`/UI-Components/Projects/ProjectDeatails/${project.id}`}
                  key={index}
                >
                  <div className="projects-section rounded-2xl overflow-hidden z-10 cursor-pointer relative group">
                    <div className="project-image">
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={400}
                        height={400}
                        className="rounded-lg object-cover w-full transition-all duration-500"
                      />
                    </div>
                    <div className="project-content absolute p-3 bottom-0 left-0 z-20">
                      <h3 className="text-3xl text-(--prim-color) NotoSerif mb-3 font-bold">
                        {project.title}
                      </h3>
                      <p className="NotoSerif text-gray-400 text-sm">
                        {project.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Services */}
      <div className="px-[8%] lg:px-[16%] py-15">
        <div className="title flex flex-col items-center justify-center">
          <h1 className="NotoSerif font-bold text-5xl mb-5">Mes services</h1>
          <p className="text-xl text-(--text-light) NotoSerif text-center lg:w-[58%] mb-10">
            Fort de plusieurs années d'expérience dans le marketing digital, je
            suis confiant de pouvoir vous apporter de nombreuses valeurs
            exceptionnelles.
          </p>
        </div>
        <div className="bg-(--bg-color) rounded-2xl p-15">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.map((services, index) => (
              <div
                key={index}
                className="flex flex-col cursor-pointer group border-b border-(--light-border) pb-5"
              >
                <div className="service-icon mb-4">
                  <Image
                    src={services.Icon}
                    alt={services.name}
                    className="rounded group-hover:bg-(--text-light) transition-all shadow-lg shadow-white/10 object-cover bg-(--body-color) h-15 w-15 p-3"
                  />
                </div>
                <h3 className="font-semibold text-2xl text-(--white) mb-3 NotoSerif hover:text-(--prim-color) cursor-pointer">
                  {services.name}
                </h3>
                <p className="text-(--text-light) text-lg NotoSerif">
                  {services.pere}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Testimonial */}
      <div className="px-[8%] lg:px-[16%] py-15">
        <div className="title flex flex-col items-center justify-center">
          <h1 className="NotoSerif font-bold text-5xl mb-5">Témoignages</h1>
          <p className="text-xl text-(--text-light) NotoSerif text-center mb-10">
            DcoTech est une solution digitale dédiée aux professionnels du web
            et du design.
          </p>
        </div>
        <div className="w-full testi-swiper">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 1200,
            }}
            breakpoints={{
              1200: { slidesPerView: 3 },
              991: { slidesPerView: 2 },
              575: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
            className="mt-5"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testi-card w-full border border-[#222f43] rounded-xl p-4 cursor-pointer">
                  <div className="testi-section mb-4 flex gap-3 items-center">
                    <div className="testi-author">
                      <Image
                        src={item.img}
                        alt={item.name}
                        className="object-cover"
                      />
                    </div>
                    <div className="author-text">
                      <h4 className="text-lg NotoSerif text-(--text-light) font-bold">
                        {item.name}
                      </h4>
                      <span className=" NotoSerif text-[#66768f]">
                        {item.company}
                      </span>
                    </div>
                  </div>
                  <p className=" NotoSerif text-sm text-(--text-light)">
                    {item.desc}
                  </p>
                  <div className="text-quote flex justify-end">
                    <Image
                      src={testiQoute}
                      alt="Quote"
                      className="object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Partners */}
       <div className="px-[8%] lg:px-[16%] py-15">
        <div className="title flex flex-col items-center justify-center">
          <h1 className="NotoSerif font-bold text-5xl lg:w-[80%] leading-15 text-center mb-5">Coopération éditoriale avec mes partenaires</h1>
        </div>
        <Swiper
            modules={[Autoplay]}
            autoplay={{
                delay: 2500,
                disableOnInteraction:false,
            }}
            slidesPerView={5}
            spaceBetween={20}
            loop={true}
            breakpoints={{
                1200: {slidesPerView: 4},
                991: {slidesPerView: 3},
                575: {slidesPerView: 2},
                0: {slidesPerView: 2},
            }}
            className="mt-10 brands-swiper"
        >
            {[partner1, partner2, partner3, partner4, partner5].map((img, i) => (
                <SwiperSlide key={i}>
                    <Image
                        src={img}
                        alt={`partner-${i + 1}`}
                        className="object-cover transition-all duration-300 opacity-50 hover:opacity-100 cursor-pointer"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
}
