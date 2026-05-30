"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  { label: "Accueil", href: "/" },
  {
    label: "Projets",
    href: "/UI-Components/Projects/Project",
    dropdown: [
      { label: "Mes Projets", href: "/UI-Components/Projects/Project" },
      {
        label: "Détails du projet",
        href: "/UI-Components/Projects/ProjectDeatails/2",
      },
    ],
  },
  {
    label: "Blog",
    href: "/UI-Components/Blogs/blog",
    dropdown: [
      { label: "Blog", href: "/UI-Components/Blogs/blog" },
      {
        label: "Détails de l'article",
        href: "/UI-Components/Blogs/blog/blogDetails/2",
      },
    ],
  },

  {
    label: "Pages",
    href: "",
    dropdown: [
      { label: "À propos", href: "/UI-Components/Pages/About" },
      { label: "Connexion", href: "/UI-Components/Pages/Login" },
      { label: "Inscription", href: "/UI-Components/Pages/Signup" },
      { label: "Contact", href: "/UI-Components/Pages/Contact" },
      { label: "Page 404", href: "/UI-Components/Pages/Page404" },
    ],
  },
  { label: "Contactez-nous", href: "/UI-Components/Pages/Contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
    {},
  );
  const [isFixed, setIsFixed] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleDropdown = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleDropdowns = (label: string) => {
    setOpenDropdowns((prev) => (prev[label] ? {} : { [label]: true }));
  };

  useEffect(() => {
    const handlescroll = () => setIsFixed(window.scrollY > 50);
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  return (
    <>
      <div
        className={`w-full transition-all duration-500 ${
          isFixed
            ? "fixed top-0 left-0 z-100 bg-(--bg-color) backdrop-blur-lg"
            : ""
        }`}
      >
        <div className="section-container flex items-center justify-between py-4 lg:py-5">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl sm:text-3xl font-bold Merienda text-(--prim-color) shrink-0"
          >
            Dco<span className="text-(--white)">Tech</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-6 menu-link relative">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative group z-50">
                  <Link
                    href={link.href}
                    className="flex menu-links items-center gap-1"
                  >
                    {" "}
                    {link.label} <i className="ri-arrow-down-s-line"></i>
                  </Link>
                  <div className="absolute left-0 top-10 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 bg-(--bg-color) z-50 shadow-xl border border-gray-50/10 rounded-lg min-w-42.5">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 rounded-md hover:text-(--prim-color)! transition-all"
                      >
                        <i className="bi bi-gear text-xs"></i> {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ),
            )}
          </nav>
          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div
              onClick={toggleDropdown}
              className="mode flex items-center justify-center cursor-pointer w-9 h-9 sm:w-10 sm:h-10 bg-(--text-light) rounded-full relative overflow-hidden shrink-0"
            >
              <i
                className={`bi bi-brightness-high-fill text-(--white) text-lg transition-all duration-300 ${
                  darkMode ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
                }`}
              ></i>
              <i
                className={`bi bi-moon-stars-fill text-white text-xl transition-all duration-300 absolute ${
                  darkMode ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              ></i>
            </div>
            <Link href="/" className="hidden sm:block">
              <button className="bg-linear-to-r from-indigo-500 to-purple-600 text-white font-medium px-4 sm:px-5 py-2 rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-700 transition-all cursor-pointer text-sm sm:text-base whitespace-nowrap">
                Se Connecter
              </button>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden group flex h-10 w-10 items-center justify-center rounded-lg border border-(--light-border) bg-(--bg-color)/50 text-(--white) transition-all duration-300 hover:border-(--prim-color) hover:text-(--prim-color)"
            >
              <span className="relative flex h-4 w-5 flex-col justify-between">
                <span
                  className={`block h-[2px] w-full rounded-full bg-current transition-all duration-300 ease-in-out ${
                    mobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-[2px] w-full rounded-full bg-current transition-all duration-300 ease-in-out ${
                    mobileMenuOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`block h-[2px] w-full rounded-full bg-current transition-all duration-300 ease-in-out ${
                    mobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
        {/* Mobile Nav */}
        <div
          className={`lg:hidden bg-(--bg-color) border-t overflow-hidden transition-all duration-500 ${
            darkMode ? "border-gray-700" : "border-gray-300"
          } ${
            mobileMenuOpen
              ? "max-h-[700px] opacity-100 py-4"
              : "max-h-0 opacity-0 py-0"
          }`}
        >
          <nav className="flex flex-col section-container space-y-2">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdowns(link.label)}
                      className={`flex items-center justify-between w-full text-left py-3 px-4 rounded-lg transition-all ${
                        darkMode
                          ? "hover:bg-(--text-light) text-(--white)"
                          : "hover:bg-gray-100 text-gray-900"
                      }`}
                    >
                      <span className="font-medium">{link.label}</span>
                      <i
                        className={`ri-arrow-down-s-line transition-transform duration-300 ${
                          openDropdowns[link.label]
                            ? "rotate-180"
                            : "rotate-0"
                        } ${darkMode ? "text-(--white)" : "text-gray-900"}`}
                      ></i>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openDropdowns[link.label]
                          ? "max-h-96 opacity-100 mt-2"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div
                        className={`rounded-lg py-2 ${
                          darkMode
                            ? "bg-(--text-light) bg-opacity-20"
                            : "bg-gray-100"
                        }`}
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setOpenDropdowns({});
                            }}
                            className={`block py-2 px-6 transition-all hover:translate-x-1 ${
                              darkMode
                                ? "text-(--white) hover:text-(--prim-color)"
                                : "text-gray-700 hover:text-indigo-600"
                            }`}
                          >
                            <i
                              className={`bi bi-gear text-xs mr-2 ${
                                darkMode ? "text-(--white)" : "text-gray-600"
                              }`}
                            ></i>
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setOpenDropdowns({});
                    }}
                    className={`block py-3 px-4 rounded-lg font-medium transition-all ${
                      darkMode
                        ? "text-(--white) hover:bg-(--text-light) hover:text-(--prim-color)"
                        : "text-gray-900 hover:bg-gray-100 hover:text-indigo-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
