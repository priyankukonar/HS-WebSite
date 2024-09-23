// @ts-nocheck

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export interface IPharmacogenomicsItem {
   title: string;
   thumbnailUrl?: string;
}

const PharmacogenomicsItem = ({
   title,
   thumbnailUrl,
}: IPharmacogenomicsItem) => {
   return (
      <figure className="bg-gray-100 rounded-3xl p-4 md:p-8 pt-4 md:pt-8 flex flex-col items-center justify-center w-[300px] gap-8 !shadow-[1px_4px_7px_3px_#00000024]">
         <picture className="">
            {thumbnailUrl && (
               <div className="h-32 w-32 relative">
                  <Image
                     src={thumbnailUrl}
                     alt={title}
                     layout="fill"
                     objectFit="contain"
                  />
               </div>
            )}
         </picture>
         <figcaption className="flex-1">
            <p className="text-center text-black mb-4 text-lg mb-1">{title}</p>
         </figcaption>
      </figure>
   );
};

export default PharmacogenomicsItem;
