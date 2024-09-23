// @ts-nocheck
import Section from "../atoms/Section";
import Image from "next/image";

interface IPartnerWithUsItem {
   thumbnailUrl: string;
   title: string;
}

interface IPartnerWithUsSectionProps {
   hide?: boolean;
   items: IPartnerWithUsItem[];
}

const PartnerWithUsSection = (props: IPartnerWithUsSectionProps) => {
   return (
      <Section className="" hide={props.hide}>
         <Section.Container className="container mx-auto py-12 md:py-20 px-6 md:px-10">
            <div className="text-center">
               <h2 className="text-2xl font-bold text-customBlue mb-4">
                  Partner with us
               </h2>
            </div>
            <div className="flex flex-col md:flex-row items-stretch justify-evenly text-center gap-10 md:gap-20 px-10 md:px-20 py-4 md:py-10">
               {props.items.length > 0 &&
                  props.items.map((item) => (
                     <div className="flex flex-1 flex-col bg-gray-100 rounded-3xl !shadow-[1px_4px_7px_3px_#00000024]">
                        <div className="bg-customBlue rounded-t-3xl text-white text-xl p-2 !shadow-[1px_4px_7px_3px_#00000024]">
                           {item.title}
                        </div>
                        <div className="flex flex-col items-center justify-center p-16 h-full">
                           <div className="h-32 w-32 min-w-32 relative">
                              <Image
                                 src={item.thumbnailUrl}
                                 alt={item.title}
                                 layout="fill"
                                 objectFit="contain"
                              />
                           </div>
                        </div>
                     </div>
                  ))}
            </div>
         </Section.Container>
      </Section>
   );
};

export default PartnerWithUsSection;
