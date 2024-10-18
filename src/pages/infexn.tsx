import AppTemplate from "../components/templates/AppTemplate";
import { getSettings } from "../utils/settings";
import styled from "@emotion/styled";
import heroBg from "../assets/homepage-banner.png";
import Section from "../components/atoms/Section";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import replace_convention_infexn from "../json/infexn/home/replace_convention_infexn.json";
import infexn_report_delivers from "../json/infexn/home/infexn_report_delivers.json";
import ReplaceConventionWithInfexn from "@/components/sections/ReplaceConventionWithInfexn";
import InfexnReportDeliverSection from "@/components/sections/InfexnReportDelivers";
import OurLabsSection from "@/components/sections/OurLabsSection";
import our_labs from "../json/infexn/home/our_labs.json";
import leadership_team from "../json/infexn/home/leadership_team.json";
import advisors from "../json/infexn/home/advisor.json";
import OurLeadershipTeamSection from "@/components/sections/OurLeadershipTeam";
import InfexnTestimonialsSection from "@/components/sections/InfexnTestimonialsSection";
import testimonials from "../json/infexn/home/testimonials.json";
import partners from "../json/infexn/home/partners.json";
import TrustedPartnerSection from "@/components/sections/TrustedPartnerSection";

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
      justify-content: flex-start;
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
            <Section.Container className="mx-auto !p-0 bg-gradient-to-r from-customGreen to-toBlue md:bg-none">
               <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="grid__col p-4 md:px-6 pb-0 md:pb-8">
                     <h3 className="font-semibold md:font-normal text-white text-2xl md:text-3xl 2xl:text-5xl mt-0 md:mt-20">
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
         <div className="h-[10px] bg-gradient-to-r from-customGreen to-toBlue" />
      </>
   );
};

function InfexnHome({ settings }: any) {
   return (
      <StyledHome
         bodyClassName="home"
         settings={settings}
         renderMenu={undefined}
      >
         <HeroSection />
         <Section className="">
            <Section.Container className="container mx-auto py-8 md:py-16 px-2">
               <div className="text-left">
                  <h2 className="text-base text-customBlue1 tracking-wider font-semibold">
                     <span className="text-[#3f78be]">[</span>TECHNOLOGY
                     <span className="text-[#3f78be]">]</span>
                  </h2>
                  <h1 className="text-3xl font-medium text-customBlue1 mt-4">
                     Harnessing the power of <br />
                     Next Generation Sequencing (NGS)
                  </h1>
               </div>

               <div className="bg-white overflow-hidden border-customBlue1 border-2 rounded-xl mt-12">
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
                           className="mt-6 inline-block bg-customBlue1 text-white py-3 px-8 rounded-lg shadow hover:bg-blue-700 transition duration-200"
                        >
                           Learn More
                        </a>
                     </div>
                  </div>
               </div>
            </Section.Container>
         </Section>
         <div className="h-[10px] bg-gradient-to-r from-customGreen to-toBlue" />
         <ReplaceConventionWithInfexn
            data={replace_convention_infexn.data}
            data1={replace_convention_infexn.data1}
         />
         <div className="h-[10px] bg-gradient-to-r from-customGreen to-toBlue" />
         <InfexnReportDeliverSection data={infexn_report_delivers.data} />
         <Section className="">
            <Section.Container className="container mx-auto py-8 md:py-16 px-2">
               <div className="text-left">
                  <h1 className="text-3xl font-medium text-customBlue1 mt-4">
                     Getting started
                  </h1>
                  <p className="w-full md:w-1/2 text-customGray mt-6 pr-0 md:pr-16">
                     At moments of criticality, the field tested infexnTM
                     workflow can give you accurate results quicker than
                     conventional tests. All you need to do is:
                  </p>
               </div>
               <div className="m-10 mt-16 rounded-lg">
                  <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20">
                     <div className="">
                        <img
                           src="/assets/infexn/home/sample_collection.png"
                           alt="Doctors"
                           className="w-full h-60 object-cover rounded-t-2xl"
                        />
                     </div>
                     <div className="">
                        <img
                           src="/assets/infexn/home/laboratory_testing.png"
                           alt="Doctors"
                           className="w-full h-60 object-cover rounded-t-2xl"
                        />
                     </div>
                     <div className="">
                        <img
                           src="/assets/infexn/home/report_generation.png"
                           alt="Doctors"
                           className="w-full h-60 object-cover rounded-t-2xl"
                        />
                     </div>
                  </div>
                  <div className="flex items-center justify-center mt-16">
                     <a
                        href="#"
                        className="mt-6 inline-block bg-customBlue1 text-white py-3 px-8 rounded-lg shadow hover:bg-blue-700 transition duration-200"
                     >
                        Order Now
                     </a>
                  </div>
               </div>
            </Section.Container>
         </Section>
         <OurLabsSection data={our_labs.data} />
         <Section className="">
            <Section.Container className="container mx-auto py-8 md:py-16 px-2">
               <div className="text-left">
                  <h2 className="text-base text-customBlue1 tracking-wider font-semibold">
                     <span className="text-[#3f78be]">[</span>PARTNER
                     <span className="text-[#3f78be]">]</span>
                  </h2>
                  <h1 className="text-3xl font-medium text-customBlue1 mt-4">
                     Collaborate with us
                  </h1>
               </div>

               <div className="flex justify-center flex-col md:flex-row items-center gap-10 p-10 mt-6">
                  <div className="bg-white rounded-2xl shadow-md w-[350px]">
                     <div className="rounded-t-2xl ">
                        <img
                           src="/assets/infexn/home/doctors.png"
                           alt="Doctors"
                           className="w-full h-40 object-cover rounded-t-2xl"
                        />
                     </div>

                     <div className="p-4 text-center rounded-b-2xl bg-[#1E396CA3]">
                        <h3 className="text-xl font-semibold text-white">
                           Doctors
                        </h3>
                     </div>
                  </div>

                  <div className="bg-white rounded-2xl shadow-md w-[350px]">
                     <div className="rounded-t-2xl">
                        <img
                           src="/assets/infexn/home/hospitals_labs.png"
                           alt="Hospitals & Diagnostic Labs"
                           className="w-full h-40 object-cover rounded-t-2xl"
                        />
                     </div>
                     <div className="p-4 text-center rounded-b-2xl bg-[#1E396CA3]">
                        <h3 className="text-xl font-semibold text-white">
                           Hospitals & Diagnostic Labs
                        </h3>
                     </div>
                  </div>
               </div>
            </Section.Container>
         </Section>
         <OurLeadershipTeamSection
            data={leadership_team.data}
            advisorData={advisors.data}
         />
         <InfexnTestimonialsSection data={testimonials.data} />
         <TrustedPartnerSection data={partners.data} />
         <Section className="">
            <Section.Container className="container mx-auto py-8 md:py-16 px-2">
               <div className="text-left">
                  <h2 className="text-base text-customBlue1 tracking-wider font-semibold">
                     <span className="text-[#3f78be]">[</span>RESOURCES
                     <span className="text-[#3f78be]">]</span>
                  </h2>
                  <h1 className="text-3xl font-medium text-customBlue1 mt-4">
                     What's new
                  </h1>
               </div>
               <div className="m-10 mt-16 rounded-3xl">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 h-full w-full">
                     <div className="p-4 min-h-80 h-80 bg-news_events bg-contain md:bg-cover bg-no-repeat rounded-3xl text-white w-full flex flex-1">
                        New/Events
                     </div>
                     <div className="h-80 flex flex-col items-center justify-center gap-4 flex-1 w-full">
                        <div className="p-4 min-h-40 h-40 bg-case_studies bg-contain md:bg-cover bg-no-repeat rounded-3xl text-white w-full flex flex-1">
                           Case Studies
                        </div>
                        <div className="flex flex-row items-center justify-center gap-4 w-full flex-1">
                           <div className="p-4 min-h-40 h-40 bg-blogs bg-contain md:bg-cover bg-no-repeat rounded-3xl text-white w-full flex flex-1">
                              Blogs
                           </div>
                           <div className="p-4 min-h-40 h-40 bg-papers bg-contain md:bg-cover bg-no-repeat rounded-3xl text-white w-full flex flex-1">
                              Papers
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </Section.Container>
         </Section>
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

export default InfexnHome;
