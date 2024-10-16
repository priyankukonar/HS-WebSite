// @ts-nocheck
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "@emotion/styled";
import franchiseeSettings from "../json/franchiseeSettings.json";
import menus from "../json/menus.json";
import Modal from "react-modal";

import {
   faYoutube,
   faInstagram,
   faFacebookF,
   faLinkedin,
   faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import image from "next/image";
import ContactForm from "./ContactForm";
import ContactFormProvider from "./providers/ContactFormProvider";

const StyledFooter = styled.footer``;

function Footer2({}) {
   return (
      <StyledFooter className="bg-[#4670b3] text-white">
         <div className="container mx-auto p-8 md:p-16">
            <div className="flex flex-col gap-6">
               <p className="text-lg">For Further Queries, Contact:</p>
               <div className="flex flex-col gap-6 md:flex-row md:gap-20">
                  <div className="flex gap-2 items-center">
                     <div className="h-6 w-6 min-w-6 relative">
                        <img src={"/assets/phone-icon.png"} alt={"phone"} />
                     </div>
                     <p>{franchiseeSettings.phone_number}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                     <div className="h-6 w-6 min-w-6 relative">
                        <img src={"/assets/mail-icon.png"} alt={"mail"} />
                     </div>
                     <a href={`mailto:${franchiseeSettings.email}`}>
                        {franchiseeSettings.email}
                     </a>
                  </div>
               </div>

               <div className="flex md:items-center justify-between w-full md:flex-row flex-col gap-4 md:gap-0">
                  <div className="flex md:items-center gap-2 md:gap-10 md:flex-row flex-col">
                     {/* <a
                        target="_blank"
                        className="underline underline-offset-2"
                     >
                        Cookie Management Center
                     </a> */}
                     <a
                        target=""
                        href="/privacy"
                        className="underline underline-offset-2"
                     >
                        Privacy Policy
                     </a>
                  </div>
                  <div>© 2024 All rights reserved</div>
               </div>
            </div>
         </div>
      </StyledFooter>
   );
}

Footer2.defaultProps = {
   // menus: footerMenus.footer
};

export default Footer2;
