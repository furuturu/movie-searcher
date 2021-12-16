import React from "react";
import { Carousel } from "./components/Carousel";
import { Header } from "../../components/Header";
import { SliderSwitcher } from "./components/SliderSwitcher";

export const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <SliderSwitcher />
    </>
  );
};
