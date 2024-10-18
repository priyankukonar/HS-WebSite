import Section from "../atoms/Section";
interface IOurAdvisorData {
   name: string;
   thumbnailUrl: string;
   desc: string;
}

interface IOurLeadershipTeamSectionProps {
   advisorData: IOurAdvisorData[];
}

const FoundingTeamSection = ({
   advisorData,
}: IOurLeadershipTeamSectionProps) => {
   return (
      <Section className="">
         <Section.Container className="container mx-auto py-8 md:py-16 px-2">
            <p className="text-3xl font-medium text-customBlue1">
               Founding Team
            </p>
            <table className="table-auto w-full mt-36 border-separate">
               <tr className="">
                  <td className="max-h-52 w-1/3 bg-gradient-to-r from-customGreen to-toBlue rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl px-10 align-bottom">
                     <div className="h-full">
                        <img
                           src="/assets/leaders/leader_anirvan.svg"
                           alt="Dr. Anirvan Chatterjee"
                           className="h-full -mt-32"
                        />
                     </div>
                  </td>
                  <td className="hidden md:table-cell max-h-52 h-52 w-2/3 align-top border-2 border-customBlue1 rounded-2xl border-l-0 rounded-l-none p-0">
                     <div className="p-4 h-52 overflow-y-scroll">
                        <h3 className="text-customBlue1 font-bold text-lg">
                           Dr. Anirvan Chatterjee
                        </h3>
                        <p className="text-customBlue1 font-normal">
                           Co-founder & CEO
                        </p>
                        <p className="text-customBlue1 font-normal">
                           HaystackAnalytics Pvt. Ltd.
                        </p>
                        <p className="text-customGray mt-4 font-normal">
                           Dr. Anirvan Chatterjee is a computational biologist
                           who has spent 15+ years in infectious disease and
                           genomics. As a researcher, he has been involved in
                           several high impact projects including his work at
                           Oxford University where he was part of the team that
                           created and deployed practically the world's first
                           clinical genomic solution for any disease at a
                           population level. He also pioneered the use of Whole
                           Genome Sequencing (WGS) for Tuberculosis diagnostics
                           and treatment. Additionally, Dr. Anirvan was
                           instrumental in including Antimicrobial Resistance
                           (AMR) as one of the Sustainable Development Goals
                           (SDGs) under the UN charter through a global water
                           study. Returning to India, he introduced WGS
                           technology for Tuberculosis elimination and
                           co-founded HaystackAnalytics with his childhood
                           friend Gaurav Srivastava and Prof. Kiran, his mentor
                           from IIT Mumbai, who specializes in Evolutionary
                           Biology and Genomics.
                        </p>
                     </div>
                  </td>
               </tr>
               <tr className="md:hidden">
                  <td className="max-h-52 h-52 w-2/3 align-top border-2 border-customBlue1 rounded-2xl border-t-0 rounded-t-none p-0">
                     <div className="p-4 h-52 overflow-y-scroll">
                        <h3 className="text-customBlue1 font-bold text-lg">
                           Dr. Anirvan Chatterjee
                        </h3>
                        <p className="text-customBlue1 font-normal">
                           Co-founder & CEO
                        </p>
                        <p className="text-customBlue1 font-normal">
                           HaystackAnalytics Pvt. Ltd.
                        </p>
                        <p className="text-customGray mt-4 font-normal">
                           Dr. Anirvan Chatterjee is a computational biologist
                           who has spent 15+ years in infectious disease and
                           genomics. As a researcher, he has been involved in
                           several high impact projects including his work at
                           Oxford University where he was part of the team that
                           created and deployed practically the world's first
                           clinical genomic solution for any disease at a
                           population level. He also pioneered the use of Whole
                           Genome Sequencing (WGS) for Tuberculosis diagnostics
                           and treatment. Additionally, Dr. Anirvan was
                           instrumental in including Antimicrobial Resistance
                           (AMR) as one of the Sustainable Development Goals
                           (SDGs) under the UN charter through a global water
                           study. Returning to India, he introduced WGS
                           technology for Tuberculosis elimination and
                           co-founded HaystackAnalytics with his childhood
                           friend Gaurav Srivastava and Prof. Kiran, his mentor
                           from IIT Mumbai, who specializes in Evolutionary
                           Biology and Genomics.
                        </p>
                     </div>
                  </td>
               </tr>
            </table>
            <table className="table-auto w-full mt-36 border-separate">
               <tr className="">
                  <td className="hidden md:table-cell max-h-52 h-52 w-2/3 align-top border-2 border-customBlue1 rounded-2xl border-r-0 rounded-r-none p-0">
                     <div className="p-4 h-52 overflow-y-scroll">
                        <h3 className="text-customBlue1 font-bold text-lg">
                           Gaurav Srivastav
                        </h3>
                        <p className="text-customBlue1 font-normal">
                           Co-founder & COO
                        </p>
                        <p className="text-customBlue1 font-normal">
                           HaystackAnalytics Pvt. Ltd.
                        </p>
                        <p className="text-customGray mt-4 font-normal">
                           Mr. Gaurav Srivastava, an engineer from IIT
                           Kharagpur, is an experienced entrepreneur and
                           business leader who has worked closely with several
                           renowned brands. He began his entrepreneurial journey
                           in 2012 with Scrollback in Singapore. Later, he
                           ventured into the food industry with Holachef, which
                           became operationally profitable within three years
                           and generated a revenue run rate of $5.5M while based
                           in Mumbai. After selling Holachef to OLA in 2018,
                           Gaurav served as the Chief Operating Officer for the
                           food business at OLA foods. In 2021, he joined forces
                           with his longtime friend Dr. Anirvan Chatterjee to
                           establish HaystackAnalytics as its Co-Founder and
                           COO. Gaurav's leadership has been crucial in driving
                           the swift commercialization and widespread adoption
                           of HaystackAnalytics's products in the market.
                        </p>
                     </div>
                  </td>
                  <td className="max-h-52 w-1/3 bg-gradient-to-r from-customGreen to-toBlue rounded-t-2xl md:rounded-tl-none md:rounded-r-2xl  px-10 align-bottom">
                     <div className="h-full">
                        <img
                           src="/assets/leaders/leader_gourav.svg"
                           alt="Gaurav Srivastav"
                           className="h-full -mt-32"
                        />
                     </div>
                  </td>
               </tr>
               <tr className="md:hidden">
                  <td className="max-h-52 h-52 w-2/3 align-top border-2 border-customBlue1 rounded-2xl border-t-0 rounded-t-none p-0">
                     <div className="p-4 h-52 overflow-y-scroll">
                        <h3 className="text-customBlue1 font-bold text-lg">
                           Gaurav Srivastav
                        </h3>
                        <p className="text-customBlue1 font-normal">
                           Co-founder & COO
                        </p>
                        <p className="text-customBlue1 font-normal">
                           HaystackAnalytics Pvt. Ltd.
                        </p>
                        <p className="text-customGray mt-4 font-normal">
                           Mr. Gaurav Srivastava, an engineer from IIT
                           Kharagpur, is an experienced entrepreneur and
                           business leader who has worked closely with several
                           renowned brands. He began his entrepreneurial journey
                           in 2012 with Scrollback in Singapore. Later, he
                           ventured into the food industry with Holachef, which
                           became operationally profitable within three years
                           and generated a revenue run rate of $5.5M while based
                           in Mumbai. After selling Holachef to OLA in 2018,
                           Gaurav served as the Chief Operating Officer for the
                           food business at OLA foods. In 2021, he joined forces
                           with his longtime friend Dr. Anirvan Chatterjee to
                           establish HaystackAnalytics as its Co-Founder and
                           COO. Gaurav's leadership has been crucial in driving
                           the swift commercialization and widespread adoption
                           of HaystackAnalytics's products in the market.
                        </p>
                     </div>
                  </td>
               </tr>
            </table>
            <table className="table-auto w-full mt-36 border-separate">
               <tr className="">
                  <td className="max-h-52 w-1/3 bg-gradient-to-r from-customGreen to-toBlue rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl px-10 align-bottom">
                     <div className="h-full">
                        <img
                           src="/assets/leaders/leader_kiran.svg"
                           alt="Prof. Kiran Kondabagil"
                           className="h-full -mt-32"
                        />
                     </div>
                  </td>
                  <td className="hidden md:table-cell max-h-52 h-52 w-2/3 align-top border-2 border-customBlue1 rounded-2xl border-l-0  rounded-l-none p-0">
                     <div className="p-4 h-52 overflow-y-scroll">
                        <h3 className="text-customBlue1 font-bold text-lg">
                           Prof. Kiran Kondabagil
                        </h3>
                        <p className="text-customBlue1 font-normal">
                           Co-founder & CSM
                        </p>
                        <p className="text-customBlue1 font-normal">
                           HaystackAnalytics Pvt. Ltd.
                        </p>
                        <p className="text-customGray mt-4 font-normal">
                           Prof. Kiran Kondabagil, is a professor of virology at
                           the Biosciences department of the prestigious Indian
                           Institute of Technology Bombay (IIT-B), bringing
                           significant expertise in molecular biology,
                           infectious disease, genomics, and their applications
                           in health and epidemiology. With a PhD in
                           Biochemistry from the University of Mysore, Prof.
                           Kondabagil conducted research at the Central Food
                           Technological Research Institute (CFTRI) and is
                           recognized for his contributions to Evolutionary
                           Biology and Genomics. Together with Dr. Anirvan
                           Chatterjee, a renowned data scientist and  Mr. Gaurav
                           Srivastava, a serial entrepreneur, Prof. Kiran
                           embarked on a monumental mission to spearhead
                           groundbreaking intellectual property development in
                           genomics in India and co-founded HaystackAnalytics in
                           2018.
                        </p>
                     </div>
                  </td>
               </tr>
               <tr className="md:hidden">
                  <td className="max-h-52 h-52 w-2/3 align-top border-2 border-customBlue1 rounded-2xl border-t-0 rounded-t-none p-0">
                     <div className="p-4 h-52 overflow-y-scroll">
                        <h3 className="text-customBlue1 font-bold text-lg">
                           Prof. Kiran Kondabagil
                        </h3>
                        <p className="text-customBlue1 font-normal">
                           Co-founder & CSM
                        </p>
                        <p className="text-customBlue1 font-normal">
                           HaystackAnalytics Pvt. Ltd.
                        </p>
                        <p className="text-customGray mt-4 font-normal">
                           Prof. Kiran Kondabagil, is a professor of virology at
                           the Biosciences department of the prestigious Indian
                           Institute of Technology Bombay (IIT-B), bringing
                           significant expertise in molecular biology,
                           infectious disease, genomics, and their applications
                           in health and epidemiology. With a PhD in
                           Biochemistry from the University of Mysore, Prof.
                           Kondabagil conducted research at the Central Food
                           Technological Research Institute (CFTRI) and is
                           recognized for his contributions to Evolutionary
                           Biology and Genomics. Together with Dr. Anirvan
                           Chatterjee, a renowned data scientist and  Mr. Gaurav
                           Srivastava, a serial entrepreneur, Prof. Kiran
                           embarked on a monumental mission to spearhead
                           groundbreaking intellectual property development in
                           genomics in India and co-founded HaystackAnalytics in
                           2018.
                        </p>
                     </div>
                  </td>
               </tr>
            </table>
            <p className="text-2xl font-medium text-customBlue1 mt-24">
               Scientific Advisory Board
            </p>
            <div className="mt-16 flex items-center justify-center">
               <div className="flex flex-wrap items-center justify-center gap-8 bg-[#8CC6664D] p-8 rounded-2xl">
                  {advisorData.map((data) => (
                     <div className="text-center max-w-52 min-w-52 flex-1">
                        <div className="rounded-t-2xl overflow-hidden border border-gray-300">
                           <img
                              src={data.thumbnailUrl}
                              alt={data.name}
                              className="rounded-t-lg object-cover h-60 w-52"
                           />
                        </div>
                        <div className="rounded-b-2xl bg-customBlue1 text-white p-2">
                           <p className="font-semibold text-sm">{data.name}</p>
                           <p className="text-xs mt-4">{data.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </Section.Container>
      </Section>
   );
};

export default FoundingTeamSection;
