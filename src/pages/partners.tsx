import AppTemplate from "../components/templates/AppTemplate";
import { getSettings } from "../utils/settings";
import styled from "@emotion/styled";
import Section from "../components/atoms/Section";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const StyledHome = styled(AppTemplate)`
   .HeroSection {
      background-image: url("/assets/infexn/partners/banner_bg.svg");
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
   background-image: url("/assets/infexn/partners/banner_bg.svg");
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
            <Section.Container className="mx-auto !p-0 bg-[#1e396c] md:bg-transparent">
               <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="grid__col p-4">
                     <h3 className="font-medium text-white text-2xl md:text-5xl mt-0 md:mt-20">
                        Partner with
                        <br /> leaders in genomics
                     </h3>
                  </div>
                  <div className="grid__col block md:hidden">
                     <img
                        src="/assets/infexn/partners/banner_bg.svg"
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

function InfexnPartners({ settings }: any) {
   return (
      <StyledHome
         bodyClassName="home"
         settings={settings}
         renderMenu={undefined}
      >
         <HeroSection />
         <Section className="">
            <Section.Container className="container mx-auto py-8 md:py-16 px-2">
               <h1 className="text-3xl font-medium text-customBlue1">
                  For Doctors
               </h1>
               <div className="rounded-2xl border-2 border-black mt-16">
                  <div className="flex flex-col md:flex-row items-center justify-center bg-[#D8EEFE] rounded-t-2xl">
                     <div className="rounded-2xl w-1/2">
                        <img
                           src="/assets/infexn/partners/doctors.png"
                           className="rounded-2xl"
                        />
                     </div>
                     <p className="w-full md:w-1/2 text-customGray p-4">
                        Our pioneering solution delivers swift and comprehensive
                        infection screening outcomes in just 24 hours,
                        empowering healthcare professionals to make timely
                        treatment choices that result in improved patient
                        outcomes.
                     </p>
                  </div>
                  <div className="text-center font-medium text-lg text-customBlue1 mt-8">
                     In addition to improving patient outcomes, infexnTM guides
                     doctors in a multitude of ways.
                  </div>
                  <div className="flex flex-col md:flex-row gap-10 mt-8 px-8">
                     <div className="mt-4 py-4 pl-4 flex-1">
                        <div className="flex flex-row gap-4 justify-between items-end border-b-2 border-customBlue1 pb-2 mb-4 h-16">
                           <p>Early detection of pathogens and key ARGs</p>
                           <div className="flex w-8">
                              <img
                                 src={"/assets/infexn/home/correct_icon.png"}
                                 alt={""}
                                 className="!w-8 min-w-8"
                              />
                           </div>
                        </div>
                        <div className="flex flex-row gap-4 justify-between items-end border-b-2 border-customBlue1 pb-2 mb-4 h-16">
                           <p>
                              Upgrade to one comprehensive test for all
                              infections
                           </p>
                           <div className="flex w-8">
                              <img
                                 src={"/assets/infexn/home/correct_icon.png"}
                                 alt={""}
                                 className="!w-8 min-w-8"
                              />
                           </div>
                        </div>
                        <div className="flex flex-row gap-4 justify-between items-end border-b-2 border-customBlue1 pb-2 mb-4 h-16">
                           <p>TAT of 24 hours</p>
                           <div className="flex w-8">
                              <img
                                 src={"/assets/infexn/home/correct_icon.png"}
                                 alt={""}
                                 className="!w-8 min-w-8"
                              />
                           </div>
                        </div>
                     </div>
                     <div className="mt-4 py-4 pl-4 flex-1">
                        <div className="flex flex-row gap-4 justify-between items-end border-b-2 border-customBlue1 pb-2 mb-4 h-16">
                           <p>
                              Reduces dependency on empiric treatment and
                              empowers antimicrobial stewardship{" "}
                           </p>
                           <div className="flex w-8">
                              <img
                                 src={"/assets/infexn/home/correct_icon.png"}
                                 alt={""}
                                 className="!w-8 min-w-8"
                              />
                           </div>
                        </div>
                        <div className="flex flex-row gap-4 justify-between items-end border-b-2 border-customBlue1 pb-2 mb-4 h-16">
                           <p>
                              Provides a concise report with a gamut of
                              clinically relevant data
                           </p>
                           <div className="flex w-8">
                              <img
                                 src={"/assets/infexn/home/correct_icon.png"}
                                 alt={""}
                                 className="!w-8 min-w-8"
                              />
                           </div>
                        </div>
                        <div className="flex flex-row gap-4 justify-between items-end border-b-2 border-customBlue1 pb-2 mb-4 h-16">
                           <p>Supports effective patient management</p>
                           <div className="flex w-8">
                              <img
                                 src={"/assets/infexn/home/correct_icon.png"}
                                 alt={""}
                                 className="!w-8 min-w-8"
                              />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-10 text-center p-4">
                     <a
                        href="#"
                        className="my-8 inline-block bg-customBlue1 text-white py-3 px-8 rounded-2xl shadow  transition duration-200"
                     >
                        Test now
                     </a>
                  </div>
               </div>
            </Section.Container>
         </Section>
         <Section className="">
            <Section.Container className="container mx-auto py-8 md:py-16 px-2">
               <h1 className="text-3xl font-medium text-customBlue1">
                  For Hospitals and diagnostic labs
               </h1>
               <div className="rounded-2xl border-2 border-black mt-16">
                  <div className="flex flex-col md:flex-row items-center justify-center bg-[#D8EEFE] rounded-t-2xl">
                     <p className="md:w-1/2 text-customGray p-4 w-full hidden md:block">
                        By partnering with us, you can position your diagnostic
                        centre as the most advanced and cutting-edge facility in
                        your city and provide the latest in NGS-enabled testing
                        and diagnosis.
                     </p>
                     <div className="rounded-2xl w-1/2">
                        <img
                           src="/assets/infexn/partners/diagnostic_labs.png"
                           className="rounded-2xl"
                        />
                     </div>
                     <p className="md:w-1/2 text-customGray p-4 w-full md:hidden">
                        By partnering with us, you can position your diagnostic
                        centre as the most advanced and cutting-edge facility in
                        your city and provide the latest in NGS-enabled testing
                        and diagnosis.
                     </p>
                  </div>

                  <div className="flex flex-col md:flex-row gap-10 mt-8 px-8">
                     <div className="mt-4 py-4 pl-4 flex-1">
                        <div className="flex flex-row gap-4 justify-between items-end border-b-2 border-customBlue1 pb-2 mb-4 h-16">
                           <p>Become the primary hub for genome sequencing</p>
                           <div className="flex w-8">
                              <img
                                 src={"/assets/infexn/home/correct_icon.png"}
                                 alt={""}
                                 className="!w-8 min-w-8"
                              />
                           </div>
                        </div>
                        <div className="flex flex-row gap-4 justify-between items-end border-b-2 border-customBlue1 pb-2 mb-4 h-16">
                           <p>Advanced diagnostics</p>
                           <div className="flex w-8">
                              <img
                                 src={"/assets/infexn/home/correct_icon.png"}
                                 alt={""}
                                 className="!w-8 min-w-8"
                              />
                           </div>
                        </div>
                        <div className="flex flex-row gap-4 justify-between items-end border-b-2 border-customBlue1 pb-2 mb-4 h-16">
                           <p>One test for all infections</p>
                           <div className="flex w-8">
                              <img
                                 src={"/assets/infexn/home/correct_icon.png"}
                                 alt={""}
                                 className="!w-8 min-w-8"
                              />
                           </div>
                        </div>
                     </div>
                     <div className="mt-4 py-4 pl-4 flex-1">
                        <div className="flex flex-row gap-4 justify-between items-end border-b-2 border-customBlue1 pb-2 mb-4 h-16">
                           <p>
                              Covers all bacterial, viral (respiratory) and
                              fungal pathogens & clinically-relevant ARGs
                           </p>
                           <div className="flex w-8">
                              <img
                                 src={"/assets/infexn/home/correct_icon.png"}
                                 alt={""}
                                 className="!w-8 min-w-8"
                              />
                           </div>
                        </div>
                        <div className="flex flex-row gap-4 justify-between items-end border-b-2 border-customBlue1 pb-2 mb-4 h-16">
                           <p>Low initial resource investment</p>
                           <div className="flex w-8">
                              <img
                                 src={"/assets/infexn/home/correct_icon.png"}
                                 alt={""}
                                 className="!w-8 min-w-8"
                              />
                           </div>
                        </div>
                        <div className="flex flex-row gap-4 justify-between items-end border-b-2 border-customBlue1 pb-2 mb-4 h-16">
                           <p>High margins, future ready</p>
                           <div className="flex w-8">
                              <img
                                 src={"/assets/infexn/home/correct_icon.png"}
                                 alt={""}
                                 className="!w-8 min-w-8"
                              />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-10 text-center p-4">
                     <a
                        href="#"
                        className="my-8 inline-block bg-customBlue1 text-white py-3 px-8 rounded-2xl shadow  transition duration-200"
                     >
                        Partner now
                     </a>
                  </div>
               </div>
            </Section.Container>
         </Section>
         <Section className="">
            <Section.Container className="container mx-auto py-8 md:py-16 px-2">
               <h1 className="text-3xl font-medium text-customBlue1">
                  Bring infexnTM to your own lab
               </h1>
               <p className="text-gray text-sm mt-8 w-full md:w-1/2">
                  Upgrade your existing laboratory to an advanced genomics
                  facility with HaystackAnalytics’ support. With minimal
                  investment you will be able to integrate infexn and other
                  clinical metagenomics workflows seamlessly into your
                  infrastructure making it accessible and affordable for your
                  customers.
               </p>
               <div className="flex flex-wrap items-center justify-start gap-10 text-center">
                  <a
                     href="#"
                     className="my-8 inline-block bg-customBlue1 text-white py-3 px-8 rounded-2xl shadow  transition duration-200"
                  >
                     Set up now
                  </a>
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

export default InfexnPartners;
