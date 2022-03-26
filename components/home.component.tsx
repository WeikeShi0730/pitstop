import NoScrollLink from "./no-scroll-link.component";
import PageBackground from "./page-background.component";
import Image from "next/image";
import Carousel from "./carousel.component";
import { ProductType } from "../interfaces/index";
import DownArrow from "./down-arrow.component";

interface ProductsType {
  featuredProducts: ProductType[];
}

const Home = ({ featuredProducts }: ProductsType) => {
  const info = { teamBackgrounds: ["/home/f12022.WebP"] };
  return (
    <>
      <div className="shadow-lg h-content bg-slate-300">
        <div className="relative w-full h-4/6 lg:h-5/6">
          <Image
            priority
            src="/home/homepage logo bg.WebP"
            className="object-contain scale-150 lg:scale-100"
            unoptimized
            alt="background image"
            layout="fill"
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center p-5 gap-y-10 lg:gap-x-10">
          <NoScrollLink href="/products">
            <a className="text-sm md:text-base homepage-button">Shop all</a>
          </NoScrollLink>
          <NoScrollLink href="/teams">
            <a className="text-sm md:text-base homepage-button">Shop by teams</a>
          </NoScrollLink>
        </div>
        <DownArrow />
      </div>
      <div className="m-1 sm:m-5 md:m-8">
        <Carousel featuredProducts={featuredProducts} />
      </div>
      <div className="my-10">
        <PageBackground info={info} />
      </div>
      <div className="flex justify-center items-center mb-10">
        <p className="text-xl md:text-3xl text-center text-slate-700 italic">
          2022 season products coming soon...
        </p>
      </div>
    </>
  );
};

export default Home;
