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
  { id: "all projects", label: "All Projects" },
  { id: "web development", label: "Web Development" },
  { id: "mobile app", label: "Mobile App" },
  { id: "motion", label: "Motion" },
  { id: "graphic design", label: "Graphic Design" },
];

const service = [
  {
    Icon: serviceIcon1,
    name: "Motion & web Graphy",
    pere: "NetTracking is a very powerful Web 2.0 site search engine allows you to find email allerts",
  },
  {
    Icon: serviceIcon2,
    name: "UI/Ux Consultancy",
    pere: "NetTracking is a very powerful Web 2.0 site search engine allows you to find email allerts",
  },
  {
    Icon: serviceIcon3,
    name: "Branding & Design",
    pere: "NetTracking is a very powerful Web 2.0 site search engine allows you to find email allerts",
  },
  {
    Icon: serviceIcon4,
    name: "Product Photography",
    pere: "NetTracking is a very powerful Web 2.0 site search engine allows you to find email allerts",
  },
  {
    Icon: serviceIcon5,
    name: "Key Seo Optimization",
    pere: "NetTracking is a very powerful Web 2.0 site search engine allows you to find email allerts",
  },
  {
    Icon: serviceIcon6,
    name: "Social Management",
    pere: "NetTracking is a very powerful Web 2.0 site search engine allows you to find email allerts",
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
              Home
            </Link>
            <span className="mx-0">
              <i className="ri-arrow-right-wide-line text-(--text-white)"></i>
            </span>
            <h2 className="text-(--text-light)">Projects</h2>
          </div>
        </div>
        <div className="title flex flex-col justify-center items-center">
          <h1 className="text-5xl mb-5 leading-15 NotoSerif font-bold">
            My Latest Projects
          </h1>
          <p className="text-xl text-(--text-light) text-center lg:w-[60%] mb-10 NotoSerif">
            The convention is the main event of the year for professionals in
            the world of design and architecture.
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
          <h1 className="NotoSerif font-bold text-5xl mb-5">My Services</h1>
          <p className="text-xl text-(--text-light) NotoSerif text-center lg:w-[58%] mb-10">
            With many years of experience in the field of Digital Marketing, I
            am confident to bring you many outstanding values.
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
          <h1 className="NotoSerif font-bold text-5xl mb-5">Testimonials</h1>
          <p className="text-xl text-(--text-light) NotoSerif text-center mb-10">
            Nettracking is a B2B marketing software for telecommunications
            industry.
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
          <h1 className="NotoSerif font-bold text-5xl lg:w-[80%] leading-15 text-center mb-5">Content publishing cooperation with my partners</h1>
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
