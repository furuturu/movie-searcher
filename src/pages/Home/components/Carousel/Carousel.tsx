import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/modules/effect-coverflow/effect-coverflow.min.css";
import "swiper/modules/pagination/pagination.min.css";
import {
  CarouselItem,
  CarouselWrapper,
  ShortDescription,
} from "./Carousel.styles";
import { useContentForBillboardQuery } from "../../../../store/services/fetchData";
import { useSelector } from "react-redux";
import {
  selectAppType,
  selectLanguage,
} from "../../../../store/modules/Preferences/selectors";
import { getBackdropURL } from "../../../../utils/getBackdropURL";
import { Link } from "react-router-dom";
import { swiperSettings } from "./swiperSettings";
import { IDataForBillboard } from "../../../../types/types";
import { Load } from "../../../../components/Loader";

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

export const Carousel = () => {
  const language = useSelector(selectLanguage);
  const appType = useSelector(selectAppType);
  const { data, isLoading } = useContentForBillboardQuery({
    appType,
    language,
  });
  return (
    <>
      {isLoading && <Load />}
      {!isLoading && (
        <CarouselWrapper>
          <Swiper {...swiperSettings} effect={"coverflow"}>
            {data?.results &&
              data.results.map((slide: IDataForBillboard) => (
                <SwiperSlide key={slide.id}>
                  <CarouselItem>
                    <Link to={`/${appType}/${slide.id}`}>
                      <img
                        src={getBackdropURL(slide.backdrop_path)}
                        alt={"Not available"}
                      />
                    </Link>
                    <ShortDescription>
                      <h1>{slide.name || slide.title}</h1>
                      <h3>{slide.overview.substring(0, 100)}..</h3>
                    </ShortDescription>
                  </CarouselItem>
                </SwiperSlide>
              ))}
          </Swiper>
        </CarouselWrapper>
      )}
    </>
  );
};
