// @ts-nocheck
import * as React from "react"
import styled from "@emotion/styled";
import MapMarker from "./MapMarker";
// import

const StyledTBWorldMap = styled.div`
position: relative;
.map__marker {
   --size: 22px;
   position: absolute;
   left: var(--left);
   top: var(--top);
   color: #d73839;
   font-size: 14px;
   font-weight: bold;
   text-align: center;
   display: flex;
   justify-content: center;
   flex-direction: column;
   cursor: pointer;

   .marker__text {
      z-index: 11;
   }
   .map_marker_icon {
      width: var(--size);
      transition: all .1s ease-out;
      opacity:0.5;
   }
   &:hover .map_marker_icon {
      transform: scale(1.5);
      opacity:1;
   }
}
.marker__text--lg {
   font-size: 1.5rem;
}
.map__marker:hover  .map__marker-data {
   display: block;
}
.map__marker-data {
   display: none;
   position: absolute;
   left: 0;
   top: 120%;
}
.map__marker--india {

}
`

function WorldMap(props) {
   const { locations } = props
   const [ openedCountry, setOpenedCountry ] = React.useState(null)
   React.useEffect(() => {
      locations?.map(location => {

      })
   }, [ locations ])

   return (
      <div className="map map--world">
         <div className="mb-3">
            <img src={'/assets/map.svg'} className="w-full opacity-40" alt="World map" />
         </div>
         {locations?.map((loc, locIndex) => (
            <div key={`loc_${locIndex}`} className={`map__marker map__marker--${loc.id}`} style={{ '--left': loc.position.x, '--top': loc.position.y }} >
               <MapMarker onMouseEnter={() => setOpenedCountry(loc.id)} onMouseLeave={() => setOpenedCountry(null)} />
               {/* {openedCountry == loc.id && ( */}
               <div className={`map__marker-data map__marker-data--${loc.id}`}>
                  <div className="marker__text">{loc.label}</div>
                  <div className="marker__text--lg -mt-1">{loc.text}</div>
                  {/* {JSON.stringify(loc)} */}
               </div>
               {/* )} */}
            </div>
         ))}
      </div>
   )
}

const TBWorldMap = ({ locations }) => {
   return (
      <StyledTBWorldMap>
         <WorldMap locations={locations} />
      </StyledTBWorldMap>
   )
}
export default TBWorldMap
