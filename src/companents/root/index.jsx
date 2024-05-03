import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../layouts/header";
import BackToTop from "../backToTop";

const MainRoot = () => {
  return (
    <>
      <Header />
      <BackToTop />
      <Outlet />
    </>
  );
};

export default MainRoot;
