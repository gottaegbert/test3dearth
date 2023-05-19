import React from "react";
import "./cpn_left_nav.css";
import "../style_responsive_of_product/product_responsive.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import $ from "jquery";
import "animate.css";
import { Link } from "react-router-dom";

const body = document.querySelector("body");

export default function Cpn_left_nav() {
    
    function handle_light_dark() {
        body.classList.toggle("dark");
        var logo1 = document.querySelector(".logo1");
        var logo2 = document.querySelector(".logo2");
        if (body.classList.contains("dark")) {
          Object.assign(logo1.style, {
            display: "none",
          });
          Object.assign(logo2.style, {
            display: "block",
          });
    
          // modeText.innerText="Light Mode";
        } else {
          Object.assign(logo2.style, {
            display: "none",
          });
          Object.assign(logo1.style, {
            display: "block",
          });
          // modeText.innerText="Dark Mode";
        }
    }

    return (
        <ul class="the_left_page_product letf_page">
          <div class="menu">
            <Link to="../add_product">
              {" "}
              <li class="menu-create">
                <i
                  class="fa-solid fa-file-export"
                  style={{ fontSize: "20px", marginRight: "15px" }}
                ></i>
                <span>POST PROJECT</span>
              </li>
            </Link>
            <Link to="../my_post">
              {" "}
              <li class="menu-me">
                <i
                  class="fa-solid fa-calendar"
                  style={{ fontSize: "20px", marginRight: "15px" }}
                ></i>
                <span>MY PROJECT</span>
              </li>
            </Link>
            <Link to="/type_product/Game">
              {" "}
              <li class="menu-game">
                <i class="fa-solid fa-gamepad icon"></i>
                <span>Game</span>
              </li>
            </Link>
            <Link to="/type_product/App">
              <li class="menu-app">
                <i class="fa-brands fa-app-store icon"></i>
                <span>App</span>
              </li>
            </Link>
            <Link to="/type_product/Ai">
              {" "}
              <li class="menu-AI">
                <i class="fa-solid fa-robot icon"></i>
                <span>AI</span>
              </li>
            </Link>
            <Link to="/type_product/costume">
              <li class="menu-costume">
                <i class="fa-solid fa-shirt icon"></i>
                <span>Costume</span>
              </li>
            </Link>
            <Link to="/type_product/Ecommerce">
              {" "}
              <li class="menu-ecommerce">
                <i class="fa-brands fa-shopify icon"></i>
                <span>Ecommerce</span>
              </li>
            </Link>
            <Link to="home">
              {" "}
              <li class="menu-logout">
                <i
                  class="fa-solid fa-arrow-right-from-bracket"
                  style={{ fontSize: "20px", marginRight: "15px" }}
                ></i>
                <span>Log out</span>
              </li>
            </Link>
          </div>
          <li class="mode">
            <div class="moon-sun">
              <i class="fa-solid fa-moon moon "></i>
              <i class="fa-solid fa-sun sun"></i>
            </div>
            <span class="mode-text">Dark Mode</span>
            <div class="toggle-switch" onClick={handle_light_dark}>
              <span class="switch"></span>
            </div>
          </li>
        </ul>
    )
}














