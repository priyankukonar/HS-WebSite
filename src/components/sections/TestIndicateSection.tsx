// @ts-nocheck
import Section from "../atoms/Section";
import Image from "next/image";

interface ITestIndicateItem {
   thumbnailUrl: string;
   desc: string;
}

interface ITestIndicateSectionProps {
   hide?: boolean;
   items: ITestIndicateItem[];
}

const TestIndicateSection = (props: ITestIndicateSectionProps) => {
   return (
      <Section className="" hide={props.hide}>
         <Section.Container className="container mx-auto py-12 md:py-20 px-6 md:px-10">
            <div className="text-center">
               <h2 className="text-2xl font-bold text-customBlue mb-4">
                  The test indicates
               </h2>
            </div>

            <div className="flex flex-col md:flex-row items-stretch justify-evenly text-center px-10 md:px-20 py-4 md:py-10">
               {props.items.length > 0 &&
                  props.items.map((item, index) => (
                     <div
                        className="flex flex-col items-center p-4 flex-1"
                        key={index}
                     >
                        <div className="h-32 w-32 min-w-32 relative mb-4">
                           <Image
                              src={item.thumbnailUrl}
                              alt={item.title}
                              layout="fill"
                              objectFit="contain"
                           />
                        </div>
                        <div className="text-black">{item.desc}</div>
                     </div>
                  ))}
            </div>
         </Section.Container>
      </Section>
   );
};

export default TestIndicateSection;
