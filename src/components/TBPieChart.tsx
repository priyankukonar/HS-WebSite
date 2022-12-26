import styled from "@emotion/styled";
import { useState } from "react";

const StyledPieChart = styled.div`
position: relative;
width: 100%;
.list-markers {
   position: absolute;
   right: 0;
   top: 2rem;
   @media screen and (max-width: 800px)
   {
      top: 0;
      transform: scale(0.88);
   }
}
.label .block {
   background: var(--bg-color, transparent);
}
.label__text {
   transition: all .1s ease-out;
   font-size: 13px;
}
.label.active .label__text {
   transform: scale(1.15)
}

`

const legends = [
   { label: 'India 27%', value: 'path-1', color: '#ea1f2d', },
   { label: 'Rest 33%', value: 'path-2', color: '#5b5b5b', },
   { label: 'China 9%', value: 'path-3', color: '#6d6d6d', },
   { label: 'Indonesia 8%', value: 'path-4', color: '#7e7f7c', },
   { label: 'Philippines 6%', value: 'path-5', color: '#9b9b9b', },
   { label: 'Pakistan 6%', value: 'path-6', color: '#b2b2b2', },
   { label: 'Nigeria 4%', value: 'path-7', color: '#c6c6c6', },
   { label: 'Bangladesh 4%', value: 'path-8', color: '#e0e0e0', },
   { label: 'South Africa 3%', value: 'path-9', color: '#ededed', },
]

export default function TBPieChart(props) {
   const [ activePie, setActivePie ] = useState(null)
   return (
      <>
         <StyledPieChart>
            {/*?xml version="1.0" encoding="UTF-8" standalone="no"?*/}
            <svg
               width="100%"
               height="100%"
               viewBox="0 0 956 577"
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               xmlnsXlink="http://www.w3.org/1999/xlink"
               xmlSpace="preserve"
               // xmlns:serif="http://www.serif.com/"
               className="overflow-visible"
               style={{
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 2
               }}
            >
               <g transform="matrix(1,0,0,1,-215.199,-2332.92)">
                  <g transform="matrix(2,0,0,2,0,0)">
                     <g>
                        <g id="countries_chart">
                           <g transform="matrix(0.989636,0.1436,0.1436,-0.989636,243.235,1299.56)">
                              <path
                                 id="path-1"
                                 onMouseEnter={() => setActivePie('path-1')}
                                 onMouseLeave={() => setActivePie(null)}
                                 d="M9.619,-9.782L153.407,-9.782C153.384,-3.808 152.994,2.237 152.222,8.327C142.136,87.739 70.751,143.235 -8.427,133.245L9.619,-9.782Z"
                                 style={{ fill: "rgb(234,31,45)" }}
                              />
                           </g>
                           <g transform="matrix(-0.60169,0.79873,0.79873,0.60169,353.883,1404.94)">
                              <path
                                 id="path-2"
                                 onMouseEnter={() => setActivePie('path-2')}
                                 onMouseLeave={() => setActivePie(null)}
                                 d="M-13.638,-138.645L130.617,-138.645C130.665,-109.321 121.697,-79.689 103.029,-53.969C59.717,5.706 -19.805,22.279 -82.765,-12.564L-13.638,-138.645Z"
                                 style={{ fill: "rgb(91,91,91)" }}
                              />
                           </g>
                           <g transform="matrix(1,0,0,1,251.35,1425.78)">
                              <path
                                 id="path-3"
                                 onMouseEnter={() => setActivePie('path-3')}
                                 onMouseLeave={() => setActivePie(null)}
                                 d="M0,-115.161L-134.797,-64.6C-125.231,-38.699 -108.478,-16.354 -86.875,0L0,-115.161Z"
                                 style={{ fill: "rgb(109,109,109)" }}
                              />
                           </g>
                           <g transform="matrix(-0.989634,-0.143615,-0.143615,0.989634,105.888,1330.03)">
                              <path
                                 id="path-4"
                                 onMouseEnter={() => setActivePie('path-4')}
                                 onMouseLeave={() => setActivePie(null)}
                                 d="M-141.165,-40.101L2.622,-40.101C2.6,-34.126 2.212,-28.081 1.438,-21.991C-0.921,-3.409 -6.638,13.864 -15.027,29.295L-141.165,-40.101Z"
                                 style={{ fill: "rgb(126,127,124)" }}
                              />
                           </g>
                           <g transform="matrix(1,0,0,1,251.35,1238.99)">
                              <path
                                 id="path-5"
                                 onMouseEnter={() => setActivePie('path-5')}
                                 onMouseLeave={() => setActivePie(null)}
                                 d="M0,71.637L-124.98,0C-133.73,15.425 -139.731,32.677 -142.316,51.113L0,71.637Z"
                                 style={{ fill: "rgb(155,155,155)" }}
                              />
                           </g>
                           <g transform="matrix(1,0,0,1,251.35,1197.82)">
                              <path
                                 id="path-6"
                                 onMouseEnter={() => setActivePie('path-6')}
                                 onMouseLeave={() => setActivePie(null)}
                                 d="M0,112.804L-89.889,0C-104.033,11.323 -115.979,25.292 -124.998,41.201L0,112.804Z"
                                 style={{ fill: "rgb(178,178,178)" }}
                              />
                           </g>
                           <g transform="matrix(1,0,0,1,251.35,1179.01)">
                              <path
                                 id="path-7"
                                 onMouseEnter={() => setActivePie('path-7')}
                                 onMouseLeave={() => setActivePie(null)}
                                 d="M0,131.612L-59.111,0C-70.235,4.991 -80.601,11.358 -89.996,18.893L0,131.612Z"
                                 style={{ fill: "rgb(198,198,198)" }}
                              />
                           </g>
                           <g transform="matrix(1,0,0,1,251.35,1168.5)">
                              <path
                                 id="path-8"
                                 onMouseEnter={() => setActivePie('path-8')}
                                 onMouseLeave={() => setActivePie(null)}
                                 d="M0,142.118L-24.484,0C-36.621,2.057 -48.232,5.625 -59.118,10.509L0,142.118Z"
                                 style={{ fill: "rgb(224,224,224)" }}
                              />
                           </g>
                           <g transform="matrix(1,0,0,1,251.35,1166.33)">
                              <path
                                 id="path-9"
                                 onMouseEnter={() => setActivePie('path-9')}
                                 onMouseLeave={() => setActivePie(null)}
                                 d="M0,144.296L2.447,0.157C-6.787,0 -15.821,0.703 -24.583,2.194L0,144.296Z"
                                 style={{ fill: "rgb(237,237,237)" }}
                              />
                           </g>
                        </g>

                     </g>
                  </g>
               </g>
            </svg>
            <ul className="list-markers">
            {legends?.map((lbl, lblIndex) => (
               <li key={`mpplb_${lblIndex}`}>
                  <div className={`label flex items-center gap-3 ${activePie == lbl.value ? 'active': ''} `} onMouseEnter={() => setActivePie(lbl.value)}>
                   <span className={`w-2 h-2 block ${lbl.value}`} style={{ '--bg-color': lbl.color  }}></span>
                     <span className="label__text">{lbl.label}</span>
                  </div>
               </li>
            ))}
            </ul>
         </StyledPieChart>

      </>
   )
}
