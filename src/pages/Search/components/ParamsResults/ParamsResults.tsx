import { useSearchByParametersQuery } from "../../../../store/services/searchQuery";
import { Pages, ParamsResultsContainer } from "./ParamsResults.styles";
import { ShowCard } from "../../../../components/ShowCard";
import { useEffect, useState } from "react";
import { Paginate } from "react-hot-pagination";
import { IPropsForShowsFound, IShow } from "../../../../types/types";

export const ParamsResults = ({ queryParams }: IPropsForShowsFound) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const { data, isUninitialized } = useSearchByParametersQuery({
    ...queryParams,
    page: currentPage,
  });
  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    if (!isUninitialized) {
      if (data?.total_pages <= 500) {
        setMaxPage(data?.total_pages);
      } else {
        setMaxPage(500);
      }
    }
  }, [isUninitialized, data?.total_pages]);
  return (
    <>
      <ParamsResultsContainer>
        {data &&
          data.results.map((show: IShow) => (
            <ShowCard key={show.id} show={show} appType={queryParams.appType} />
          ))}
      </ParamsResultsContainer>
      <Pages>
        <Paginate
          current={currentPage}
          handlePagination={handlePageClick}
          range={1}
          total={maxPage}
          components={{}}
        />
      </Pages>
    </>
  );
};
