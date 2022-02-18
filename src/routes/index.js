import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "../Layout";

import { Home, AdvanceSearch, AboutUs, Login, SignUp } from "../pages";

export const route = {
  root: "/",
  home: "/home",
  aboutUs: "/about-us",
  advanceSearch: "/advance-search",
  login: "/login",
  signUp: "/sign-up",
};

function Index() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={route.root} element={<Home />} />
        <Route path={route.home} element={<Home />} />
        <Route path={route.advanceSearch} element={<AdvanceSearch />} />
        <Route path={route.login} element={<Login />} />
        <Route path={route.signUp} element={<SignUp />} />
        <Route path={route.aboutUs} element={<AboutUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default Index;
