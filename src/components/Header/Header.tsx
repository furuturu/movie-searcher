import { useSelector } from "react-redux";
import {
  SHeader,
  AppType,
  Heart,
  ElseWrapper,
  AppTypesWrapper,
  LangSelector,
  StyledLink,
  Loupe,
} from "./Header.styles";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import {
  changeLanguage,
  changeAppType,
} from "../../store/modules/Preferences/slice";
import {
  selectAppType,
  selectLanguage,
} from "../../store/modules/Preferences/selectors";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const dispatch = useTypedDispatch();
  const appType = useSelector(selectAppType);
  const location = useLocation();
  const isSearch = location.pathname === "/search";
  const isFavourite = location.pathname === "/favourite";
  const defaultLanguage = useSelector(selectLanguage);
  const appTypesForQuery = ["movie", "tv"];
  const handleOnClick = (type: string) => {
    return () => {
      dispatch(changeAppType(type));
    };
  };
  const { t, i18n } = useTranslation();
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    dispatch(changeLanguage(value));
    i18n.changeLanguage(value);
  };
  return (
    <>
      <SHeader>
        <AppTypesWrapper>
          {appTypesForQuery.map((type) => (
            <StyledLink to={`/`} key={type}>
              <AppType
                appType={appType}
                type={type}
                onClick={handleOnClick(type)}
              >
                {type === "movie" ? t("home.movie") : t(`home.tv`)}
              </AppType>
            </StyledLink>
          ))}
        </AppTypesWrapper>
        <ElseWrapper>
          <Link to={"/search"}>
            <Loupe fill={isSearch ? "#ffcc00" : "#fff"} />
          </Link>
          <Link to={"/favourite"}>
            <Heart fill={isFavourite ? "#ffcc00" : "#fff"} />
          </Link>
          <LangSelector defaultValue={defaultLanguage} onChange={selectChange}>
            <option value={"en-US"}>EN</option>
            <option value={"ru"}>RU</option>
          </LangSelector>
        </ElseWrapper>
      </SHeader>
    </>
  );
};
