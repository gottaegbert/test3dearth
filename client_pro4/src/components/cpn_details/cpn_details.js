import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";
import "./style_details.css";
import "./responsive_detail.css";
import $ from "jquery";
import potential_main from "~/public/img/imgdetail/pp1.png";
import art_main from "~/public/img/imgdetail/art1.jpg";
import game_main from "~/public/img/imgdetail/game1.jpg";
import Ctn_footer from "../cpn_footer/cpn_footer.js";
import Cpn_bot_chat from "../cpn_bot_chat/cpn_bot_chat";
import Cpn_gototop from "../cpn_gototop/cpn_gototop";
import ComponentDidMount from "../scroll_top/win_scroll_top";
import "animate.css";

const body = document.querySelector("body");

function Cpn_potential_project() {
  $(document).ready(function () {
    $(".potential_projects").addClass("animate__animated animate__fadeInUp");
  })

  return (
    <div className="potential_projects pp_featured" id="featured">
      <h3 class="title-comm">
        <span class="title-holder">
          FEATURED PROJECT
        </span>
      </h3>
      <div className="form">
        <div className="form_1-1">
          <div className="img_w_title">
            <img src={potential_main} alt="" />
            <div className="title">
              <h5>
                Coolmate : Menfashion - Shopping solution for men's wardrobe
              </h5>
              <a>
                A male fashion startup project from Vietnam . Coolmate offers a
                convenient shopping solution for men . It is expected that
                Google will call for $3000 in the first round
              </a>
            </div>
          </div>
          <div className="progessbar"></div>
        </div>
        <div className="form_1-2">
          <div className="block">
            <div className="form_bl bl1">
              <img src="img/imgdetail/feature_prj_2.avif" alt="" />

              <div className="title">
                <h5>Bed Pillow | Adaptive ergonomics to improve your sleep</h5>
                <Link to="/create_project/bed-pillow-or-adaptive-ergonomics-to-improve-your-sleep">
                  Innovative design and high-quality materials for a proper rest
                  in any position
                </Link>
              </div>
            </div>
            <div className="form_bl bl2">
              <div className="title">
                <h5>Mood. Hard Enamel Pins</h5>
                <Link to="/create_project/mood-hard-enamel-pins">
                  A series of pins based on mu.andcoco's illustrations spreading
                  peaceful and positive vibes only.
                </Link>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="form_bl bl3">
              <img src="img/imgdetail/feature_prj_3.avif" alt="" />
              <div className="title">
                <h5>
                  DIGI SWAP || Upcycling film cameras into digital cameras
                </h5>
                <Link to="/create_project/digi-swap-or-or-upcycling-film-cameras-into-digital-cameras">
                  Patented adapter and app that upcycles film cameras allowing
                  you to use the original camera settings to capture digital
                  photos and video.
                </Link>
              </div>
            </div>
            <div className="form_bl bl4">
              <div className="title">
                <h5>
                  An Edge A Center: A Book of Photos From the End of the Earth
                </h5>
                <p>
                  Portraits, landscapes, and contemplative scenes from the
                  immense and bizarre territory otherwise known as California.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="featured_projects_bars bars">
        <div style={{border: '2px solid rgb(121 152 183)',borderRadius: '100px',backgroundColor: '#eaecef'}}>
          <i className="fa-solid fa-backward"></i>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <i className="fa-solid fa-forward"></i>
        </div>
      </div>
      {/* <hr className="hr_detail" /> */}
    </div>
  );
}

function Cpn_art_project() {
  return (
    <div className="potential_projects pp_art" id="art">
      <h3 class="title-comm">
        <span class="title-holder">
          ART PROJECT
        </span>
      </h3>
      <div className="form">
        <div className="form_1-1">
          <div className="img_w_title">
            <img src={art_main} alt="" />
            <div className="title">
              <h5>Restore Vietnam's ancient history</h5>
              <Link to="/create_project/hoi-sinh-co-phuc-tuong-lai-noi-dai-tu-qua-khu">
                Project on restoration, collection and research on ancient
                costume culture in different eras of Vietnam. In order to
                highlight the unique characteristics of Vietnamese culture
                <br />
                <span>By dhieuVN</span>
              </Link>
            </div>
          </div>
          <div className="progessbar"></div>
        </div>
        <div className="form_1-2">
          <div className="block">
            <div className="form_bl bl1">
              <img src="img/imgdetail/art2.avif" alt="" />

              <div className="title">
                <h5>Bibliotech Tarot | A cyberpunk scifi horror tarot deck</h5>
                <p>
                  Cyberpunk tarot card project by a talented young design team
                  <br />
                  <span>By Young Team</span>
                </p>
              </div>
            </div>
            <div className="form_bl bl2">

              <div className="title">
                <h5>The Sanctuary</h5>
                <p>
                  Compassion in action. Help build a space that rebuilds lives.
                  We are creating a living work of art - a space to heal, and to
                  begin again.
                </p>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="form_bl bl3">
              {/* <img src={require('../../public/img/imgdetail/art4.avif')} alt="" /> */}

              <div className="title">
                <h5>Witness : a creative hub in Oakland CA</h5>
                <p>
                  Witness is brought to you by Oakland artist Critty Smitty. The
                  shop will offer inspiring goods and creative workshops.
                  <br />
                  <span>By Mariia</span>
                </p>
              </div>
            </div>
            <div className="form_bl bl4">
              <img src="img/imgdetail/art5.avif" alt="" />
              <div className="title">
                <h5>Ceramic jewelry</h5>
                <p>
                  Hello. My name is Povetova Maria and I want introduce my
                  project "PM ceramic jewelry" to you.
                  <br />
                  <span>By GLang</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="art_projects_bars bars">
          <div style={{border: '2px solid rgb(121 152 183)',borderRadius: '100px',backgroundColor: '#eaecef'}}>
              <i className="fa-solid fa-backward"></i>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <i className="fa-solid fa-forward"></i>
          </div>
      </div>
      {/* <hr className="hr_detail" /> */}
    </div>
  );
}

function Cpn_game_project() {
  return (
    <div className="potential_projects pp_game" id="game">
      <h3 class="title-comm">
        <span class="title-holder">
          GAME PROJECT
        </span>
      </h3>
      <div className="form">
        <div className="form_1-1">
          <div className="img_w_title">
            <img src={game_main} alt="" />
            <div className="title">
              <h5>DIE: The Roleplaying Game</h5>
              <a>
                A tabletop RPG based on the DIE comic, created by Kieron Gillen
                and Stephanie Hans, and produced by the makers of Spire and
                Heart.
                <br />
                <span>By GLang</span>
              </a>
            </div>
          </div>
          <div className="progessbar"></div>
        </div>
        <div className="form_1-2">
          <div className="block">
            <div className="form_bl bl1">
              <img src="img/imgdetail/game2.avif" alt="" />
              <div className="title">
                <h5>Cultist Chaos - A Card Game</h5>
                <p>
                  Lead your cult to victory in this strategic fantasy card game
                  created and illustrated by Wizard of Barge.
                  <br />
                  <span>By GLang</span>
                </p>
              </div>
            </div>
            <div className="form_bl bl2">
              <img src="img/imgdetail/game3.avif" alt="" />
              <div className="title">
                <h5>Baladins 📯</h5>
                <p>
                  Narrative game inspired by RPG, for 1 to 4 friends in coop
                  online! Join the quest of entertaining a dragon!
                  <br />
                  <span>By GLang</span>
                </p>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="form_bl bl3">
              <img src="img/imgdetail/game4.avif" alt="" />
              <div className="title">
                <h5>
                  Cattails: Wildwood Story — A cozy life sim as a feral feline
                </h5>
                <p>
                  Lead your colony into the mysterious Wildwood. Get to know the
                  residents, fall in love, and raise a litter of kittens! 🐈
                  <br />
                  <span>By Falcon Development</span>
                </p>
              </div>
            </div>
            <div className="form_bl bl4">
              <img src="img/imgdetail/game5.avif" alt="" />
              <div className="title">
                <h5>Hunters of the Lost Creatures</h5>
                <p>
                  Collect the lost creatures and build the weirdest wildlife
                  park. Will you choose the right hunter at the right time?
                  <br />
                  <span>By GLang</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="game_projects_bars bars">
            <div style={{border: '2px solid rgb(121 152 183)',borderRadius: '100px',backgroundColor: '#eaecef'}}>
              <i className="fa-solid fa-backward"></i>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <i className="fa-solid fa-forward"></i>
            </div>
      </div>
      {/* <hr className="hr_detail" /> */}
    </div>
  );
}

export default function Cpn_details() {
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

  function onmouseover_the_left_page() {
    var slidebar = document.querySelector(".the_left_page");
    Object.assign(slidebar.style, {
      animationName: "trans_slide_bar_to_left",
      animationDuration: "0.5s",
      left: 0,
    });
  }

  function onmouseout_the_left_page() {
    var slidebar = document.querySelector(".the_left_page");
    Object.assign(slidebar.style, {
      animationName: "trans_slide_bar_to_right",
      animationDuration: "0.5s",
      left: "-14%",
    });
  }

  function toggle_dark_light() {
    var body = document.querySelector("body");
    var modeText = body.querySelector(".mode-text");
    body.classList.toggle("dark");

    // if(body.classList.contains("dark")){
    //     modeText.innerText='Light Mode';
    // }else{
    //     modeText.innerText="Dark Mode";
    // }
  }

  return (
    <Container
      maxWidth={false}
      className=""
      style={{ margin: "0", padding: "0" }}
    >
        <ComponentDidMount />
      <div className="page_details">

        <ul
          className="the_left_page letf_page"
          onMouseOver={onmouseover_the_left_page}
          onMouseOut={onmouseout_the_left_page}
        >
          <div className="menu">
            <li className="menu-feature-prj">
              <a href="#featured">
                <i className="fa-brands fa-hotjar icon"></i>
                <span>Featured</span>
              </a>
            </li>
            <li className="menu-game">
              <a href="#game">
                <i className="fa-solid fa-gamepad icon"></i>
                <span>Game</span>
              </a>
            </li>
            <li className="menu-app">
              <a href="#">
                <i className="fa-brands fa-app-store icon"></i>
                <span>App</span>
              </a>
            </li>
            <li className="menu-Art">
              <a href="#art">
                <i className="fa-brands fa-artstation icon"></i>
                <span>Art</span>
              </a>
            </li>
            <li className="menu-costume">
              <a href="#">
                <i className="fa-solid fa-shirt icon"></i>
                <span>Costume</span>
              </a>
            </li>
          </div>
          <li className="mode">
            <div className="moon-sun">
              <i className="fa-solid fa-moon moon "></i>
              <i className="fa-solid fa-sun sun"></i>
            </div>
            <span className="mode-text">Dark/Light</span>
            <div className="toggle-switch" onClick={handle_light_dark}>
              <span className="switch"></span>
            </div>
          </li>
        </ul>

        <div className="featured_projects">
          <div className="img_prj_featured"></div>
          <div className="navbar_trans">
            <div className="trans"></div>
          </div>
        </div>

        <br />
        {/* <hr /> */}
        <br />

        <Cpn_potential_project />
        <Cpn_art_project />
        <Cpn_game_project />
        <Cpn_bot_chat />
        <Cpn_gototop />
        <Ctn_footer />
      </div>
    </Container>
  );
}
