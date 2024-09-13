import React, { useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

const StyledFooter = styled.footer``;

function Footer1({}) {
   return (
      <>
         <StyledFooter className="bg-gray-100">
            <div className="h-6 bg-customBlue w-full"></div>
            <div className=" mx-auto pt-8 pb-0 md:py-8 px-3 md:px-0 bg-gradient-to-r from-customBlue to-red-500">
               <div className="flex flex-col p-4 md:p-8 lg:p-24">
                  <div className="flex justify-between">
                     <div className="h-24 w-80 min-w-80 relative">
                        <Image
                           src={"/assets/haystack_logo.png"}
                           alt={"Identifi"}
                           layout="fill"
                           objectFit="contain"
                        />
                     </div>
                     <div className="h-24 w-24 min-w-24 relative hidden md:block">
                        <Image
                           src={"/assets/identifiLogo.png"}
                           alt={"Identifi"}
                           layout="fill"
                           objectFit="contain"
                        />
                     </div>
                  </div>
                  <div className="text-white text-sm md:text-lg lg:text-xl w-full">
                     <p className="mb-2">
                        H-22, 23 Akshar Business Park, Sector 25,
                     </p>
                     <p className="mb-4">Turbhe, Navi Mumbai 400703</p>
                     <div className="flex gap-4 md:gap-16 md:items-center mb-6 md:mb-12 md:flex-row flex-col">
                        <div className="flex gap-2 items-center">
                           <div className="h-6 w-6 min-w-6 relative">
                              <Image
                                 src={"/assets/phone-icon.png"}
                                 alt={"download"}
                                 layout="fill"
                                 objectFit="contain"
                              />
                           </div>
                           <p>+91 8828831393</p>
                        </div>
                        <div className="flex gap-2 items-center">
                           <div className="h-6 w-6 min-w-6 relative">
                              <Image
                                 src={"/assets/mail-icon.png"}
                                 alt={"download"}
                                 layout="fill"
                                 objectFit="contain"
                              />
                           </div>
                           <a href={`mailto:pgx@haystackanalytics.in`}>
                              pgx@haystackanalytics.in
                           </a>
                        </div>
                     </div>
                     <div className="flex md:items-center justify-between w-full md:flex-row flex-col gap-4 md:gap-0">
                        <div className="flex md:items-center gap-2 md:gap-10 md:flex-row flex-col">
                           <a
                              href={"/privacy"}
                              className="underline underline-offset-2"
                           >
                              Privacy Policy
                           </a>
                        </div>
                        <div>© 2024 All rights reserved</div>
                     </div>
                  </div>
               </div>
            </div>
         </StyledFooter>
      </>
   );
}

Footer1.defaultProps = {
   // menus: footerMenus.footer
};

export default Footer1;
