import Section from "../atoms/Section";

const BenefitOfFranchisee = ({ scrollToDiv }) => {
   return (
      <Section className="">
         <Section.Container className="container mx-auto py-8 md:py-16">
            <section className="py-8 bg-white">
               <h2 className="text-center text-2xl font-bold text-customBlue mb-8">
                  BENEFITS OF BECOMING A HAYSTACKANALYTICS FRANCHISEE
               </h2>
               <div className="flex flex-wrap justify-center gap-6">
                  <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center w-60">
                     <div className="text-green-500 mb-4">
                        <img
                           src={"/assets/franchise/unmatched_quality.png"}
                           alt={"Unmatched Quality & Precision"}
                           className="h-20"
                        />
                     </div>
                     <h3 className="text-base font-semibold text-customBlue">
                        Unmatched Quality & Precision
                     </h3>
                     <p className="text-sm text-black mt-2">
                        Powered by patented technologies ensuring accurate
                        diagnostics.
                     </p>
                  </div>

                  <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center w-60">
                     <div className="text-green-500 mb-4">
                        <img
                           src={"/assets/franchise/wide_range_products.png"}
                           alt={"Wide Range of Products"}
                           className="h-20"
                        />
                     </div>
                     <h3 className="text-base font-semibold text-customBlue">
                        Wide Range of Products
                     </h3>
                     <p className="text-sm text-black mt-2">
                        Access to advanced technology for superior results.
                     </p>
                  </div>

                  <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center w-60">
                     <div className="text-green-500 mb-4">
                        <img
                           src={"/assets/franchise/competitive_pricing.png"}
                           alt={"Competitive Pricing"}
                           className="h-20"
                        />
                     </div>
                     <h3 className="text-base font-semibold text-customBlue">
                        Competitive Pricing
                     </h3>
                     <p className="text-sm text-black mt-2">
                        Offers exceptional value in the market.
                     </p>
                  </div>

                  <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center w-60">
                     <div className="text-green-500 mb-4">
                        <img
                           src={"/assets/franchise/quick_turnaround.png"}
                           alt={"Quick Turnaround Time (TAT)"}
                           className="h-20"
                        />
                     </div>
                     <h3 className="text-base font-semibold text-customBlue">
                        Quick Turnaround Time (TAT)
                     </h3>
                     <p className="text-sm text-black mt-2">
                        Deliver fast and reliable test results.
                     </p>
                  </div>

                  <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center w-60">
                     <div className="text-green-500 mb-4">
                        <img
                           src={"/assets/franchise/high_profit_margins.png"}
                           alt={" High Profit Margins"}
                           className="h-20"
                        />
                     </div>
                     <h3 className="text-base font-semibold text-customBlue">
                        High Profit Margins
                     </h3>
                     <p className="text-sm text-black mt-2">
                        Enjoy a minimum of 50% margin on every test.
                     </p>
                  </div>

                  <div className="flex-col items-center justify-center text-center w-[30rem] hidden lg:flex">
                     <a
                        onClick={scrollToDiv}
                        className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 border-4 border-white shadow-lg"
                     >
                        Become A Franchisee
                     </a>
                  </div>

                  <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center w-60">
                     <div className="text-green-500 mb-4">
                        <img
                           src={"/assets/franchise/streamline_treatments.png"}
                           alt={"Streamline Treatments"}
                           className="h-20"
                        />
                     </div>
                     <h3 className="text-base font-semibold text-customBlue">
                        Streamline Treatments
                     </h3>
                     <p className="text-sm text-black mt-2">
                        Minimize trail and error and enhance treatment
                        efficiency.
                     </p>
                  </div>

                  <div className="flex-col items-center justify-center text-center w-[30rem] lg:hidden">
                     <a
                        onClick={scrollToDiv}
                        className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 border-4 border-white shadow-lg"
                     >
                        Become A Franchisee
                     </a>
                  </div>
               </div>
            </section>
         </Section.Container>
      </Section>
   );
};

export default BenefitOfFranchisee;
