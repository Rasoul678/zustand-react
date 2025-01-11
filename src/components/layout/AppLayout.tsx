import React from "react";
import { NavLink, Outlet } from "react-router";
import zustandLogo from "/zustand.svg";

type IProps = {};

const AppLayout: React.FC<IProps> = () => {
  return (
    <main>
      <nav className="nav">
        <NavLink to="/">
          <img
            src={zustandLogo}
            width={35}
            className="logo zustand"
            alt="Zustand logo"
          />
        </NavLink>
        <NavLink to="/counter">counter</NavLink>
        <NavLink to="/use-shallow">useShallow</NavLink>
        <NavLink to="/combine">combine</NavLink>
        <NavLink to="/auto-selector">auto selector</NavLink>
      </nav>
      <Outlet />
    </main>
  );
};

export default AppLayout;
