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
        <NavLink to="/with-url-hash">with url hash</NavLink>
        <NavLink to="/persist-url-search">persist url search</NavLink>
        <NavLink to="/reset-state">reset state</NavLink>
        <NavLink to="/init-with-props">init with props</NavLink>
        <NavLink to="/provider-pattern">provider pattern</NavLink>
        <NavLink to="/redux-like-pattern">Redux-like pattern</NavLink>
        <NavLink to="/slice-pattern">Slice pattern</NavLink>
      </nav>
      <Outlet />
    </main>
  );
};

export default AppLayout;
