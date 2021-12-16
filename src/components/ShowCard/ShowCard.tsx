import { Link } from "react-router-dom";
import { getSmallPosterURL } from "../../utils/getSmallPosterURL";
import { CardPoster, CardHeartIcon, StyledShowCard } from "./ShowCard.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFavouriteMovies,
  selectFavouriteSeries,
} from "../../store/modules/Favourites/selectors";
import {
  addMovieToFavourite,
  addTVToFavourite,
  removeMovieFromFavourite,
  removeTVFromFavourite,
} from "../../store/modules/Favourites/slice";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { IShowCard } from "../../types/types";

export const ShowCard = ({ show, appType }: IShowCard) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const favouriteMovies = useSelector(selectFavouriteMovies);
  const favouriteSeries = useSelector(selectFavouriteSeries);
  const movieSelectedAsFavourite = favouriteMovies?.find(
    (movie) => movie.id === show.id
  );
  const seriesSelectedAsFavourite = favouriteSeries?.find(
    (tv) => tv.id === show.id
  );
  const isFavourite = !!seriesSelectedAsFavourite || !!movieSelectedAsFavourite;
  const handleOnClick = () => {
    if (appType === "movie") {
      if (movieSelectedAsFavourite) {
        dispatch(removeMovieFromFavourite(show.id));
        toast.warn(t("notifications.movie_removed"));
      } else {
        dispatch(addMovieToFavourite(show));
        toast.success(t("notifications.movie_added"));
      }
    } else {
      if (seriesSelectedAsFavourite) {
        dispatch(removeTVFromFavourite(show.id));
        toast.warn(t("notifications.tv_removed"));
      } else {
        dispatch(addTVToFavourite(show));
        toast.success(t("notifications.tv_added"));
      }
    }
  };
  return (
    <StyledShowCard>
      <CardHeartIcon
        onClick={handleOnClick}
        fill={isFavourite ? "#ff0000" : "#fff"}
      />

      <Link to={`/${appType}/${show.id}`}>
        <CardPoster
          src={
            show.poster_path
              ? getSmallPosterURL(show.poster_path)
              : require("../../assets/imageNotAvailable.png").default
          }
          alt={"Not available"}
        />
      </Link>
      <h3>{show.name || show.title}</h3>
    </StyledShowCard>
  );
};
