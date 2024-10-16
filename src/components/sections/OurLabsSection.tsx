import Section from "../atoms/Section";

interface IOurLabsSectionData {
   title: string;
   thumbnailUrl: string;
}

interface IOurLabsSectionProps {
   data: IOurLabsSectionData[];
}
const OurLabsSection = ({ data }: IOurLabsSectionProps) => {
   return (
      <Section className="">
         <Section.Container className="container mx-auto py-8 md:py-16 px-2">
            <div className="text-left">
               <h1 className="text-3xl font-medium text-blue-900 mt-4">
                  Our Labs
               </h1>
            </div>

            <div className="mt-12 w-full md:w-1/2">
               Our laboratories are state of the art sequencing facilities that
               cater to the sequencing needs of the entire nation. We are
               located in all major metro and tier 2 cities across India.
               infexnTM workflows are actively deployed in each.
            </div>
            <div className="mt-12">
               <img
                  src={"/assets/infexn/home/haystack_labs_logo.png"}
                  alt={""}
                  className="w-80"
               />
            </div>
            <div className="mt-12 flex flex-wrap justify-between gap-10">
               {data?.map((dat) => (
                  <div className="flex flex-col items-center w-36">
                     <img src={dat.thumbnailUrl} alt={dat.title} className="" />
                     <p>{dat.title}</p>
                  </div>
               ))}
               {/* <div className="flex flex-col items-center">
                  <img
                     src={"/assets/infexn/home/mumbai.png"}
                     alt={""}
                     className="w-32"
                  />
                  <p>Mumbai</p>
               </div>
               <div className="flex flex-col items-center">
                  <img
                     src={"/assets/infexn/home/mumbai.png"}
                     alt={""}
                     className="w-32"
                  />
                  <p>Mumbai</p>
               </div>
               <div className="flex flex-col items-center">
                  <img
                     src={"/assets/infexn/home/mumbai.png"}
                     alt={""}
                     className="w-32"
                  />
                  <p>Mumbai</p>
               </div>
               <div className="flex flex-col items-center">
                  <img
                     src={"/assets/infexn/home/mumbai.png"}
                     alt={""}
                     className="w-32"
                  />
                  <p>Mumbai</p>
               </div> */}
            </div>
         </Section.Container>
      </Section>
   );
};

export default OurLabsSection;
