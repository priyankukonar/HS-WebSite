import Section from "../atoms/Section";

const OmegaIDSection = () => {
   return (
      <Section className="">
         <Section.Container className="container mx-auto py-8 md:py-16 px-2">
            <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20">
               <div className="flex-1">
                  <div className="text-customGreen1 text-3xl font-medium">
                     Ω-IDTM
                  </div>
                  <p className="text-customGray text-base mt-16">
                     {
                        "The voluminous raw data generated from microbial genome sequencing requires a robust data analysis platform for presentation in a clinically actionable form. HAPL has developed a proprietary bioinformatics software that facilitates automated metagenomic data analysis. This is designed for the latest long read sequencing platforms (such as Oxford Nanopore Technology, ONT) and has been rigorously optimized and validated. The final output is now produced in <30 minutes / sample in an easy-to read, comprehensive report."
                     }
                  </p>
               </div>
               <div className="flex-1 flex items-center justify-center">
                  <img
                     src={"/assets/infexn/omega_id/omega_id.svg"}
                     alt={""}
                     className="w-1/2 md:w-full"
                  />
               </div>
            </div>

            <div className="mt-16 flex items-center justify-center">
               <div className="w-full flex flex-col items-center justify-center gap-8 bg-[#22AE5326] p-12 rounded-2xl">
                  <div className="w-full flex flex-col md:flex-row md:items-center justify-between text-start gap-8">
                     <p className="border-b-2 border-b-[#22AE53]">
                        Plug and play format of analysis
                     </p>
                     <p className="border-b-2 border-b-[#22AE53]">
                        Workflow validated with metagenomic standards
                     </p>
                  </div>
                  <div className="w-full flex flex-col md:flex-row items-center justify-between text-start gap-8">
                     <p className="border-b-2 border-b-[#22AE53]">
                        High accuracy in pathogen and ARG identification
                     </p>
                     <p className="border-b-2 border-b-[#22AE53]">
                        Sequencing data converted to interpretable report
                     </p>
                  </div>
               </div>
            </div>

            <div className="flex flex-col mt-16">
               <h1 className="text-customGreen1 text-xl font-medium">
                  Advantages of Ω IDTM
               </h1>

               <div className="flex flex-wrap items-center justify-evenly gap-10 mt-12">
                  <div className="flex flex-col gap-4 items-center w-48 text-center">
                     <div className="flex items-center bg-customGreen1 rounded-2xl w-32 h-32 p-8">
                        <img
                           src={
                              "/assets/infexn/omega_id/automated_analysis_workflow.svg"
                           }
                           alt={""}
                           className=""
                        />
                     </div>
                     <p className="text-customGray">
                        Automated analysis workflow
                     </p>
                  </div>
                  <div className="flex flex-col gap-4 items-center w-48 text-center">
                     <div className="flex items-center bg-customGreen1 rounded-2xl w-32 h-32 p-8">
                        <img
                           src={"/assets/infexn/omega_id/report_in_24hrs.svg"}
                           alt={""}
                           className=""
                        />
                     </div>
                     <p className="text-customGray">
                        {"Raw data to report in <30 mins / sample"}
                     </p>
                  </div>
                  <div className="flex flex-col gap-4 items-center w-48 text-center">
                     <div className="flex items-center bg-customGreen1 rounded-2xl w-32 h-32 p-8">
                        <img
                           src={"/assets/infexn/omega_id/database_updation.svg"}
                           alt={""}
                           className=""
                        />
                     </div>
                     <p className="text-customGray">
                        Regular database updation
                     </p>
                  </div>
                  <div className="flex flex-col gap-4 items-center w-48 text-center">
                     <div className="flex items-center bg-customGreen1 rounded-2xl w-32 h-32 p-8">
                        <img
                           src={
                              "/assets/infexn/omega_id/easy_to_read_actionable.svg"
                           }
                           alt={""}
                           className=""
                        />
                     </div>
                     <p className="text-customGray">
                        Output easy-to-read and actionable
                     </p>
                  </div>
                  <div className="flex flex-col gap-4 items-center w-48 text-center">
                     <div className="flex items-center bg-customGreen1 rounded-2xl w-32 h-32 p-8">
                        <img
                           src={"/assets/infexn/omega_id/access_purchase.svg"}
                           alt={""}
                           className=""
                        />
                     </div>
                     <p className="text-customGray">
                        Access included with purchase of Universal IDTM
                     </p>
                  </div>
               </div>
            </div>
         </Section.Container>
      </Section>
   );
};

export default OmegaIDSection;
