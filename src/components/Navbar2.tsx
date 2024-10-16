// @ts-nocheck
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useHeadroom from "react-useheadroom";
import styled from "@emotion/styled";
import settings from "../json/settings.json";
import menus from "../json/menus.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
   faYoutube,
   faInstagram,
   faFacebookF,
   faLinkedin,
   faTwitter,
   faX,
} from "@fortawesome/free-brands-svg-icons";
import { XIcon, MenuIcon } from "@heroicons/react/outline";

// import iocns from "@f";

const productHeaderMenu = menus.productsHeader;
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";

const MENU_LIST = [
   {
      text: "content will shown here in a while",
      href: "/Home",
   },
];

const StyledNavbar = styled.nav`
   transition: all 0.4s;
   transform: ${(props) =>
      props.isPinned ? `translate3d(0,0px,0)` : `translate3d(0,-100px,0)`};
   background-color: ${(props) =>
      props.isPinned ? `var(--navbar-bg, white)` : `transparent`};
   height: 40;
   width: 100%;
   position: fixed;
   top: 0;
   left: 0;
   padding: 1.5rem 0 1.5rem 0;
   z-index: 999;
   &.bg-white {
      background: white !important;
   }

   @media screen and (max-width: 768px) {
      padding: 0.8rem 0 0.8rem 0;
      .nav__menu-list {
         padding: 1.5rem 1rem;
         position: fixed;
         top: 0;
         left: 0;
         right: 0;
         background: white;
         min-height: 100vh;
         padding-top: 100px;
         display: none;
         flex-direction: column-reverse;
         justify-content: flex-end;
         &.active {
            display: flex;
         }
         .close {
            position: absolute;
            right: 1rem;
            top: 1rem;
         }
      }
   }
`;

const Navbar2 = ({ renderMenu }) => {
   const router = useRouter();
   const [navActive, setNavActive] = useState(false);
   const [dropdownOpened, setDropdownOpened] = useState(false);
   const [dropdownOpened1, setDropdownOpened1] = useState(false);

   const [activeIdx, setActiveIdx] = useState(0);
   const [inView, setInView] = useState(false);
   const isActiveMenu = useMemo(() => {}, []);
   const toggleMenu = () => {
      setNavActive(false);
   };
   useEffect(() => {
      globalThis.addEventListener("scroll", (ev) => {
         if (document.body.getBoundingClientRect().top >= 0) {
            setInView(true);
         } else {
            setInView(false);
         }
         // console.log({ ev })
      });
      if (inView) {
         // globalThis?.classList.add('bg-white')
      } else {
         // globalThis?.classList.remove('bg-white')
      }
   }, []);
   const isPinned = useHeadroom({
      fixAt: 100,
      onPin: () => {
         // set("pinned")
         document.body?.classList?.add("header-is-pinned");
      },
      onUnpin: () => {
         document.body?.classList?.remove("header-is-pinned");
      },
      onFix: (fixedAt) => {
         // set(`fixed at ${fixedAt}`)
         document.body?.classList?.add("header-is-fixed");
      },
      onUnfix: (fixedAt) => {
         // set(["unpinned", ` and unfixed from ${fixedAt}`])
         document.body?.classList?.remove("header-is-fixed");
      },
   });
   const scrollToDiv = () => {
      const element = document.getElementById("contactUsSection");

      if (element) {
         element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
   };
   return (
      <StyledNavbar
         isPinned={isPinned}
         className={`${isPinned ? "header-pinned" : ""} ${
            inView ? "" : "bg-white"
         } !pt-0 pb-[1.5rem]`}
      >
         <div className="h-2 bg-gradient-to-r from-[#4871b8] to-[#4eab50]"></div>
         <nav className="navbar-main container mx-auto flex justify-between gap-4 pt-[1.5rem]">
            <div className="navbar-brand flex">
               <Link href={"/"}>
                  <a className="flex px-3 md:px-0">
                     <img
                        src={settings.logo_url}
                        alt=""
                        className="navbar-logo"
                        width={"250"}
                        height={"60"}
                     />
                  </a>
               </Link>
            </div>

            <div className={`${navActive ? "active" : ""} nav__menu-list`}>
               <div className="close md:hidden">
                  <XIcon className="w-8 h-8" onClick={toggleMenu} />
               </div>

               <div className="flex justify-center">
                  <button
                     onClick={scrollToDiv}
                     // type="submit"
                     className="my-4 bg-[#4570b5] text-white py-2 px-4 rounded-lg transition duration-300"
                  >
                     Contact Us
                  </button>
               </div>
            </div>
            <div className="md:mt-3 mr-3 md:hidden">
               <MenuIcon
                  className="w-8 h-8 cursor-pointer"
                  onClick={() => setNavActive(true)}
               />
            </div>
         </nav>
      </StyledNavbar>
   );
};

export default Navbar2;
