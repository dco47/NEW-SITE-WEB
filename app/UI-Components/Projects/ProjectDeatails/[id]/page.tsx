"use client";

import { useParams } from "next/navigation";

import Image from "next/image";
import portfolio1 from "@/public/portfolio-1.webp";
import portfolio2 from "@/public/portfolio-2.webp";
import portfolio3 from "@/public/portfolio-3.webp";

import projects from "@/app/JsonData/Projects.json";
import Link from "next/link";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="text-center text-gray-400 py-20 text-2xl">
        Projet introuvable.
      </div>
    );
  }
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-10">
        <div className="heading border-b border-(--light-border) pb-5 px-5 mb-10">
          <div className="flex">
            <Link href="/" className="text-(--text-light)">
              <i className="bi bi-house text-white me-2 px-2 py-1 rounded-full bg-(--prim-color)"></i>
              Accueil
            </Link>
            <span className="mx-2">
              <i className="ri-arrow-right-wide-line text-(--text-white)"></i>
            </span>
            <Link
              href="/UI-Components/Projects/Project"
              className="text-(--text-light)"
            >
              <h2 className="text-(--text-light)">Projets</h2>
            </Link>
            <span className="mx-2">
              <i className="ri-arrow-right-wide-line text-(--text-white)"></i>
            </span>
            <h2 className="text-(--white)">{project.title}</h2>
          </div>
        </div>
        <div className="mt-10 flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-1/1">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="w-full md:w-1/2 flex justify-center items-center">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={400}
                  height={400}
                  className="w-full h-full rounded-2xl"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="title flex flex-col justify-center items-center">
                  <h1 className="text-5xl leading-[1.3] NotoSerif font-bold text-(--prim-color) mb-5">
                    {project.title}
                  </h1>
                  <div className="mt-5 border-t border-(--light-border) pt-5 space-y-3">
                    <h3 className="text-2xl font-semibold text-(--white) NotoSerif">
                      Aperçu du projet
                    </h3>
                    <p className="text-(--text-light) text-base leading-relaxed">
                      Ce projet représente une exploration créative du design et
                      de l'innovation. Du concept à la réalisation, l'objectif
                      était de livrer un travail soigné, aligné avec l'identité
                      de marque et l'impact digital.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div>
                      <h4 className="text-xl font-semibold text-(--white) mb-2 NotoSerif">
                        Outils utilisés
                      </h4>
                      <ul className="text-(--text-light) list-disc list-inside space-y-1">
                        <li>Illustrator</li>
                        <li>Figma</li>
                        <li>Canva</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-(--white) mb-2 NotoSerif">
                        Type de projet
                      </h4>
                      <p className="text-(--text-light)">
                        Design graphique / Création artistique
                      </p>

                      <h4 className="text-xl font-semibold text-(--white) mb-2 NotoSerif">
                        Date de livraison
                      </h4>
                      <p className="text-(--text-light)">Septembre 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 ">
              <h1 className="NotoSerif text-(--text-light) text-5xl font-bold mb-4">
                Détails du projet
              </h1>
              <p className="text-(--text-light) text-lg mb-3">
                Chaque détail de ce projet a été pensé pour offrir une expérience
                visuelle cohérente et impactante. De la conception à la mise en
                ligne, la priorité a été donnée à la qualité, à l'élégance et à
                l'alignement avec les objectifs du client.
              </p>
              <p className="text-(--text-light) text-lg mb-3">
                Tortor placerat bibendum consequat sapien, facilisi facilisi
                pellentesque morbi. Id consectetur ut vitae a massa a. Lacus ut
                bibendum sollicitudin fusce sociis mi. Dictum volutpat praesent
                ornare accumsan elit venenatis. Congue sodales nunc quis
                ultricies odio porta. Egestas mauris placerat leo phasellus ut
                sit.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-5 mt-5">
                <Image
                  src={portfolio1}
                  alt="portfolio1"
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
              <div className="flex flex-col gap-5">
                <Image
                  src={portfolio2}
                  alt="portfolio2"
                  className="w-full h-full rounded-2xl object-cover"
                />
                <Image
                  src={portfolio3}
                  alt="portfolio3"
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
            </div>
            <div className="flex items-center justify-center my-5 ">
              <h1 className="NotoSerif text-(--text-light) text-2xl font-bold mb-4">
                L'identité de marque
              </h1>
            </div>
            <h1 className="NotoSerif text-(--text-light) text-5xl font-bold mb-4">
              Engagez-moi
            </h1>
            <p className="text-(--text-light) text-lg mb-3 border-b border-(--light-border) pb-5">
              Vous avez un projet en tête ? Discutons ensemble de vos besoins et
              créons quelque chose d'unique, adapté à votre vision et à vos
              objectifs.
            </p>

            <div className="flex items-center flex-wrap gap-5 mt-6">
              <div className="tag-card flex items-center gap-3 p-5 px-4 py-2 rounded-2xl bg-(--bg-color) border  border-(--light-border)">
                <h2 className="NotoSerif text-xl text-(--text-light)">#Nature</h2>
              </div>
              <div className="tag-card flex items-center gap-3 p-5 px-4 py-2 rounded-2xl bg-(--bg-color) border  border-(--light-border)">
                <h2 className="NotoSerif text-xl text-(--text-light)">#Beauté</h2>
              </div>
              <div className="tag-card flex items-center gap-3 p-5 px-4 py-2 rounded-2xl bg-(--bg-color) border  border-(--light-border)">
                <h2 className="NotoSerif text-xl text-(--text-light)">#ConseilsVoyage</h2>
              </div>
              <div className="tag-card flex items-center gap-3 p-5 px-4 py-2 rounded-2xl bg-(--bg-color) border  border-(--light-border)">
                <h2 className="NotoSerif text-xl text-(--text-light)">#Maison</h2>
              </div>
            </div>
          
          </div>
          <div className="w-full lg:w-1/2 sticky top-22 left-0 h-full">
            <div className="p-5 rounded-2xl bg-(--bg-color) border border-(--light-border) mb-4">
                <div className="title mb-5">
                    <div className="title mb-5 recent-post-title">
                        <h1 className="NotoSerif font-bold text-2xl">Informations du projet</h1>
                        <div>
                            <div className="text-(--text-light) border-b border-(--light-border) pb-3 mb-5">
                                <h2 className="text-(--white) NotoSerif uppercase">Catégorie</h2>
                                <p>Design graphique, kits marketing</p>
                            </div>
                            <div className="text-(--text-light) border-b border-(--light-border) pb-3 mb-5">
                                <h2 className="text-(--white) NotoSerif uppercase">Client</h2>
                                <p>Orion Corporation</p>
                            </div>
                            <div className="text-(--text-light) border-b border-(--light-border) pb-3 mb-5">
                                <h2 className="text-(--white) NotoSerif uppercase">Date du projet</h2>
                                <p>01 janvier 2026</p>
                            </div>
                            <div className="text-(--text-light) border-b border-(--light-border) pb-3 mb-5">
                                <h2 className="text-(--white) NotoSerif uppercase">URL du projet</h2>
                                <p>www.dcotech.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
