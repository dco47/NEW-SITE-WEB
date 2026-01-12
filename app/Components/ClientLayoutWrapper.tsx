"use client";

import React from "react";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export default function ClientLayoutWrapper({ children }: any) {
    const pathname = usePathname();

    const hideNavbarRoutes = ["/Pages/Page404", "/404", "/login"];

    const shouldHideNavbar = hideNavbarRoutes.some((route) =>
        pathname?.includes(route)
    );

    return(
        <>
        {!shouldHideNavbar && <Navbar />}
        {children}
        {!shouldHideNavbar && <Footer />}
        </>
    )
}