import React, { useState } from "react";
import Modal from "react-modal";
import Image from "next/Image";

interface IContactFormProps {
   setIsOpen: (val: boolean) => void;
   isOpen: boolean;
}

const ContactUsModal = ({ setIsOpen, isOpen }: IContactFormProps) => {
   const [response, setResponse] = useState<any>(null);
   const [error, setError] = useState<any>(null);
   const [formData, setFormData] = useState<any>(null);
   const [isLoading, setIsLoading] = useState(false);
   const onClick = () => {
      setIsOpen(false);
   };

   const handleSubmit = (event: any) => {
      event.preventDefault();
      if (formData !== null) {
         const req = new Request("/", {
            body: formData,
            method: "POST",
            headers: {
               Accept: "application/json",
               "Content-Type": "application/json",
               "Access-Control-Allow-Origin": "*",
               "Access-Control-Allow-Methods":
                  "GET, POST, PUT, DELETE, OPTIONS",
               "Access-Control-Allow-Headers": "Content-Type",
            },
         });
         setIsLoading(true);
         setError(null);
         // setResponse("Thanks for Your Interest");
         // setError("Sorry could not take your request now.");
         fetch(req)
            .then((res) => res.json())
            .then((res) => {
               console.log({ res });
               setResponse("Thanks for Your Interest");
            })
            .catch((err) => {
               setError("Sorry could not take your request now.");
            })
            .finally(() => {
               setIsLoading(false);
            });
         setIsLoading(false);
         setTimeout(() => {
            setResponse(false);
            setError(false);
         }, 2000);
      }
   };

   const handleChangeInput = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   return (
      <Modal
         isOpen={isOpen}
         className="md:w-10/12 mx-auto md:my-4 mt-8 md:mt-16"
      >
         <form
            className="bg-white shadow-lg relative contact-form h-max-screen h-[85vh] overflow-y-auto"
            name="contact"
         >
            <div className="h-[2%] bg-gradient-to-r from-customBlue to-red-500" />
            <div className="m-4 md:m-6 md:mx-32 md:my-8 [h-94%]">
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
                        onChange={handleChangeInput}
                        placeholder="Name"
                        type="text"
                        id="name"
                        name="name"
                        className="font-extralight shadow appearance-none border rounded-lg w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-customBlue"
                     />
                  </div>
                  <div className="flex mb-4">
                     <div className="w-1/2 mr-2">
                        <input
                           onChange={handleChangeInput}
                           placeholder="Email"
                           type="email"
                           id="email"
                           name="email"
                           className="font-extralight shadow appearance-none border rounded-lg w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-customBlue"
                        />
                     </div>
                     <div className="w-1/2">
                        <input
                           onChange={handleChangeInput}
                           placeholder="Phone"
                           type="tel"
                           id="phone"
                           name="phone"
                           className="font-extralight shadow appearance-none border rounded-lg w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-customBlue"
                        />
                     </div>
                  </div>
                  <div className="mb-4">
                     <input
                        onChange={handleChangeInput}
                        placeholder="Occupation"
                        type="text"
                        id="occupation"
                        name="occupation"
                        className="font-extralight shadow appearance-none border rounded-lg w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-customBlue"
                     />
                  </div>
                  <div className="mb-4">
                     <textarea
                        onChange={handleChangeInput}
                        rows={3}
                        placeholder="Address"
                        id="address"
                        name="address"
                        className="font-extralight shadow appearance-none border rounded-lg w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-customBlue"
                     />
                  </div>
                  <div className="flex mb-4">
                     <div className="w-1/2 mr-2">
                        <input
                           onChange={handleChangeInput}
                           placeholder="City"
                           type="text"
                           id="city"
                           name="city"
                           className="font-extralight shadow appearance-none border rounded-lg w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-customBlue"
                        />
                     </div>
                     <div className="w-1/2">
                        <input
                           onChange={handleChangeInput}
                           placeholder="State"
                           name="state"
                           type="text"
                           id="state"
                           className="font-extralight shadow appearance-none border rounded-lg w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-customBlue"
                        />
                     </div>
                  </div>
                  <div className="text-green-600 mb-2">{response}</div>
                  <div className="text-red-600 mb-2">{error}</div>
                  <div className="flex items-center">
                     <button
                        onClick={handleSubmit}
                        disabled={isLoading}
                        className="bg-customBlue py-4 px-6 rounded-full shadow-xl border-8 border-gray-100 transition-all duration-300 flex items-center"
                     >
                        <div className="h-6 w-6 min-w-6 relative mr-2">
                           <Image
                              src={"/assets/identifi/book_now.png"}
                              alt={"download"}
                              layout="fill"
                              objectFit="contain"
                           />
                        </div>
                        <span className="text-white font-semibold">
                           {isLoading ? "Submitting..." : "Submit"}
                        </span>
                     </button>
                  </div>
               </div>
            </div>
            <div className="h-[2%] bg-gradient-to-r from-customBlue to-red-500" />
         </form>
      </Modal>
   );
};

export default ContactUsModal;
