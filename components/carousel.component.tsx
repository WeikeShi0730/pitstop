import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import Product from "./product.component";
import { ProductType } from "../interfaces/index";
import Loading from "./loading.component";
import "swiper/css";
import "swiper/css/navigation";

interface ProductsType {
  featuredProducts: ProductType[];
}
const Carousel = ({ featuredProducts }: ProductsType) => {
  const [numSlides, setNumSlides] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
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
      {loading && <Loading />}
      <div className="flex m-3 justify-self-start items-end text-slate-700 text-xl md:text-3xl col-span-1 lg:col-span-2 2xl:col-span-3 py-1 border-b border-slate-700">
        Featured stickers
      </div>
      <div className="w-full">
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
                  <div className="m-3 w-80">
                    <Product
                      product={featuredProduct}
                      wishlistItems={[]}
                      setLoading={setLoading}
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
