import Section from "../atoms/Section";

interface IInfexnReportDeliverSectionData {
   title: string;
   desc: string[];
}

interface IInfexnReportDeliverSectionProps {
   data: IInfexnReportDeliverSectionData[];
}
const InfexnReportDeliverSection = ({
   data,
}: IInfexnReportDeliverSectionProps) => {
   return (
      <Section className="">
         <Section.Container className="container mx-auto py-8 md:py-16 px-2">
            <div className="text-left">
               <h1 className="text-3xl font-medium text-blue-900 mt-4">
                  What the infexn&#8482; report delivers
               </h1>
            </div>

            <div className="mt-12 flex flex-col md:flex-row flex-wrap p-4">
               <div className="w-full md:w-1/4 mb-6">
                  <img
                     src={"/assets/infexn/home/infexn_report.png"}
                     alt={""}
                     className="w-48"
                  />
               </div>
               <div className="flex flex-col md:flex-row gap-10">
                  {data?.map((dat) => (
                     <div className="flex-1">
                        <p className="text-white p-4 bg-blue-900 rounded-xl">
                           {dat.title}
                        </p>
                        <div className="mt-4 py-4 pl-4">
                           {dat.desc.map((val) => (
                              <div className="flex flex-row gap-4 justify-between items-end border-b-2 border-blue-900 pb-2 mb-4 h-16">
                                 <p>{val}</p>
                                 <div className="flex w-8">
                                    <img
                                       src={
                                          "/assets/infexn/home/correct_icon.png"
                                       }
                                       alt={""}
                                       className="!w-8 min-w-8"
                                    />
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </Section.Container>
      </Section>
   );
};

export default InfexnReportDeliverSection;
