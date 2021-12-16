import { useSelector } from "react-redux";
import { Header } from "../../components/Header";
import { selectAppType } from "../../store/modules/Preferences/selectors";
import {
  selectFavouriteMovies,
  selectFavouriteSeries,
} from "../../store/modules/Favourites/selectors";
import { ShowCard } from "../../components/ShowCard";
import {
  FavouriteGridContainer,
  FavouriteWrapper,
  Title,
} from "./Favourite.styles";
import { useTranslation } from "react-i18next";

export const Favourite = () => {
  const appType = useSelector(selectAppType);
  const movies = useSelector(selectFavouriteMovies);
  const series = useSelector(selectFavouriteSeries);
  const { t } = useTranslation();
  return (
    <FavouriteWrapper>
      <Header />
      <Title>{t("favourites")}</Title>
      <FavouriteGridContainer>
        {appType === "movie" &&
          movies?.map((movie) => (
            <ShowCard show={movie} appType={appType} key={movie.id} />
          ))}
        {appType === "tv" &&
          series?.map((tv) => (
            <ShowCard show={tv} appType={appType} key={tv.id} />
          ))}
      </FavouriteGridContainer>
    </FavouriteWrapper>
  );
};
