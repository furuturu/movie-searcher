import { useState } from "react";
import {
  QueryBlock,
  LastQueries,
  QueryWrapper,
  RemoveQuery,
  RemoveAll,
  Form,
} from "./SearchInput.styles";
import { useKeywordsForInputQuery } from "../../../../store/services/searchQuery";
import { useSelector } from "react-redux";
import { ILastQuery } from "../../../../types/types";
import { useTypedDispatch } from "../../../../hooks/useTypedDispatch";
import {
  addQuery,
  clearQueries,
  removeQuery,
} from "../../../../store/modules/Search/slice";
import { selectQueries } from "../../../../store/modules/Search/selectors";
import { nanoid } from "@reduxjs/toolkit";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { Load } from "../../../../components/Loader";
import { SearchResults } from "../SearchResults/SearchResults";

export const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useTypedDispatch();
  const { data: keywords, isLoading } = useKeywordsForInputQuery(inputValue, {
    skip: inputValue === "",
  });
  const handleOnChange = (query: string) => {
    setInputValue(query);
  };
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim()) {
      dispatch(addQuery({ name: inputValue.trim(), id: nanoid() }));
      setSearchQuery(inputValue);
      setInputValue("");
    }
  };
  const handleOnSelect = (selected: { name: string }) => {
    setSearchQuery(selected.name);
    setInputValue(selected.name);
  };

  const lastQueries = useSelector(selectQueries);
  const handleUseLastQuery = (selectedQuery: string) => {
    return () => {
      setInputValue(selectedQuery);
    };
  };
  const handleRemoveLastQuery = (selectedQueryID: string) => {
    return () => {
      dispatch(removeQuery(selectedQueryID));
    };
  };
  const handleRemoveAll = () => {
    dispatch(clearQueries());
  };

  return (
    <>
      {isLoading && <Load />}
      <Form onSubmit={handleOnSubmit}>
        <ReactSearchAutocomplete
          items={keywords?.results}
          onSearch={handleOnChange}
          inputSearchString={inputValue}
          fuseOptions={{ key: "name" }}
          onSelect={handleOnSelect}
          autoFocus={true}
        />
      </Form>
      <LastQueries>
        {lastQueries.map((query: ILastQuery) => (
          <QueryWrapper key={query.id}>
            <QueryBlock onClick={handleUseLastQuery(query.name)}>
              {query.name}
            </QueryBlock>
            <RemoveQuery onClick={handleRemoveLastQuery(query.id)}>
              X
            </RemoveQuery>
          </QueryWrapper>
        ))}
        {lastQueries.length > 2 && (
          <RemoveAll onClick={handleRemoveAll}>Remove all</RemoveAll>
        )}
      </LastQueries>
      <SearchResults searchQuery={searchQuery} />
    </>
  );
};
