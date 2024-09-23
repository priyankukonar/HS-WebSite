// @ts-nocheck
import Section from "../atoms/Section";
import Image from "next/image";

interface IWhoShouldGetTestedItem {
   thumbnailUrl: string;
   desc: string;
}

interface IWhoShouldGetTestedSectionProps {
   hide?: boolean;
   items: IWhoShouldGetTestedItem[];
}

const WhoShouldGetTestedSection = (props: IWhoShouldGetTestedSectionProps) => {
   return (
      <Section className="" hide={props.hide}>
         <Section.Container className="container mx-auto py-12 md:py-20 px-6 md:px-10">
            <div className="text-center">
               <h2 className="text-2xl font-bold text-customBlue mb-4">
                  Who should get tested?
               </h2>
            </div>
            <div className="flex flex-col md:flex-row items-stretch text-center gap-5">
               <div className="flex flex-col w-full md:w-1/4 bg-gray-100 rounded-3xl md:rounded-l-3xl md:rounded-br-none !shadow-[1px_4px_7px_3px_#00000024]">
                  <div className="bg-customBlue rounded-t-3xl md:rounded-tr-none text-white text-xl p-2 !shadow-[1px_4px_7px_3px_#00000024]">
                     Essential for:
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 h-full">
                     <div className="h-24 w-24 relative">
                        <Image
                           src={"/assets/identifi/whoShouldGetTested/All.png"}
                           alt={"ALL"}
                           layout="fill"
                           objectFit="contain"
                        />
                     </div>
                     <div className="text-black text-6xl  font-semibold">
                        ALL
                     </div>
                  </div>
               </div>
               <div className="flex flex-col w-full md:w-3/4 bg-gray-100 rounded-3xl md:rounded-r-3xl md:rounded-bl-none !shadow-[1px_4px_7px_3px_#00000024]">
                  <div className="bg-customBlue rounded-t-3xl md:rounded-tl-none text-white text-xl p-2 !shadow-[1px_4px_7px_3px_#00000024]">
                     Especially for:
                  </div>
                  <div className="flex flex-col gap-4 text-black p-4">
                     {props.items?.map((item, index) => (
                        <div
                           className="flex items-center text-left gap-4"
                           key={index}
                        >
                           <div className="h-10 w-10 min-w-10 relative">
                              <Image
                                 className="md:object-contain"
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
               </div>
            </div>
         </Section.Container>
      </Section>
   );
};

export default WhoShouldGetTestedSection;
