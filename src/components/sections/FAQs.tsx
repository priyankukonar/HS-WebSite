import Section from "../atoms/Section";
import faqs from "../../json/faqs.json";
import { useState } from "react";

const FAQsSection = () => {
   const [active, setActive] = useState<number | null>(null);

   const handleClick = (id: number) => {
      setActive(id === active ? null : id);
   };
   return (
      <Section className="bg-gray-100">
         <Section.Container className="container mx-auto py-8 md:py-16 px-2">
            <div className="">
               <h1 className="text-customBlue1 text-3xl font-medium">FAQs</h1>
               {faqs.data.map((faq) => (
                  <div className="py-8 border-b-2 border-customBlue1">
                     <div className="flex flex-row justify-between">
                        <h1 className="text-customBlue1 text-xl font-normal">
                           {faq.ques}
                        </h1>
                        <div className="" onClick={() => handleClick(faq.id)}>
                           {active === faq.id ? (
                              <img
                                 src="/assets/infexn/resources/minus.svg"
                                 className="w-8 h-8"
                              />
                           ) : (
                              <img
                                 src="/assets/infexn/resources/plus.svg"
                                 className="w-8 h-8"
                              />
                           )}
                        </div>
                     </div>
                     {active === faq.id && (
                        <p className="text-customGray text-base font-normal mt-6">
                           {faq.ans}
                        </p>
                     )}
                  </div>
               ))}
            </div>
         </Section.Container>
      </Section>
   );
};

export default FAQsSection;
