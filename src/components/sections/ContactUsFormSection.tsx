import Section from "../atoms/Section";

const ContactUsFormSection = () => {
   return (
      <Section className="bg-gray-100" id="contactUsSection">
         <Section.Container className="container mx-auto py-8 md:py-16">
            <h2 className="text-center text-2xl font-bold text-customBlue mb-8">
               REGISTER TODAY
            </h2>

            <div className="p-6 rounded-lg w-full">
               <form className="space-y-4">
                  <div className="flex flex-col">
                     <input
                        type="text"
                        placeholder="Name"
                        className="bg-gray-100 border border-black rounded-lg p-3"
                     />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <input
                        type="email"
                        placeholder="Email"
                        className="bg-gray-100 border border-black rounded-lg p-3"
                     />
                     <input
                        type="tel"
                        placeholder="Phone"
                        className="bg-gray-100 border border-black rounded-lg p-3"
                     />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <input
                        type="text"
                        placeholder="Designation"
                        className="bg-gray-100 border border-black rounded-lg p-3"
                     />
                     <input
                        type="text"
                        placeholder="Organization"
                        className="bg-gray-100 border border-black rounded-lg p-3"
                     />
                  </div>

                  <div className="flex flex-col">
                     <textarea
                        placeholder="Address"
                        className="bg-gray-100 border border-black rounded-lg p-3 h-32 resize-none"
                     ></textarea>
                  </div>

                  <div className="flex justify-center mt-4">
                     <button
                        type="submit"
                        className="bg-[#4570b5] text-white py-2 px-8 rounded-lg hover:bg-blue-700 transition duration-300"
                     >
                        Submit
                     </button>
                  </div>
               </form>
               <p className="text-center text-black mt-6">
                  Our team will soon get in touch with you
               </p>
            </div>
         </Section.Container>
      </Section>
   );
};

export default ContactUsFormSection;
