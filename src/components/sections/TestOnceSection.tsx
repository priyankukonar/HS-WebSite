import Section from "../atoms/Section";
import styled from "@emotion/styled";
import Image from "next/Image";

interface ITestOnceItem {
   thumbnailUrl: string;
   desc: string;
}

interface ITestOnceSectionProps {
   hide?: boolean;
   items: ITestOnceItem[];
   setIsOpen: (val: boolean) => void;
}

const TestOnceSection = styled(Section)`
   background-position: center;
   background-image: url("/assets/identifi//testOnce/test_once_bg.jpg");
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

const TestOnceComponentSection = ({
   hide,
   items,
   setIsOpen,
}: ITestOnceSectionProps) => {
   return (
      <TestOnceSection hide={hide}>
         <Section.Container className="container mx-auto pt-12 md:pt-20 pb-24 md:pb-40 ">
            <div className="flex justify-end items-center lg:px-24 lg:py-12 md:px-12 md:py-6 px-6 py-6 lg:gap-24 gap-16">
               <div className="flex flex-col w-full md:w-1/2">
                  <div className="text-5xl text-customBlue font-semibold mb-2">
                     Test Once,
                  </div>
                  <div className="text-3xl text-customBlue font-semibold mb-8">
                     For A Lifetime of <br /> Personalized Medication
                  </div>
                  <div className="mb-8">
                     {items.length > 0 &&
                        items.map((item, index) => (
                           <div
                              className="flex text-lg text-customBlue mb-4 items-center"
                              key={index}
                           >
                              <div className="h-12 w-12 relative mr-4">
                                 <Image
                                    src={item.thumbnailUrl}
                                    alt={item.desc}
                                    layout="fill"
                                    objectFit="contain"
                                 />
                              </div>
                              <p>{item.desc}</p>
                           </div>
                        ))}
                  </div>
                  <div className="flex items-center">
                     <div className="flex flex-wrap md:flex-nowrap gap-4">
                        <button className="bg-customBlue py-2 px-6 rounded-full shadow-xl border-8 border-gray-100 transition-all duration-300 flex items-center">
                           <span className="text-white font-semibold mr-2">
                              Download Brochure
                           </span>
                           <div className="h-6 w-6 min-w-6 relative">
                              <Image
                                 src={"/assets/identifi/download.png"}
                                 alt={"download"}
                                 layout="fill"
                                 objectFit="contain"
                              />
                           </div>
                        </button>

                        <button
                           className="bg-customBlue py-2 px-6 rounded-full shadow-xl border-8 border-gray-100 transition-all duration-300 flex items-center"
                           onClick={() => setIsOpen(true)}
                        >
                           <div className="h-6 w-6 min-w-6 relative mr-2">
                              <Image
                                 src={"/assets/identifi/book_now.png"}
                                 alt={"download"}
                                 layout="fill"
                                 objectFit="contain"
                              />
                           </div>
                           <span className="text-white font-semibold">
                              Book Now
                           </span>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </Section.Container>
      </TestOnceSection>
   );
};

export default TestOnceComponentSection;
