import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../../Home/Navber/Navber";

const Main = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
