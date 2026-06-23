import { Navigation } from "swiper/modules";
import { CustomButton } from "../../../CustomButton/CustomButton";
import { Swiper, SwiperSlide } from "swiper/react";

export const HeroSection = () => {
  return (
    <section>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={0}
        slidesPerView={1}
        loop
      >
        <SwiperSlide className="bg-[url('/HeroBG.png')] bg-hover bg-center">
          <div className="container py-32.75">
            <div className="w-[50%]">
              <h1
               
                className="mb-[21px] text-[54px] font-black text-[#2b3350] leading-[120%] font-family"
              >
                Кресла Samurai на выгодных условиях по всей стране 
              </h1>
              <p className="mb-[32px] font-normal text-[21px] text-[#2b3350] leading-[160%]">
                Здесь вам не придется покупать товар в слепую — проведите
                тест-драйв перед покупкой
              </p>
              <CustomButton>Запись на тест-драйв</CustomButton>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[url('/HeroBG.png')] bg-hover bg-center">
          <div className="container py-32.75">
            <div className="w-[50%]">
              <h1 className="mb-[21px] text-[54px] font-black text-[#2b3350] leading-[120%] font-family">
                Кресла Samurai на выгодных условиях по всей стране
              </h1>
              <p className="mb-[32px] font-normal text-[21px] text-[#2b3350] leading-[160%]">
                Здесь вам не придется покупать товар в слепую — проведите
                тест-драйв перед покупкой
              </p>
              <CustomButton>Запись на тест-драйв</CustomButton>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
