import { useSelector } from "react-redux";
import {
  selectAppType,
  selectLanguage,
} from "../../../../store/modules/Preferences/selectors";
import { useEffect, useState } from "react";
import { useSearchForShowsQuery } from "../../../../store/services/searchQuery";
import { SearchPages, SearchResultsWrapper } from "./SearchResults.styles";
import { ISearchResults, IShow } from "../../../../types/types";
import { ShowCard } from "../../../../components/ShowCard";
import { useTranslation } from "react-i18next";
import { Load } from "../../../../components/Loader";
import { Paginate } from "react-hot-pagination";

export const SearchResults = ({ searchQuery }: ISearchResults) => {
  const { t } = useTranslation();
  const appType = useSelector(selectAppType);
  const language = useSelector(selectLanguage);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const { data, isLoading, isUninitialized } = useSearchForShowsQuery(
    {
      appType,
      language,
      query: searchQuery,
      page,
    },
    { skip: searchQuery === "" }
  );
  useEffect(() => {
    if (!isUninitialized) {
      if (data?.total_pages <= 500) {
        setMaxPage(data?.total_pages);
      } else {
        setMaxPage(500);
      }
    }
  }, [isUninitialized, data?.total_pages]);
  const handlePagination = (page: number) => {
    setPage(page);
  };
  return (
    <>
      {isLoading && <Load />}
      {!isUninitialized && data?.total_results === 0 && (
        <h4>{t("search.error")}</h4>
      )}
      {data && (
        <>
          <SearchResultsWrapper>
            {data.results.map((show: IShow) => (
              <ShowCard key={show.id} show={show} appType={appType} />
            ))}
          </SearchResultsWrapper>
          <SearchPages>
            <Paginate
              current={page}
              handlePagination={handlePagination}
              range={1}
              total={maxPage}
              components={{}}
            />
          </SearchPages>
        </>
      )}
    </>
  );
};
