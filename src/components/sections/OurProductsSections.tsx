import Section from "../atoms/Section";

const OurProductsSection = () => {
   return (
      <Section className="" data-aos="fade-up">
         <Section.Container className="container mx-auto py-8 md:py-16">
            <h2 className="text-center text-2xl font-bold text-customBlue mb-8">
               OUR PRODUCTS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="bg-white rounded-lg">
                  <div className="flex flex-col justify-center mb-6">
                     <img
                        src="/assets/franchise/identifi.png"
                        alt="Identifi"
                        className="w-full"
                     />
                     <div className="flex flex-row gap-2 p-2 items-center justify-center relative top-[-100px]">
                        <div className="flex-1 flex items-center justify-center">
                           <a
                              href="#"
                              className="inline-block bg-[#2f3184] text-white px-3 py-1 rounded-full border-4 border-white shadow-lg"
                           >
                              Know More
                           </a>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                           <a
                              href="#"
                              className="inline-block bg-[#2f3184] text-white px-3 py-1 rounded-full border-4 border-white shadow-lg"
                           >
                              Watch Video
                           </a>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="bg-white rounded-lg">
                  <div className="flex flex-col justify-center mb-6">
                     <img
                        src="/assets/franchise/infexn_using_ngs.png"
                        alt="Infexn"
                        className="w-full"
                     />
                     <div className="flex flex-row gap-2 p-2 items-center justify-center relative top-[-100px]">
                        <div className="flex-1 flex items-center justify-center">
                           <a
                              href="#"
                              className="inline-block bg-[#8ac36b] text-white px-3 py-1 rounded-full border-4 border-white shadow-lg"
                           >
                              Know More
                           </a>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                           <a
                              href="#"
                              className="inline-block bg-[#8ac36b] text-white px-3 py-1 rounded-full border-4 border-white shadow-lg"
                           >
                              Watch Video
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Section.Container>
      </Section>
   );
};

export default OurProductsSection;
