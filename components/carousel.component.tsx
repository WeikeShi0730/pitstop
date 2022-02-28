import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import FeatureProduct from "./feature-product.component";
import { ProductType } from "../interfaces/index";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
interface ProductsType {
  featuredProducts: ProductType[];
}
const Carousel = ({ featuredProducts }: ProductsType) => {
  return (
    <div className="">
      <div className="flex m-3 justify-self-start items-end text-slate-700 text-xl col-span-1 lg:col-span-2 2xl:col-span-3 py-1 border-b border-slate-700">
        Featured products:
      </div>
      <Swiper
        className="swiper-button-white"
        slidesPerView={3}
        modules={[Navigation, Pagination]}
        navigation={{}}
        pagination={{ clickable: true }}
        // effect={"coverflow"}
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
