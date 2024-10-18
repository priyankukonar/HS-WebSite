import Section from "../atoms/Section";

const NGSEnabledSection = () => {
   return (
      <Section className="">
         <Section.Container className="container mx-auto py-8 md:py-16 px-2">
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
               <div className="flex-1">
                  <h1 className="text-customBlue1 text-3xl font-medium">
                     NGS enabled solution
                  </h1>
                  <p className="text-customGray text-base mt-8">
                     infexnTM uses the latest long-read sequencing technology
                     for high-throughput detection of all microbial populations
                     in a clinical sample. The standardized workflow is
                     applicable to diverse clinical samples and Ω IDTM automates
                     data analysis and generates an easy-to-read report within
                     24 hours of receiving a sample.
                  </p>
               </div>
               <div className="flex-1">
                  <img
                     src={"/assets/infexn/technology/ngs_enabled_solution.svg"}
                     alt={""}
                     className="w-80"
                  />
               </div>
            </div>
         </Section.Container>
      </Section>
   );
};

export default NGSEnabledSection;
