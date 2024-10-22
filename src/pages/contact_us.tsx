import AppTemplate from "../components/templates/AppTemplate";
import { getSettings } from "../utils/settings";
import styled from "@emotion/styled";
import Section from "../components/atoms/Section";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import ContactUsFormSection from "@/components/sections/ContactUsFormSection";

const StyledHome = styled(AppTemplate)`
   .HeroSection {
      background-image: url("/assets/infexn/contact_us/banner_bg.svg");
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
   background-image: url("/assets/infexn/contact_us/banner_bg.svg");
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
         <StyledHeroSection className="HeroSection " data-aos="fade-up">
            <Section.Container className="mx-auto !p-0 bg-[#182b56] md:bg-transparent">
               <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="grid__col p-4">
                     <h3 className="font-medium text-white text-2xl md:text-5xl mt-0 md:mt-20">
                        Connect <br /> with us
                     </h3>
                  </div>
                  <div className="grid__col block md:hidden">
                     <img
                        src="/assets/infexn/contact_us/banner_bg.svg"
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

function InfexnContactUs({ settings }: any) {
   return (
      <StyledHome
         bodyClassName="home"
         settings={settings}
         renderMenu={undefined}
      >
         <HeroSection />
         <Section className="">
            <Section.Container className="container mx-auto py-8 md:py-16 px-2">
               <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex flex-col gap-8 text-customBlue1 flex-1">
                     <div>
                        <h1 className="text-lg font-semibold">Partner</h1>
                        <h1 className="text-lg">Number: xxxxxxxxxx</h1>
                        <h1 className="text-lg">Email: xxxxxxxxxxxx</h1>
                     </div>
                     <div>
                        <h1 className="text-lg font-semibold">Career</h1>
                        <h1 className="text-lg">Number: xxxxxxxxxx</h1>
                        <h1 className="text-lg">Email: xxxxxxxxxxxx</h1>
                     </div>
                  </div>
                  <div className="flex flex-col gap-8 text-customBlue1 flex-1">
                     <div>
                        <h1 className="text-lg font-semibold">
                           Office Address
                        </h1>
                        <p className="text-lg">
                           6th Floor, 6012, Rahul Bajaj Technology Innovation
                           Centre, YP Road, IIT Bombay, Nr Victor Menezes
                           Convention Centre, Powai, Mumbai - 400076
                        </p>
                     </div>
                     <div>
                        <h1 className="text-lg font-semibold">Lab Address </h1>
                        <p className="text-lg">
                           H-22, 23 Akshar Business Park, Sector 25, Turbhe,
                           Navi Mumbai 400703
                        </p>
                     </div>
                  </div>
               </div>
               <div className="mt-16">
                  <img src="/assets/infexn/contact_us/map.svg" />
               </div>
            </Section.Container>
         </Section>
         <ContactUsFormSection />
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

export default InfexnContactUs;
