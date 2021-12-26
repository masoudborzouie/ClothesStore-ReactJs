import React from "react";
import { Link } from "react-router-dom";
import { route } from "./../../routes";

function Index() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary ps-5">
      <Link class="navbar-brand" to={route.root}>
        MassShop
      </Link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link" to={route.aboutUs}>
              About Us <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to={route.advanceSearch}>
              Advance Search
            </Link>
          </li>
          <li class="nav-item dropdown">
            <Link class="nav-link " to={route.login}>
              Login
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to={route.signUp}>
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Index;
