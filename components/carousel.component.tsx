import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import Product from "./product.component";
import { ProductType } from "../interfaces/index";
import "swiper/css";
import "swiper/css/navigation";

interface ProductsType {
  featuredProducts: ProductType[];
}
const Carousel = ({ featuredProducts }: ProductsType) => {
  const [numSlides, setNumSlides] = useState<number>(1);
  useEffect(() => {
    const handleResize = () => {
      if (window) {
        const numSlides =
          window.innerWidth < 1536
            ? window.innerWidth < 1280
              ? window.innerWidth < 1024
                ? window.innerWidth < 768
                  ? 1
                  : 2
                : 3
              : 4
            : 5;
        setNumSlides(numSlides);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  });
  return (
    <>
      <div className="flex m-3 justify-self-start items-end text-slate-700 text-xl col-span-1 lg:col-span-2 2xl:col-span-3 py-1 border-b border-slate-700">
        Featured stickers:
      </div>
      <Swiper
        slidesPerView={numSlides}
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{
          delay: 1500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {featuredProducts.map((featuredProduct) => {
          return (
            <SwiperSlide key={featuredProduct.id}>
              <div className="flex items-center justify-center">
                <div className="p-3 m-5 rounded-lg w-72 text-center text-slate-700 bg-opacity-30 backdrop-blur-sm bg-slate-400 transition-all duration-200 ease-in-out hover:shadow-lg hover:shadow-slate-700">
                  <Product product={featuredProduct} wishlistItems={[]} />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Carousel;
