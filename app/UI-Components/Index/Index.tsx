import Hero from "./Hero/page";
import HighlyRatedArticl from "./HighlyRatedArticle/page";
import PopularTags from "./PopularTags/page";
import RecentPosts from "./RecentPosts/page";

export default function Index() {
  return (
    <>
      < Hero />
      < HighlyRatedArticl />
      < PopularTags />
      < RecentPosts />
    </>
  )
}
