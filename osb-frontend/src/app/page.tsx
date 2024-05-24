import ArticleCard from "@/components/articleCard/articleCard";
import FeaturedArticleCard from "@/components/featuredArticleCard/featuredArticleCard";
import Hero from "@/components/hero/hero";
import LatestArticleCard from "@/components/latestArticleCard/latestArticleCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero title="Retro Tech Something" />
      {/*Featured*/}
      <div className="w-10/12  mt-16">
        <h2 className="text-2xl md:text-3xl">Ma Precious Post:</h2>
        <FeaturedArticleCard />
      </div>
      {/*Latest*/}
      <div className="@container w-10/12 mt-10">
        <h2 className="text-xl md:text-2xl">Ma Latest Posts:</h2>
        <div className="flex flex-col gap-2 @md:flex-row">
          <LatestArticleCard />
          <div className="bg-secondary py-[1px] w-11/12 @md:hidden"></div>
          <LatestArticleCard classes="flex-row-reverse" />
          <div className="bg-secondary py-[1px] w-11/12 @md:hidden"></div>
          <LatestArticleCard />
        </div>
      </div>
      {/*More*/}
      <div className="bg-secondary rounded-sm py-[2px] w-11/12 mt-10"></div>
      <div className="w-10/12 mt-10 @container ">
        <h2 className="text-lg md:text-xl">More:</h2>
        <div className="grid grid-cols-1 @sm:grid-cols-2 @sm:gap-x-2 @sm:gap-y-8 @md:grid-cols-3 justify-between">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
    </div>
  );
}
