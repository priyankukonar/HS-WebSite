// @ts-nocheck
import { useRef } from "react";
import Section from "../atoms/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

interface IInfexnTestimonialsSectionData {
   name: string;
   thumbnailUrl: string;
   speciality: string;
   designation: string;
   address: string;
   desc: string;
}

interface IInfexnTestimonialsSectionProps {
   data: IInfexnTestimonialsSectionData[];
}

const InfexnTestimonialsSection = ({
   data,
}: IInfexnTestimonialsSectionProps) => {
   const testimonialCarousel = useRef(null);
   return (
      <Section className="">
         <Section.Container className="container mx-auto py-8 md:py-16 px-2">
            <div className="text-left">
               <h1 className="text-3xl font-medium text-customBlue1 mt-4">
                  Testimonials
               </h1>
            </div>
            <div className="relative m-10 mt-16">
               <Swiper
                  className="partners-carousel w-4/5 rounded-2xl border-dashed border-2 border-customBlue1"
                  spaceBetween={20}
                  navigation={true}
                  loop={true}
                  slidesPerView={1}
                  ref={testimonialCarousel}
                  onSlideChange={console.info}
                  onReachEnd={console.info}
                  onReachBeginning={console.info}
                  autoplay={{
                     delay: 2500,
                     disableOnInteraction: false,
                  }}
                  modules={[Navigation, Autoplay]}
                  onSwiper={(swiper: any) =>
                     (testimonialCarousel.current = swiper)
                  }
               >
                  {data.map((dat, slideIndex) => (
                     <SwiperSlide
                        className="w-full p-4"
                        key={`slide_${slideIndex}`}
                     >
                        <div className="flex flex-col md:flex-row items-center gap-8">
                           <div className="text-right text-customBlue1">
                              <p className="font-bold text-lg">{dat.name}</p>
                              <p className="text-sm">
                                 {dat.designation}
                                 <br /> {dat.speciality}
                                 <br /> {dat.address}
                              </p>
                           </div>

                           <div className="flex-shrink-0">
                              <img
                                 src={dat.thumbnailUrl}
                                 alt={dat.name}
                                 className="w-32 h-32 rounded-full object-cover border border-gray-300"
                              />
                           </div>

                           <div className="max-w-md">
                              <p className="text-customGray italic text-base">
                                 {dat.desc}
                              </p>
                           </div>
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>

               <div
                  className="h-6 w-6 rotate-180 swiper-button--outer swiper-button-prev after:!content-none"
                  onClick={() => testimonialCarousel.current?.slidePrev()}
               >
                  <img src="/assets/polygon.svg" alt="" className="" />
               </div>
               <div
                  className="h-6 w-6 swiper-button--outer swiper-button-next after:!content-none"
                  onClick={() => testimonialCarousel.current?.slideNext()}
               >
                  <img src="/assets/polygon.svg" alt="" className="" />
               </div>
            </div>
         </Section.Container>
      </Section>
   );
};

export default InfexnTestimonialsSection;
