import CreativeSpeakers from "design-system/components/CreativeSpeakers";
import speakerData from "design-system/components/CreativeSpeakers/SpeakersData";
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Slider() {
  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={4}
    >
      {speakerData.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <CreativeSpeakers
              name={item.name}
              Job={item.job}
              alt={item.alt}
              img={item.img}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
