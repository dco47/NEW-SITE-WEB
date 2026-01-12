"use client";

import Link from "next/link";
import BlogsData from "@/app/JsonData/Blogs.json";
import { useParams } from "next/navigation";
import Image from "next/image";

import portfolio1 from "@/public/portfolio-1.webp";
import portfolio2 from "@/public/portfolio-2.webp";
import portfolio3 from "@/public/portfolio-3.webp";

import Author1 from "@/public/author3.webp";
import Author2 from "@/public/author4.webp";
import Author3 from "@/public/author5.webp";

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

import gallery1 from "@/public/gallery.webp";
import gallery2 from "@/public/gallery2.webp";
import gallery3 from "@/public/gallery3.webp";
import gallery4 from "@/public/gallery4.webp";
import gallery5 from "@/public/gallery5.webp";
import gallery6 from "@/public/gallery6.webp";
import gallery7 from "@/public/gallery7.webp";
import gallery8 from "@/public/gallery8.webp";
import gallery9 from "@/public/gallery9.webp";

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

const PopularTag = [
   {
        id:"1",
        name: "Technology",
   },
   {
        id:"2",
        name: "Travel",
   },
   {
        id:"3",
        name: "Interior",
   },
   {
        id:"4",
        name: "Minimal",
   },
   {
        id:"5",
        name: "Plant",
   },
   {
        id:"6",
        name: "Nature",
   },
   {
        id:"7",
        name: "Business",
   },
   {
        id:"8",
        name: "Animal",
   },
   {
        id:"9",
        name: "Healthy",
   },
];

export default function BlogDetails() {
  const { id } = useParams();
  const blog = BlogsData.find((b) => String(b.id) === id);

  if (!blog) {
    return (
      <div className="text-center py-20 text-gray-400 text-2xl">
        Blog not found.
      </div>
    );
  }
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-10">
        <div className="heading border-b border-(--light-border) pb-5 px-5 mb-10">
          <div className="flex items-center">
            <Link href="/" className="text-(--text-light)">
              <i className="bi bi-house text-white me-2 px-2 py-1 rounded-full bg-(--prim-color)"></i>
              Home
            </Link>
            <span className="mx-2">
              <i className="ri-arrow-right-wide-line text-white"></i>
            </span>
            <Link
              href="UI-Components/Blogs/blog"
              className="text-(--text-light)"
            >
              Blog
            </Link>
            <span className="mx-2">
              <i className="ri-arrow-right-wide-line text-white"></i>
            </span>
            <h2 className="text-(--text-light)">{blog.title}</h2>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-5">
          <div className="w-full lg:w-1/1">
            <h1 className="NotoSerif text-3xl md:text-5xl font-bold text-(--prim-color)">
              {blog.title}
            </h1>
            <div className="flex items-center gap-3 w-auto mt-5">
              <Image
                src={blog.author}
                alt={blog.title}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="flex flex-col w-full">
                <h2 className="text-(--text-light) NotoSerif font-bold text-xl">
                  {blog.name}
                </h2>
                <div className="flex gap-3">
                  <h2 className="text-(--text-light)">{blog.date}</h2>
                  <h2 className="text-(--text-light)">{blog.tag}</h2>
                </div>
              </div>
            </div>
            <p className="text-(--text-light) text-xl mt-5">
              The fancy moon going in little artist painting. Thirty days of
              lavender in the dreamy light inside. Other perfect oh plants, for
              and again. I’ve honey feeling. Caring dreamland projects
              noteworthy than minimal, their it oh pretty feeling may. Include
              pink be.
            </p>
            <div className="mt-5">
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={500}
                className="rounded-2xl object-contain"
              />
            </div>
            <p className="text-(--text-light) text-xl mt-5">
              Tortor placerat bibendum consequat sapien, facilisi facilisi
              pellentesque morbi. Id conse ctetur ut vitae a massa a. Lacus ut
              bibendum sollicitudin fusce sociis mi. Dictum volutpat praesent
              ornare accumsan elit venenatis. Congue sodales nunc quis ultricies
              odio porta. Egestas mauris placerat leo phasellu s ut sit.
            </p>
            <h2 className="NotoSerif text-5xl font-bold text-(--text-light) my-5">
              Use your headings
            </h2>
            <p className="text-(--text-light) text-xl mt-5">
              Thirty there & time wear across days, make inside on these you.
              Can young a really, roses blog small of song their dreamy life
              pretty? Because really duo living to noteworthy bloom bell.
              Transform clean daydreaming cute twenty process rooms cool. White
              white dreamy dramatically place everything although. Place out
              apartment afternoon whimsical kinder, little romantic joy we
              flowers handmade. Thirty she a studio of she whimsical projects,
              afternoon effect going an floated maybe.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-5 mt-5">
              <div>
                <Image
                  src={portfolio1}
                  alt="portfolio1"
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
              <div className="flex flex-col gap-5">
                <Image
                  src={portfolio2}
                  alt="portfolio2"
                  className="w-full h-full rounded-2xl object-cover"
                />
                <Image
                  src={portfolio3}
                  alt="portfolio3"
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
            </div>
            <h2 className="NotoSerif text-5xl font-bold text-(--text-light) my-5">
              Smaller heading
            </h2>
            <p className="text-(--text-light) text-lg mb-3 border-b border-(--light-border) pb-5">
              Thirty there & time wear across days, make inside on these you.
              Can young a really, roses blog small of song their dreamy life
              pretty? Because really duo living to noteworthy bloom bell.
              Transform clean daydreaming cute twenty process rooms cool. White
              white dreamy dramatically place everything although. Place out
              apartment afternoon whimsical kinder, little romantic joy we
              flowers handmade. Thirty she a studio of she whimsical projects,
              afternoon effect going an floated maybe.
            </p>
            <div className="flex items-center flex-wrap gap-5 mt-6">
              <div className="tag-card flex items-center gap-3 px-4 py-2 rounded-xl bg-(--bg-color) border border-(--light-border)">
                <h2 className="NotoSerif text-xl text-(--text-light)">
                  #Nature
                </h2>
              </div>
              <div className="tag-card flex items-center gap-3 px-4 py-2 rounded-xl bg-(--bg-color) border border-(--light-border)">
                <h2 className="NotoSerif text-xl text-(--text-light)">
                  #Beauty
                </h2>
              </div>
              <div className="tag-card flex items-center gap-3 px-4 py-2 rounded-xl bg-(--bg-color) border border-(--light-border)">
                <h2 className="NotoSerif text-xl text-(--text-light)">
                  #Travel Tips
                </h2>
              </div>
              <div className="tag-card flex items-center gap-3 px-4 py-2 rounded-xl bg-(--bg-color) border border-(--light-border)">
                <h2 className="NotoSerif text-xl text-(--text-light)">
                  #House
                </h2>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 sticky top-22 left-0">
            {/* Lasts Comment */}
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
            {/* Follow us */}
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
            {/* Popular Tags */}
            <div className="p-5 rounded-2xl bg-(--bg-color) border border-(--light-border)">
                <div className="title mb-5 recent-post-title">
                    <h1 className=" NotoSerif font-bold text-6xl md:text-2xl">Popular Tags</h1>
                </div>
                <div className="flex items-center flex-wrap gap-3 mt-6">
                    {PopularTag.map((tag, index) => (
                        <div className="tag-card flex items-center gap-3 px-4 py-2 rounded-xl bg-(--bg-color) border border-(--light-border)">
                            <h2 className="NotoSerif text-xl text-(--text-light)">#{tag.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
