import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../../layouts/header";

const MainRoot = () => {
  return (
    <>
      <Header/>
      <Outlet />
    </>
  );
};

export default MainRoot;
