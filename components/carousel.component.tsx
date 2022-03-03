import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import FeatureProduct from "./feature-product.component";
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
  });
  return (
    <div className="">
      <div className="flex m-3 justify-self-start items-end text-slate-700 text-xl col-span-1 lg:col-span-2 2xl:col-span-3 py-1 border-b border-slate-700">
        Featured products:
      </div>
      <Swiper
        slidesPerView={numSlides}
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {featuredProducts.map((featuredProduct) => {
          return (
            <SwiperSlide key={featuredProduct.id}>
              <FeatureProduct featuredProduct={featuredProduct} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
