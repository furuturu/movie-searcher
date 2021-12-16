import React, { useState } from "react";
import { Header } from "../../components/Header";
import { SearchSwitcher, SearchWrapper } from "./Search.styles";
import { ByParameters } from "./components/ByParameters";
import { SearchInput } from "./components/SearchInput";
import { useTranslation } from "react-i18next";

export const Search = () => {
  const [searchType, setSearchType] = useState("search");
  const { t } = useTranslation();
  const handleToggleSearch = () => {
    if (searchType === "search") {
      setSearchType("params");
    } else {
      setSearchType("search");
    }
  };
  return (
    <>
      <Header />
      <SearchWrapper>
        <SearchSwitcher onClick={handleToggleSearch}>
          {searchType === "search" ? t("search.params") : t("search.name")}
        </SearchSwitcher>
        {searchType === "search" && <SearchInput />}
        {searchType === "params" && <ByParameters />}
      </SearchWrapper>
    </>
  );
};
