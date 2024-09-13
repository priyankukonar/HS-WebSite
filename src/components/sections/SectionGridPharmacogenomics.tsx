import { useRef } from "react";
import Section from "../atoms/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import PharmacogenomicsItem, {
  IPharmacogenomicsItem,
} from "../molecules/PharmacogenomicsItem";

interface ISectionPharmacogenomicsProps {
  items: IPharmacogenomicsItem[];
  hide?: boolean;
}

const SectionGridPharmacogenomics = (props: ISectionPharmacogenomicsProps) => {
  const serviceCarousel = useRef(null);
  return (
    <Section className="" hide={props.hide}>
      <Section.Container className="container mx-auto py-12 md:py-20 px-6 md:px-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-customBlue mb-4">
            What is Pharmacogenomics?
          </h2>
          <p className="text-gray-600 mb-8">
            Pharmacogenomics (PGx) using Next-Generation Sequencing (NGS) is the
            science that uses genomics to understand how genes influence your
            body’s response to drugs. PGx Comprehensive using NGS provides
            insights on which drugs should be avoided, used with caution or used
            as directed, along with its dosage recommendations. It also
            identifies genetic variants that impact treatment efficacy.
          </p>
        </div>
        {props.items.length > 4 ? (
          <div className="relative">
            <Swiper
              spaceBetween={25}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              slidesPerView="auto"
              breakpoints={{
                376: {
                  slidesPerView: Math.min(props.items.length, 1),
                  spaceBetween: 20,
                },
                560: {
                  slidesPerView: Math.min(props.items.length, 2),
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: Math.min(props.items.length, 3),
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: Math.min(props.items.length, 4),
                  spaceBetween: 50,
                },
              }}
              loop={true}
              modules={[Autoplay]}
              onSwiper={(swiper: any) => (serviceCarousel.current = swiper)}
              className="flex items-center justify-center pb-1"
            >
              {props.items.map((item: IPharmacogenomicsItem, index) => (
                <SwiperSlide key={`slide_${index}`} className="!h-auto pb-1">
                  <PharmacogenomicsItem
                    key={index}
                    title={item.title}
                    thumbnailUrl={item.thumbnailUrl}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div
              className="swiper-button--outer swiper-button-prev"
              onClick={() => serviceCarousel.current?.slidePrev()}
            />
            <div
              className="swiper-button--outer swiper-button-next"
              onClick={() => serviceCarousel.current?.slideNext()}
            />
          </div>
        ) : (
          <div
            className={`flex justify-center gap-8 w-full m-auto my-8 mt-12 flex-wrap`}
          >
            {props.items.map((item, index) => (
              <PharmacogenomicsItem
                key={index}
                title={item.title}
                thumbnailUrl={item.thumbnailUrl}
              />
            ))}
          </div>
        )}
      </Section.Container>
    </Section>
  );
};

export default SectionGridPharmacogenomics;
