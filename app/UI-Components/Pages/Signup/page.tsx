"use client";

import Image from "next/image";
import Link from "next/link";
import googleIcon from "@/public/google-Icon.svg";

export default function Signup() {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-15 flex flex-col items-center register-box relative">
        <div className="title flex flex-col items-center justify-center mb-10">
          <h1 className="text-5xl Notoserif font-bold leading-16">Register</h1>
        </div>
        <div className="register-form mb-10 bg-(--bg-color) border border-[#222f43] rounded-2xl w-112.5 p-10">
          <div className="users-details mb-8">
            <input
              type="text"
              placeholder="Full name"
              className="w-full login-input border border-[#222f43] rounded-md px-5 py-3 focus:outline-none text-lg text-(--text-light) hover:border-(--prim-color)"
            />
          </div>
          <div className="email-details mb-8">
            <input
              type="email"
              placeholder="Email"
              className="w-full login-input border border-[#222f43] rounded-md px-5 py-3 focus:outline-none text-lg text-(--text-light) hover:border-(--prim-color)"
            />
          </div>
          <div className="users-details mb-8">
            <input
              type="text"
              placeholder="User name"
              className="w-full login-input border border-[#222f43] rounded-md px-5 py-3 focus:outline-none text-lg text-(--text-light) hover:border-(--prim-color)"
            />
          </div>
          <div className="password-details border border-[#222f43] hover:border-(--prim-color) rounded-md flex justify-between items-center mb-8">
            <input
              type="password"
              placeholder="password"
              className="w-full login-input px-5 py-3 focus:outline-none text-lg text-(--text-light)"
            />
            <i className="bi bi-eye-fill text-lg text-(--text-light) pe-4"></i>
          </div>
          <div className="password-details border border-[#222f43] hover:border-(--prim-color) rounded-md flex justify-between items-center mb-8">
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full login-input px-5 py-3 focus:outline-none text-lg text-(--text-light)"
            />
            <i className="bi bi-eye-fill text-lg text-(--text-light) pe-4"></i>
          </div>
          <button className=" w-full bg-linear-to-r from-indigo-500 to-purple-600 text-white font-medium px-5 py-2 rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-700 transition-all cursor-pointer">
            Creat an account
          </button>
          <span className="text-[#94a9c9] Notoserif flex gap-1">
            Already have an account?
            <Link
              href="/UI-Components/Pages/Login"
              className="text-(--prim-color) Notoserif "
            >
              Sign In
            </Link>
          </span>
        </div>
        <div className="w-112.5 bg-(--bg-color) rounded-2xl px-3 py-2 google-icon border border-[#222f43] flex items-center justify-center gap-2">
          <Image src={googleIcon} alt="google-icon" className="" />
          <Link href="/" className="Notoserif text-[#94a99c9]">
            sign in with Google
          </Link>
        </div>
      </div>
    </>
  );
}
