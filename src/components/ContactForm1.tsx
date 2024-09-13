import React, { useState } from "react";
import Modal from "react-modal";
import Image from "next/Image";

interface IContactFormProps {
   setIsOpen: (val: boolean) => void;
   isOpen: boolean;
}

const ContactUsModal = ({ setIsOpen, isOpen }: IContactFormProps) => {
   const onClick = () => {
      setIsOpen(false);
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      setIsOpen(false);
   };

   return (
      <Modal isOpen={isOpen} className="md:w-10/12 mx-auto md:my-4 mt-32">
         <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg relative contact-form h-max-screen h-[90vh] overflow-y-auto"
         >
            <div className="h-2 bg-gradient-to-r from-customBlue to-red-500" />
            <div className="p-4 md:p-6 md:px-32 md:py-8">
               <button
                  type="button"
                  onClick={onClick}
                  className="absolute top-5 right-5 opacity-60 hover:opacity-100"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="currentColor"
                     className="w-6 h-6"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                     />
                  </svg>
               </button>
               <div className="p-4 md:p-8">
                  <div className="mb-8 w-40 h-16 relative">
                     <Image
                        src={"/assets/identifi_logo.png"}
                        alt={"Identifi"}
                        layout="fill"
                        objectFit="contain"
                     />
                  </div>
                  <div className="mb-4">
                     <input
                        placeholder="Name"
                        type="text"
                        id="name"
                        className="font-extralight shadow appearance-none border rounded-lg w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-customBlue"
                     />
                  </div>
                  <div className="flex mb-4">
                     <div className="w-1/2 mr-2">
                        <input
                           placeholder="Email"
                           type="email"
                           id="email"
                           className="font-extralight shadow appearance-none border rounded-lg w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-customBlue"
                        />
                     </div>
                     <div className="w-1/2">
                        <input
                           placeholder="Phone"
                           type="tel"
                           id="phone"
                           className="font-extralight shadow appearance-none border rounded-lg w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-customBlue"
                        />
                     </div>
                  </div>
                  <div className="mb-4">
                     <input
                        placeholder="Occupation"
                        type="text"
                        id="occupation"
                        className="font-extralight shadow appearance-none border rounded-lg w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-customBlue"
                     />
                  </div>
                  <div className="mb-4">
                     <textarea
                        rows={3}
                        placeholder="Address"
                        id="address"
                        className="font-extralight shadow appearance-none border rounded-lg w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-customBlue"
                     />
                  </div>
                  <div className="flex mb-4">
                     <div className="w-1/2 mr-2">
                        <input
                           placeholder="City"
                           type="text"
                           id="city"
                           className="font-extralight shadow appearance-none border rounded-lg w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-customBlue"
                        />
                     </div>
                     <div className="w-1/2">
                        <input
                           placeholder="State"
                           type="text"
                           id="state"
                           className="font-extralight shadow appearance-none border rounded-lg w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-customBlue"
                        />
                     </div>
                  </div>
                  <div className="flex items-center">
                     <button className="bg-customBlue py-4 px-6 rounded-full shadow-xl border-8 border-gray-100 transition-all duration-300 flex items-center">
                        <div className="h-6 w-6 min-w-6 relative">
                           <Image
                              src={"/assets/identifi/book_now.png"}
                              alt={"download"}
                              layout="fill"
                              objectFit="contain"
                           />
                        </div>
                        <span className="text-white font-semibold">Submit</span>
                     </button>
                  </div>
               </div>
            </div>
            <div className="h-2 bg-gradient-to-r from-customBlue to-red-500" />
         </form>
      </Modal>
   );
};

export default ContactUsModal;
