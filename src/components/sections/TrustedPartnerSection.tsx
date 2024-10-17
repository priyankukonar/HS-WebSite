// @ts-nocheck
import { useRef } from "react";
import Section from "../atoms/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

interface ITrustedPartnerSectionData {
   thumbnailUrl: string;
}

interface IITrustedPartnerSectionProps {
   data: ITrustedPartnerSectionData[];
}

const TrustedPartnerSection = ({ data }: ITrustedPartnerSectionProps) => {
   const trustedPartners = useRef(null);
   return (
      <Section className="">
         <Section.Container className="container mx-auto py-8 md:py-16 px-2">
            <div className="text-left">
               <h1 className="text-3xl font-medium text-customBlue1 mt-4">
                  Trusted Partnerships
               </h1>
            </div>
            <div className="relative m-10 mt-16">
               <Swiper
                  className="partners-carousel w-4/5"
                  spaceBetween={10}
                  loop={true}
                  ref={trustedPartners}
                  onSlideChange={console.info}
                  onReachEnd={console.info}
                  onReachBeginning={console.info}
                  autoplay={{
                     delay: 2500,
                     disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  breakpoints={{
                     300: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                     },
                     768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                     },
                     1024: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                     },
                  }}
                  onSwiper={(swiper: any) => (trustedPartners.current = swiper)}
               >
                  {data?.map((slide, slideIndex) => (
                     <SwiperSlide
                        className="flex items-center justify-center"
                        key={`slider_${slideIndex}`}
                     >
                        <div className="h-20 flex items-center justify-center">
                           <img
                              src={slide.thumbnailUrl}
                              alt={slide.thumbnailUrl}
                              className="object-contain w-36 max-h-20"
                           />
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
               <div
                  className="h-6 w-6 rotate-180 swiper-button--outer swiper-button-prev after:!content-none"
                  onClick={() => trustedPartners.current?.slidePrev()}
               >
                  <img src="/assets/polygon.svg" alt="" className="" />
               </div>
               <div
                  className="h-6 w-6 swiper-button--outer swiper-button-next after:!content-none"
                  onClick={() => trustedPartners.current?.slideNext()}
               >
                  <img src="/assets/polygon.svg" alt="" className="" />
               </div>
            </div>
            <div className="flex flex-wrap items-center justify-center m-10 mt-16">
               <div className="md:w-1/2 w-full">
                  <p className="text-customBlue1 font-semibold text-2xl">
                     Proudly made in India{" "}
                     <span className="h-6 w-6 ">
                        <img src="/assets/lion.svg" alt="" className="inline" />
                     </span>
                     <br />
                     <p>Relevant for the world</p>
                  </p>
               </div>
               <div className="md:w-1/2 w-full">
                  <img src="/assets/map.png" alt="" className="inline" />
                  <div className="flex items-center justify-center">
                     <div className="flex items-center justify-center">
                        <a
                           href="#"
                           className="inline-block bg-customBlue1 text-white py-3 px-8 rounded-lg shadow transition duration-200"
                        >
                           World
                        </a>
                     </div>
                     <div className="flex items-center justify-center">
                        <a
                           href="#"
                           className="inline-block bg-white text-customBlue1 py-3 px-8 rounded-lg shadow border-2 border-customBlue1 border-solid  transition duration-200"
                        >
                           India
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </Section.Container>
      </Section>
   );
};

export default TrustedPartnerSection;
