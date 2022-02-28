import PageBackground from "./page-background.component";
import Image from "next/image";
import Link from "next/link";
import Carousel from "./carousel.component";
import { ProductType } from "../interfaces/index";

interface ProductsType {
  featuredProducts: ProductType[];
}

const Home = ({ featuredProducts }: ProductsType) => {
  const info = { photos: ["/home/f12022.jpg"] };
  return (
    <>
      <div className="">
        <div className="relative w-full h-screen antialiased">
          <Image
            priority
            src="/pitstop-logos/homepage logo bg.jpg"
            className="object-cover"
            unoptimized
            alt="background image"
            layout="fill"
          />
        </div>
        <div className="flex items-center justify-center gap-x-10 p-10 bg-slate-300">
          <Link href="/products">
            <a className="homepage-button">Shop all</a>
          </Link>
          <Link href="/teams">
            <a className="homepage-button">Shop by teams</a>
          </Link>
        </div>
      </div>
      <div className="m-10">
        <Carousel featuredProducts={featuredProducts} />
      </div>
      <div className="">
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