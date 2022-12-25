import { useState } from "react";
import { LinkedinShareButton, FacebookShareButton, WhatsappShareButton, TwitterShareButton, EmailShareButton } from 'react-share';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faFacebookF,
   faLinkedin,
   faWhatsapp,
   faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
   faEnvelope
} from "@fortawesome/free-regular-svg-icons";

interface IShareButton {
   title: string,
   url: string,
}

export default function ShareButton(props: IShareButton) {
   const [activeTab, setActiveTab] = useState(false)
   return (
      <>
         <div className="flex items-center share-btn">
            <div className="flex justify-between cursor-pointer " onClick={() => setActiveTab(prevState => !prevState)}>
               {/* <span className="text-base font-bold">{date}</span> */}
               <span className="text-green-600 hover:text-green-900 font-normal text-base flex items-center gap-2 share-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-reply-fill" viewBox="0 0 16 16">
                  <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
               </svg>SHARE</span>
            </div>
            <div className={`${activeTab ? 'is-opened' : ''} share-btn__menu ml-6 grid grid-cols-5 gap-3 justify-center text-center text-sm text-gray-500 border border-gray-400 rounded-md px-2 py-1`}>
               <div className="grid__col">
                  <FacebookShareButton {...props}>
                     <FontAwesomeIcon
                        id="icons"
                        className="text-dark"
                        icon={faFacebookF}
                     />
                  </FacebookShareButton>
               </div>
               <div className="grid__col">
                  <LinkedinShareButton {...props}>
                     <FontAwesomeIcon
                        id="icons"
                        className="text-dark"
                        icon={faLinkedin}
                     />
                  </LinkedinShareButton>
               </div>
               <div className="grid__col">
                  <WhatsappShareButton {...props}>
                     <FontAwesomeIcon
                        id="icons"
                        className="text-dark"
                        icon={faWhatsapp}
                     />
                  </WhatsappShareButton>
               </div>
               <div className="grid__col">
                  <EmailShareButton {...props}>
                     {/* <FontAwesomeIcon icon="fa-solid fa-envelope" /> */}
                     <FontAwesomeIcon
                        id="icons"
                        className="text-dark"
                        icon={faEnvelope}
                     />
                  </EmailShareButton>
               </div>
               <div className="grid__col">
                  <TwitterShareButton {...props}>
                     <FontAwesomeIcon
                        id="icons"
                        className="text-dark"
                        icon={faTwitter}
                     />
                  </TwitterShareButton>
               </div>
            </div>
         </div>

      </>
   )
}
