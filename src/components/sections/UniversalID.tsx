import Section from "../atoms/Section";

const UniversalIDSection = () => {
   return (
      <Section className="">
         <Section.Container className="container mx-auto py-8 md:py-16 px-2">
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
               <div className="flex-1">
                  <div className="text-customBlue1 text-3xl font-medium w-80">
                     <img src="/assets/infexn/universal_id/universal_id.png" />
                  </div>
                  <p className="text-customGray text-base mt-16">
                     The Universal IDTM kit enables bacterial 16S,  fungal ITS,
                     major respiratory viruses and ARG amplicon based DNA
                     enrichment through a simplified individual sample format.
                     The kit is compatible with the Oxford Nanopore Technology
                     (ONT) platform. The kit provides specific amplification of
                     the targeted regions with minimal off target amplification
                     leading to a high amount of specific data generation
                     through sequencing.
                  </p>
               </div>
               <div className="flex-1 flex items-center justify-center">
                  <img
                     src={"/assets/infexn/universal_id/software_box.svg"}
                     alt={""}
                     className="w-1/2 md:w-full"
                  />
               </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 mt-16">
               <img
                  src="/assets/infexn/universal_id/coverage.png"
                  className="w-full"
               />
            </div>
            <div className="mt-16">
               <h1 className="text-customBlue2 text-xl font-medium">
                  Highlights
               </h1>
               <div className="mt-12">
                  <img
                     src="/assets/infexn/universal_id/highlights.png"
                     className="w-full"
                  />
               </div>
            </div>
            <div className="flex flex-col mt-16">
               <h1 className="text-customBlue2 text-xl font-medium">
                  Useful for
               </h1>
               <div className="flex flex-wrap items-center justify-evenly gap-10 mt-12">
                  <div className="flex flex-col gap-4 items-center w-48 text-center">
                     <div className="bg-customBlue2 rounded-2xl w-32 p-8">
                        <img
                           src={"/assets/infexn/universal_id/clinicians.svg"}
                           alt={""}
                           className=""
                        />
                     </div>
                     <p className="text-customGray">Clinicians</p>
                  </div>
                  <div className="flex flex-col gap-4 items-center w-48 text-center">
                     <div className="bg-customBlue2 rounded-2xl w-32 p-8">
                        <img
                           src={
                              "/assets/infexn/universal_id/diagnostic_laboratories.svg"
                           }
                           alt={""}
                           className=""
                        />
                     </div>
                     <p className="text-customGray">Diagnostic laboratories</p>
                  </div>
                  <div className="flex flex-col gap-4 items-center w-48 text-center">
                     <div className="bg-customBlue2 rounded-2xl w-32 p-8">
                        <img
                           src={"/assets/infexn/universal_id/researchers.svg"}
                           alt={""}
                           className=""
                        />
                     </div>
                     <p className="text-customGray">Researchers</p>
                  </div>
               </div>
            </div>
            <div className="flex flex-col mt-16">
               <h1 className="text-customBlue2 text-xl font-medium">
                  Microbial DNA enrichment
               </h1>
               <p className="text-customGray w-full md:w-1/2 mt-12">
                  The Universal IDTM workflow uses a multiplexed amplification
                  protocol rigorously field-tested and optimized for
                  clinical samples.
               </p>
               <div className="flex flex-wrap items-center justify-evenly gap-10 mt-12">
                  <div className="flex flex-col gap-4 items-center w-48 text-center">
                     <div className="flex items-center bg-customBlue2 rounded-2xl w-32 h-32 p-8">
                        <img
                           src={"/assets/infexn/universal_id/optimised.svg"}
                           alt={""}
                           className=""
                        />
                     </div>
                     <p className="text-customGray">Optimised primer sets</p>
                  </div>
                  <div className="flex flex-col gap-4 items-center w-48 text-center">
                     <div className="flex items-center bg-customBlue2 rounded-2xl w-32 h-32 p-8">
                        <img
                           src={"/assets/infexn/universal_id/reactivity.svg"}
                           alt={""}
                           className=""
                        />
                     </div>
                     <p className="text-customGray">
                        Reduced primer cross reactivity
                     </p>
                  </div>
                  <div className="flex flex-col gap-4 items-center w-48 text-center">
                     <div className="flex items-center bg-customBlue2 rounded-2xl w-32 h-32 p-8">
                        <img
                           src={"/assets/infexn/universal_id/amplicon.svg"}
                           alt={""}
                           className=""
                        />
                     </div>
                     <p className="text-customGray">Uniform amplicon length</p>
                  </div>
                  <div className="flex flex-col gap-4 items-center w-48 text-center">
                     <div className="flex items-center bg-customBlue2 rounded-2xl w-32 h-32 p-8">
                        <img
                           src={"/assets/infexn/universal_id/downstream.svg"}
                           alt={""}
                           className=""
                        />
                     </div>
                     <p className="text-customGray">
                        Robust downstream sequencing results
                     </p>
                  </div>
               </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-10 mt-12 text-center">
               <a
                  href="#"
                  className="mt-6 inline-block bg-[#0575BC] text-white py-3 px-8 rounded-2xl shadow  transition duration-200"
               >
                  Order now
               </a>
            </div>
         </Section.Container>
      </Section>
   );
};

export default UniversalIDSection;
