import Section from "../atoms/Section";

const TechnologiesSection = () => {
   return (
      <Section className="">
         <Section.Container className="container mx-auto py-8 md:py-16 px-2">
            <div className="flex item-center justify-center">
               <img
                  src={"/assets/infexn/technology/infexn_covers.png"}
                  alt={""}
                  className="w-full md:w-1/2"
               />
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start mt-24">
               <h1 className="text-3xl font-medium text-customBlue1 mt-4">
                  Faster results,
                  <br /> informed decisions
               </h1>
               <div className="md:pl-40 w-full md:w-1/2">
                  <img
                     src={"/assets/infexn/technology/sample_cycle.png"}
                     alt={""}
                     className="w-full"
                  />
               </div>
            </div>
            <div className="flex flex-col mt-24">
               <h1 className="text-3xl font-medium text-customBlue1">
                  infexnTM workflow
               </h1>
               <div className="w-full mt-12">
                  <img
                     src={"/assets/infexn/technology/infexn_workflow.svg"}
                     alt={""}
                     className="w-full"
                  />
               </div>
            </div>
            <div className="flex flex-col mt-24">
               <h1 className="text-3xl font-medium text-customBlue1">
                  Why choose infexnTM
               </h1>
               <div className="flex flex-wrap items-center justify-evenly gap-10 mt-12">
                  <div className="flex flex-col gap-4 items-center w-48 text-center">
                     <div className="bg-customBlue1 rounded-2xl w-32 p-8">
                        <img
                           src={
                              "/assets/infexn/technology/sample_sequencing.svg"
                           }
                           alt={""}
                           className=""
                        />
                     </div>
                     <p className="text-customGray">
                        Direct from sample sequencing
                     </p>
                  </div>
                  <div className="flex flex-col gap-4 items-center w-48 text-center">
                     <div className="bg-customBlue1 rounded-2xl w-32 p-8">
                        <img
                           src={"/assets/infexn/technology/tested_workflow.svg"}
                           alt={""}
                           className=""
                        />
                     </div>
                     <p className="text-customGray">
                        Clinically validated and field tested workflow
                     </p>
                  </div>
                  <div className="flex flex-col gap-4 items-center w-48 text-center">
                     <div className="bg-customBlue1 rounded-2xl w-32 p-8">
                        <img
                           src={"/assets/infexn/technology/sample_types.svg"}
                           alt={""}
                           className=""
                        />
                     </div>
                     <p className="text-customGray">
                        Applicable for all sample types
                     </p>
                  </div>
               </div>
               <div className="flex flex-wrap items-center justify-evenly gap-10 mt-12">
                  <div className="flex flex-col gap-4 items-center w-48 text-center">
                     <div className="bg-customBlue1 rounded-2xl w-32 p-8">
                        <img
                           src={"/assets/infexn/technology/data_analysis.svg"}
                           alt={""}
                           className=""
                        />
                     </div>
                     <p className="text-customGray">Automated data Analysis</p>
                  </div>
                  <div className="flex flex-col gap-4 items-center w-48 text-center">
                     <div className="bg-customBlue1 rounded-2xl w-32 p-8">
                        <img
                           src={"/assets/infexn/technology/bioinformatics.svg"}
                           alt={""}
                           className=""
                        />
                     </div>
                     <p className="text-customGray">
                        Proprietary bioinformatics pipeline
                     </p>
                  </div>
                  <div className="flex flex-col gap-4 items-center w-48 text-center">
                     <div className="bg-customBlue1 rounded-2xl w-32 p-8">
                        <img
                           src={
                              "/assets/infexn/technology/report_in_24_hrs.svg"
                           }
                           alt={""}
                           className=""
                        />
                     </div>
                     <p className="text-customGray">
                        Actionable, easy to read report in 24 hours
                     </p>
                  </div>
               </div>
            </div>
            <div className="flex flex-col mt-24">
               <h1 className="text-3xl font-medium text-customBlue1">
                  infexnTM offers
               </h1>
               <p className="w-full md:w-1/2 text-customGray mt-6 p-2">
                  infexnTM is powered by HaystackAnalytics’ proprietary products
                  Universal IDTM and Ω IDTM.
               </p>
               <div className="flex flex-wrap items-center justify-center gap-10 mt-12 text-center">
                  <a
                     href="#"
                     className="w-72 mt-6 inline-block bg-[#0575BC] text-white py-3 px-8 rounded-2xl shadow  transition duration-200"
                  >
                     Universal IDTM Kit (CE IVD)
                  </a>
                  <a
                     href="#"
                     className="w-72 mt-6 inline-block bg-[#22AE53] text-white py-3 px-8 rounded-2xl shadow  transition duration-200"
                  >
                     Ω IDTM
                  </a>
               </div>
            </div>
         </Section.Container>
      </Section>
   );
};

export default TechnologiesSection;
