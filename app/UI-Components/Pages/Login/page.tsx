"use client";

import Link from "next/link";
import Image from "next/image";

import googleIcon from "@/public/google-Icon.svg";


export default function Login() {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-15 flex flex-col items-center login-box relative">
        <div className="title flex flex-col items-center justify-center mb-10">
          <h1 className="text-5xl Notoserif font-bold mb-5">Welcome back!</h1>
        </div>
        <div className="login-form mb-10 bg-(--bg-color) border border-[#222f43] rounded-2xl w-112.5 p-10">
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
          <h4 className="Notoserif mb-6 text-[#94a9c9]">Forgot password?</h4>
          <button className=" w-full bg-linear-to-r from-indigo-500 to-purple-600 text-white font-medium px-5 py-2 rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-700 transition-all cursor-pointer">
            Log me in
          </button>
          <span className="text-[#94a9c9] Notoserif flex gap-1">Don't have an account?
            <Link href="/UI-Components/Pages/Signup" className="text-(--prim-color) Notoserif ">Sign Up</Link>
          </span>
        </div>
        <div className="w-112.5 bg-(--bg-color) rounded-2xl px-3 py-2 google-icon border border-[#222f43] flex items-center justify-center gap-2">
            <Image src={googleIcon}alt="google-icon" className=""/>
            <Link href="/" className="Notoserif text-[#94a99c9]">sign in with Google</Link>
        </div>
      </div>
    </>
  );
}
