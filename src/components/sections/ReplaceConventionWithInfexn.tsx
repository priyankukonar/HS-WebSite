import Section from "../atoms/Section";

interface IReplaceConventionWithInfexnData {
   title: string;
   thumbnailUrl: string;
   desc?: string[];
}

interface IReplaceConventionWithInfexnProps {
   data: IReplaceConventionWithInfexnData[];
   data1: IReplaceConventionWithInfexnData[];
}
const ReplaceConventionWithInfexn = ({
   data,
   data1,
}: IReplaceConventionWithInfexnProps) => {
   return (
      <Section className="bg-[#8CC6664D]">
         <Section.Container className="container mx-auto py-8 md:py-16 px-2">
            <h2 className="text-3xl font-medium text-customBlue1 mb-12">
               Replace convention with infexn™
            </h2>
            <div className="bg-white rounded-xl shadow-lg max-w-6xl mx-auto p-6 md:p-8 border-2 border-dotted border-gray-300">
               <div className="flex flex-wrap gap-12">
                  {data?.map((infexn) => (
                     <div className="flex flex-col flex-1">
                        <h3 className="text-lg font-semibold text-customBlue1 mb-4">
                           {infexn.title}
                        </h3>
                        <img
                           src={infexn.thumbnailUrl}
                           alt={infexn.title}
                           className="w-20 mb-4"
                        />

                        <ul className="list-disc list-outside text-gray-600 space-y-2">
                           {infexn.desc?.map((val) => (
                              <li>{val}</li>
                           ))}
                        </ul>
                     </div>
                  ))}
               </div>
               <div className="text-center mt-6">
                  <button className="bg-customBlue1 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                     Replace with a single test
                  </button>
               </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg max-w-6xl mx-auto mt-4">
               <div className="flex items-center justify-center p-6 md:p-8">
                  <img
                     src="/assets/infexn/home/infexn_logo.png"
                     alt="Infexn Logo"
                     className="w-80"
                  />
               </div>
               <div className="flex flex-wrap items-center bg-gradient-to-r from-customGreen to-toBlue rounded-b-xl p-6 md:p-8">
                  {data1?.map((dat) => (
                     <div className="w-full md:w-1/2 flex flex-row items-center justify-start gap-4 mb-6">
                        <img
                           src={dat.thumbnailUrl}
                           alt={dat.title}
                           className="w-12"
                        />
                        <h3 className="text-lg text-white">{dat.title}</h3>
                     </div>
                  ))}

                  {/* <div className="w-full md:w-1/2 flex flex-row items-center justify-center gap-4">
                     <img
                        src={"assets/infexn/home/direct_sample.png"}
                        alt={""}
                        className="w-8"
                     />
                     <h3 className="text-lg text-white">Direct from sample</h3>
                  </div>
                  <div className="w-full md:w-1/2 flex flex-row items-center justify-center gap-4">
                     <img
                        src={"assets/infexn/home/direct_sample.png"}
                        alt={""}
                        className="w-8"
                     />
                     <h3 className="text-lg text-white">Direct from sample</h3>
                  </div>
                  <div className="w-full md:w-1/2 flex flex-row items-center justify-center gap-4">
                     <img
                        src={"assets/infexn/home/direct_sample.png"}
                        alt={""}
                        className="w-8"
                     />
                     <h3 className="text-lg text-white">Direct from sample</h3>
                  </div> */}
               </div>
            </div>
         </Section.Container>
      </Section>
   );
};

export default ReplaceConventionWithInfexn;
