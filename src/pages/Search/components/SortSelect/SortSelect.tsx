import { SortSelectStyled } from "./SortSelect.styles";
import { useTranslation } from "react-i18next";

interface ISortProps {
  handleSortSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SortSelect = ({ handleSortSelect }: ISortProps) => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("search.sort.sort")}</h1>
      <SortSelectStyled onChange={handleSortSelect}>
        <option value={"popularity.asc"}>
          {t("search.sort.popularity_asc")}
        </option>
        <option value={"popularity.desc"}>
          {t("search.sort.popularity_dsc")}
        </option>
        <option value={"release_date.asc"}>
          {t("search.sort.release_asc")}
        </option>
        <option value={"release_date.desc"}>
          {t("search.sort.release_dsc")}
        </option>
        <option value={"vote_average.asc"}>{t("search.sort.vote_asc")}</option>
        <option value={"vote_average.desc"}>{t("search.sort.vote_dsc")}</option>
      </SortSelectStyled>
    </>
  );
};
