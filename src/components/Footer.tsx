// @ts-nocheck
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "@emotion/styled";
import settings from "../json/settings.json";
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
import Image from "next/image";
import ContactForm from "./ContactForm";
import ContactFormProvider from "./providers/ContactFormProvider";

const StyledFooter = styled.footer``;

function Footer({}) {
   return (
      <StyledFooter className="bg-gradient-to-r from-customGreen to-toBlue">
         <div className="container mx-auto p-4 md:p-16">
            <div className="">
               <Link href={"/"}>
                  <a className="flex px-3 md:px-0">
                     <Image
                        src={settings.footer_logo_url}
                        alt=""
                        className="navbar-logo"
                        width={"250"}
                        height={"60"}
                     />
                  </a>
               </Link>
            </div>
            <div className="flex flex-col md:flex-row gap-8 text-white mt-8 md:mt-16">
               <div className="flex flex-col gap-4 md:w-1/4">
                  <h1 className="font-semibold text-lg">CONTACT</h1>
                  <div>
                     <h1 className="text-base font-medium">Partner</h1>
                     <p className="text-base font-light">Number: xxxxxxxxx</p>
                     <p className="text-base font-light">Email: xxxxxxxxx</p>
                  </div>
                  <div>
                     <h1 className="text-base font-medium">Career</h1>
                     <p className="text-base font-light">Number: xxxxxxxxx</p>
                     <p className="text-base font-light">Email: xxxxxxxxx</p>
                  </div>
               </div>
               <div className="flex flex-col gap-4 md:w-1/4">
                  <h1 className="font-semibold text-lg">MEET</h1>
                  <div>
                     <h1 className="text-base font-medium">Team</h1>
                     <p className="text-base font-light">
                        H-22, 23 Akshar Business Park, Sector 25, Turbhe, Navi
                        Mumbai 400703
                     </p>
                  </div>
                  <div>
                     <h1 className="text-base font-medium">Lab Address</h1>
                     <p className="text-base font-light">
                        H-22, 23 Akshar Business Park, Sector 25, Turbhe, Navi
                        Mumbai 400703
                     </p>
                  </div>
               </div>
               <div className="flex flex-col gap-4 md:w-1/4">
                  <h1 className="font-semibold text-lg">SITE MAP</h1>
                  <div className="flex flex-col gap-1">
                     <h1 className="text-base font-medium">Team</h1>
                     <h1 className="text-base font-medium">Advisory Board</h1>
                     <h1 className="text-base font-medium">Technology</h1>
                     <h1 className="text-base font-medium">Partner</h1>
                     <h1 className="text-base font-medium">Case Studies</h1>
                     <h1 className="text-base font-medium">FAQ</h1>
                  </div>
               </div>
               <div className="flex flex-col gap-4 md:w-1/4">
                  <h1 className="font-semibold text-lg">SOCIALS</h1>
                  <div className="flex flex-row md:flex-col gap-3">
                     <img src="/assets/facebook.svg" className="w-8 h-8" />
                     <img src="/assets/instagram.svg" className="w-8 h-8" />
                     <img src="/assets/linkedin.svg" className="w-8 h-8" />
                     <img src="/assets/youtube.svg" className="w-8 h-8" />
                  </div>
               </div>
            </div>
            <div className="text-sm flex flex-col md:flex-row justify-between gap-8 text-white mt-8 md:mt-16">
               <div className="md:w-1/3 ">
                  Disclaimer
                  <p className="leading-3 mt-2">
                     xxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                     xxxxxxxxxxxxxxxxxxxxx
                     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                     xxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                     xxxxxxxxxxxxxxxxxxxx
                  </p>
               </div>
               <div className="md:w-1/3 flex flex-col justify-between gap-3">
                  <div className=" flex md:flex-row flex-col justify-between gap-3">
                     <p className="underline">Cookies Settings</p>
                     <p className="underline">Privacy Policy </p>
                  </div>
                  <div className="flex md:justify-end">
                     © 2024 All rights reserved
                  </div>
               </div>
            </div>
         </div>
      </StyledFooter>
   );
}

Footer.defaultProps = {
   // menus: footerMenus.footer
};

export default Footer;
