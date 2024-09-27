import AppTemplate from "../../components/templates/AppTemplate";
import styled from "@emotion/styled";
import Section from "../../components/atoms/Section";
import Head from "next/head";
import Image from "next/image";
import advantagesOfPGX from "../../json/identifi/advantagesOfPGX.json";

const StyledHome = styled(AppTemplate)`
   .awards-carousel {
      img {
         --size: 100px;
         width: var(--size);
         height: var(--size);
      }
   }
`;

const StyledHeroSection = styled(Section)`
   background-position: center;
   background-image: url("/assets/template-banner.jpg");
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   .section__container {
      min-height: calc(100vh - var(--safe-top-padding, 100px));
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0px;
   }
   @media (max-width: 768px) {
      // background-image: none;
      background-size: contain;
      background-position: bottom;
      .section__container {
         min-height: calc(53vh - var(--safe-top-padding, 100px));
         display: flex;
         flex-direction: column;
         justify-content: bottom;
      }
   }
`;

const HeroSection = ({ handleClick }: any) => {
   return (
      <StyledHeroSection className="HeroSection " data-aos="fade-up">
         <Section.Container className="mx-auto px-0 items-center !justify-end">
            <div className="grid grid-cols-1 md:grid-cols-1">
               <div className="grid__col py-2 md:py-8 px-3 md:px-8 text-black">
                  <div className="flex items-center gap-4">
                     <a
                        onClick={handleClick}
                        target="_blank"
                        className="btn text-white text-center text-xs md:text-base p-1 sm:p-2 md:px-8 md:py-4 bg-customBlue rounded-md"
                     >
                        Avail This Offer
                     </a>
                  </div>
               </div>
               {/* <div className="grid__col block md:hidden">
                  <img
                     src="/assets/template-banner.jpg"
                     alt=""
                     className="w-full"
                  />
               </div> */}
            </div>
         </Section.Container>
      </StyledHeroSection>
   );
};
import { useRouter } from "next/router";
import { useState } from "react";
import AdvantagesOfPGXSection from "@/components/sections/AdvantagesOfPGXSection";

export default function IdentifiPage({ settings }: any) {
   const router = useRouter();
   const { id } = router.query;
   const [response, setResponse] = useState<any>(null);
   const [error, setError] = useState<any>(null);
   const [formData, setFormData] = useState<any>(null);
   const [isLoading, setIsLoading] = useState(false);

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
            .catch(() => {
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

   const handleClick = () => {
      const element = document.getElementById("contactForm");
      if (element) {
         element.scrollIntoView({ behavior: "smooth" });
      }
   };

   return (
      <StyledHome settings={settings} renderMenu={undefined}>
         <Head>
            <title>Identifi Page</title>
         </Head>
         <HeroSection handleClick={handleClick} />
         <AdvantagesOfPGXSection
            hide={false}
            items={advantagesOfPGX.data}
            knowMore={true}
         />
         <Section className="" id="contactForm">
            <Section.Container className="container mx-auto py-8 md:py-16">
               <form
                  className="bg-white shadow-lg relative contact-form"
                  name="contact"
               >
                  <div className="h-[16px] bg-gradient-to-r from-customBlue to-red-500" />
                  <div className="m-4 md:m-6 md:mx-32 md:my-8">
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
                  <div className="h-[16px] bg-gradient-to-r from-customBlue to-red-500" />
               </form>
            </Section.Container>
         </Section>
      </StyledHome>
   );
}
