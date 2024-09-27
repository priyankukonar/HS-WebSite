import AppTemplate from "../components/templates/AppTemplate";
import styled from "@emotion/styled";
import Section from "../components/atoms/Section";
import Head from "next/head";
import SectionGridPharmacogenomics from "../components/sections/SectionGridPharmacogenomics";
import pharmacogenomics from "../json/identifi/pharmacogenomics.json";
import advantagesOfPGX from "../json/identifi/advantagesOfPGX.json";
import whoShouldGetTested from "../json/identifi/whoShouldGetTested.json";
import partnerWithUs from "../json/identifi/partnerWithUs.json";
import testIndicates from "../json/identifi/testIndicates.json";
import testOnce from "../json/identifi/testOnce.json";
import AdvantagesOfPGXSection from "../components/sections/AdvantagesOfPGXSection";
import WhoShouldGetTestedSection from "../components/sections/WhoShouldGetTestedSection";
import HighlightsOfPGxComprehensiveSection from "../components/sections/HighlightsOfPGxComprehensiveSection";
import PartnerWithUsSection from "../components/sections/PartnerWithUsSection";
import TestIndicateSection from "../components/sections/TestIndicateSection";
import "swiper/css";
import TestOnceComponentSection from "../components/sections/TestOnceSection";
import ContactUsModal from "../components/ContactForm1";
import { useState } from "react";

const StyledHome = styled(AppTemplate)`
   .awards-carousel {
      img {
         --size: 100px;
         width: var(--size);
         height: var(--size);
      }
   }
`;

const StyledHeroSection = styled(Section)`
   background-position: center;
   background-image: url("/assets/identifi/identifi_bg.jpg");
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   .section__container {
      min-height: calc(85vh - var(--safe-top-padding, 100px));
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0px;
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
`;

const HeroSection = ({ setIsOpen }: any) => {
   return (
      <StyledHeroSection className="HeroSection " data-aos="fade-up">
         <Section.Container className="mx-auto px-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
               <div className="grid__col py-8 px-3 md:px-8">
                  <h3 className="md:whitespace-nowrap tracking-wider md:!leading-[3.25rem] font-bold text-customBlue text-2xl md:!text-5xl mb-4">
                     Tailored Treatment <br />
                     with PGx <br />
                     Comprehensive
                  </h3>
                  <div className="p-1 border-y-customBlue border-y-4 border-solid max-w-max mb-4">
                     <h3 className="whitespace-nowrap tracking-wider md:!leading-[3.25rem] font-normal text-red-600 text-2xl md:!text-5xl">
                        Using NGS
                     </h3>
                  </div>
                  <div
                     className="flex items-center gap-4"
                     onClick={() => setIsOpen(true)}
                  >
                     <a
                        target="_blank"
                        className="btn text-white text-center px-8 py-4 bg-customBlue rounded-md"
                     >
                        Contact Us
                     </a>
                  </div>
               </div>
               <div className="grid__col block md:hidden">
                  <img
                     src="/assets/identifi/identifi_mob_bg.jpg"
                     alt=""
                     className="w-full"
                  />
               </div>
            </div>
         </Section.Container>
      </StyledHeroSection>
   );
};

export default function IdentifiPage({ settings }: any) {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <StyledHome settings={settings} renderMenu={undefined}>
         <Head>
            <title>Identifi Page</title>
         </Head>
         <HeroSection setIsOpen={setIsOpen} />
         <SectionGridPharmacogenomics
            hide={false}
            items={pharmacogenomics.data}
         />
         <AdvantagesOfPGXSection hide={false} items={advantagesOfPGX.data} />
         <WhoShouldGetTestedSection
            hide={false}
            items={whoShouldGetTested.data}
         />
         <HighlightsOfPGxComprehensiveSection hide={false} />
         <PartnerWithUsSection hide={false} items={partnerWithUs.data} />
         <TestIndicateSection hide={false} items={testIndicates.data} />
         <TestOnceComponentSection
            hide={false}
            items={testOnce.data}
            setIsOpen={setIsOpen}
         />
         <ContactUsModal setIsOpen={setIsOpen} isOpen={isOpen} />
      </StyledHome>
   );
}
