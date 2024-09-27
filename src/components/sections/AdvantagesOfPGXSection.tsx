import Section from "../atoms/Section";
import Image from "next/image";

interface IAdvantagesOfPGXItems {
   thumbnailUrl: string;
   desc: string;
}

interface IAdvantagesOfPGXSectionProps {
   hide: boolean;
   items: IAdvantagesOfPGXItems[];
   knowMore?: boolean;
}

const AdvantagesOfPGXSection = ({
   hide,
   knowMore,
   items,
}: IAdvantagesOfPGXSectionProps) => {
   return (
      <Section hide={hide}>
         <Section.Container className="mx-auto px-0 bg-customBlue text-white text-center">
            <div className="flex justify-center items-center p-10 font-semibold text-2xl">
               <h1>Advantages of PGx Comprehensive using NGS</h1>
            </div>
            <div className="flex justify-center items-center px-16 pb-16 flex-wrap md:flex-nowrap">
               <div className="flex flex-col w-[350px] mb-10 md:mb-0">
                  <h1 className="text-2xl font-semibold">
                     REDUCES
                     <br />
                     TRIAL & ERROR
                  </h1>
                  <p className="text-sm">
                     in appropriate drug and <br />
                     dosage selection
                  </p>
               </div>
               <div className="flex flex-wrap pt-10 md:pt-0 pl-0 md:pl-8 gap-10 border-t-solid border-t-2 border-t-red-600 md:border-t-0 md:border-l-solid md:border-l-2 md:border-l-red-600">
                  {items?.map((advantages, index) => (
                     <div
                        className="flex flex-col items-center flex-1"
                        key={index}
                     >
                        <div className="w-40 h-40 relative">
                           {advantages.thumbnailUrl && (
                              <Image
                                 src={advantages.thumbnailUrl}
                                 alt={advantages.desc}
                                 layout="fill"
                                 objectFit="contain"
                              />
                           )}
                        </div>
                        <p className="text-sm">{advantages.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
            {knowMore && (
               <div className="w-full flex items-center justify-center pb-16">
                  <a
                     href="/identifi"
                     className="items-center bg-white py-2 px-8 rounded-full border-8 border-gray-100 shadow-xl transition-all duration-300 flex items-center"
                     // onClick={() => setIsOpen(true)}
                  >
                     <span className="text-customBlue font-semibold">
                        Know More
                     </span>
                  </a>
               </div>
            )}
         </Section.Container>
      </Section>
   );
};

export default AdvantagesOfPGXSection;
