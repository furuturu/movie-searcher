import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Navigation } from "swiper";
import { VideoContainer, Iframe } from "./Video.styles";
import { useTranslation } from "react-i18next";
import { IVideo } from "../../../../types/types";

SwiperCore.use([Navigation]);

export const Video = ({ video }: IVideo) => {
  const { t } = useTranslation();
  return (
    <VideoContainer>
      <h1>{t("details.video")}</h1>
      <Swiper navigation={true}>
        {video.map((slide) => (
          <SwiperSlide key={slide.key}>
            <Iframe
              src={`https://www.youtube.com/embed/${slide.key}`}
              title={"Youtube"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </VideoContainer>
  );
};
