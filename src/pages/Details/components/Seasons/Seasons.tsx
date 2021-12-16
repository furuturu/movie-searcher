import { SeasonCard, SeasonsTitle, SeasonsWrapper } from "./Seasons.styles";
import { getSmallPosterURL } from "../../../../utils/getSmallPosterURL";
import { useTranslation } from "react-i18next";
import { ISeasonsData } from "../../../../types/types";

export const Seasons = ({ seasonsData }: ISeasonsData) => {
  const { t } = useTranslation();
  return (
    <>
      <SeasonsTitle>{t("details.seasons")}</SeasonsTitle>
      <SeasonsWrapper>
        {seasonsData?.map((season) => (
          <SeasonCard key={season.name}>
            <h4>
              {season.name} (№{season.season_number})
            </h4>
            <img
              src={getSmallPosterURL(season.poster_path)}
              alt={"Not available"}
            />
            <div>
              {t("details.season_aired")} {season.air_date}
            </div>
          </SeasonCard>
        ))}
      </SeasonsWrapper>
    </>
  );
};
