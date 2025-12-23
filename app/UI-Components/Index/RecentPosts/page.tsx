"use client";

import Image from "next/image";
import RecentPostsData from "@/app/JsonData/RecentPosts.json";

import Author1 from "@/public/author3.webp";
import Author2 from "@/public/author4.webp";
import Author3 from "@/public/author5.webp";

import gallery1 from "@/public/gallery.webp";
import gallery2 from "@/public/gallery2.webp";
import gallery3 from "@/public/gallery3.webp";
import gallery4 from "@/public/gallery4.webp";
import gallery5 from "@/public/gallery5.webp";
import gallery6 from "@/public/gallery6.webp";
import gallery7 from "@/public/gallery7.webp";
import gallery8 from "@/public/gallery8.webp";
import gallery9 from "@/public/gallery9.webp";

import Link from "next/link";

const CommentsData = [
  {
    id: "1",
    pere: "“Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far“",
    name: "George Orwell",
    date: "17 April 2025",
    author: Author1,
  },
  {
    id: "2",
    pere: "“Nullam sit amet orci velit. Integer at rhoncus eros. Etiam vulputate eros quis gravida maximus. Pellentesque habitant morbi tristique senectus et netus et“",
    name: "Maya Angelou",
    date: "25 April 2025",
    author: Author2,
  },
  {
    id: "3",
    pere: "“Morbi ligula nisi, finibus vel felis vitae, fringilla mollis leo. In pellentesque laoreet enim, tempor interdum est blandit a. Integer convallis et est et fringilla“",
    name: "George Orwell",
    date: "05 May 2025",
    author: Author3,
  },
];

const GalleryData = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
];

export default function RecentPosts() {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] pb-10 text-(--white)">
        <div className="flex flex-col lg:flex-row justify-between gap-5">
          <div className="w-full lg:w-1/1 static lg:sticky top-0 left-0 h-full">
            <div className="title mb-10">
              <h1 className="NotoSerif font-bold text-6xl md:text-7xl">
                Recent posts
              </h1>
              <p className="text-(--text-light) text-lg NotoSerif mt-4 ">
                Do not miss the latest trends
              </p>
            </div>
            {RecentPostsData.map((post, index) => (
              <Link href="/app/UI-Components/Blogs/blog">
                <div
                  key={index}
                  className="flex flex-col md:flex-row justify-between items-start gap-5 mb-6"
                >
                  <div className="w-full lg:w-1/2">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={500}
                      height={500}
                      className="w-full h-full object-contain rounded-2xl"
                    />
                  </div>
                  <div className="w-full lg:w-1/1 pt-4">
                    <span className="bg-(--bg-color) border border-(--light-border) NotoSerif font-bold rounded-full px-4 py-2">
                      {post.subtag}
                    </span>
                    <h2 className="mt-5 mb-3 NotoSerif  font-bold text-4xl hover:text-(--prim-color) cursor-pointer">
                      {post.title}
                    </h2>
                    <p className="text-(--text-light)">{post.pere}</p>
                    <div className="flex justify-between items-center gap-3 px-3 mt-2 border-t border-(--light-border)">
                      <div className="flex items-center gap-3 my-1">
                        {post.tags.map((tag, index) => (
                          <span key={index} className="text-(--text-light)">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-(--text-light)">
                        {" "}
                        <i className="bi bi-clock-history"> {post.time}</i>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5">
            {/* Popular Post */}
            <div className="p-5 rounded-2xl bg-(--bg-color) border border-(--light-border) mb-4">
              <div className="title mb-5 recent-post-title">
                <h1 className="NotoSerif font-bold text-6xl md:text-2xl">
                  Popular Posts
                </h1>
              </div>
              {RecentPostsData.map((post, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-2"
                >
                  <div className="w-1/3">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={80}
                      height={80}
                      className="rounded-md md:rounded-full object-center"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="mt-0 md:mt-5 NotoSerif font-bold text-xl md:text-lg hover:text-(--prim-color) cursor-pointer ">
                      {post.title}
                    </h2>
                    <div className="flex justify-between items-center gap-3 px-3 mt-2 border-t border-(--light-border) ">
                      <div className="flex items-center gap-3 my-1">
                        {post.tags.map((tag, index) => (
                          <span key={index} className="text-(--text-light)">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-(--text-light)">{post.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Follow us */}
            <div className="p-5 rounded-2xl bg-(--bg-color) border border-(--light-border) mb-4">
              <div className="title mb-5 recent-post-title">
                <h1 className="NotoSerif font-bold text-6xl md:text-2xl">
                  Lasts Comment
                </h1>
              </div>
              {CommentsData.map((comment, index) => (
                <div key={index} className="mb-3">
                  <p className="text-(--text-light)">{comment.pere}</p>
                  <div className="flex items-center gap-3 mt-5 border-b border-(--light-border) pb-4">
                    <Image
                      src={comment.author}
                      alt={comment.name}
                      width={35}
                      height={35}
                      className="rounded-full"
                    />
                    <div className="flex flex-col">
                      <span className="text-(--text) NotoSerif text-xs">
                        {comment.name}
                      </span>
                      <span className="text-(--text) NotoSerif text-xs">
                        {comment.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-5 rounded-2xl bg-(--bg-color) border border-(--light-border) mb-4">
              <div>
                <Link
                  href="/"
                  className="text-3xl font-bold Merienda text-(--prim-color)"
                >
                  Dco<span className="text-(--white)">Tech</span>
                </Link>
                <h2 className="text-(--text-light) NotoSerif font-bold">
                  Follow us on instagram
                </h2>
              </div>
              <div className="my-3 grid grid-cols-3 gap-3">
                {GalleryData.map((gallery, index) => (
                  <Image
                    key={index}
                    src={gallery}
                    alt="Galery-Image"
                    className="w-full h-full rounded-2xl object-contain gallery-img"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
