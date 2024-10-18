import AppTemplate from "../components/templates/AppTemplate";
import { getSettings } from "../utils/settings";
import styled from "@emotion/styled";
import heroBg from "../assets/homepage-banner.png";
import Section from "../components/atoms/Section";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import NGSEnabledSection from "@/components/sections/NGSEnabledSection";
import TechnologiesSection from "@/components/sections/TechnologiesSection";

const StyledHome = styled(AppTemplate)`
   .HeroSection {
      background-image: url("/assets/infexn/technology/banner_bg.svg");
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
   background-image: url("/assets/infexn/technology/banner_bg.svg");
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
                  <div className="grid__col p-4 md:px-6 pb-2 md:pb-8">
                     <h3 className="font-medium text-white text-2xl md:text-5xl mt-0 md:mt-20">
                        Precision in <br />
                        infection detection
                     </h3>
                  </div>
                  <div className="grid__col block md:hidden">
                     <img
                        src="/assets/infexn/technology/banner_bg.svg"
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

function InfexnTechnology({ settings }: any) {
   return (
      <StyledHome
         bodyClassName="home"
         settings={settings}
         renderMenu={undefined}
      >
         <HeroSection />
         <NGSEnabledSection />
         <Section className="bg-gradient-to-r from-customGreen to-toBlue">
            <Section.Container className="container mx-auto py-8 md:py-16 px-2">
               <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 p-10 md:p-20">
                  <div className="flex-1">
                     <img
                        src={"/assets/infexn/technology/single_text.svg"}
                        alt={""}
                        className="w-80"
                     />
                  </div>
                  <div className="flex-1">
                     <img
                        src={"/assets/infexn/technology/tat_24_hrs.svg"}
                        alt={""}
                        className="w-80"
                     />
                  </div>
                  <div className="flex-1">
                     <img
                        src={"/assets/infexn/technology/ngs_technology.svg"}
                        alt={""}
                        className="w-80"
                     />
                  </div>
               </div>
            </Section.Container>
         </Section>
         <TechnologiesSection />
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

export default InfexnTechnology;
