import { useRelativeShowsQuery } from "../../../../store/services/fetchData";
import { useState } from "react";
import {
  RecommendedOrSimilar,
  RelButton,
  ResultsContainer,
  TypesWrapper,
} from "./Relative.styles";
import { ShowCard } from "../../../../components/ShowCard";
import { useTranslation } from "react-i18next";
import { IPropsForRelative, IShow } from "../../../../types/types";

export const Relative = ({ id, appType, language }: IPropsForRelative) => {
  const [relativeType, setRelativeType] = useState("recommendations");
  const relativeTypesArray = ["recommendations", "similar"];
  const { t } = useTranslation();
  const relativeShows = useRelativeShowsQuery({
    appType,
    id,
    relativeType,
    language,
  });
  const handleOnClick = (type: string) => {
    return () => {
      setRelativeType(type);
    };
  };
  return (
    <RecommendedOrSimilar>
      <TypesWrapper>
        {relativeTypesArray.map((type) => (
          <RelButton
            key={type}
            onClick={handleOnClick(type)}
            isActive={type === relativeType}
          >
            {type === "recommendations"
              ? t("details.recommendations")
              : t("details.similar")}
          </RelButton>
        ))}
      </TypesWrapper>
      <ResultsContainer>
        {relativeShows?.data?.results.map((show: IShow) => (
          <ShowCard show={show} appType={appType} key={show.id} />
        ))}
      </ResultsContainer>
    </RecommendedOrSimilar>
  );
};
