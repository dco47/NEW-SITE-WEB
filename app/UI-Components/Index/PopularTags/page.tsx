import Image from "next/image";
import tag1 from "@/public/tag1.webp";
import tag2 from "@/public/tag2.webp";
import tag3 from "@/public/tag3.webp";
import tag4 from "@/public/tag4.webp";
import tag5 from "@/public/tag5.webp";
import tag6 from "@/public/tag6.webp";
import tag7 from "@/public/tag4.webp";
import tag8 from "@/public/tag8.webp";
import tag9 from "@/public/tag9.webp";
import tag10 from "@/public/tag10.webp";
import tag11 from "@/public/tag11.webp";
import tag12 from "@/public/tag12.webp";

const TagsData = [
  { id: "1", title: "Voyage", image: tag1 },
  { id: "2", title: "Culture", image: tag2 },
  { id: "3", title: "Mode de vie", image: tag3 },
  { id: "4", title: "Mode", image: tag4 },
  { id: "5", title: "Cuisine", image: tag5 },
  { id: "6", title: "Espace", image: tag6 },
  { id: "7", title: "Animal", image: tag7 },
  { id: "8", title: "Minimal", image: tag8 },
  { id: "9", title: "Intérieur", image: tag9 },
  { id: "10", title: "Plante", image: tag10 },
  { id: "11", title: "Nature", image: tag11 },
  { id: "12", title: "Affaires", image: tag12 },
];

export default function PopularTags() {
  return (
    <>
      <div className="section-container pb-8 lg:pb-10 text-(--white)">
        <div className="title">
          <h1 className="section-title">Tags populaires</h1>
          <p className="section-subtitle NotoSerif mt-3 sm:mt-4">
            Mots-clés les plus recherchés
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-5">
            {TagsData.map((tag, index) => (
              <div
                key={index}
                className="tag-card flex items-center gap-2 sm:gap-3 p-3 sm:p-5 rounded-2xl bg-(--bg-color) border border-(--light-border)"
              >
                <Image
                  src={tag.image}
                  alt={tag.title}
                  className="w-8 h-8 sm:w-10 sm:h-10 shrink-0"
                />
                <h2 className="NotoSerif text-sm sm:text-xl text-(--text-light) truncate">
                  {tag.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
