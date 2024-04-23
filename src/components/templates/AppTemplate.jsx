import styled from "@emotion/styled";
import Script from 'next/script'
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useEffect } from "react";
// import AOS from 'aos'
// import 'aos/dist/aos.css'
import settings from '../../json/settings.json'
import Head from "next/head";
const StyledTemplate = styled.div`
   margin: 0;
   padding: 0;
   border: none;
   box-sizing: border-box;

   padding: 0px;
   margin: 0px;
`

function AppTemplate({ children, pageProps = {}, bodyClassName = '', renderMenu, ...props  }) {

   return (
      <StyledTemplate {...props} className={`body__content ${bodyClassName}`}>
         <Head>
            <link rel="icon" href="/assets/favicon.png" />
         </Head>
         <Navbar renderMenu={renderMenu} />
         {children}
         <Footer settings={settings} />
      </StyledTemplate>
   );
}

export default AppTemplate;
