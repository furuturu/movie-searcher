import { IDataForDetails } from "../../../../types/types";
import {
  Background,
  Genre,
  GenreWrapper,
  HeartIcon,
  OverviewText,
  SOverview,
  TitleWrapper,
} from "./Overview.styles";
import { getBackdropURL } from "../../../../utils/getBackdropURL";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFavouriteMovies,
  selectFavouriteSeries,
} from "../../../../store/modules/Favourites/selectors";
import {
  addMovieToFavourite,
  addTVToFavourite,
  removeMovieFromFavourite,
  removeTVFromFavourite,
} from "../../../../store/modules/Favourites/slice";
import { toast } from "react-toastify";
import { selectAppType } from "../../../../store/modules/Preferences/selectors";
import { useTranslation } from "react-i18next";

export const Overview = ({ data }: IDataForDetails) => {
  const dispatch = useDispatch();
  const appType = useSelector(selectAppType);
  const { t } = useTranslation();
  const favouriteMovies = useSelector(selectFavouriteMovies);
  const favouriteSeries = useSelector(selectFavouriteSeries);
  const movieSelectedAsFavourite = favouriteMovies?.find(
    (movie) => movie.id === data.id
  );
  const seriesSelectedAsFavourite = favouriteSeries?.find(
    (tv) => tv.id === data.id
  );
  const isFavourite = !!seriesSelectedAsFavourite || !!movieSelectedAsFavourite;
  const tv = {
    id: data.id,
    poster_path: data.poster_path,
    name: data.name,
  };
  const movie = {
    id: data.id,
    poster_path: data.poster_path,
    title: data.title,
  };
  const handleOnClick = () => {
    if (appType === "movie") {
      if (movieSelectedAsFavourite) {
        dispatch(removeMovieFromFavourite(movie.id));
        toast.warn(t("notifications.movie_removed"));
      } else {
        dispatch(addMovieToFavourite(movie));
        toast.success(t("notifications.movie_added"));
      }
    } else {
      if (seriesSelectedAsFavourite) {
        dispatch(removeTVFromFavourite(tv.id));
        toast.warn(t("notifications.tv_removed"));
      } else {
        dispatch(addTVToFavourite(tv));
        toast.success(t("notifications.tv_added"));
      }
    }
  };
  return (
    <>
      {data && (
        <SOverview>
          <Background src={getBackdropURL(data.backdrop_path)} />
          <OverviewText>
            <TitleWrapper>
              <h1>{data.name || data.title}</h1>
              <HeartIcon
                onClick={handleOnClick}
                fill={isFavourite ? "#ff0000" : "#fff"}
              />
            </TitleWrapper>
            <GenreWrapper>
              {data.genres.map((genre) => (
                <Genre key={genre.name}>{genre.name}</Genre>
              ))}
            </GenreWrapper>
            {data.tagline && <h2 className={"tagline"}>"{data.tagline}"</h2>}
            <h3 className={"overview"}>
              {t("details.overview")}: {data.overview}
            </h3>
            <h4>
              {t("details.status")}: {data.status}
            </h4>
            {data.name && (
              <h4>
                {t("details.seasons_num")}: {data.number_of_seasons},{" "}
                {t("details.episodes")}: {data.number_of_episodes}
              </h4>
            )}
          </OverviewText>
        </SOverview>
      )}
    </>
  );
};
