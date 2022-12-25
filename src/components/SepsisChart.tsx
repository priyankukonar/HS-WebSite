import styled from "@emotion/styled";
import { useState } from "react";

const StyledPieChart = styled.div`
position: relative;
width: 100%;
.chart__labels {
   position: absolute;
   right: 0;
   top: 10%;
   font-size: 10px;
   @media screen and (min-width: 800px)
   {
      right: 2rem;
      top: 25%;
      font-size: 1rem;
   }
   ul {
      li {
         .label .label__text {
            transition: all .1s ease-out;
         }
         .label.active .label__text {
            transform: scale(1.15);
         }
         .red {
            background: #ea1f2e
         }
         .blue {
            background: #324766
         }
         .green {
            background: #04b454
         }
         .gray {
            background: #9b9b9b
         }
      }
   }
}

`

export default function SepsisChart(props) {
   const [ activePie, setActivePie ] = useState(null)

   return (
      <>
         <StyledPieChart>
            {/*?xml version="1.0" encoding="UTF-8" standalone="no"?*/}
            <svg
               width="100%"
               height="100%"
               viewBox="0 0 1188 736"
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               xmlnsXlink="http://www.w3.org/1999/xlink"
               xmlSpace="preserve"
               className="SepsisChart"
               style={{
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 2
               }}
            >
               <g transform="matrix(1,0,0,1,-219.925,-2897.79)">
                  <g transform="matrix(2,0,0,2,0,0)">
                     <g id="chart">
                        <g transform="matrix(1,0,0,1,273.675,1786.14)">
                           <path
                              id="blue"
                              onMouseEnter={() => setActivePie('blue')}
                              className={activePie == 'blue' ? 'active': ''}
                              d="M0,-152.258L61.759,0C78.782,-6.884 94.353,-16.541 107.924,-28.428L0,-152.258Z"
                              style={{ fill: "rgb(50,71,102)" }}
                           />
                        </g>
                        <g transform="matrix(1,0,0,1,273.675,1757.84)">
                           <path
                              id="green"
                              onMouseEnter={() => setActivePie('green')}
                              className={activePie == 'green' ? 'active': ''}
                              d="M0,-123.957L-158.839,-164.18C-162.024,-151.325 -163.713,-137.853 -163.713,-123.957C-163.713,-32.746 -90.951,40.223 0,40.223C21.895,40.223 42.735,35.994 61.759,28.301L0,-123.957Z"
                              style={{ fill: "rgb(4,180,84)" }}
                           />
                        </g>
                        <g opacity="0.35">
                           <g transform="matrix(1,0,0,1,273.675,1469.7)">
                              <path
                                 id="gray"
                                 onMouseEnter={() => setActivePie('gray')}
                                 className={activePie == 'gray' ? 'active': ''}
                                 d="M0,164.181L-0.133,0C-77.132,0.06 -141.069,52.42 -158.814,123.853L0,164.181Z"
                                 style={{ fill: "rgb(155,155,155)" }}
                              />
                           </g>
                        </g>
                        <g  transform="matrix(0.656385,0.754426,0.754426,-0.656385,287,1565.500) scale(0.90)">
                           <path
                              id="red"
                              onMouseEnter={() => setActivePie('red')}
                              className={activePie == 'red' ? 'active': ''}
                              d="M48.065,-60.854L230.347,-60.854C230.224,-10.254 208.886,40.035 167.313,76.205C90.988,142.612 -23.027,134.887 -89.289,58.846L48.065,-60.854Z"
                              style={{ fill: "rgb(234,31,45)" }}
                           />
                        </g>

                        <text
                           x="512.723px"
                           y="1816.25px"
                           style={{
                              // fontFamily: '"LucidaGrande", "Lucida Grande", sans-serif',
                              fontWeight: 500,
                              fontSize: 16,
                              fill: "rgb(155,155,155)"
                           }}
                        >
                           S
                           <tspan
                              x="521.193px 530.875px 540.657px 547.057px 555.106px 563.873px 568.788px 575.315px 588.856px 600.467px 612.749px 618.499px 628.469px 638.44px 648.41px 658.38px 660.243px 672.081px 682.973px 692.943px "
                              y="1816.25px 1816.25px 1816.25px 1816.25px 1816.25px 1816.25px 1816.25px 1816.25px 1816.25px 1816.25px 1816.25px 1816.25px 1816.25px 1816.25px 1816.25px 1816.25px 1816.25px 1816.25px 1816.25px 1816.25px "
                           >
                              ource: WHO 2020 DATA
                           </tspan>
                        </text>
                     </g>
                  </g>
               </g>
            </svg>
            <div className="chart__labels">
               <ul>
                  {props.labels?.map((lbl, lbIndex) => (
                     <li key={`chart_labels_${lbIndex}`} className="mb-2">
                        <div className={`label flex items-center gap-3 ${activePie == lbl.value ? 'active': ''} `} onMouseEnter={() => setActivePie(lbl.value)}>
                           <span className={`w-4 h-4 block ${lbl.value}`}></span>
                           <span className="label__text">{lbl.label}</span>
                        </div>
                     </li>
                  ))}
               </ul>
            </div>
         </StyledPieChart>

      </>
   )
}

SepsisChart.defaultProps = {
   labels: [
      { }
   ]
}