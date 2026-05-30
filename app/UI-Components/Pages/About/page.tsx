"use client";

import Link from "next/link";
import Image from "next/image";

import HeroImg from "@/public/hero.webp";

import plusIcon from "@/public/plus-Icon.svg";
import minusIcon from "@/public/minus-Icon.svg";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "Comprendre la facturation et le compte entreprise",
    answer:
      "Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel pretium mi. Morbi varius, tellus in accumsan blandit, elit ligula eleifend velit, luctus mattis ante nulla condimentum nulla.",
  },
  {
    question: "Mettre à jour votre carte bancaire",
    answer:
      "Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel pretium mi. Morbi varius, tellus in accumsan blandit, elit ligula eleifend velit, luctus mattis ante nulla condimentum nulla.",
  },
  {
    question: "Raccourcis clavier et astuces de l'application",
    answer:
      "Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel pretium mi. Morbi varius, tellus in accumsan blandit, elit ligula eleifend velit, luctus mattis ante nulla condimentum nulla.",
  },
  {
    question: "Annuler un abonnement au site web",
    answer:
      "Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel pretium mi. Morbi varius, tellus in accumsan blandit, elit ligula eleifend velit, luctus mattis ante nulla condimentum nulla.",
  },
];

import serviceIcon1 from "@/public/service-Icon1.svg";
import serviceIcon2 from "@/public/service-Icon2.svg";
import serviceIcon3 from "@/public/service-Icon3.svg";
import serviceIcon4 from "@/public/service-Icon4.svg";
import serviceIcon5 from "@/public/service-Icon5.svg";
import serviceIcon6 from "@/public/service-Icon6.svg";

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

import projects from "@/app/JsonData/Projects.json";
import { useState } from "react";

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

import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
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

const tabs = [
  { id: "all projects", label: "Tous les projets" },
  { id: "web development", label: "Développement web" },
  { id: "mobile app", label: "Application mobile" },
  { id: "motion", label: "Motion" },
  { id: "graphic design", label: "Design graphique" },
];

import pricingIcon from "@/public/pricing-Icon.svg";

export default function About() {
  const [activeTab, setActiveTab] = useState("all projects");

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="section-container pt-8 lg:pt-10">
        <div className="heading border-b border-(--light-border) pb-5 px-2 sm:px-5 mb-8 sm:mb-10 z-50">
          <div className="breadcrumb-bar">
            <Link href="/" className="text-(--text-light)">
              <i className="bi bi-house text-white me-2 px-2 py-1 rounded-full bg-(--prim-color)"></i>
            </Link>
            <span className="mx-2">
              <i className="ri-arrow-right-wide-line text-(--white)"></i>
            </span>
            <h2 className="text-(--text-light)">À propos</h2>
          </div>
        </div>
      </div>
      <div className="hero h-full section-container text-(--white) pb-10">
        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-5 justify-between items-center">
          <div className="w-full z-10 lg:w-1/2 text-center lg:text-left">
            <span className="text-(--text-light) Unbounded font-bold text-xs sm:text-[13px]">
              Bonjour !
            </span>
            <h1 className="text-(--text) section-title-hero my-4 sm:my-5">
              Je suis Olivier Djablé
            </h1>
            <p className="Unbounded section-subtitle max-w-xl mx-auto lg:mx-0">
              Je conçois des expériences numériques fluides avec un design
              épuré, des interactions significatives et des technologies web
              modernes. Chaque animation, couleur et élément que je crée a un
              but : rendre le web plus intuitif et inspirant.
            </p>
            <div className="mt-8 sm:mt-10 max-w-md mx-auto lg:mx-0">
              <div className="hero-inputs border border-(--prim-color) rounded p-1 sm:p-1.5 w-full">
                <input
                  type="text"
                  placeholder="Saisissez votre adresse E-mail"
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
            <div className="hero-image relative z-1 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none">
              <Image
                alt="HeroImage"
                src="/hero.webp"
                width={300}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="section-container section-py">
        <div className="title flex flex-col items-center justify-center">
          <h1 className="section-title mb-4 sm:mb-5 text-center">Mes Services</h1>
          <p className="section-subtitle NotoSerif text-center max-w-2xl lg:w-[58%] mb-8 sm:mb-10">
            Fort de plusieurs années d’expérience dans le domaine du marketing
            digital, je suis confiant de pouvoir vous apporter de nombreuses
            valeurs exceptionnelles.
          </p>
        </div>
        <div className="bg-(--bg-color) rounded-2xl p-6 sm:p-10 lg:p-15">
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

      {/* Projects */}
      <div className="section-container section-py">
        <div className="title flex flex-col justify-center items-center">
          <h1 className="section-title mb-4 sm:mb-5 text-center leading-tight">
            Mes derniers projets
          </h1>
          <p className="section-subtitle NotoSerif text-center max-w-2xl lg:w-[60%] mb-8 sm:mb-10">
            Le rendez-vous incontournable de l'année pour les professionnels du
            design et de l'architecture.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 sm:px-5 py-2 rounded-full transition-all duration-300 text-sm sm:text-base ${
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 space-y-4">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 space-y-4">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 space-y-4">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 space-y-4">
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

      {/* Pricing */}
      <div className="section-container section-py">
        <div className="title flex flex-col items-center justify-center">
          <h1 className="section-title text-center max-w-2xl lg:w-[60%]">
            La meilleure solution de travail, au meilleur prix.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
            <div className="pricing-card bg-(--bg-color) p-5 rounded-xl border border-[#222f43]">
              <div className="pricing-content border-b py-6 border-[222f43]">
                <h3 className="font-bold text-3xl mb-5 Notoserif text-(--white)">
                  Gratuit
                </h3>
                <p className="text-(--text-light) Notoserif font-semibold text-xl mb-5">
                  Idéal pour un usage personnel
                </p>
                <p className="text-(--text-light) Notoserif font-semibold text-lg mb-8">
                  Commencez sans carte bancaire ni moyen de paiement
                </p>
                <button className="px-5 py-1 rounded-full text-(--white) cursor-pointer font-semibold transition-all duration-300 border-2 border-(--prim-color) hover:bg-(--prim-color) hover:border-transparent hover:text-white">
                  Essayer gratuitement
                </button>
              </div>
              <div className="pricing-list py-6">
                <h4 className="text-(--white) text-lg mb-5 font-semibold Notoserif">
                  Ce que vous obtenez :
                </h4>
                <ul className="list-items px-3">
                  <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                    <Image src={pricingIcon} alt="Icône tarif" />
                    Stockage illimité
                  </li>
                  <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                    <Image src={pricingIcon} alt="Icône tarif" />
                    Membres illimités
                  </li>
                  <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                    <Image src={pricingIcon} alt="Icône tarif" />
                    Authentification à deux facteurs
                  </li>
                  <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                    <Image src={pricingIcon} alt="Icône tarif" />
                    Documents collaboratifs
                  </li>
                  <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                    <Image src={pricingIcon} alt="Icône tarif" />
                    Stockage illimité
                  </li>
                  <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                    <Image src={pricingIcon} alt="Icône tarif" />
                    Gestion de sprints
                  </li>
                </ul>
              </div>
            </div>
            <div className="pricing-card bg-(--bg-color) p-5 rounded-xl border border-[#222f43]">
              <div className="pricing-content border-b py-6 border-[222f43]">
                <div className="pricing-heading flex justify-between items-center relative">
                  <h3 className="font-bold text-3xl mb-5 Notoserif text-(--white)">
                    Professionnel
                  </h3>
                  <label className="text-black absolute top-0 right-0 bg-[#6cffc1] px-4 rounded-full font-semibold">
                    Populaire
                  </label>
                </div>
                <p className="text-(--text-light) Notoserif font-semibold text-xl mb-5">
                  Idéal pour les équipes en croissance
                </p>
                <p className="text-(--text-light) Notoserif font-semibold text-lg mb-8">
                  Commencez sans carte bancaire ni moyen de paiement
                </p>
                <button className="px-5 py-1 rounded-full text-(--white) cursor-pointer font-semibold transition-all duration-300 border-2 border-(--prim-color) hover:bg-(--prim-color) hover:border-transparent hover:text-white">
                  Commencer
                </button>
              </div>
              <div className="pricing-list py-6">
                <h4 className="text-(--white) text-lg mb-5 font-semibold Notoserif">
                  Ce que vous obtenez :
                </h4>
                <ul className="list-items px-3">
                  <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                    <Image src={pricingIcon} alt="Icône tarif" />
                    Stockage illimité
                  </li>
                  <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                    <Image src={pricingIcon} alt="Icône tarif" />
                    Membres illimités
                  </li>
                  <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                    <Image src={pricingIcon} alt="Icône tarif" />
                    Authentification à deux facteurs
                  </li>
                  <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                    <Image src={pricingIcon} alt="Icône tarif" />
                    Documents collaboratifs
                  </li>
                  <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                    <Image src={pricingIcon} alt="Icône tarif" />
                    Stockage illimité
                  </li>
                  <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                    <Image src={pricingIcon} alt="Icône tarif" />
                    Gestion de sprints
                  </li>
                </ul>
              </div>
            </div>
            <div className="pricing-card bg-(--bg-color) p-5 rounded-xl border border-[#222f43]">
              <div className="pricing-content border-b py-6 border-[222f43]">
                <div className="pricing-heading flex justify-between items-center relative">
                  <h3 className="font-bold text-3xl mb-5 Notoserif text-(--white)">
                    Entreprise
                  </h3>
                  <label className="text-black absolute top-0 right-0 bg-[#ff756c] px-4 rounded-full font-semibold">
                    Premium
                  </label>
                </div>
                <p className="text-(--text-light) Notoserif font-semibold text-xl mb-5">
                  Idéal pour les grandes équipes
                </p>
                <p className="text-(--text-light) Notoserif font-semibold text-lg mb-8">
                  Commencez sans carte bancaire ni moyen de paiement
                </p>
                <button className="px-5 py-1 rounded-full text-(--white) cursor-pointer font-semibold transition-all duration-300 border-2 border-(--prim-color) hover:bg-(--prim-color) hover:border-transparent hover:text-white">
                  Commencer
                </button>
              </div>
              <div className="pricing-list py-6">
                <h4 className="text-(--white) text-lg mb-5 font-semibold Notoserif">
                  Ce que vous obtenez :
                </h4>
                <ul className="list-items px-3">
                  <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                    <Image src={pricingIcon} alt="Icône tarif" />
                    Stockage illimité
                  </li>
                  <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                    <Image src={pricingIcon} alt="Icône tarif" />
                    Membres illimités
                  </li>
                  <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                    <Image src={pricingIcon} alt="Icône tarif" />
                    Authentification à deux facteurs
                  </li>
                  <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                    <Image src={pricingIcon} alt="Icône tarif" />
                    Documents collaboratifs
                  </li>
                  <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                    <Image src={pricingIcon} alt="Icône tarif" />
                    Stockage illimité
                  </li>
                  <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                    <Image src={pricingIcon} alt="Icône tarif" />
                    Gestion de sprints
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Faq */}
      <div className="section-container section-py">
        <div className="title flex flex-col items-center justify-center">
          <h1 className="section-title text-(--prim-color) text-center">
            FAQ
          </h1>
        </div>
        <div className="space-y-4 w-full py-10">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden border-b-2 py-2 border-[#222f43] transition-all duration-300"
            >
              <button
                className="w-full flex justify-between items-center text-(--white) py-6 text-left focus:outline-none cursor-pointer"
                onClick={() => toggle(index)}
              >
                <span className="text-lg sm:text-xl md:text-2xl Notoserif text-(--text-color) pe-4">
                  {item.question}
                </span>
                <div className="relative w-10 -10">
                  <Image
                    src={plusIcon}
                    alt="Plus Icon"
                    width={50}
                    height={50}
                    className={`absolute top-0 left-0 transition-all duration-500 ease-in-out ${
                      openIndex === index
                        ? "opacity-0 scale-75 rotate-90"
                        : "opacity-100 scale-100 rotate-0"
                    }`}
                  />
                  <Image
                    src={minusIcon}
                    alt="minus Icon"
                    width={40}
                    height={40}
                    className={`absolute top-0 left-0 transition-all duration-500 ease-in-out ${
                      openIndex === index
                        ? "opacity-100 scale-100 rotate-0"
                        : "opacity-0 scale-75 rotate-90"
                    }`}
                  />
                </div>
              </button>

              <div
                style={{
                  maxHeight: openIndex === index ? "300px" : "0px",
                  opacity: openIndex === index ? 1 : 0,
                  transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                className="overflow-hidden"
              >
                <p className="text-lg text-(--text-light) Notoserif py-3">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      <div className="section-container section-py">
        <div className="title flex flex-col items-center justify-center">
          <h1 className="section-title mb-4 sm:mb-5 text-center">Témoignages</h1>
          <p className="section-subtitle NotoSerif text-center mb-8 sm:mb-10 max-w-2xl">
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
      <div className="section-container section-py">
        <div className="title flex flex-col items-center justify-center">
          <h1 className="section-title text-center max-w-4xl lg:w-[80%] mb-4 sm:mb-5 leading-tight">
            Coopération éditoriale avec mes partenaires
          </h1>
        </div>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={5}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            1200: { slidesPerView: 4 },
            991: { slidesPerView: 3 },
            575: { slidesPerView: 2 },
            0: { slidesPerView: 2 },
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
