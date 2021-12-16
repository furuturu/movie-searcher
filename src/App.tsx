import React from "react";
import { Home } from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { Search } from "./pages/Search/Search";
import { Favourite } from "./pages/Favourite/Favourite";
import { Details } from "./pages/Details/Details";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"search"} element={<Search />} />
        <Route path={"favourite"} element={<Favourite />} />
        <Route path={":appType/:id"} element={<Details />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
