// @ts-nocheck
import AppTemplate from "../components/templates/AppTemplate";

import team from "../json/team.json";
import styled from "@emotion/styled";
import { useState } from "react";
import awards from "../json/awards.json";
import Section from '../components/atoms/Section'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { useRef } from "react";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import Head from "next/head";
const StyledHome = styled(AppTemplate)`
.awards-carousel {
   img {
      --size: 100px;
      width: var(--size);
      height: var(--size);
   }
}

`

const StyledHeroSection = styled(Section)`
   background-position: center;
   background-image: url("/assets/about-banner.jpg");
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   .section__container {
      min-height: calc(85vh - var(--safe-top-padding, 100px));
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding:0px;
   }
   @media (max-width: 768px) {
      background-image: none;
      background-size: contain;
      background-position: bottom;
      .section__container {
         min-height: 40vh;
         display: flex;
         flex-direction: column;
         justify-content: flex-start;
      }
   }
`
const HeroSection = () => {
   return (
      <StyledHeroSection className="HeroSection " data-aos="fade-up">
         <Section.Container className="mx-auto px-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
               <div className="grid__col  py-8 px-3 md:px-0">
                  <h3 className="mb-4 text-3xl">
                  Building state of the art<br/>
                     <span className="font-extrabold"> genomics solution</span> for<br/>
                     <span className="font-extrabold"> accurate, personalised</span><br/>
                     <span className="font-extrabold"> clinical</span> decisions
                  </h3>
               </div>
               <div className="grid__col block md:hidden">
                  <img src="/assets/about-mob-banner.png" alt="" className="w-full" />
               </div>
            </div>
         </Section.Container>
      </StyledHeroSection>
   )
}

export default function About({ Component, pageProps, news, settings }) {

   const [ activeTab2, setActiveTab2 ] = useState()
   const awardsCarousel = useRef(null)
   const teamCarousel = useRef(null)


   return (
      <StyledHome settings={settings}>
         <Head>
            <title>Privacy Policy</title>
         </Head>
    

         <Section className="">
            <Section.Container className="container mx-auto py-12 md:py-20">
          


        <div class="bg-white p-6 rounded-lg shadow-lg">
            <h1 class="text-3xl font-bold mb-4">Privacy Policy</h1>
            <p class="text-sm text-gray-500 mb-8">Last updated: July 18, 2024</p>

            <p class="mb-4">
                This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
                information when You use the Service and tells You about Your privacy rights and how the law protects
                You.
                We use Your Personal data to provide and improve the Service. By using the Service, You agree to the
                collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been
                created with the help of the Privacy Policy Generator.
            </p>

            <h2 class="text-2xl font-semibold mb-2">Interpretation and Definitions</h2>

            <h3 class="text-xl font-semibold mb-1">Interpretation</h3>
            <p class="mb-4">
                The words of which the initial letter is capitalized have meanings defined under the following
                conditions. The following definitions shall have the same meaning regardless of whether they appear in
                singular or in plural.
            </p>

            <h3 class="text-xl font-semibold mb-1">Definitions</h3>
            <p class="mb-4">For the purposes of this Privacy Policy:</p>

            <ul class="list-disc list-inside mb-4">
                <li class="mb-2"><strong>Account</strong> means a unique account created for You to access our Service
                    or parts of our Service.</li>
                <li class="mb-2"><strong>Affiliate</strong> means an entity that controls, is controlled by or is under
                    common control with a party, where "control" means ownership of 50% or more of the shares, equity
                    interest or other securities entitled to vote for election of directors or other managing authority.
                </li>
                <li class="mb-2"><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in
                    this Agreement) refers to HaystackAnalytics Private Limited, MSRB, 108, HILL SIDE, IIT Bombay Campus,
                    Mumbai, Mumbai Suburban, Maharashtra, 400076.</li>
                <li class="mb-2"><strong>Cookies</strong> are small files that are placed on Your computer, mobile
                    device or any other device by a website, containing the details of Your browsing history on that
                    website among its many uses.</li>
                <li class="mb-2"><strong>Country</strong> refers to: Maharashtra, India</li>
                <li class="mb-2"><strong>Device</strong> means any device that can access the Service such as a
                    computer, a cellphone or a digital tablet.</li>
                <li class="mb-2"><strong>Personal Data</strong> is any information that relates to an identified or
                    identifiable individual.</li>
                <li class="mb-2"><strong>Service</strong> refers to the Website.</li>
                <li class="mb-2"><strong>Service Provider</strong> means any natural or legal person who processes the
                    data on behalf of the Company. It refers to third-party companies or individuals employed by the
                    Company to facilitate the Service, to provide the Service on behalf of the Company, to perform
                    services related to the Service or to assist the Company in analyzing how the Service is used.</li>
                <li class="mb-2"><strong>Third-party Social Media Service</strong> refers to any website or any social
                    network website through which a User can log in or create an account to use the Service.</li>
                <li class="mb-2"><strong>Usage Data</strong> refers to data collected automatically, either generated by
                    the use of the Service or from the Service infrastructure itself (for example, the duration of a page
                    visit).</li>
                <li class="mb-2"><strong>Website</strong> refers to HaystackAnalytics, accessible from <a href="https://haystackanalytics.in" class="text-blue-500 hover:underline">https://haystackanalytics.in</a></li>
                <li class="mb-2"><strong>You</strong> means the individual accessing or using the Service, or the
                    company, or other legal entity on behalf of which such individual is accessing or using the Service,
                    as applicable.</li>
            </ul>

            <h2 class="text-2xl font-semibold mb-2">Collecting and Using Your Personal Data</h2>

            <h3 class="text-xl font-semibold mb-1">Types of Data Collected</h3>

            <h4 class="text-lg font-semibold mb-1">Personal Data</h4>
            <p class="mb-4">
                While using Our Service, We may ask You to provide Us with certain personally identifiable information
                that can be used to contact or identify You. Personally identifiable information may include, but is not
                limited to:
            </p>

            <ul class="list-disc list-inside mb-4">
                <li class="mb-2">Email address</li>
                <li class="mb-2">First name and last name</li>
                <li class="mb-2">Phone number</li>
                <li class="mb-2">Address, State, Province, ZIP/Postal code, City</li>
                <li class="mb-2">Usage Data</li>
            </ul>

            <h4 class="text-lg font-semibold mb-1">Usage Data</h4>
            <p class="mb-4">
                Usage Data is collected automatically when using the Service.
            </p>
            <p class="mb-4">
                Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address),
                browser type, browser version, the pages of our Service that You visit, the time and date of Your visit,
                the time spent on those pages, unique device identifiers and other diagnostic data.
            </p>
            <p class="mb-4">
                When You access the Service by or through a mobile device, We may collect certain information
                automatically, including, but not limited to, the type of mobile device You use, Your mobile device
                unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile
                Internet browser You use, unique device identifiers and other diagnostic data.
            </p>
            <p class="mb-4">
                We may also collect information that Your browser sends whenever You visit our Service or when You access
                the Service by or through a mobile device.
            </p>

   

            <h4 class="text-lg font-semibold mb-1">Tracking Technologies and Cookies</h4>
            <p class="mb-4">
                We use Cookies and similar tracking technologies to track the activity on Our Service and store certain
                information. Tracking technologies used are beacons, tags, and scripts to collect and track information
                and to improve and analyze Our Service. The technologies We use may include:
            </p>

            <ul class="list-disc list-inside mb-4">
                <li class="mb-2"><strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your
                    Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being
                    sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service.
                    Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use
                    Cookies.</li>
            
                <li class="mb-2"><strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain
                    small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and
                    single-pixel gifs) that permit the Company, for example, to count users who have visited those pages
                    or opened an email and for other related website statistics (for example, recording the popularity of
                    a certain section and verifying system and server integrity).</li>
            </ul>

            <p class="mb-4">
                Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or
                mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web
                browser. Learn more about cookies on the <a href="https://www.privacypolicies.com/blog/cookies/"
                    class="text-blue-500 hover:underline">Privacy Policies website</a> article.
            </p>

            <p class="mb-4">
                We use both Session and Persistent Cookies for the purposes set out below:
            </p>

            <ul class="list-disc list-inside mb-4">
                <li class="mb-2"><strong>Necessary / Essential Cookies</strong>
                    <ul class="list-none ml-6 mb-2">
                        <li>Type: Session Cookies</li>
                        <li>Administered by: Us</li>
                        <li>Purpose: These Cookies are essential to provide You with services available through the
                            Website and to enable You to use some of its features. They help to authenticate users and
                            prevent fraudulent use of user accounts. Without these Cookies, the services that You have
                            asked for cannot be provided, and We only use these Cookies to provide You with those
                            services.</li>
                    </ul>
                </li>
                <li class="mb-2"><strong>Cookies Policy / Notice Acceptance Cookies</strong>
                    <ul class="list-noneml-6 mb-2">
                        <li>Type: Persistent Cookies</li>
                        <li>Administered by: Us</li>
                        <li>Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</li>
                    </ul>
                </li>
         
                <li class="mb-2"><strong>Tracking and Performance Cookies</strong>
                    <ul class="list-disc list-inside ml-6 mb-2">
                        <li>Type: Persistent Cookies</li>
                        <li>Administered by: Third-Parties</li>
                        <li>Purpose: These Cookies are used to track information about traffic to the Website and how
                            users use the Website. The information gathered via these Cookies may directly or indirectly
                            identify you as an individual visitor. This is because the information collected is typically
                            linked to a pseudonymous identifier associated with the device you use to access the Website.
                            We may also use these Cookies to test new pages, features or new functionality of the Website
                            to see how our users react to them.</li>
                    </ul>
                </li>
            </ul>
            <h2 class="text-2xl font-semibold mb-4">Use of Your Personal Data</h2>
        <p class="mb-4">The Company may use Personal Data for the following purposes:</p>

        <ul class="list-disc list-inside mb-6">
            <li class="mb-2"><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</li>
            <li class="mb-2"><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</li>
            <li class="mb-2"><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</li>
            <li class="mb-2"><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</li>
            <li class="mb-2"><strong>To provide You</strong> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</li>
            <li class="mb-2"><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</li>
            <li class="mb-2"><strong>For other purposes:</strong> We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</li>
        </ul>

        <h2 class="text-2xl font-semibold mb-4">We may share Your personal information in the following situations:</h2>

        <ul class="list-disc list-inside mb-6">
            <li class="mb-2"><strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.</li>
            <li class="mb-2"><strong>For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
            <li class="mb-2"><strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
            <li class="mb-2"><strong>With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.</li>
            <li class="mb-2"><strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your profile.</li>
            <li class="mb-2"><strong>With Your consent:</strong> We may disclose Your personal information for any other purpose with Your consent.</li>
        </ul>

        <h2 class="text-2xl font-semibold mb-4">Retention of Your Personal Data</h2>
        <p class="mb-4">The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
        <p class="mb-4">The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>

        <h2 class="text-2xl font-semibold mb-4">Transfer of Your Personal Data</h2>
        <p class="mb-4">Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>
        <p class="mb-4">Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
        <p class="mb-4">The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>

        <h2 class="text-2xl font-semibold mb-4">Delete Your Personal Data</h2>
        <p class="mb-4">You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.</p>
        <p class="mb-4">Our Service may give You the ability to delete certain information about You from within the Service.</p>
        <p class="mb-4">You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.</p>
        <p class="mb-4">Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.</p>

        <h2 class="text-2xl font-semibold mb-4">Disclosure of Your Personal Data</h2>
      
        <h3 class="text-xl font-semibold mb-2">Other legal requirements</h3>
        <p class="mb-4">The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
        <ul class="list-disc list-inside mb-6">
            <li class="mb-2">Comply with a legal obligation</li>
            <li class="mb-2">Protect and defend the rights or property of the Company</li>
            <li class="mb-2">Prevent or investigate possible wrongdoing in connection with the Service</li>
            <li class="mb-2">Protect the personal safety of Users of the Service or the public</li>
            <li class="mb-2">Protect against legal liability</li>
        </ul>

        <h2 class="text-2xl font-semibold mb-4">Security of Your Personal Data</h2>
        <p class="mb-4">The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>

        <h2 class="text-2xl font-semibold mb-4">Children's Privacy</h2>
        <p class="mb-4">Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>
        <p class="mb-4">If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.</p>

        <h2 class="text-2xl font-semibold mb-4">Links to Other Websites</h2>
        <p class="mb-4">Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
        <p class="mb-4">We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>

        <h2 class="text-2xl font-semibold mb-4">Changes to this Privacy Policy</h2>
        <p class="mb-4">We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
        We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.
        You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

        <h2 class="text-2xl font-semibold mb-4">Contact Us</h2>
        <p class="mb-4">If you have any questions about this Privacy Policy, You can contact us:</p>
        <ul class="list-disc list-inside mb-6">
            <li class="mb-2">By email: social@haystackanalytics.in</li>
        </ul>
            </div>

               
            </Section.Container>
         </Section>
      </StyledHome>
   )
}

