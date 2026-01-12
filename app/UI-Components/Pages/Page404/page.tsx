"use client";

import Image from "next/image";
import PageImage from "@/public/404.svg";
import Link from "next/link";

export default function Page404() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center min-h-screen px-[8%] lg:px-[16%] gap-8">
        <div className="flex flex-col lg:flex-row items-center gap-5">
          <div className="w-full lg:w-1/2 h-full">
            <Image
              src={PageImage}
              alt="PageImage"
              className="object-contain w-full h-100"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="title">
              <h1 className="NotoSerif font-bold text-5xl leading-25 md:text-7xl">
                Page not found
              </h1>
              <p className="NotoSerif text-(--text-light) text-lg">
                The page you are looking for has slipped in to an unknown realm.
                Click the button below to go back to the homepage.
              </p>
              <div className="my-5">
                <Link href="/">
                  <button className="bg-linear-to-r from-indigo-500 to-purple-600 text-white font-medium px-5 py-2 rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-700 transition-all cursor-pointer">
                    Back-Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
