import Section from "../atoms/Section";

const NewWorldChanllengesSection = () => {
   return (
      <Section className="">
         <Section.Container className="container mx-auto py-8 md:py-16 px-2">
            <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-20">
               <div className="flex-1">
                  <div className="">
                     <img src={"/assets/logo.svg"} alt={""} className="w-60" />
                  </div>
                  <p className="text-customGray text-base mt-6 md:mt-12">
                     HaystackAnalytics is a leading health tech company
                     specializing in clinical genomics. Headquartered in Mumbai,
                     our mission is to empower the healthcare infrastructure
                     with scalable solutions benefitting all. Committed to
                     providing accessible, applicable & affordable
                     sequencing-based solutions, we make personalized therapy a
                     reality.
                  </p>
                  <p className="text-customGray text-base mt-4 md:mt-8">
                     At HaystackAnalytics we are not merely improving the future
                     of health & technology, we are catalyzing its evolution.
                  </p>
               </div>

               <div className="md:text-right md:flex-1 w-full">
                  <p className="text-3xl font-medium text-customBlue1">
                     Making genomics
                  </p>
                  <div className="flex flex-col items-end text-center gap-2 mt-6 md:mt-12">
                     <p className="w-full md:w-1/2 text-2xl font-semibold bg-gradient-to-r from-customGreen to-toBlue text-white rounded-2xl px-4 py-4">
                        Accessible
                     </p>
                     <p className="w-full md:w-1/2 text-2xl font-semibold bg-gradient-to-r from-customGreen to-toBlue text-white rounded-2xl px-4 py-4">
                        Applicable
                     </p>
                     <p className="w-full md:w-1/2 text-2xl font-semibold bg-gradient-to-r from-customGreen to-toBlue text-white rounded-2xl px-4 py-4">
                        Affordable
                     </p>
                  </div>
               </div>
            </div>

            <div className="mt-12 md:mt-24">
               <h2 className="text-3xl font-medium text-customBlue1">
                  New world, new challenges
               </h2>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6 md:mt-12 gap-4">
               <p className="font-normal text-customBlue1 text-xl border-b-2 border-b-customBlue1">
                  Increase in infection deaths
               </p>
               <p className="font-normal text-customBlue1 text-xl border-b-2 border-b-customBlue1">
                  Rise of antimicrobial resistance
               </p>
               <p className="font-normal text-customBlue1 text-xl border-b-2 border-b-customBlue1">
                  Evolving epidemiology
               </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-16">
               <div className="w-full md:w-1/2 rounded-md">
                  <img
                     src="/assets/infexn/about/new_world_challenges.svg"
                     alt="Illustration"
                     className="rounded-md object-cover"
                  />
               </div>

               <div className="flex flex-col justify-center w-full md:w-1/2">
                  <p className="text-customGray">
                     The burden of infectious diseases has a global impact on
                     the healthcare ecosystem. Misdiagnosis, delayed treatment,
                     and overuse of broad-spectrum antibiotics have fueled the
                     rise of AMR. Globalization has also been altering the
                     epidemiology of infections, needing immediate solutions for
                     accurate pathogen identification and targeted infection
                     management.
                  </p>
                  <p className="text-customGray text-sm mt-4">
                     Source:{" "}
                     <a href="https://www.who.int" className="underline">
                        www.who.int
                     </a>{" "}
                  </p>
               </div>
            </div>
         </Section.Container>
      </Section>
   );
};

export default NewWorldChanllengesSection;
