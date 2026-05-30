import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="section-container py-8 lg:py-10 text-(--white)">
        <div className="p-4 sm:p-5 rounded-2xl bg-(--bg-color) border border-(--light-border) mb-4">
          <div className="p-0 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-5">
            <div>
              <Link
                href="/"
                className="text-3xl font-bold Merienda text-(--prim-color)"
              >
                Dco<span className="text-(--white)">Tech</span>
              </Link>
              <p className="text-(--text-light) NotoSerif text-[15px] mt-5">
                À l’image des premières œuvres typographiques qui ont traversé
                les siècles, mon travail allie créativité, précision et
                innovation pour concevoir des expériences digitales durables et
                impactantes.
              </p>
              <h2 className="mt-5 NotoSerif">Adresse :</h2>
              <p className="text-(--text-light)">Angré Chateau Rue M91</p>
              <p className="text-(--text-light)">Cocody, Abidjan 01 </p>
            </div>
            <div>
              <h2 className="NotoSerif text-2xl font-bold text-(--text-light) mb-5">
                Catégories
              </h2>
              <div className="footer-categories-grid">
                <div className="flex flex-col gap-2">
                  <Link
                    href="#"
                    className="NotoSerif footer-link font-semibold text-(--text-light) hover:text-(--prim-color)"
                  >
                    Action
                  </Link>
                  <Link
                    href="#"
                    className="NotoSerif footer-link font-semibold text-(--text-light) hover:text-(--prim-color)"
                  >
                    Affaires
                  </Link>
                  <Link
                    href="#"
                    className="NotoSerif footer-link font-semibold text-(--text-light) hover:text-(--prim-color)"
                  >
                    Aventure
                  </Link>
                  <Link
                    href="#"
                    className="NotoSerif footer-link font-semibold text-(--text-light) hover:text-(--prim-color)"
                  >
                    Canada
                  </Link>
                  <Link
                    href="#"
                    className="NotoSerif footer-link font-semibold text-(--text-light) hover:text-(--prim-color)"
                  >
                    Amérique
                  </Link>
                  <Link
                    href="#"
                    className="NotoSerif footer-link font-semibold text-(--text-light) hover:text-(--prim-color)"
                  >
                    Curiosité
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <Link
                    href="#"
                    className="NotoSerif footer-link font-semibold text-(--text-light) hover:text-(--prim-color)"
                  >
                    Animal
                  </Link>
                  <Link
                    href="#"
                    className="NotoSerif footer-link font-semibold text-(--text-light) hover:text-(--prim-color)"
                  >
                    Dentaire
                  </Link>
                  <Link
                    href="#"
                    className="NotoSerif footer-link font-semibold text-(--text-light) hover:text-(--prim-color)"
                  >
                    Biologie
                  </Link>
                  <Link
                    href="#"
                    className="NotoSerif footer-link font-semibold text-(--text-light) hover:text-(--prim-color)"
                  >
                    Design
                  </Link>
                  <Link
                    href="#"
                    className="NotoSerif footer-link font-semibold text-(--text-light) hover:text-(--prim-color)"
                  >
                    Petit-déjeuner
                  </Link>
                  <Link
                    href="#"
                    className="NotoSerif footer-link font-semibold text-(--text-light) hover:text-(--prim-color)"
                  >
                    Dessert
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <h2 className="NotoSerif text-2xl font-bold text-(--text-light) mb-5">
                Lettre d'information
              </h2>
              <p className="text-(--text-light) NotoSerif mt-2">
                Inscrivez-vous pour être le premier à recevoir les dernières
                histoires qui nous inspirent, des études de cas et des
                actualités du secteur.
              </p>
              <div className="footer-input flex flex-col gap-2 mt-5 max-w-md">
                <div className="flex items-center border-b gap-2 pb-2">
                  <i className="bi bi-person"></i>
                  <input
                    type="text"
                    placeholder=" Nom"
                    className="outline-none w-full"
                  />
                </div>
                <div className="flex items-center border-b gap-2 pb-2">
                  <i className="bi bi-envelope"></i>
                  <input
                    type="text"
                    placeholder=" Email"
                    className="outline-none w-full"
                  />
                </div>
                <div>
                  <button className="bg-linear-to-r from-indigo-500 to-purple-600 text-white font-medium px-5 py-2 rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-700 transition-all cursor-pointer">
                    S'abonner
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 sm:mt-10 p-4 sm:p-8 border-t border-(--light-border)">
            <div className="flex flex-col md:flex-row justify-between items-center gap-5">
              <div className="text-center md:text-left">
                <p className="text-sm sm:text-base">
                  © copyright 2026. Tous droits réservés{" "}
                  <Link
                    href="https://github.com/dco47"
                    className="text-(--prim-color) NotoSerif font-bold hover:underline"
                  >
                    github.com/dco47
                  </Link>
                </p>
              </div>
              <div className="footer-social">
                <div className="hover:text-(--prim-color) cursor-pointer footer-link2">
                  <i className="bi bi-twitter pe-2"></i>
                  Twitter
                </div>
                <div className="hover:text-(--prim-color) cursor-pointer footer-link2">
                  <i className="bi bi-linkedin pe-2"></i>
                  LinkedIn
                </div>
                <div className="hover:text-(--prim-color) cursor-pointer footer-link2">
                  <i className="bi bi-instagram pe-2"></i>
                  Instagram
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
