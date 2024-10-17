// @ts-nocheck
import AppTemplate from "../components/templates/AppTemplate";
import { getSettings } from "../utils/settings";
import { getActiveNews } from "../utils/news";
import styled from "@emotion/styled";
import Section from "../components/atoms/Section";
import BenefitOfFranchisee from "../components/sections/BenefitsOfFranchisee";
import best_suited from "../json/franchisee/best_suited.json";
import OurProductsSection from "../components/sections/OurProductsSections";
import ContactUsFormSection from "../components/sections/ContactUsFormSection";

const StyledHome = styled(AppTemplate)`
   .HeroSection {
      background-image: url("/assets/franchise/banner-web.jpg");
      background-size: 60%;
      background-repeat: no-repeat;
      background-position: right center;
   }
   .BestSuitedForSection {
      background-image: url("/assets/franchise/best-suited-bg.jpg");
      background-size: 60%;
      background-repeat: no-repeat;
      background-position: right center;
   }
`;

const StyledHeroSection = styled(Section)`
   background-repeat: no-repeat;
   background-position: right;
   background-size: contain;
   background-image: url("/assets/franchise/banner-web.jpg");
   background-repeat: no-repeat;
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
   @media (min-width: 1600px) {
      background-position: center;
      .section__container {
         min-height: calc(100vh - var(--safe-top-padding, 160px));
      }
   }
`;

const StyleBestSuitedSection = styled(Section)`
   background-repeat: no-repeat;
   background-position: right;
   background-size: cover;
   background-image: url("/assets/franchise/best-suited-bg.jpg");
   background-repeat: no-repeat;
   .section__container {
      display: flex;
      flex-direction: column;
      justify-content: center;
   }
   @media (max-width: 768px) {
      background-position: bottom;
      background-size: cover;
      .section__container {
         display: flex;
         flex-direction: column;
         justify-content: flex-start;
      }
   }
   @media (min-width: 1600px) {
      background-position: center;
      .section__container {
         min-height: calc(100vh - var(--safe-top-padding, 160px));
      }
   }
`;

const HeroSection = ({ scrollToDiv }) => {
   return (
      <StyledHeroSection className="HeroSection " data-aos="fade-up">
         <Section.Container className="mx-auto px-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
               <div className="grid__col px-3 py-8">
                  <div className="p-0 md:p-8 rounded-lg max-w-sm mx-auto">
                     <h2 className="text-5xl font-bold text-customBlue mb-4">
                        Bring NGS <br />
                        To Your Lab
                     </h2>
                     <p className="text-xl text-gray-800 mb-6">
                        HaystackAnalytics is bringing NGS-based clinical
                        products to every diagnostic lab in India
                     </p>
                     <a
                        onClick={scrollToDiv}
                        className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 border-4 border-white shadow-lg"
                     >
                        Become A Franchisee
                     </a>
                     <p className="text-xl text-gray-800 mt-4">
                        Earn up to <span className="font-bold">50%</span> margin
                        per test
                     </p>
                  </div>
               </div>
               <div className="grid__col block md:hidden">
                  <img
                     src="/assets/franchise/banner-mob.jpg"
                     alt=""
                     className="w-full"
                  />
               </div>
            </div>
         </Section.Container>
      </StyledHeroSection>
   );
};

const BestSuitedForSection = ({ scrollToDiv }) => {
   return (
      <StyleBestSuitedSection
         className="BestSuitedForSection "
         data-aos="fade-up"
      >
         <Section.Container className="container mx-auto py-8 md:py-16">
            <h2 className="text-center text-white text-3xl font-semibold mb-8">
               BEST SUITED FOR
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
               {best_suited?.data?.map((data) => (
                  <div className="bg-white rounded-lg shadow-md flex flex-col items-center w-52">
                     <img
                        src={data.thumbnailUrl}
                        alt="Diagnostic Labs"
                        className="h-20 m-4"
                     />
                     <p className="text-center rounded-b-lg w-full p-2 bg-customGray text-customBlue font-medium">
                        {data.title}
                     </p>
                  </div>
               ))}
            </div>
            <div className="w-full flex-col items-center justify-center text-center w-[30rem] flex">
               <a
                  onClick={scrollToDiv}
                  className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 border-4 border-white shadow-lg"
               >
                  Become A Franchisee
               </a>
            </div>
         </Section.Container>
      </StyleBestSuitedSection>
   );
};

function Franchise({ Component, pageProps, news, settings }) {
   const scrollToDiv = () => {
      const element = document.getElementById("contactUsSection");

      if (element) {
         element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
   };

   return (
      <StyledHome bodyClassName="home" settings={settings}>
         <HeroSection scrollToDiv={scrollToDiv} />
         <BenefitOfFranchisee scrollToDiv={scrollToDiv} />
         <BestSuitedForSection scrollToDiv={scrollToDiv} />
         <ContactUsFormSection />
         <OurProductsSection />
         <div className="w-full h-2 bg-[#4faf57]"></div>
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

export default Franchise;
