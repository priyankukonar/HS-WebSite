// @ts-nocheck
import AppTemplate from "../components/templates/AppTemplate";

import team from "../json/team.json";
import styled from "@emotion/styled";
import { useState } from "react";
import awards from "../json/awards.json";
import Section from '../components/atoms/Section'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { useRef } from "react";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
const StyledHome = styled(AppTemplate)`
.awards-carousel {
   img {
      --size: 100px;
      width: var(--size);
      height: var(--size);
   }
}

`

const StyledHeroSection = styled(Section)`
   background-position: center;
   background-image: url("/assets/about-banner.jpg");
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   .section__container {
      min-height: calc(85vh - var(--safe-top-padding, 100px));
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding:0px;
   }
   @media (max-width: 768px) {
      background-image: none;
      background-size: contain;
      background-position: bottom;
      .section__container {
         min-height: 40vh;
         display: flex;
         flex-direction: column;
         justify-content: flex-start;
      }
   }
`
const HeroSection = () => {
   return (
      <StyledHeroSection className="HeroSection " data-aos="fade-up">
         <Section.Container className="mx-auto px-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
               <div className="grid__col  py-8 px-3 md:px-0">
                  <h3 className="mb-4 text-3xl">
                  Building state of the art<br/>
                     <span className="font-extrabold"> genomics solution</span> for<br/>
                     <span className="font-extrabold"> accurate, personalised</span><br/>
                     <span className="font-extrabold"> clinical</span> decisions
                  </h3>
               </div>
               <div className="grid__col block md:hidden">
                  <img src="/assets/about-mob-banner.png" alt="" className="w-full" />
               </div>
            </div>
         </Section.Container>
      </StyledHeroSection>
   )
}

export default function About({ Component, pageProps, news, settings }) {

   const [ activeTab2, setActiveTab2 ] = useState()
   const awardsCarousel = useRef(null)
   const teamCarousel = useRef(null)


   return (
      <StyledHome settings={settings}>
         <HeroSection />
         <Section className="bg-blue-800 text-white">
            <Section.Container className="container mx-auto py-12 md:py-20">
               <h3 className="font-extrabold text-center text-3xl mb-4">
               About HaystackAnalytics
               </h3>
               <p className="text-center mb-4 text-sm md:w-10/12 m-auto">
               Based out of IIT Bombay, HaystackAnalytics is a HealthTech company creating clinical genomics products, which enable diagnostic labs and hospitals to offer accurate and personalized diagnostics. Supported by India's most respected science agencies (DST, BIRAC, DBT), we created and launched a portfolio of products to offer genomics in infectious diseases. Our genomics based diagnostic solution for Tuberculosis was recognized as one of top innovations supported by BIRAC in the past 10 years, and was launched by the Prime Minister of India in the BIRAC Showcase event in Delhi, 2022.</p>
               <p className="text-center mb-4 text-sm md:w-10/12 m-auto">
               While the TB genomics test brought genomics to one of India's greatest healthcare challenges, the Universal ID solution targets one of WHO's SDG goals.
               </p>
            </Section.Container>
         </Section>
         <Section className="">
            <Section.Container className="container mx-auto py-12 md:py-20">
               <h3 className="font-extrabold text-center text-3xl mb-6">
               A Winning Team
               </h3>
               <p className="text-muted text-center text-sm md:w-10/12 m-auto">
               The company with a multidisciplinary team which works relentlessly to solve the problems of the world
               through creating the right mix between technology, science and business to bring revolutionary life
               saving solutions to the world.
               </p>
               <div className="relative mt-8">
                  <Swiper
                     className="partners-carousel"
                     spaceBetween={0}
                     navigation={true}
                     ref={teamCarousel}
                     onSlideChange={console.info}
                     onReachEnd={console.info}
                     onReachBeginning={console.info}
                     autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                     }}
                     modules={[Navigation,Autoplay]}
                     breakpoints={{
                        300: {
                           slidesPerView: 2,
                           spaceBetween: 0,
                        },
                        768: {
                           slidesPerView: 4,
                           spaceBetween: 0,
                        },
                        1024: {
                           slidesPerView: 2,
                           spaceBetween: 20,
                        },
                     }}
                     onSwiper={(swiper: any) => teamCarousel.current = swiper}
                  >
                     {team.data?.map((slide, slideIndex) => (
                        <SwiperSlide className="" key={`slide_${slideIndex}`}>
                           <div className="w-full flex items-center justify-center">
                              <img src={slide.thumbnailUrl} layout='contain'/>
                           </div>
                        </SwiperSlide>
                     ))}
                  </Swiper>
                  <div className="!flex md:!hidden swiper-button--outer swiper-button-prev " onClick={() => teamCarousel.current?.slidePrev()}></div>
                  <div className="!flex md:!hidden swiper-button--outer swiper-button-next " onClick={() => teamCarousel.current?.slideNext()}></div>
               </div>
            </Section.Container>
         </Section>
         <Section className="">
            <Section.Container className="container mx-auto py-12 md:py-20">
               <h3 className="font-extrabold text-center text-3xl mb-4">
               Our Leadership
               </h3>
               <div className="grid md:grid-cols-3 gap-4 mt-8 mx-auto ">
                  <div className="grid__col">
                     <div className="flex flex-col text-center items-center justify-center">
                        <div className="hover-layer hover:text-white">
                           <img src="/assets/leaders/dr-anirvan-chatterjee.png" className="w-full aspect-square" />
                           <div className="hover-layer__overlay">
                              <span className="text-center px-6 text-md">Dr. Anirvan Chatterjee, CEO:
                              Worked extensively in genomics
                              for over a decade and has
                              gained expertise in deployment
                              of NGS-based analysis in
                              healthcare with globally
                              renowned NHS UK and DTU
                              Denmark</span>
                           </div>
                        </div>
                        <h3 className="font-bold mt-4 text-xl">Dr. Anirvan Chatterjee</h3>
                     </div>
                  </div>
                  <div className="grid__col">
                     <div className="flex flex-col text-center items-center justify-center">
                        <div className="hover-layer hover:text-white">
                           <img src="/assets/leaders/gaurav-srivastava.png" className="w-full aspect-square" />
                           <div className="hover-layer__overlay">
                              <span className="text-center px-6 text-md">Mr. Gaurav Srivastava, COO: An
                              alumus of IIT and CFM Institute
                              has expertise in navigating
                              operations of numerous tech
                              startups such as Scrollback,
                              OlaFoods and Holachef</span>
                           </div>
                        </div>
                        <h3 className="font-bold mt-4 text-xl">Gaurav Srivastava</h3>
                     </div>
                  </div>
                  <div className="grid__col">
                     <div className="flex flex-col text-center items-center justify-center">
                        <div className="hover-layer hover:text-white">
                           <img src="/assets/leaders/prof-dr-kiran-kondabagil.png" className="w-full aspect-square" />
                           <div className="hover-layer__overlay">
                              <span className="text-center px-6 text-md">Prof. Kiran Kondabagil, CSM: Head
                              of Biosciences at the prestigious
                              IIT-B with significant expertise in
                              molecular biology, infectious
                              disease, genomics and its
                              applications in health and
                              epidemiology</span>
                           </div>
                        </div>
                        <h3 className="font-bold mt-4 text-xl">Prof. Kiran Kondabagil</h3>
                     </div>
                  </div>
               </div>
            </Section.Container>
         </Section>
         <Section className="SectionGridItems bg-gray-100 h-0.5">
            <Section.Container className="container mx-auto py-12 md:py-16 text-center hidden">
               <div className="flex flex-col md:flex-row items-center gap-6 my-6 justify-center">
                  <a className={`font-bold px-4 py-3 border-2 btn-outline-info bg-transparent opacity-50 hover:opacity-100 active'`}>{`Join The Healthcare Revolution Driven By NGS`}</a>
                  <a className={`font-bold px-4 py-3 border-2 btn-outline-info bg-transparent opacity-50 hover:opacity-100 active'`}>{`Find The Openings Here`}</a>
               </div>
            </Section.Container>
         </Section>
         <Section className="">
            <Section.Container className="container mx-auto py-8 md:py-16">
               <h3 className="section-heading text-center mb-6">
                  {`Awards & Recognition`}
               </h3>
               <div className="relative">
                  <Swiper
                     spaceBetween={50}
                     loop={true}
                     autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                     }}
                     breakpoints={{
                        300: {
                           slidesPerView: 2,
                           spaceBetween: 20,
                        },
                        768: {
                           slidesPerView: 4,
                           spaceBetween: 40,
                        },
                        1024: {
                           slidesPerView: 5,
                           spaceBetween: 50,
                        },
                     }}
                     modules={[Autoplay]}
                     onSwiper={(swiper: any) => awardsCarousel.current = swiper}
                     className="awards-carousel"
                  >
                     {awards.data?.map((slide, slideIndex) => (
                        <SwiperSlide key={`slide_${slideIndex}`} >
                           <div className="w-48 h-36 hover-layer hover:text-white">
                              <img src={slide.thumbnailUrl} />
                              <div className="hover-layer__overlay">
                                 <span className="text-center px-2 text-sm">{slide.title}</span>
                              </div>
                           </div>
                           {/* {JSON.stringify({ slide })} */}
                        </SwiperSlide>
                     ))}
                  </Swiper>
                  {/* <div className="swiper-button--outer swiper-button-prev" onClick={() => awardsCarousel.current?.slidePrev()}></div>
                  <div className="swiper-button--outer swiper-button-next" onClick={() => awardsCarousel.current?.slideNext()}></div> */}
               </div>
            </Section.Container>
         </Section>
      </StyledHome>
   )
}

