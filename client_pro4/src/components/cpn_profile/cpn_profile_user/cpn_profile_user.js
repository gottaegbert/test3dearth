import React, { useContext } from "react";
import "./cpn_profile_user.css";
// su dung chung cpn_profile.css
import "@fortawesome/fontawesome-free/css/all.min.css";
import $, { data } from "jquery";
import "animate.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide, CarouselListIndex } from "swiper/react";
import "swiper/css";
import { Virtual } from "swiper";
import "swiper/css/virtual";
import AppContext from "../../AppContext";
import { Link } from "react-router-dom";
import { useLocation , useParams } from "react-router-dom";
import ComponentDidMount from "../../scroll_top/win_scroll_top";



function sleep(s) {
    return new Promise(function (resolve) {
      setTimeout(resolve, s);
    });
  }
  
  function Ctn_profile_prj({ img_big, main_title, main_content, slug }) {
    return (
      <SwiperSlide
        class="card_profile"
        style={{ height: "600px", position: "relative" }}
      >
        <div class="image-content">
          <div class="card-image">
            <img
              style={{ transition: "transform 2s" }}
              src={require(`../../../public/img/imgproject/${img_big}`)}
              alt=""
              class="card-img"
            />
          </div>
        </div>
  
        <div class="card-content">
          <Link to={`../create_project/${slug}`} className="name">
            {main_title}
          </Link>
          <p class="description">{main_content}</p>
  
          <button class="button" style={{ position: "absolute", bottom: "0" }}>
            View More
          </button>
        </div>
      </SwiperSlide>
    );
  }
  
  function print_total_profile_project(total_project) {
    if (total_project !== null) {
      console.log(total_project);
      return (
        <Swiper
          modules={[Virtual]}
          spaceBetween={50}
          slidesPerView={2}
          virtual
          style={{
            height: "660px",
            maxWidth: "900px",
            width: "100%",
            padding: "40px 0",
          }}
        >
          <div class="slide-content">
            <div class="card-wrapper swiper-wrapper">
              {total_project.map((total_project, index) => (
                <SwiperSlide
                  key={total_project.id}
                  virtualIndex={index}
                  style={{
                    position: "relative",
                    borderRadius: "25px",
                    // backgroundColor: '#FFF',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "25px",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div class="image-content">
                      <div class="card-image">
                        <img
                          style={{ transition: "transform 2s" }}
                          src={require(`../../../public/img/imgproject/${total_project.img_big}`)}
                          alt=""
                          class="card-img"
                        />
                      </div>
                    </div>
  
                    <div class="card-content">
                      <Link
                        to={`../create_project/${total_project.slug}`}
                        className="name"
                      >
                        {total_project.main_title}
                      </Link>
                      <p class="description">{total_project.main_content}</p>
  
                      <button
                        class="button"
                        style={{ position: "absolute", bottom: "0", zIndex: "1" }}
                      >
                        View More
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </div>
        </Swiper>
      );
    }
  }
  
  export default function Cpn_profile_user() {
    const [data_total_prj, setData_total_prj] = useState(null);
    const [ data_user, setData_user ] = useState(null);
    const params = useParams();


    if (data_user == null) {
        axios
          .get(`http://localhost:5000/login`)
          .then((res) => res.data)
          .then((data) => {
            data.map((temp) => {
                console.log(data_user);
                console.log(data_total_prj);
                if (params==temp.name_author){
                    setData_user(data);
                }
            })
          });
    }

    useEffect(() => {
      if (data_total_prj === null) {
        axios
          .get(`http://localhost:5000/profile`)
          .then((res) => res.data)
          .then((data) => {
            setData_total_prj(data);
          });
      }
    }, []);


    //minimize
  
    //---------------statistic all prj of user
  
  //   const labels = ["GAME", "ART", "SOCIETY", "MUSIC", "SPORT", "OTHER"];
  
  //   const data = {
  //     labels: labels,
  //     datasets: [
  //       {
  //         label: "My First dataset",
  //         backgroundColor: [
  //           "#FFFF99",
  //           "#99FFFF",
  //           "#FFF5EE",
  //           "#B0E2FF",
  //           "#C1FFC1",
  //           "#CDCDB4",
  //         ],
  //         borderColor: "rgb(255, 99, 132)",
  //         data: [1, 1, 2, 1, 2, 0],
  //       },
  //     ],
  //   };
  
  //   const config = {
  //     type: "pie",
  //     data: data,
  //     options: {},
  //   };
  
  //   const myChart = new Chart(document.getElementById("myChart"), config);
  
    //minimize
  
    function btn_hide_close() {
      var left_content = document.querySelector(".left_content");
      var left_content_detail = document.querySelector(".left_content_detail");
      var right_content = document.querySelector(".right_content");
      var wrapper = document.querySelector(".wrapper");
      var wrapper_add_profile = document.querySelector(".wrapper .add_profile");
      var detail_my_project_statistic = document.querySelector(
        ".detail_my_project_statistic"
      );
      var detail_statistic = document.querySelector(".detail_statistic");
      sleep(0)
        .then(function () {
          Object.assign(right_content.style, {
            animationName: "close_right_profile",
            animationDuration: "2s",
            animationDirection: "normal",
          });
          Object.assign(wrapper.style, {
            animationName: "wrapper_content_profile",
            animationDuration: "2s",
            animationDirection: "normal",
          });
          return sleep(300);
        })
        .then(function () {
          Object.assign(wrapper.style, {
            justifyContent: "space-around",
          });
          Object.assign(wrapper_add_profile.style, {
            display: "flex",
          });
          Object.assign(right_content.style, {
            width: "100%",
          });
          Object.assign(detail_my_project_statistic.style, {
            width: "40%",
          });
          Object.assign(detail_statistic.style, {
            display: "block",
            width: "40%",
          });
        });
  
      sleep(0)
        .then(function () {
          Object.assign(left_content.style, {
            animationName: "close_left_profile",
            animationDuration: "2s",
            animationDirection: "normal",
          });
          return sleep(300);
        })
        .then(function () {
          Object.assign(left_content_detail.style, {
            display: "none",
          });
          return sleep(1700);
        })
        .then(function () {
          Object.assign(left_content.style, {
            display: "none",
          });
        });
    }
  
    function trans_my_project() {
      var my_project_i = document.querySelector(".wrapper .my_project i");
      var my_project_span = document.querySelector(".wrapper .my_project span");
      var ctn_my_project = document.querySelector(".ctn_my_project");
  
      set_all();
      set_nav_bar_close();
      Object.assign(my_project_i.style, {
        borderRadius: "50% 0 0 50%",
        backgroundColor: "#5766dc",
        color: "white",
      });
      Object.assign(my_project_span.style, {
        opacity: "1",
        color: "white",
      });
      Object.assign(ctn_my_project.style, {
        display: "flex",
      });
    }
  
    function set_all() {
      var user_i = document.querySelector(".wrapper .user i");
      var user_span = document.querySelector(".wrapper .user span");
      var my_project_i = document.querySelector(".wrapper .my_project i");
      var prj_history_i = document.querySelector(".wrapper .prj_history i");
      var prj_history_span = document.querySelector(".wrapper .prj_history span");
      var my_project_span = document.querySelector(".wrapper .my_project span");
  
      Object.assign(user_i.style, {
        borderRadius: "50%",
        backgroundColor: "white",
        color: "#5a5a5a",
      });
      Object.assign(user_span.style, {
        opacity: "0.2",
      });
      Object.assign(my_project_i.style, {
        borderRadius: "50%",
        backgroundColor: "white",
        color: "#5a5a5a",
      });
      Object.assign(my_project_span.style, {
        opacity: "0.2",
      });
      Object.assign(prj_history_i.style, {
        borderRadius: "50%",
        backgroundColor: "white",
        color: "#5a5a5a",
      });
      Object.assign(prj_history_span.style, {
        opacity: "0.2",
      });
    }
  
    function set_nav_bar_close() {
      var ctn_about_me = document.querySelector(".ctn_about_me");
      var ctn_my_project = document.querySelector(".ctn_my_project");
      var ctn_history_project = document.querySelector(".ctn_history_project");
      Object.assign(ctn_about_me.style, {
        display: "none",
      });
      Object.assign(ctn_my_project.style, {
        display: "none",
      });
      Object.assign(ctn_history_project.style, {
        display: "none",
      });
    }
  
    function trans_add_profile() {
      var right_content = document.querySelector(".right_content");
      var wrapper = document.querySelector(".wrapper");
      var wrapper_add_profile = document.querySelector(".wrapper .add_profile");
      var detail_my_project_statistic = document.querySelector(
        ".detail_my_project_statistic"
      );
      var detail_statistic = document.querySelector(".detail_statistic");
      var left_content = document.querySelector(".left_content");
      var left_content_detail = document.querySelector(".left_content_detail");
  
      set_all();
      set_nav_bar_close();
      sleep(0)
        .then(function () {
          Object.assign(right_content.style, {
            animationName: "open_right_profile",
            animationDuration: "2s",
            animationDirection: "normal",
          });
          Object.assign(wrapper.style, {
            animationName: "wrapper_content_profile",
            animationDuration: "2s",
            animationDirection: "normal",
          });
          return sleep(300);
        })
        .then(function () {
          Object.assign(wrapper.style, {
            justifyContent: "space-between",
          });
          Object.assign(wrapper_add_profile.style, {
            display: "none",
          });
          Object.assign(right_content.style, {
            width: "70%",
          });
          Object.assign(detail_my_project_statistic.style, {
            width: "60%",
          });
          Object.assign(detail_statistic.style, {
            display: "none",
          });
        });
  
      sleep(0)
        .then(function () {
          Object.assign(left_content.style, {
            animationName: "open_left_profile",
            animationDuration: "2s",
            animationDirection: "normal",
          });
          return sleep(300);
        })
        .then(function () {
          Object.assign(left_content.style, {
            display: "flex",
          });
          return sleep(1000);
        })
        .then(function () {
          Object.assign(left_content_detail.style, {
            display: "block",
          });
        });
    }
  
    function trans_user() {
      var user = document.querySelector(".wrapper .user");
      var user_i = document.querySelector(".wrapper .user i");
      var user_span = document.querySelector(".wrapper .user span");
      var ctn_about_me = document.querySelector(".ctn_about_me");
      set_all();
      set_nav_bar_close();
  
      Object.assign(user_i.style, {
        borderRadius: "50% 0 0 50%",
        backgroundColor: "#a28ce6",
        color: "white",
      });
      Object.assign(user_span.style, {
        opacity: "1",
        color: "white",
      });
      Object.assign(ctn_about_me.style, {
        display: "flex",
      });
    }
  
    function trans_prj_history() {
      var prj_history_i = document.querySelector(".wrapper .prj_history i");
      var prj_history_span = document.querySelector(".wrapper .prj_history span");
      var ctn_history_project = document.querySelector(".ctn_history_project");
  
      set_all();
      set_nav_bar_close();
      Object.assign(prj_history_i.style, {
        borderRadius: "50% 0 0 50%",
        backgroundColor: "#dc5788",
        color: "white",
      });
      Object.assign(prj_history_span.style, {
        opacity: "1",
        color: "white",
      });
      Object.assign(ctn_history_project.style, {
        display: "flex",
      });
    }
  
    return (
      <div>
        <ComponentDidMount />
        <div style={{ marginTop: "60px" }} class="content_profile">
          <div class="right_content">
            <div class="nav" style={{ display: "flex", flexDirection: "column" }}>
              <div class="wrapper">
                <div class="icon add_profile">
                  <i class="fa-solid fa-plus" onClick={trans_add_profile}></i>
                  <span class="tooltip">Detail</span>
                </div>
                <div class="icon user">
                  <i class="fa-solid fa-user" onClick={trans_user}></i>
                  <span class="tooltip">About me</span>
                </div>
                <div class="icon my_project">
                  <i
                    class="fa-solid fa-file-shield"
                    onClick={trans_my_project}
                  ></i>
                  <span class="tooltip">My project</span>
                </div>
                <div class="icon prj_history">
                  <i
                    class="fa-solid fa-clock-rotate-left"
                    onClick={trans_prj_history}
                  ></i>
                  <span class="tooltip">History</span>
                </div>
                <div class="icon log_out">
                  <i class="fa-solid fa-right-from-bracket"></i>
                </div>
              </div>
  
              <div class="nav_bar_profile">
                <div class="ctn_about_me open">
                  <div class="info_user">
                    <div class="label">
                      <p style={{ margin: "20px 0" }}>
                        Hi! Welcome to my wall
                        <i
                          class="fa-solid fa-pencil"
                          style={{
                            fontSize: "15px",
                            marginLeft: "5px",
                            marginBottom: "2.5px",
                          }}
                        ></i>
                      </p>
                      <hr style={{ width: "60%", margin: "20px auto" }} />
                    </div>
                    <div class="infor">
                      <table>
                        <tr>
                          <td>Name</td>
                          <td class="user_name">
                          </td>
                        </tr>
                        <tr>
                          <td>D.O.B</td>
                          <td class="user_dob">10/09/1972</td>
                        </tr>
                        <tr>
                          <td class="user_tel">Phone</td>
                          <td>+84 326 xxx xxxx</td>
                        </tr>
                        <tr>
                          <td>Address</td>
                          <td class="user_address">Ha Noi, Viet Nam</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td class="user_email">gianglt.21it@vku.udn.vn</td>
                        </tr>
                        <tr>
                          <td>Strength</td>
                          <td>Business, Invest</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <hr style={{ height: "70%", margin: "auto 0" }} />
                  <div class="project_demo_user">
                    <h2 style={{ height: "30%" }}>
                      <i
                        class="fa-solid fa-id-badge"
                        style={{ marginRight: "20px" }}
                      ></i>
                      Contact
                    </h2>
                    <ul>
                      <li style={{ zIndex: "6" }}>
                        <a href="https://www.facebook.com/hungpham7968">
                          <span>
                            <i class="fa-brands fa-facebook-f"></i>
                          </span>
                          Facebook
                        </a>
                      </li>
                      <li style={{ zIndex: "5" }}>
                        <a href="#">
                          <span>
                            <i class="fa-brands fa-telegram"></i>
                          </span>
                          Telegram
                        </a>
                      </li>
                      <li style={{ zIndex: "4" }}>
                        <a href="#">
                          <span>
                            <i class="fa-brands fa-twitter"></i>
                          </span>
                          Twitter
                        </a>
                      </li>
                      <li style={{ zIndex: "3" }}>
                        <a href="#">
                          <span>
                            <i class="fa-brands fa-instagram"></i>
                          </span>
                          Instagram
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
  
                <div class="ctn_my_project">
                  <div class="total_projects">
                    <h2>My total projects</h2>
  
                    {print_total_profile_project(
                      data_total_prj == null ? null : data_total_prj
                    )}
                  </div>
  
                  <hr style={{ width: "60%", margin: "0 auto" }} />
  
                  <h2 style={{ margin: "30px 0" }}>Progress project</h2>
  
                  <div class="project_progress">
                    <div style={{ listStyle: "none" }}>
                      <ul style={{ backgroundColor: "#9aafc9" }}>
                        <li style={{ width: "10%" }}>Index</li>
                        <li style={{ width: "50%" }}>Name project</li>
                        <li style={{ width: "20%" }}>Percent progress</li>
                        <li style={{ width: "20%" }}>Complete</li>
                      </ul>
                      <ul>
                        <li style={{ width: "10%" }}>1</li>
                        <li style={{ width: "50%" }}>
                          Bed Pillow | Adaptive ergonomics to improve your sleep
                        </li>
                        <li style={{ width: "20%" }}>100%</li>
                        <li style={{ width: "20%" }}>
                          <i
                            style={{ color: "#63b196" }}
                            class="fa-solid fa-clipboard-check"
                          ></i>
                        </li>
                      </ul>
                      <ul>
                        <li style={{ width: "10%" }}>2</li>
                        <li style={{ width: "50%" }}>
                          DIGI SWAP || Upcycling film cameras into digital cameras
                        </li>
                        <li style={{ width: "20%" }}>78%</li>
                        <li style={{ width: "20%" }}>
                          <i
                            style={{ color: "#b18163" }}
                            class="fa-solid fa-circle-xmark"
                          ></i>
                        </li>
                      </ul>
                      <ul>
                        <li style={{ width: "10%" }}>3</li>
                        <li style={{ width: "50%" }}>
                          Restore Vietnam's ancient history
                        </li>
                        <li style={{ width: "20%" }}>0%</li>
                        <li style={{ width: "20%" }}>
                          <i
                            style={{ color: "#b18163" }}
                            class="fa-solid fa-circle-xmark"
                          ></i>
                        </li>
                      </ul>
                    </div>
                  </div>
  
                  <div class="my_project_statistic">
                    <h2
                      style={{
                        width: "100%",
                        textAlign: "center",
                        margin: "50px 0",
                      }}
                    >
                      Statistic my projects
                    </h2>
                    <div class="temp">
                      <div class="detail_my_project_statistic">
                        <canvas id="myChart" style={{ width: "50%" }}></canvas>
                      </div>
                      <div class="detail_statistic">
                        <h3 style={{ margin: "40px 0" }}>
                          General statistics of Pro4
                        </h3>
                        <ul style={{ backgroundColor: "rgb(183, 217, 235)" }}>
                          <li>TYPE</li>
                          <li>PERCENT</li>
                        </ul>
                        <ul>
                          <li>Game</li>
                          <li>14,28%</li>
                        </ul>
                        <ul>
                          <li>Art</li>
                          <li>28,57%</li>
                        </ul>
                        <ul>
                          <li>Society</li>
                          <li>14,28%</li>
                        </ul>
                        <ul>
                          <li>Music</li>
                          <li>14,28%</li>
                        </ul>
                        <ul>
                          <li>Sport</li>
                          <li>28,57%</li>
                        </ul>
                        <ul>
                          <li>Other</li>
                          <li>0%</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div class="ctn_history_project">
                  <h1 style={{ margin: "50% 0 0 0" }}></h1>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div
          class="left_content"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            style={{ width: "80%", margin: "0 auto", position: "relative" }}
            class="left_content_detail"
          >
            <div
              style={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <img class="avatar_profile"  />
            </div>
  
            <h2 class="name_user"></h2>
  
            <div class="title_user">
              “Các bạn phải có một ước mơ đủ lớn để có chỗ người khác tham gia
              vào. Chứ ước mơ của các bạn quá bé, bản thân các bạn ngồi đã chật
              rồi, chúng tôi không còn chỗ"
              <div class="edit">
                <button>Edit profile</button>
              </div>
            </div>
  
            <div class="btn_hide" onClick={btn_hide_close}>
              <i class="fa-solid fa-square-minus"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
  