"use client";

import Image from "next/image";
import Link from "next/link";

import ArticlesData from "@/app/JsonData/Blogs.json";

export default function HighlyRatedArticl() {
  return (
    <div className="px-[8%] lg:px-[16%] py-10 text-(--white)">
      <div className="title">
        <h1 className="NotoSerif font-bold text-6xl md:text-7xl mt-4">
          {" "}
          Editors picked
        </h1>
        <p className="text-(--text-light) text-lg NotoSerif mt-4 ">
          Featured and highly rated articles
        </p>
      </div>

      <div className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {ArticlesData.slice(0, 2).map((article, index) => (
            <div className="" key={index}>
              <Link href={`/UI-Components/Blogs/blogDetails/${article.id}`}>
                <div className="article-card flex flex-col p-5 rounded-2xl bg-(--bg-color) dark:border-gray-700 border border-white/15 group cursor-pointer transition-all duration-300">
                  <div className="">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={400}
                      height={400}
                      className="rounded-2xl w-full h-full"
                    />
                  </div>
                  <div className="mt-3 px-3">
                    <div className="flex justify-between items-center gap-3">
                      <span className="text-(--text-light) NotoSerif">
                        {article.tag}
                      </span>
                      <span className="text-(--text-light) NotoSerif">
                        <i className="bi bi-clock-history"></i> {article.time}
                      </span>
                    </div>
                    <h2 className="NotoSerif text-3xl font-bold my-5 group-hover:text-(--prim-color)">
                      {article.title}
                    </h2>
                    <div className="flex justify-between items-center gap-3">
                      <div className="flex items-center gap-3 w-auto">
                        <Image
                          src={article.author}
                          alt={article.name}
                          width={70}
                          height={70}
                          className="rounded-full"
                        />
                        <div className="flex flex-col w-full">
                          <h2 className="text-(--text-light) Notoserif font-bold text-xl">
                            {article.name}
                          </h2>
                          <h2 className="text-(--text-light)">
                            {article.date}
                          </h2>
                        </div>
                      </div>
                      <Link
                        href={`/UI-Components/Blogs/blogDetails/${article.id}`}
                        className="link-btn text-(--white) Notoserif "
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-6">
          {ArticlesData.slice(2, 5).map((article, index) => (
            <div className="" key={index}>
              <Link href={`/UI-Components/Blogs/blogDetails/${article.id}`}>
                <div className="article-card flex flex-col p-5 rounded-2xl bg-(--bg-color) dark:border-gray-700 border border-white/15 group cursor-pointer transition-all duration-300">
                  <div className="">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={400}
                      height={400}
                      className="rounded-2xl w-full h-full"
                    />
                  </div>
                  <div className="mt-3 px-3">
                    <div className="flex justify-between items-center gap-3">
                      <span className="text-(--text-light) NotoSerif">
                        {article.tag}
                      </span>
                      <span className="text-(--text-light) NotoSerif">
                        <i className="bi bi-clock-history"></i> {article.time}
                      </span>
                    </div>
                    <h2 className="NotoSerif text-2xl font-bold my-5 group-hover:text-(--prim-color)">
                      {article.title}
                    </h2>
                    <div className="flex justify-between items-center gap-3">
                      <div className="flex items-center gap-3 w-auto">
                        <Image
                          src={article.author}
                          alt={article.name}
                          width={70}
                          height={70}
                          className="rounded-full"
                        />
                        <div className="flex flex-col w-full">
                          <h2 className="text-(--text-light) Notoserif font-bold text-xl">
                            {article.name}
                          </h2>
                          <h2 className="text-(--text-light)">
                            {article.date}
                          </h2>
                        </div>
                      </div>
                      <Link
                        href={`/UI-Components/Blogs/blogDetails/${article.id}`}
                        className="link-btn text-(--white) Notoserif "
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>  
        <div className="flex items-center justify-center my-10">
            <Link href="/UI-Components/Blogs/blog">
                <button className="bg-linear-to-r from-indigo-500 to-purple-600 text-white font-medium px-5 py-2 rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-700 transition-all cursor-pointer">
                    View More !
                </button>
            </Link>
        </div>
      </div>
    </div>
  );
}
