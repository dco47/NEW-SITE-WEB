"use client";

import Link from "next/link";
import Image from "next/image";
import conIcon1 from "@/public/contact-Icon1.svg";
import conIcon2 from "@/public/contact-Icon2.svg";
import conIcon3 from "@/public/contact-Icon3.svg";

export default function Contact() {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-15">
        <div className="heading border-b border-(--light-border) pb-5 px-5 mb-10">
          <div className="flex">
            <Link href="/" className="text-(--text-light)">
              <i className="bi bi-house text-white me-2 px-2 py-1 rounded-full bg-(--prim-color)"></i>
              Accueil
            </Link>
            <span className="mx-2">
              <i className="ri-arrow-right-wide-line text-(--white)"></i>
            </span>
            <h2 className="text-(--text-light)">Contact</h2>
          </div>
        </div>
        <div className="title-section flex flex-col justify-center items-center">
          <div className="title">
            <h1 className="text-6xl mb-5 Notoserif font-bold text-(--prim-color)">
              Contactez-nous
            </h1>
          </div>
          <p className="text-xl text-(--text-light) text-center lg:w-[80%]">
            Nous sommes DcoTech, une équipe créative et passionnée qui aime le
            développement web autant que nos clients. Notre mission : atteindre
            l'excellence en design web. Chaque création est pensée avec soin,
            un design pixel perfect et une qualité de code irréprochable.
            Performance, sécurité et référencement sont toujours nos priorités.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 gap-8">
            <div className="contact-info flex gap-2">
              <Image src={conIcon1} alt="Icône téléphone" />
              <div className="contact-text">
                <p className="text-(--text-light)">(+225) 0757985147</p>
                <p className="text-(--text-light)">(+225) 0757985147</p>
              </div>
            </div>
            <div className="contact-info flex gap-2">
              <Image src={conIcon2} alt="Icône e-mail" />
              <div className="contact-text">
                <p className="text-(--text-light)">
                  djablechristian0@gmail.com
                </p>
                <p className="text-(--text-light)">
                  christian.djable@uvci.edu.ci
                </p>
              </div>
            </div>
            <div className="contact-info flex gap-2">
              <Image src={conIcon3} alt="Icône adresse" />
              <div className="contact-text">
                <p className="text-(--text-light)">Angré château</p>
                <p className="text-(--text-light)">Abidjan 01</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[8%] lg:px-[16%] py-15">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3971.960377047112!2d-3.9816749243226597!3d5.422991334971465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMjUnMjIuOCJOIDPCsDU4JzQ0LjgiVw!5e0!3m2!1sfr!2sci!4v1767908168533!5m2!1sfr!2sci"
          width="100%"
          height="450"
          loading="lazy"
          className="rounded-2xl border-0"
        >
          {" "}
        </iframe>
      </div>
      <div className="px-[8%] lg:px-[16%] py-15">
        <div className="flex items-center justify-center text-center">
          <div className="title">
            <h1 className="text-5xl leading-25 md:text-7xl mb-5 Notoserif font-bold text-(--prim-color)">
              Écrivez-nous
            </h1>
            <p className="text-(--text-light) text-lg Notoserif">
              Votre adresse e-mail ne sera pas publiée. Les champs obligatoires
              sont marqués *
            </p>
          </div>
        </div>
        <div className="contact-form mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            <div className="name-details">
              <input
                type="text"
                className="border px-4 py-5 border-gray-600 w-full focus:outline-none rounded-md"
                placeholder="Votre nom *"
              />
            </div>
            <div className="email-details">
              <input
                type="email"
                className="border px-4 py-5 border-gray-600 w-full focus:outline-none rounded-md"
                placeholder="E-mail *"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-6">
            <div className="phone-details">
              <input
                type="number"
                className="border px-4 py-5 border-gray-600 w-full focus:outline-none rounded-md"
                placeholder="Numéro de téléphone *"
              />
            </div>
            <div className="subject-details">
              <input
                type="text"
                className="border px-4 py-5 border-gray-600 w-full focus:outline-none rounded-md"
                placeholder="Sujet *"
              />
            </div>
          </div>
        </div>

        <div className="message-details mt-6">
          <textarea
            rows={6}
            className="border px-4 py-5 border-gray-600 w-full focus:outline-none rounded-md"
            placeholder="Message *"
          ></textarea>
          <div className="flex items-center justify-center my-10">
            <button className="bg-linear-to-r from-indigo-500 to-purple-600 text-white font-medium px-5 py-2 rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-700 transition-all cursor-pointer">
              Envoyer le message <i className="bi bi-arrow-right-short"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
