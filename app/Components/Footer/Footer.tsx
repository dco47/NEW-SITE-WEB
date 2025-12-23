import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-10 text-(--white)">
        <div className="p-5 rounded-2xl bg-(--bg-color) border border-(--light-border) mb-4">
          <div className="p-0 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div>
              <Link
                href="/"
                className="text-3xl font-bold Merienda text-(--prim-color)"
              >
                Dco<span className="text-(--white)">Tech</span>
              </Link>
              <p className="text-(--text-light) NotoSerif text-[15px] mt-5">
                When an unknown prnoto sans took a galley and scrambled it to
                make specimen book not only five When an unknown prnoto sans
                took a galley and scrambled it to five centurie.
              </p>
              <h2 className="mt-5 NotoSerif">Address :</h2>
              <p className="text-(--text-light)">Angré Chateau Rue M91</p>
              <p className="text-(--text-light)">Cocody, Abidjan 01 </p>
            </div>
            <div>
              <h2 className="NotoSerif text-2xl font-bold text-(--text-light) mb-5">
                Categories
              </h2>
              <div className="flex gap-x-20 gap-y-5">
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
                    Business
                  </Link>
                  <Link
                    href="#"
                    className="NotoSerif footer-link font-semibold text-(--text-light) hover:text-(--prim-color)"
                  >
                    Adventure
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
                    America
                  </Link>
                  <Link
                    href="#"
                    className="NotoSerif footer-link font-semibold text-(--text-light) hover:text-(--prim-color)"
                  >
                    Curiosity
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
                    Dental
                  </Link>
                  <Link
                    href="#"
                    className="NotoSerif footer-link font-semibold text-(--text-light) hover:text-(--prim-color)"
                  >
                    Biology
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
                    Breakfast
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
                Newsletter
              </h2>
              <p className="text-(--text-light) NotoSerif mt-2">
                Sign up to be first to receive the latest stories inspiring us,
                case studies, and industry news.
              </p>
              <div className="footer-input flex flex-col gap-2 pe-10 mt-5">
                <div className="flex items-center border-b gap-2 pb-2">
                  <i className="bi bi-person"></i>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="outline-none w-full"
                  />
                </div>
                <div className="flex items-center border-b gap-2 pb-2">
                  <i className="bi bi-envelope"></i>
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="outline-none w-full"
                  />
                </div>
                <div>
                  <button className="bg-linear-to-r from-indigo-500 to-purple-600 text-white font-medium px-5 py-2 rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-700 transition-all cursor-pointer">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 p-8 border-t border-(--light-border)">
            <div className="flex flex-col md:flex-row justify-between items-center gap-5">
              <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                <p>
                  © copyright 2026. All Right Reserved{" "}
                  <Link
                    href="https://github.com/dco47"
                    className="text-(--prim-color) NotoSerif font-bold hover:underline"
                  >
                    github.com/dco47
                  </Link>
                </p>
              </div>
              <div className="flex items-center gap-8">
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
