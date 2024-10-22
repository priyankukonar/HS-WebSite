import AppTemplate from "../components/templates/AppTemplate";
import { getSettings } from "../utils/settings";
import styled from "@emotion/styled";
import Section from "../components/atoms/Section";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import OmegaIDSection from "@/components/sections/OmegaIDSection";

const StyledHome = styled(AppTemplate)`
   .HeroSection {
      background-image: url("/assets/infexn/omega_id/banner_bg.svg");
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
   background-image: url("/assets/infexn/omega_id/banner_bg.svg");
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
         <div className="h-[10px] bg-gradient-to-r from-customGreen to-toBlue" />
         <StyledHeroSection className="HeroSection " data-aos="fade-up">
            <Section.Container className="mx-auto !p-0 bg-[#1e396c] md:bg-transparent">
               <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="grid__col p-4">
                     <h3 className="font-medium text-white text-2xl md:text-5xl mt-0 md:mt-20">
                        Transforming data
                        <br /> into decisions
                     </h3>
                  </div>
                  <div className="grid__col block md:hidden">
                     <img
                        src="/assets/infexn/omega_id/banner_bg.svg"
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

function InfexnOmegaID({ settings }: any) {
   return (
      <StyledHome
         bodyClassName="home"
         settings={settings}
         renderMenu={undefined}
      >
         <HeroSection />
         <OmegaIDSection />
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

export default InfexnOmegaID;
