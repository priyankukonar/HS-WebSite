import React from "react";
import AppTemplate from "../components/templates/AppTemplate";
import Section from "../components/atoms/Section";
import { Title } from "../components/atoms/Title";

const Message1 = () => {
   return (
      <Section>
         <div className="w-[650px] pt-5" style={{ margin: "auto" }}>
            <div className="grid grid-rows-1 gap-1">
               <div className="col-span-2 h-[250px]">
                  <img
                     src="/assets/messageboard/Green_Bar.png"
                     className="w-full h-[250px]"
                  />
               </div>
               <div className="grid grid-cols-3 col-span-2 border">
                  <div className=" col-span-1">
                     <img
                        src="/assets/messageboard/COO.png"
                        className="w-full"
                     />
                  </div>
                  <div className=" col-span-2 ">
                     <img
                        src="/assets/messageboard/the_message2.png"
                        className="w-full"
                     />
                  </div>
               </div>
            </div>
         </div>
      </Section>
   );
};

export default Message1;
