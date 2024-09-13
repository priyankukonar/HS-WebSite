import styled from "@emotion/styled";
import Script from "next/script";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useEffect } from "react";
// import AOS from 'aos'
// import 'aos/dist/aos.css'
import settings from "../../json/settings.json";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer1 from "../Footer1";
import Navbar1 from "../Navbar1";

const StyledTemplate = styled.div`
   margin: 0;
   padding: 0;
   border: none;
   box-sizing: border-box;

   padding: 0px;
   margin: 0px;
`;

function AppTemplate({
   children,
   pageProps = {},
   bodyClassName = "",
   renderMenu,
   ...props
}) {
   const router = useRouter();
   return (
      <StyledTemplate {...props} className={`body__content ${bodyClassName}`}>
         <Head>
            <link rel="icon" href="/assets/favicon.png" />
         </Head>
         {router.pathname === "/identifi" ? (
            <Navbar1 renderMenu={renderMenu} />
         ) : (
            <Navbar renderMenu={renderMenu} />
         )}
         {children}
         {router.pathname === "/identifi" ? (
            <Footer1 settings={settings} />
         ) : (
            <Footer settings={settings} />
         )}
      </StyledTemplate>
   );
}

export default AppTemplate;
