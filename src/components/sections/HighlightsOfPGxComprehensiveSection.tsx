import Section from "../atoms/Section";
import Image from "next/Image";
import styled from "@emotion/styled";

interface IHighlightsOfPGxComprehensiveSectionProps {
   hide?: boolean;
}

const StyledHeroSection = styled(Section)`
   background-position: center;
   background-image: url("/assets/identifi/highlightsOfPGx/highlightsImage.png");
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   .section__container {
      min-height: calc(45vh - var(--safe-top-padding, 100px));
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0px;
   }
   @media (max-width: 768px) {
      // background-image: none;
      // background-size: contain;
      // background-position: bottom;
      .section__container {
         min-height: calc(45vh - var(--safe-top-padding, 100px));
         display: flex;
         flex-direction: column;
         justify-content: flex-start;
      }
   }
`;

const HeroSection = ({ hide }) => {
   return (
      <StyledHeroSection
         className="HeroSection shadow-lg hidden md:block"
         data-aos="fade-up"
         hide={hide}
      >
         <Section.Container className="mx-auto px-0"></Section.Container>
      </StyledHeroSection>
   );
};

const HighlightsOfPGxComprehensiveSection = (
   props: IHighlightsOfPGxComprehensiveSectionProps
) => {
   return (
      <>
         <div className="text-center">
            <h2 className="text-3xl font-bold text-customBlue mb-2 md:mb-8">
               Highlights of PGx Comprehensive using NGS
            </h2>
         </div>
         <HeroSection hide={props.hide} />
         <Section className="block md:hidden" hide={props.hide}>
            <Section.Container className="container mx-auto py-4 md:py-12 !px-0 md:py-20 ">
               <div className="flex flex-col md:flex-row justify-between items-center bg-customBlue text-white md:pl-4">
                  <div className="md:w-2/3 text-center md:text-left bg-white text-customBlue lg:pl-32 lg:py-8 px-4 md:p-10">
                     <p className="text-lg">
                        identifi PGx Comprehensive harnesses the power of Next
                        Generation Sequencing (NGS) to identify genetic variants
                        and provides actionables across
                     </p>
                  </div>

                  <div className="flex md:flex-row flex-col md:items-center justify-start w-full p-6 md:p-0">
                     <div className="md:text-center flex-1 mb-2 md:mb-0">
                        <p className="text-4xl font-bold">90+</p>
                        <p className="text-sm">Medications</p>
                     </div>

                     <div className="md:text-center flex-1 mb-2 md:mb-0">
                        <p className="text-4xl font-bold">15</p>
                        <p className="text-sm">Drug classes</p>
                     </div>

                     <div className="md:text-center flex-1 mb-2 md:mb-0">
                        <p className="text-4xl font-bold">18</p>
                        <p className="text-sm">CPIC drug responses</p>
                     </div>

                     <div className="md:text-center flex-1">
                        <p className="text-4xl font-bold">400+</p>
                        <p className="text-sm">Unique alleles</p>
                     </div>
                  </div>
               </div>
            </Section.Container>
         </Section>
      </>
   );
};

export default HighlightsOfPGxComprehensiveSection;
