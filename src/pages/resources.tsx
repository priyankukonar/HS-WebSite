// @ts-nocheck
import { useRef } from "react";
import AppTemplate from "../components/templates/AppTemplate";
import { getSettings } from "../utils/settings";
import styled from "@emotion/styled";
import Section from "../components/atoms/Section";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import case_studies from "../json/case_studies.json";
import new_events from "../json/news_events.json";
import articles from "../json/articles.json";
import papers from "../json/papers.json";
import FAQsSection from "@/components/sections/FAQs";

const StyledHome = styled(AppTemplate)`
   .HeroSection {
      background-image: url("/assets/infexn/partners/banner_bg.svg");
      background-size: 60%;
      background-repeat: no-repeat;
      background-position: right center;
   }
   .awards-carousel {
      img {
         --size: 100px;
         width: var(--size);
         height: var(--size);
      }
   }
`;

function InfexnResources({ settings }: any) {
   const caseStudiesCarousel = useRef(null);
   const newsEventsCarousel = useRef(null);
   const blogsCarousel = useRef(null);
   const papersCarousel = useRef(null);
   return (
      <StyledHome
         bodyClassName="home"
         settings={settings}
         renderMenu={undefined}
      >
         <div className="flex flex-col md:flex-row">
            <div className="flex items-center justify-center p-8 bg-[#8CC6664D] w-full md:w-1/2">
               <h1 className="text-customBlue1 text-3xl">Case Studies</h1>
            </div>
            <div className="h-[10px] md:h-auto md:w-[10px] bg-gradient-to-r md:bg-gradient-to-t from-customGreen to-toBlue" />
            <div className="flex w-full md:w-1/2">
               <img src="/assets/infexn/resources/case_studies.png" />
            </div>
         </div>
         <Section className="">
            <Section.Container className="container mx-auto py-8 md:py-16 px-2">
               <div className="relative m-10 mt-16">
                  <Swiper
                     className="partners-carousel w-full"
                     spaceBetween={20}
                     navigation={true}
                     loop={true}
                     slidesPerView={1}
                     ref={caseStudiesCarousel}
                     onSlideChange={console.info}
                     onReachEnd={console.info}
                     onReachBeginning={console.info}
                     autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                     }}
                     modules={[Navigation, Autoplay]}
                     onSwiper={(swiper: any) =>
                        (caseStudiesCarousel.current = swiper)
                     }
                  >
                     {case_studies.data.map((dat, slideIndex) => (
                        <SwiperSlide
                           className="w-full p-4"
                           key={`slide_${slideIndex}`}
                        >
                           <div className="w-full flex flex-col md:flex-row gap-10">
                              <div className="w-full md:w-1/2">
                                 <img src={dat.thumbnailUrl} />
                              </div>
                              <div className="flex flex-col justify-between w-1/2 h-full">
                                 <h1 className="text-customBlue1 text-lg">
                                    {dat.title}
                                 </h1>
                                 <p className="text-customGray">{dat.desc}</p>
                                 <div>
                                    <a
                                       href="#"
                                       className="inline-block bg-customBlue1 text-white py-3 px-8 rounded-2xl shadow  transition duration-200"
                                    >
                                       Read article
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </SwiperSlide>
                     ))}
                  </Swiper>

                  <div
                     className="h-6 w-6 rotate-180 swiper-button--outer swiper-button-prev after:!content-none"
                     onClick={() => caseStudiesCarousel.current?.slidePrev()}
                  >
                     <img src="/assets/polygon.svg" alt="" className="" />
                  </div>
                  <div
                     className="h-6 w-6 swiper-button--outer swiper-button-next after:!content-none"
                     onClick={() => caseStudiesCarousel.current?.slideNext()}
                  >
                     <img src="/assets/polygon.svg" alt="" className="" />
                  </div>
               </div>
            </Section.Container>
         </Section>

         <div className="flex flex-col md:flex-row">
            <div className="flex items-center justify-center p-8 bg-[#8CC6664D] w-full md:w-1/2">
               <h1 className="text-customBlue1 text-3xl">News & Events</h1>
            </div>
            <div className="h-[10px] md:h-auto md:w-[10px] bg-gradient-to-r md:bg-gradient-to-t from-customGreen to-toBlue" />
            <div className="flex w-full md:w-1/2">
               <img src="/assets/infexn/resources/new_events.svg" />
            </div>
         </div>
         <Section className="">
            <Section.Container className="container mx-auto py-8 md:py-16 px-2">
               <div className="relative m-10 mt-16">
                  <Swiper
                     className="partners-carousel w-full !p-2"
                     navigation={true}
                     loop={true}
                     ref={newsEventsCarousel}
                     onSlideChange={console.info}
                     onReachEnd={console.info}
                     onReachBeginning={console.info}
                     autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                     }}
                     modules={[Navigation, Autoplay]}
                     onSwiper={(swiper: any) =>
                        (newsEventsCarousel.current = swiper)
                     }
                     breakpoints={{
                        768: {
                           slidesPerView: 1,
                           spaceBetween: 40,
                        },
                        1024: {
                           slidesPerView: 2,
                           spaceBetween: 20,
                        },
                     }}
                  >
                     {new_events.data.map((dat, slideIndex) => (
                        <SwiperSlide
                           className="w-full p-4"
                           key={`slide_${slideIndex}`}
                        >
                           <div className="w-full flex flex-col items-center justify-center border-2 border-black rounded-3xl">
                              <div className="w-full rounded-t-3xl">
                                 <img
                                    src={dat.thumbnailUrl}
                                    className="w-full rounded-t-3xl"
                                 />
                              </div>
                              <div className="flex flex-col items-center justify-center p-8">
                                 <p className="text-customGray text-center">
                                    {dat.desc}
                                 </p>
                                 <div className="mt-8">
                                    <a
                                       href="#"
                                       className="inline-block bg-customBlue1 text-white py-3 px-8 rounded-2xl shadow  transition duration-200"
                                    >
                                       Event Details
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </SwiperSlide>
                     ))}
                  </Swiper>

                  <div
                     className="h-6 w-6 rotate-180 swiper-button--outer swiper-button-prev after:!content-none"
                     onClick={() => newsEventsCarousel.current?.slidePrev()}
                  >
                     <img src="/assets/polygon.svg" alt="" className="" />
                  </div>
                  <div
                     className="h-6 w-6 swiper-button--outer swiper-button-next after:!content-none"
                     onClick={() => newsEventsCarousel.current?.slideNext()}
                  >
                     <img src="/assets/polygon.svg" alt="" className="" />
                  </div>
               </div>
            </Section.Container>
         </Section>

         <div className="flex flex-col md:flex-row">
            <div className="flex items-center justify-center p-8 bg-[#8CC6664D] w-full md:w-1/2">
               <h1 className="text-customBlue1 text-3xl">Blogs</h1>
            </div>
            <div className="h-[10px] md:h-auto md:w-[10px] bg-gradient-to-r md:bg-gradient-to-t from-customGreen to-toBlue" />
            <div className="flex w-full md:w-1/2">
               <img src="/assets/infexn/resources/blogs.svg" />
            </div>
         </div>
         <Section className="">
            <Section.Container className="container mx-auto py-8 md:py-16 px-2">
               <div className="relative m-10 mt-16">
                  <Swiper
                     className="partners-carousel w-full !p-2"
                     navigation={true}
                     loop={true}
                     ref={blogsCarousel}
                     onSlideChange={console.info}
                     onReachEnd={console.info}
                     onReachBeginning={console.info}
                     autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                     }}
                     modules={[Navigation, Autoplay]}
                     onSwiper={(swiper: any) =>
                        (blogsCarousel.current = swiper)
                     }
                     breakpoints={{
                        300: {
                           slidesPerView: 1,
                           spaceBetween: 20,
                        },
                        768: {
                           slidesPerView: 3,
                           spaceBetween: 30,
                        },
                        1024: {
                           slidesPerView: 3,
                           spaceBetween: 40,
                        },
                     }}
                  >
                     {articles.data.map((dat, slideIndex) => (
                        <SwiperSlide
                           className="w-full p-4"
                           key={`slide_${slideIndex}`}
                        >
                           <div className="w-full flex flex-col items-start justify-center rounded-3xl">
                              <div className="w-full rounded-3xl">
                                 <img
                                    src={dat.thumbnailUrl}
                                    className="w-full rounded-3xl"
                                 />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                 <div className="text-customBlue1 mt-8">
                                    <h1>{dat.date}</h1>
                                 </div>
                                 <div className="mt-8">
                                    <p className="text-customGray">
                                       {dat.desc}
                                    </p>
                                 </div>
                                 <div className="mt-8">
                                    <a
                                       href="#"
                                       className="inline-block bg-customBlue1 text-white py-3 px-8 rounded-2xl shadow  transition duration-200"
                                    >
                                       Read articles
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </SwiperSlide>
                     ))}
                  </Swiper>

                  <div
                     className="h-6 w-6 rotate-180 swiper-button--outer swiper-button-prev after:!content-none"
                     onClick={() => blogsCarousel.current?.slidePrev()}
                  >
                     <img src="/assets/polygon.svg" alt="" className="" />
                  </div>
                  <div
                     className="h-6 w-6 swiper-button--outer swiper-button-next after:!content-none"
                     onClick={() => blogsCarousel.current?.slideNext()}
                  >
                     <img src="/assets/polygon.svg" alt="" className="" />
                  </div>
               </div>
            </Section.Container>
         </Section>

         <div className="flex flex-col md:flex-row">
            <div className="flex items-center justify-center p-8 bg-[#8CC6664D] w-full md:w-1/2">
               <h1 className="text-customBlue1 text-3xl">Papers</h1>
            </div>
            <div className="h-[10px] md:h-auto md:w-[10px] bg-gradient-to-r md:bg-gradient-to-t from-customGreen to-toBlue" />
            <div className="flex w-full md:w-1/2">
               <img src="/assets/infexn/resources/papers.svg" />
            </div>
         </div>
         <Section className="">
            <Section.Container className="container mx-auto py-8 md:py-16 px-2">
               <div className="relative m-10">
                  <Swiper
                     className="partners-carousel w-full"
                     spaceBetween={20}
                     navigation={true}
                     loop={true}
                     slidesPerView={1}
                     ref={papersCarousel}
                     onSlideChange={console.info}
                     onReachEnd={console.info}
                     onReachBeginning={console.info}
                     autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                     }}
                     modules={[Navigation, Autoplay]}
                     onSwiper={(swiper: any) =>
                        (papersCarousel.current = swiper)
                     }
                  >
                     {papers.data.map((dat, slideIndex) => (
                        <SwiperSlide
                           className="w-full p-4"
                           key={`slide_${slideIndex}`}
                        >
                           <div className="w-full flex flex-col gap-10 items-start justify-start border-b-2 border-b-customBlue pb-8">
                              <h1 className="py-2 max-w-max border-t-2 border-b-2 border-customGreen text-customBlue1 font-semibold text-lg">
                                 {dat.name}
                              </h1>
                              <p className="text-customBlue1">{dat.desc1}</p>
                              <p className="text-customGray">{dat.desc2}</p>
                              <div className="mt-8">
                                 <a
                                    href="#"
                                    className="inline-block bg-customBlue1 text-white py-3 px-8 rounded-2xl shadow  transition duration-200"
                                 >
                                    Read more
                                 </a>
                              </div>
                           </div>
                        </SwiperSlide>
                     ))}
                  </Swiper>

                  <div
                     className="h-6 w-6 rotate-180 swiper-button--outer swiper-button-prev after:!content-none"
                     onClick={() => papersCarousel.current?.slidePrev()}
                  >
                     <img src="/assets/polygon.svg" alt="" className="" />
                  </div>
                  <div
                     className="h-6 w-6 swiper-button--outer swiper-button-next after:!content-none"
                     onClick={() => papersCarousel.current?.slideNext()}
                  >
                     <img src="/assets/polygon.svg" alt="" className="" />
                  </div>
               </div>
            </Section.Container>
         </Section>
         <FAQsSection />
      </StyledHome>
   );
}

export async function getStaticProps() {
   const settings = getSettings();
   return {
      props: {
         settings: JSON.parse(JSON.stringify(settings)),
      }, // will be passed to the page component as props
   };
}

export default InfexnResources;
