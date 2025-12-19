"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
    {}
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

  type NavLink = {
    label: string;
    href: string;
    dropdown?: { label: string; href: string }[];
  };

  const navLinks: NavLink[] = [
    { label: "Home", href: "/" },
    {
      label: "Projects",
      href: "/UI-Components/Projects/Project",
      dropdown: [
        { label: "My Projects", href: "/UI-Components/Projects/Project" },
        {
          label: "Project Details",
          href: "/app/UI-Components/Projects/ProjectDetails/2",
        },
      ],
    },
    {
      label: "Blogs",
      href: "/UI-Components/Blogs/Blog",
      dropdown: [
        { label: "Blogs", href: "/app/UI-Components/Blogs/blog" },
        {
          label: "Blogs Details",
          href: "/app/UI-Components/Blogs/BlogDetails/2",
        },
      ],
    },

    {
      label: "Pages",
      href: "/app/UI-Components/Pages/About",
      dropdown: [
        { label: "About", href: "/app/UI-Components/Pages/About" },
        { label: "Login", href: "/app/UI-Components/Pages/Login" },
        { label: "Signup", href: "/app/UI-Components/Pages/Signup" },
        { label: "Contact", href: "/app/UI-Components/Pages/Contact" },
        { label: "Page 404", href: "/app/UI-Components/Pages/Page404" },
      ],
    },
    { label: "Contact", href: "/app/UI-Components/Pages/Contact" },
  ];

  return (
    <>
      <div
        className={`w-full transition-all duration-500 ${
          isFixed
            ? "fixed top-0 left-0 z-100 bg-(--bg-color) backdrop-blur-lg"
            : ""
        }`}
      >
        <div className="flex items-center justify-between px-[8%] lg:px-[16%] py-5">
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-bold Merienda text-(--prim-color)"
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
                  <div className="absolute left-0 top-10 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 bg-(--bg-color) z-50 shadow-xl border border-gray-50/10 rounded-lg py-2 w-40">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 rounded-md hover:text-(--prim-color) transition-all"
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
              )
            )}
          </nav>
          {/* Right Section */}
          <div className="flex items-center gap-4">
            <div
              onClick={toggleDropdown}
              className="mode flex items-center justify-center cursor-pointer w-10 h-10 bg-(--text-light) rounded-full relative overflow-hidden"
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
            <Link href="/">
              <button className="bg-linear-to-r from-indigo-500 to-purple-600 text-white font-medium px-5 py-2 rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-700 transition-all cursor-pointer">
                Log-in
              </button>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-(--white) text-2xl"
            >
              <i
                className={`ri-${
                  mobileMenuOpen ? "close-line" : "menu-3-line"
                }`}
              ></i>
            </button>
          </div>
        </div>
        {/* Mobile Nav */}
        <div
          className={`lg:hidden bg-(--bg-color) border-t border-gray-700 overflow-hidden transition-all duration-500 ${
            mobileMenuOpen
              ? "max-h-700px opacity-100 py-4"
              : " max-h-0 opacity-0 py-0"
          }`}
        >
          {/* Mobile Nav */}
          <div
            className={`lg:hidden bg-(--bg-color) border-t transition-all duration-500 ${
              darkMode ? "border-gray-700" : "border-gray-300"
            } ${
              mobileMenuOpen
                ? "max-h-700px opacity-100 py-4"
                : "max-h-0 opacity-0 py-0"
            }`}
          >
            <nav className="flex flex-col px-[8%] space-y-2">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.dropdown ? (
                    // Liens avec dropdown
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

                      {/* Sous-menu */}
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
                    // Liens simples
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
      </div>
    </>
  );
}
