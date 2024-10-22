import styled from "@emotion/styled";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Head from "next/head";

const StyledTemplate = styled.div`
   margin: 0;
   padding: 0;
   border: none;
   box-sizing: border-box;

   padding: 0px;
   margin: 0px;
`;

function AppTemplate({
   // @ts-ignore
   children,
   pageProps = {},
   bodyClassName = "",
   ...props
}) {
   return (
      <StyledTemplate {...props} className={`body__content ${bodyClassName}`}>
         <Head>
            <link rel="icon" href="/assets/favicon.png" />
         </Head>
         <Navbar />
         {children}
         <Footer />
      </StyledTemplate>
   );
}

export default AppTemplate;
