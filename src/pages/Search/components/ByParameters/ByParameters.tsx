import { useState } from "react";
import { useDownloadGenreListQuery } from "../../../../store/services/searchQuery";
import { useSelector } from "react-redux";
import {
  selectAppType,
  selectLanguage,
} from "../../../../store/modules/Preferences/selectors";
import { LabelCheckbox, GridCheckbox } from "./ByParameters.styles";
import { SortSelect } from "../SortSelect";
import { VoteSelect } from "../VoteSelect";
import { ParamsResults } from "../ParamsResults";
import { useTranslation } from "react-i18next";

export const ByParameters = () => {
  const [checkedGenres, setCheckedGenres] = useState<string[]>([]);
  const [voteMinimum, setVoteMinimum] = useState<string>("0");
  const [sortType, setSortType] = useState("popularity.asc");
  const { t } = useTranslation();
  const appType = useSelector(selectAppType);
  const language = useSelector(selectLanguage);
  const { data } = useDownloadGenreListQuery({ appType, language });
  const genresList: { id: number; name: string }[] = data?.genres;
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newGenresArray = checkedGenres.concat(event.target.value);
      setCheckedGenres(newGenresArray);
    } else {
      const newGenresArray = checkedGenres.filter(
        (id) => id !== event.target.value
      );
      setCheckedGenres(newGenresArray);
    }
  };
  const handleVoteSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setVoteMinimum(event.target.value);
  };
  const handleSortSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortType(event.target.value);
  };
  const genres = checkedGenres.join(",");
  const queryParams = {
    genres,
    voteMinimum,
    sortType,
    appType,
    language,
  };
  return (
    <>
      <h1>{t("search.genres")}</h1>
      <GridCheckbox>
        {genresList &&
          genresList.map((checkbox) => (
            <LabelCheckbox key={checkbox.id}>
              <label>
                {checkbox.name}
                <input
                  type={"checkbox"}
                  name={checkbox.name}
                  value={checkbox.id}
                  onChange={handleCheckboxChange}
                />
              </label>
            </LabelCheckbox>
          ))}
      </GridCheckbox>
      <VoteSelect handleVoteSelect={handleVoteSelect} />
      <SortSelect handleSortSelect={handleSortSelect} />
      <ParamsResults queryParams={queryParams} />
    </>
  );
};
