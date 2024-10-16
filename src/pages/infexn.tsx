// @ts-nocheck
import partners from "../json/partners.json";
import awards from "../json/awards.json";
import { Autoplay } from "swiper";
import AppTemplate from "../components/templates/AppTemplate";
import { getSettings } from "../utils/settings";
import { getActiveNews } from "../utils/news";
import styled from "@emotion/styled";
import heroBg from "../assets/homepage-banner.png";
import sec5 from "../assets/section-clinician-bg-doctor.png";
import Section from "../components/atoms/Section";
import Link from "next/link";
import SectionGridItems from "../components/organisms/SectionGridItems";
import SectionPosts from "../components/organisms/SectionPosts";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import SepsisChart from "../components/SepsisChart";
import { useRef } from "react";
import { filteredNews } from "../utils/index";
import Head from "next/head";
import replace_convention_infexn from "../json/infexn/home/replace_convention_infexn.json";
import infexn_report_delivers from "../json/infexn/home/infexn_report_delivers.json";
import ReplaceConventionWithInfexn from "@/components/sections/ReplaceConventionWithInfexn";
import InfexnReportDeliverSection from "@/components/sections/InfexnReportDelivers";
import OurLabsSection from "@/components/sections/OurLabsSection";
import our_labs from "../json/infexn/home/our_labs.json";

const loadPartnerImg = ({ src }) => {
   return `/assets/${src}`;
};

const StyledHome = styled(AppTemplate)`
   .HeroSection {
      background-image: url("/assets/infexn/home/infexn_home_bg.png");
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

const StyledHeroSection = styled(Section)`
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
   background-image: url("/assets/infexn/home/infexn_home_bg.png");
   .section__container {
      min-height: calc(100vh - var(--safe-top-padding, 100px));
      display: flex;
      flex-direction: column;
      justify-content: center;
   }
   @media (max-width: 768px) {
      background-image: none;
      background-position: bottom;
      .section__container {
         min-height: 40vh;
         display: flex;
         flex-direction: column;
         justify-content: flex-start;
      }
   }
`;

const HeroSection = () => {
   return (
      <>
         <StyledHeroSection
            className="HeroSection "
            data-aos="fade-up"
            style={{ "--bg": `url(${heroBg.src})` }}
         >
            <Section.Container className="mx-auto !p-0 bg-gradient-to-r from-customGreen to-customBlue1 md:bg-none">
               <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="grid__col p-4 md:px-6 pb-0 md:pb-8">
                     <h3 className="mb-2 md:mb-8 font-semibold md:font-normal text-white text-2xl md:text-3xl 2xl:text-5xl">
                        Your first go-to-test <br />
                        for infection detection
                     </h3>
                  </div>
                  <div className="grid__col block md:hidden">
                     <img
                        src="/assets/infexn/home/infexn_home_bg.png"
                        alt=""
                        className="w-full"
                     />
                  </div>
               </div>
            </Section.Container>
         </StyledHeroSection>
         <div className="h-[10px] bg-gradient-to-r from-customGreen to-customBlue1" />
      </>
   );
};

function InfexnHome({ Component, pageProps, news, settings }) {
   const partnersCarousel = useRef(null);
   const awardsCarousel = useRef(null);

   return (
      <StyledHome bodyClassName="home" settings={settings}>
         <HeroSection />
         <Section className="">
            <Section.Container className="container mx-auto py-8 md:py-16 px-2">
               <div className="text-left">
                  <h2 className="text-base text-blue-900 tracking-wider font-semibold">
                     <span className="text-[#3f78be]">[</span>TECHNOLOGY
                     <span className="text-[#3f78be]">]</span>
                  </h2>
                  <h1 className="text-3xl font-medium text-blue-900 mt-4">
                     Harnessing the power of <br />
                     Next Generation Sequencing (NGS)
                  </h1>
               </div>

               <div className="bg-white overflow-hidden border-blue-900 border-2 rounded-xl mt-12">
                  <div className="md:flex">
                     <div className="md:w-1/2 md:shrink-0">
                        <img
                           className="h-48 w-full object-cover md:h-full"
                           src="/assets/infexn/home/technology_bg.png"
                           alt="NGS Image"
                        />
                     </div>
                     <div className="md:w-1/2 p-8">
                        <p className="text-dark text-base">
                           Next Generation Sequencing is revolutionizing the
                           speed and accuracy with which pathogens in clinical
                           samples are detected and treated. HaystackAnalytics
                           with its clinical genomic products and proprietary
                           bioinformatics platform is bringing this precision to
                           infection management.
                        </p>
                        <a
                           href="#"
                           className="mt-6 inline-block bg-blue-900 text-white py-3 px-8 rounded-lg shadow hover:bg-blue-700 transition duration-200"
                        >
                           Learn More
                        </a>
                     </div>
                  </div>
               </div>
            </Section.Container>
         </Section>
         <div className="h-[10px] bg-gradient-to-r from-customGreen to-customBlue1" />
         <ReplaceConventionWithInfexn
            data={replace_convention_infexn.data}
            data1={replace_convention_infexn.data1}
         />
         <div className="h-[10px] bg-gradient-to-r from-customGreen to-customBlue1" />
         <InfexnReportDeliverSection data={infexn_report_delivers.data} />
         <OurLabsSection data={our_labs.data} />
         <Section className="">
            <Section.Container className="container mx-auto py-8 md:py-16 px-2">
               <div className="text-left">
                  <h2 className="text-base text-blue-900 tracking-wider font-semibold">
                     <span className="text-[#3f78be]">[</span>PARTNER
                     <span className="text-[#3f78be]">]</span>
                  </h2>
                  <h1 className="text-3xl font-medium text-blue-900 mt-4">
                     Collaborate with us
                  </h1>
               </div>

               <div class="flex justify-center flex-col md:flex-row items-center gap-10 p-10 mt-6">
                  <div class="bg-white rounded-2xl shadow-md w-[350px]">
                     <div className="rounded-t-2xl ">
                        <img
                           src="/assets/infexn/home/doctors.png"
                           alt="Doctors"
                           class="w-full h-40 object-cover rounded-t-2xl"
                        />
                     </div>

                     <div class="p-4 text-center rounded-b-2xl bg-[#5C6D90]">
                        <h3 class="text-xl font-semibold text-white">
                           Doctors
                        </h3>
                     </div>
                  </div>

                  <div class="bg-white rounded-2xl shadow-md w-[350px]">
                     <div className="rounded-t-2xl">
                        <img
                           src="/assets/infexn/home/hospitals_labs.png"
                           alt="Hospitals & Diagnostic Labs"
                           class="w-full h-40 object-cover rounded-t-2xl"
                        />
                     </div>
                     <div class="backdrop-blur-md backdrop-brightness-150 p-4 text-center rounded-b-2xl bg-[#5C6D90]">
                        <h3 class="text-xl font-semibold text-white">
                           Hospitals & Diagnostic Labs
                        </h3>
                     </div>
                  </div>
               </div>
            </Section.Container>
         </Section>
         <Section className="">
            <Section.Container className="container mx-auto py-8 md:py-16 px-2">
               <div className="text-left">
                  <h2 className="text-base text-blue-900 tracking-wider font-semibold">
                     <span className="text-[#3f78be]">[</span>ABOUT US
                     <span className="text-[#3f78be]">]</span>
                  </h2>
                  <h1 className="text-3xl font-medium text-blue-900 mt-4">
                     The leadership team
                  </h1>
               </div>

               <div class="flex flex-col md:flex-row justify-center items-center gap-10 m-10 mt-16 rounded-2xl bg-gradient-to-r from-customGreen to-customBlue1">
                  <div class="flex flex-col items-center justify-center">
                     <div className="rounded-t-2xl ">
                        <img
                           src="/assets/infexn/home/leader_kiran.jpg"
                           alt="Prof. Kiran"
                           class="h-60 w-60 rounded-full"
                        />
                     </div>
                     <h3 class="text-xl font-semibold text-white">
                        Prof. Kiran Kondabagil
                     </h3>
                     <p className="text-white">
                        Co founder & Chief Scientific Mentor HaystackAnalytics
                        Pvt. Ltd.
                     </p>
                  </div>
                  <div class="flex flex-col">
                     <div className="rounded-t-2xl ">
                        <img
                           src="/assets/infexn/home/leader_kiran.jpg"
                           alt="Prof. Kiran"
                           class="h-60 w-60 rounded-full"
                        />
                     </div>
                     <h3 class="text-xl font-semibold text-white">
                        Prof. Kiran Kondabagil
                     </h3>
                     <p className="text-white">
                        Co founder & Chief Scientific Mentor HaystackAnalytics
                        Pvt. Ltd.
                     </p>
                  </div>
                  <div class="flex flex-col">
                     <div className="rounded-t-2xl ">
                        <img
                           src="/assets/infexn/home/leader_kiran.jpg"
                           alt="Prof. Kiran"
                           class="h-60 w-60 rounded-full"
                        />
                     </div>
                     <h3 class="text-xl font-semibold text-white">
                        Prof. Kiran Kondabagil
                     </h3>
                     <p className="text-white">
                        Co founder & Chief Scientific Mentor HaystackAnalytics
                        Pvt. Ltd.
                     </p>
                  </div>

                  {/* <div class="bg-white rounded-2xl shadow-md flex-1">
                     <div className="rounded-t-2xl">
                        <img
                           src="/assets/infexn/home/hospitals_labs.png"
                           alt="Hospitals & Diagnostic Labs"
                           class="w-full h-40 object-cover rounded-t-2xl"
                        />
                     </div>
                     <div class="backdrop-blur-md backdrop-brightness-150 p-4 text-center rounded-b-2xl bg-[#5C6D90]">
                        <h3 class="text-xl font-semibold text-white">
                           Hospitals & Diagnostic Labs
                        </h3>
                     </div>
                  </div> */}
               </div>
            </Section.Container>
         </Section>
      </StyledHome>
   );
}

export async function getStaticProps(context) {
   let news = getActiveNews();
   const settings = getSettings();
   return {
      props: {
         news: JSON.parse(JSON.stringify(news)),
         settings: JSON.parse(JSON.stringify(settings)),
      }, // will be passed to the page component as props
   };
}

export default InfexnHome;
