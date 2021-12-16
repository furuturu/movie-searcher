import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/modules/effect-coverflow/effect-coverflow.min.css";
import "swiper/modules/pagination/pagination.min.css";
import { ActorSlide, SCast } from "./Cast.styles";
import { getSmallPosterURL } from "../../../../utils/getSmallPosterURL";
import { useTranslation } from "react-i18next";
import { castSliderParams } from "./castSliderParams";
import { ICastData } from "../../../../types/types";

SwiperCore.use([Pagination, Navigation]);

export const Cast = ({ cast }: ICastData) => {
  const { t } = useTranslation();
  return (
    <SCast>
      <h1>{t("details.cast")}</h1>
      <Swiper {...castSliderParams}>
        {cast.map((actor) => (
          <SwiperSlide key={actor.original_name}>
            <ActorSlide>
              <h3>{actor.original_name}</h3>
              <img
                src={getSmallPosterURL(actor.profile_path)}
                alt={"Not available"}
              />
              <h4>as {actor.character}</h4>{" "}
            </ActorSlide>
          </SwiperSlide>
        ))}
      </Swiper>
    </SCast>
  );
};
