import Section from "../atoms/Section";

interface IOurLeadershipTeamSectionData {
   name: string;
   thumbnailUrl: string;
   designation: string;
   company: string;
}

interface IOurAdvisorData {
   name: string;
   thumbnailUrl: string;
}

interface IOurLeadershipTeamSectionProps {
   data: IOurLeadershipTeamSectionData[];
   advisorData: IOurAdvisorData[];
}

const OurLeadershipTeamSection = ({
   data,
   advisorData,
}: IOurLeadershipTeamSectionProps) => {
   return (
      <Section className="">
         <Section.Container className="container mx-auto py-8 md:py-16 px-2">
            <div className="text-left">
               <h2 className="text-base text-customBlue1 tracking-wider font-semibold">
                  <span className="text-[#3f78be]">[</span>ABOUT US
                  <span className="text-[#3f78be]">]</span>
               </h2>
               <h1 className="text-3xl font-medium text-customBlue1 mt-4">
                  The leadership team
               </h1>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-10 m-10 mt-16 rounded-2xl bg-gradient-to-r from-customGreen to-toBlue">
               {data?.map((dat, index) => (
                  <div
                     key={index}
                     className="flex flex-col items-center justify-center p-4 md:p-8 text-center"
                  >
                     <div className="rounded-t-2xl ">
                        <img
                           src={dat.thumbnailUrl}
                           alt={dat.name}
                           className="h-60 w-60 rounded-full"
                        />
                     </div>
                     <h3 className="text-base font-semibold text-white mt-4">
                        {dat.name}
                     </h3>
                     <p className="text-white text-sm">{dat.designation}</p>
                     <p className="text-white text-sm">{dat.company}</p>
                  </div>
               ))}
            </div>

            <div className="m-10 mt-16 rounded-2xl bg-gradient-to-r from-customGreen to-toBlue p-2">
               <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-8 p-8 bg-white rounded-2xl">
                  <div className="flex flex-row items-center space-y-2">
                     <p className="text-left text-xl font-base text-customBlue1 text-wrap w-32">
                        Scientific Advisory Board
                     </p>
                     <div className="h-6 w-6 text-green-500">
                        <img src="/assets/polygon.svg" alt="" className="" />
                     </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-8">
                     {advisorData.map((data) => (
                        <div className="text-center max-w-40">
                           <div className="rounded-lg overflow-hidden border border-gray-300">
                              <img
                                 src={data.thumbnailUrl}
                                 alt={data.name}
                                 className="rounded-lg object-cover h-48 w-40"
                              />
                           </div>
                           <p className="mt-2 font-semibold text-sm text-customBlue1">
                              {data.name}
                           </p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
            <div className="flex items-center justify-center">
               <a
                  href="#"
                  className="mt-6 inline-block bg-customBlue1 text-white py-3 px-8 rounded-lg shadow hover:bg-blue-700 transition duration-200"
               >
                  Learn More
               </a>
            </div>
         </Section.Container>
      </Section>
   );
};

export default OurLeadershipTeamSection;
