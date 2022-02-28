
import PageBackground from "./page-background.component";
import Image from "next/image";
import Link from "next/link";
import Carousel from "./swiper.component";

const Home = () => {
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
      <Carousel />
    </>
  );
};

export default Home;

