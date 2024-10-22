// @ts-nocheck
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useHeadroom from "react-useheadroom";
import styled from "@emotion/styled";
import settings from "../json/settings.json";
import menus from "../json/menus.json";
import { XIcon, MenuIcon } from "@heroicons/react/outline";

// import iocns from "@f";
import { useRouter } from "next/router";

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

   @media screen and (max-width: 767px) {
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

const Navbar = ({}) => {
   const router = useRouter();
   const [navActive, setNavActive] = useState(false);
   const [dropdownOpened, setDropdownOpened] = useState("");
   const [dropdownOpened1, setDropdownOpened1] = useState("");

   const [inView, setInView] = useState(false);
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
      onFix: () => {
         // set(`fixed at ${fixedAt}`)
         document.body?.classList?.add("header-is-fixed");
      },
      onUnfix: () => {
         // set(["unpinned", ` and unfixed from ${fixedAt}`])
         document.body?.classList?.remove("header-is-fixed");
      },
   });

   const scrollToSection = (id: string) => {
      const section = document.getElementById(id);
      if (section) {
         section.scrollIntoView({ behavior: "smooth" });
      }
   };
   console.log(router.pathname);

   return (
      <StyledNavbar
         isPinned={isPinned}
         className={`${isPinned ? "header-pinned" : ""} ${
            inView ? "" : "bg-white"
         }`}
      >
         <nav className="navbar-main container mx-auto flex justify-between items-center gap-4">
            <div className="navbar-brand flex">
               <Link href={"/"} className="flex px-3 md:px-0">
                  <Image
                     src={settings.logo_url}
                     alt="Haystack Labs"
                     className={"navbar-logo"}
                     width={300}
                     height={60}
                     loading="lazy"
                  />
               </Link>
            </div>

            <div className={`${navActive ? "active" : ""} nav__menu-list`}>
               <div className="close md:hidden">
                  <XIcon
                     className="w-8 h-8"
                     onClick={() => {
                        toggleMenu();
                     }}
                  />
               </div>
               <div className="flex gap-6 flex-col md:flex-row mt-6 md:mt-0 nav-menu-main justify-end relative items-center">
                  {menus.navbar.map((mn, mnIndex) => {
                     if (mn.type === "link") {
                        return (
                           <Link key={`mn${mnIndex}`} href={mn.url}>
                              <p
                                 className={`font-semibold flex gap-2 justify-center items-center cursor-pointer ${
                                    router.pathname == mn.url
                                       ? "text-customBlue1"
                                       : ""
                                 }`}
                              >
                                 {mn.label}
                              </p>
                           </Link>
                        );
                     } else if (mn.type === "dropdown") {
                        return (
                           <div
                              className="has-dropdown"
                              key={`mn${mnIndex}`}
                              onMouseOver={() => {
                                 setDropdownOpened(mn.label);
                              }}
                              onMouseOut={() => setDropdownOpened("")}
                           >
                              <div
                                 className="font-semibold flex gap-2 justify-center items-center "
                                 href={"#"}
                              >
                                 <span
                                    className={`cursor-pointer ${
                                       mn.items?.find(
                                          (val) => val.url === router.pathname
                                       )
                                          ? "text-customBlue1"
                                          : ""
                                    }`}
                                 >
                                    {mn.label}
                                 </span>
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                 >
                                    <path
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                 </svg>
                              </div>
                              <div
                                 className={`dropdown-menu md:absolute top-18 bg-white py-4 md:py-6 px-3  md:shadow-lg ${
                                    dropdownOpened === mn.label ? "" : "hidden"
                                 }`}
                              >
                                 <ol className="flex flex-col gap-3">
                                    {mn.items.map(
                                       (mn1, mn1Index) =>
                                          mn1.type === "link" && (
                                             <li key={`scm1_${mnIndex}`}>
                                                <Link
                                                   key={`mn1${mn1Index}`}
                                                   href={mn1.url}
                                                   className={`px-3 font-regular cursor-pointer hover:text-blue-600 ${
                                                      router.pathname == mn1.url
                                                         ? "active underline underline-offset-8 decoration-red-500 decoration-2"
                                                         : ""
                                                   }`}
                                                >
                                                   <p
                                                      className={`font-semibold cursor-pointer ${
                                                         router.pathname ==
                                                         mn1.url
                                                            ? "text-customBlue1"
                                                            : ""
                                                      }`}
                                                   >
                                                      {mn1.label}
                                                   </p>
                                                </Link>
                                             </li>
                                          )
                                    )}
                                 </ol>
                              </div>
                           </div>
                        );
                     }
                  })}
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

export default Navbar;
