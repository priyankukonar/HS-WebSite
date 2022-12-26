// @ts-nocheck
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "@emotion/styled";
import settings from '../json/settings.json'
import menus from '../json/menus.json'
import Modal from 'react-modal'

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

const StyledFooter = styled.footer`

`

function Footer({  }) {

   return (
      <StyledFooter className="bg-gray-100">
         <div className="container mx-auto pt-8 pb-0 md:py-8 px-3 md:px-0">
            <div className="flex flex-col md:flex-row gap-6">
               <div className="md:w-4/12">
                  <Link href={"/"}>
                     <a className="flex px-3 md:px-0">
                        <Image src={settings.logo_url} alt="" className="navbar-logo" width={'250'} height={'60'} />
                     </a>
                  </Link>
               </div>
               <div className="md:w-2/12">
                  <ul className="text-sm text-gray-600 flex flex-col gap-3">
                     {menus.footer?.map((fm, fmIndex) => (
                     <li key={`fm_${fmIndex}`}>
                        <Link href={fm.url}>{fm.title}</Link>
                     </li>
                     ))}
                     {/* <li >
                        <ContactFormProvider
                           renderTrigger={(rprops) => (
                              <>
                              <a href={'#'} {...rprops}>{'Contact'}</a>
                              </>
                           )}
                        />
                     </li> */}
                  </ul>
               </div>
               <div className="md:w-3/12">
                  <ul className="text-sm text-gray-600 flex flex-col gap-3">
                     <li>
                     <a href={`mailto:${settings.email}`}>{settings.email}</a>
                     </li>
                     <li>
                        <a>{settings.phone_number}</a>
                     </li>
                     <li className="flex items-center gap-6 text-xl">
                        {settings.facebook_url ? (
                           <a href={settings.facebook_url} target="_blank">
                              <FontAwesomeIcon
                                 id="icons"
                                 className="text-dark"
                                 icon={faFacebookF}
                              />
                           </a>
                        ) : null}

                        {settings.instagram_url ? (
                           <a href={settings.instagram_url} target="_blank">
                              <FontAwesomeIcon
                                 id="icons"
                                 className="text-dark"
                                 icon={faInstagram}
                              />
                           </a>
                        ) : null}

                        {settings.linkedin_url ? (
                           <a href={settings.linkedin_url} target="_blank">
                              <FontAwesomeIcon
                                 id="icons"
                                 className="text-dark"
                                 icon={faLinkedin}
                              />
                           </a>
                        ) : null}
                        {settings.youtube_url ? (
                           <a href={settings.youtube_url} target="_blank">
                              <FontAwesomeIcon
                                 id="icons"
                                 className="text-dark"
                                 icon={faYoutube}
                              />
                           </a>
                        ) : null}
                        {settings.twitter_url ? (
                           <a href={settings.twitter_url} target="_blank">
                              <FontAwesomeIcon
                                 id="icons"
                                 className="text-dark"
                                 icon={faTwitter}
                              />
                           </a>
                        ) : null}
                     </li>
                  </ul>
               </div>
               <div className="pb-2 md:pb-0 md:mt-0 md:w-4/12">
                  <p className="text-sm">
                     HaystackAnalytics Private Limited
                  </p>
                  <p className="text-xs my-2">
                     CM 03, SINE, KReSIT Building 4th Floor, Department of Computer Science, IIT Bombay, Powai, Mumbai - 400076
                  </p>
                  <Link href=""><span className="text-center md:text-end text-sm">© HaystackAnalytics</span></Link>
               </div>
            </div>
         </div>

      </StyledFooter>
   );
}

Footer.defaultProps = {
   // menus: footerMenus.footer
}

export default Footer;
