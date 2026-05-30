"use client";
import Image from "next/image";
import Link from "next/link";
import ArticlesData from "@/app/JsonData/Blogs.json";
import PopularTags from "../../Index/PopularTags/page";

export default function Blog() {
  return (
    <>
      <div className="section-container section-py">
        <div className="heading border-b border-(--light-border) pb-5 px-2 sm:px-5">
          <div className="breadcrumb-bar">
            <Link href="/" className="text-(--text-light)">
              <i className="bi bi-house text-white me-2 px-2 py-1 rounded-full bg-(--prim-color)"></i>
              Accueil
            </Link>
            <span className="mx-2">
              <i className="ri-arrow-right-wide-line text-(--white)"></i>
            </span>
            <h2 className="text-(--text-light)">Blog</h2>
          </div>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
                      <h2 className="NotoSerif text-2xl sm:text-3xl font-bold my-4 sm:my-5 group-hover:text-(--prim-color)">
                        {article.title}
                      </h2>
                      <div className="article-author-row">
                        <div className="flex items-center gap-3">
                          <Image
                            src={article.author}
                            alt={article.name}
                            width={70}
                            height={70}
                            className="rounded-full shrink-0"
                          />
                          <div className="flex flex-col">
                            <h2 className="text-(--text-light) Notoserif font-bold text-base sm:text-xl">
                              {article.name}
                            </h2>
                            <h2 className="text-(--text-light) text-sm">
                              {article.date}
                            </h2>
                          </div>
                        </div>
                        <span className="link-btn text-(--white) Notoserif">
                          Lire la suite
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
            {ArticlesData.slice(2, ArticlesData.length).map(
              (article, index) => (
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
                            <i className="bi bi-clock-history"></i>{" "}
                            {article.time}
                          </span>
                        </div>
                        <h2 className="NotoSerif text-xl sm:text-2xl font-bold my-4 sm:my-5 text-(--text-light) group-hover:text-(--prim-color)">
                          {article.title}
                        </h2>
                        <div className="article-author-row">
                          <div className="flex items-center gap-3">
                            <Image
                              src={article.author}
                              alt={article.name}
                              width={70}
                              height={70}
                              className="rounded-full shrink-0"
                            />
                            <div className="flex flex-col">
                              <h2 className="text-(--text-light) Notoserif font-bold text-base sm:text-xl">
                                {article.name}
                              </h2>
                              <h2 className="text-(--text-light) text-sm">
                                {article.date}
                              </h2>
                            </div>
                          </div>
                          <span className="link-btn text-(--white) Notoserif">
                            Lire la suite
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </div>
        <PopularTags/>
    </>

  );
}
