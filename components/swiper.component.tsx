import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Carousel = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        //   onSlideChange={() => console.log("slide change")}
        modules={[Navigation, Pagination]}
        //   onSwiper={setControlledSwiper}
        pagination
        navigation
        pagination={{ clickable: true }}
        effect="cards"
        loop={true}
      >
        <SwiperSlide>
          <div className="relative w-full h-48 antialiased">
            <Image
              priority
              src="/pitstop-logos/pitstop-logos.jpeg"
              className="object-cover"
              unoptimized
              alt="background image"
              layout="fill"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-48 antialiased">
            <Image
              priority
              src="/pitstop-logos/pitstop-logos.jpeg"
              className="object-cover"
              unoptimized
              alt="background image"
              layout="fill"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-48 antialiased">
            <Image
              priority
              src="/pitstop-logos/pitstop-logos.jpeg"
              className="object-cover"
              unoptimized
              alt="background image"
              layout="fill"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-48 antialiased">
            <Image
              priority
              src="/pitstop-logos/pitstop-logos.jpeg"
              className="object-cover"
              unoptimized
              alt="background image"
              layout="fill"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
