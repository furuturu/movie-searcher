import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/modules/effect-coverflow/effect-coverflow.min.css";
import "swiper/modules/pagination/pagination.min.css";
import { SliderContainer, SliderItem } from "./Slider.styles";
import { getPosterURL } from "../../../../utils/getPosterURL";
import { useContentForSliderQuery } from "../../../../store/services/fetchData";
import { Link } from "react-router-dom";
import { sliderParams } from "./sliderParams";
import { IDataForHomeSlider, ISliderProps } from "../../../../types/types";
import { Load } from "../../../../components/Loader";

SwiperCore.use([Pagination, Navigation]);

export const Slider = ({ props }: ISliderProps) => {
  const { data, isLoading } = useContentForSliderQuery(props);
  return (
    <>
      {isLoading && <Load />}
      {!isLoading && (
        <SliderContainer>
          <Swiper {...sliderParams}>
            {data &&
              data.results.map((slide: IDataForHomeSlider) => (
                <SwiperSlide key={slide.id}>
                  <Link to={`/${props.appType}/${slide.id}`}>
                    <SliderItem>
                      <img src={getPosterURL(slide.poster_path)} alt="" />
                    </SliderItem>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </SliderContainer>
      )}
    </>
  );
};
