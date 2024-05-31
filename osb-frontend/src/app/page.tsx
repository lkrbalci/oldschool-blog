import ArticleCard from "@/components/articleCard/articleCard";
import FeaturedArticleCard from "@/components/featuredArticleCard/featuredArticleCard";
import Hero from "@/components/hero/hero";
import LatestArticleCard from "@/components/latestArticleCard/latestArticleCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero title="Retro Tech Something" />
      {/*Featured*/}
      <div className="mt-16 w-10/12  sm:mt-32">
        <h2 className="text-2xl md:text-3xl">Ma Precious Post:</h2>
        <FeaturedArticleCard />
      </div>
      {/*Latest*/}
      <div className="mt-16 w-10/12 @container sm:mt-28">
        <h2 className="text-xl md:text-2xl">Ma Latest Posts:</h2>
        <div className="flex flex-col gap-2 @md:flex-row">
          <LatestArticleCard />
          <div className="my-2 w-full bg-secondary p-[1px] @md:hidden"></div>
          <LatestArticleCard classes="flex-row-reverse" />
          <div className="my-2 w-full bg-secondary py-[1px] @md:hidden"></div>
          <LatestArticleCard />
        </div>
      </div>

      <div className="bg-gray-200 flex min-h-screen items-center justify-center">
        <div className="bg-white relative w-64 rounded-lg border-4 border-black p-4 shadow-lg">
          <p className="font-bold text-black">text</p>
          <div className="border-l-transparent border-r-transparent absolute bottom-[-20px] left-10 h-0 w-0 border-l-[10px] border-r-[10px] border-t-[20px] border-t-black"></div>
          <div className="border-t-white border-l-transparent border-r-transparent absolute bottom-[-18px] left-10 h-0 w-0 border-l-[9px] border-r-[9px] border-t-[18px]"></div>
        </div>
      </div>

      {/*More*/}
      <div className="mb-8 mt-16 w-11/12 rounded-sm bg-secondary py-[2px] sm:mb-16 sm:mt-20 md:mb-10"></div>
      <div className="mb-16 w-10/12 @container">
        <h2 className="mb-4 text-lg md:text-xl">More:</h2>
        <div className="grid grid-cols-1 justify-between @sm:grid-cols-2 @sm:gap-x-2 @sm:gap-y-8 @md:grid-cols-3 sm:mb-8">
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
