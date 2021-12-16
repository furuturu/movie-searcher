import { useLayoutEffect, useState } from "react";
import {
  SwitcherContainer,
  TypesWrapper,
  TypeSelector,
  SwitcherWrapper,
} from "./SliderSwitcher.styles";
import { Slider } from "../Slider";
import { useSelector } from "react-redux";
import {
  selectAppType,
  selectLanguage,
} from "../../../../store/modules/Preferences/selectors";
import { movieTypes, seriesTypes } from "../../../../utils/sliderTypes";
import { getTypeForSliderQuery } from "../../../../utils/getTypeForSliderQuery";
import { useTranslation } from "react-i18next";

export const SliderSwitcher = () => {
  const [type, setType] = useState("Now Playing");
  const appType = useSelector(selectAppType);
  const { t } = useTranslation();
  useLayoutEffect(() => {
    if (appType === "tv") {
      setType("On The Air");
    } else {
      setType("Now Playing");
    }
  }, [appType]);
  const lang = useSelector(selectLanguage);
  const handleOnClick = (currentSwitcherName: string) => {
    setType(currentSwitcherName);
  };
  const dataForQuery = {
    appType: appType,
    switcherType: getTypeForSliderQuery(type),
    language: lang,
  };

  return (
    <SwitcherWrapper>
      <SwitcherContainer>
        <TypesWrapper>
          {appType === "movie"
            ? movieTypes.map((SwitcherName) => (
                <TypeSelector
                  key={SwitcherName}
                  type={type}
                  name={SwitcherName}
                  onClick={() => handleOnClick(SwitcherName)}
                >
                  {t(`home.${SwitcherName}`)}
                </TypeSelector>
              ))
            : seriesTypes.map((SwitcherName) => (
                <TypeSelector
                  key={SwitcherName}
                  type={type}
                  name={SwitcherName}
                  onClick={() => handleOnClick(SwitcherName)}
                >
                  {t(`home.${SwitcherName}`)}
                </TypeSelector>
              ))}
        </TypesWrapper>
      </SwitcherContainer>
      <Slider props={dataForQuery} />
    </SwitcherWrapper>
  );
};
