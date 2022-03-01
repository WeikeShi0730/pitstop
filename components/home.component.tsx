import PageBackground from "./page-background.component";
import Image from "next/image";
import Link from "next/link";
import Carousel from "./carousel.component";
import { ProductType } from "../interfaces/index";
import { BiDownArrow } from "react-icons/bi";

interface ProductsType {
  featuredProducts: ProductType[];
}

const Home = ({ featuredProducts }: ProductsType) => {
  const info = { photos: ["/home/f12022.jpg"] };
  return (
    <>
      <div className="shadow-lg h-screen bg-slate-300">
        <div className="relative w-full h-3/5 antialiased">
          <Image
            priority
            src="/pitstop-logos/homepage logo bg.jpg"
            className="object-contain scale-150 lg:scale-100"
            unoptimized
            alt="background image"
            layout="fill"
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center p-5 gap-y-10 lg:gap-x-10">
          <Link href="/products">
            <a className="homepage-button">Shop all</a>
          </Link>
          <Link href="/teams">
            <a className="homepage-button">Shop by teams</a>
          </Link>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-5 animate-pulse">
          <BiDownArrow />
        </div>
      </div>
      <div className="m-10">
        <Carousel featuredProducts={featuredProducts} />
      </div>
      <div className="my-10">
        <PageBackground info={info} />
      </div>
      <div className="flex justify-center items-center m-10">
        <p className="text-lg md:text-3xl text-center text-slate-700 italic">
          2022 season products coming soon...
        </p>
      </div>
    </>
  );
};

export default Home;
