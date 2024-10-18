import AppTemplate from "../components/templates/AppTemplate";
import { getSettings } from "../utils/settings";
import { getActiveNews } from "../utils/news";
import styled from "@emotion/styled";
import heroBg from "../assets/homepage-banner.png";
import Section from "../components/atoms/Section";
import NewWorldChanllengesSection from "@/components/sections/NewWorldChallengesSection";
import FoundingTeamSection from "@/components/sections/FoundingTeamSection";
import advisors from "../json/infexn/home/advisor.json";

const StyledHome = styled(AppTemplate)`
   .HeroSection {
      background-image: url("/assets/infexn/about/about_bg_banner.svg");
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
   background-image: url("/assets/infexn/about/about_bg_banner.svg");
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
            <Section.Container className="mx-auto !p-0 bg-gradient-to-r from-customGreen to-toBlue md:bg-none">
               <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="hidden md:block grid__col p-4 md:px-6 pb-0 md:pb-8"></div>
                  <div className="grid__col p-4 md:px-24">
                     <h3 className="hidden md:block font-semibold md:font-normal text-white text-3xl mt-0 md:mt-20">
                        Revolutionizing healthcare <br />
                        through <br />
                        innovation
                     </h3>
                     <h3 className="text-customBlue1 md:hidden font-semibold md:font-normal text-white text-2xl md:text-5xl mt-0 md:mt-20">
                        Revolutionizing healthcare <br />
                        through innovation
                     </h3>
                  </div>
                  <div className="grid__col block md:hidden">
                     <img
                        src="/assets/infexn/about/about_bg_banner.svg"
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

function InfexnAbout({ settings }: any) {
   return (
      <StyledHome
         bodyClassName="about"
         settings={settings}
         renderMenu={undefined}
      >
         <HeroSection />
         <NewWorldChanllengesSection />
         <FoundingTeamSection advisorData={advisors.data} />
      </StyledHome>
   );
}

export async function getStaticProps() {
   let news = getActiveNews();
   const settings = getSettings();
   return {
      props: {
         news: JSON.parse(JSON.stringify(news)),
         settings: JSON.parse(JSON.stringify(settings)),
      }, // will be passed to the page component as props
   };
}

export default InfexnAbout;
