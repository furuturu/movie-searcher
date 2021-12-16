import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../store/modules/Preferences/selectors";
import { useDetailsQuery } from "../../store/services/fetchData";
import { Header } from "../../components/Header";
import { Relative } from "./components/Relative";
import { useEffect } from "react";
import { Overview } from "./components/Overview";
import { Seasons } from "./components/Seasons";
import { Cast } from "./components/Cast";
import { Reviews } from "./components/Reviews";
import { Video } from "./components/Video";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import { changeAppType } from "../../store/modules/Preferences/slice";
import { Load } from "../../components/Loader";

export const Details = () => {
  const idFromURL = useParams().id;
  const appType = useParams().appType;
  const dispatch = useTypedDispatch();
  if (appType === "tv" || appType === "movie") {
    dispatch(changeAppType(appType));
  }
  const language = useSelector(selectLanguage);
  const { data, isLoading } = useDetailsQuery({
    appType,
    id: idFromURL,
    language,
  });
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {isLoading && <Load />}
      <Header />
      {data && !isLoading && (
        <>
          <Overview data={data} />
          {data?.credits.cast.length > 0 && <Cast cast={data.credits.cast} />}
          {data?.seasons?.length > 0 && <Seasons seasonsData={data.seasons} />}
          {data?.reviews?.results.length > 0 && (
            <Reviews reviews={data.reviews.results} />
          )}
          {data?.videos?.results.length > 0 && (
            <Video video={data.videos.results} />
          )}
          <Relative id={idFromURL} appType={appType} language={language} />
        </>
      )}
    </>
  );
};
