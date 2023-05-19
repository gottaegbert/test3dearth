import React, { useContext } from "react";
import "./style_create_project.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import $ from "jquery";
import "animate.css";
import axios from "axios";
import { useState, useEffect } from "react";
//get slug
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import AppContext from "../AppContext";

//import line chart
import Cpn_Chart from "../cpn_chart/cpn_chart";
import Cpn_Payment from "./cpn_payment/cpn_payment";
import Cpn_Support from "./cpn_support/cpn_support";
import Cpn_Expire from "./Cpn_Expire/Cpn_Expire";

// import { Bar } from "react-chartjs-2";
// import ComponentDidMount from "../scroll_top/win_scroll_top";

//main_prj
function Ctn_main_prj({
  main_title,
  img_big,
  main_content,
  title_money_pledged,
}) {
  const [activeSupport, setActiveSport] = useState(false);
  const [activePayment, setActivePayment] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState(false);
  const funcToggle = {
    handlerToggleSupport: () => {
      setActiveSport(!activeSupport);
    },
    handlerTogglePayment: () => {
      setActivePayment(!activePayment);
    },
    handlerSwitch: () => {
      setActiveSport(!activeSupport);
      setActivePayment(!activePayment);
    },
    handlerMessageSuccess: () => {
      setMessageSuccess(!messageSuccess);
      setActivePayment(!activePayment);
    },
  };
  return (
    <div className="ctn_main_prj">
      <div style={{ width: "90%" }}>
        <div className="prj_video_img">
          <div className="main_prj_video">
            {" "}
            <img
              style={{ borderRadius: "40px" }}
              src={require(`../../public/img/imgproject/${img_big}`)}
            />{" "}
          </div>
    
        </div>

        <div className="main_prj_content">
          <h5 style={{ color: "#427fb8", padding: "10px 0" }}>FUNDING</h5>
          <h2 style={{ color: "black", fontWeight: "bold" }}>{main_title}</h2>
          <h4 style={{ padding: "20px 0" }}>{main_content}</h4>
          <div className="ctn_statistic">
            <div className="ctn_pledged_backers">
              <div className="pledged">
                $<span>9800</span>
                <div className="title">
                  pledged of {title_money_pledged} $ goal
                </div>
              </div>
              <div className="backers">
                <span>0</span>
                <div className="title">backers</div>
              </div>
            </div>
          </div>
          <div className="complete_figures">
            <div className="complete"></div>
          </div>
          <div className="percent_complete">
            <span>9800</span> % of {title_money_pledged} $
          </div>
          <div className="form_donate">
            <button
              className="support_this"
              onClick={() => setActiveSport(!activeSupport)}
            >
              SUPPORT THIS
            </button>
            <button className="follow">FOLLOW</button>
            <div className="ctn_social">
              <i
                className="fa-brands fa-facebook"
                style={{ color: "#39579a" }}
              ></i>
              <i
                className="fa-brands fa-telegram"
                style={{ color: "#38b3f1" }}
              ></i>
              <i
                className="fa-brands fa-twitter"
                style={{ color: "#1d9bf0" }}
              ></i>
            </div>
          </div>
        </div>
      </div>
      {activeSupport && (
        <Cpn_Support
          func={funcToggle}
          img={require(`../../public/img/imgproject/${img_big}`)}
        />
      )}
      {activePayment && <Cpn_Payment func={funcToggle} />}
      {messageSuccess && (
        <Cpn_Expire setMessageSuccess={setMessageSuccess} delay="2000">
          <div class="card-success">
            <div className="card-success-wrap">
              <i class="checkmark">✓</i>
            </div>
            <h1>Success</h1>
            <p>
              We have received your payment request;
              <br /> Thank you for using the service!
            </p>
          </div>
        </Cpn_Expire>
      )}
    </div>
  );
}

function print_main_project(main_prj) {
  if (main_prj !== null) {
    return (
      <Ctn_main_prj
        key={main_prj.key}
        main_title={main_prj.main_title}
        img_big={main_prj.img_big}
        main_content={main_prj.main_content}
        title_money_pledged={main_prj.title_money_pledged}
      />
    );
  }
}

//story, faq, comment , statistic

function print_block_content(content_prj) {
  if (content_prj !== null) {
    return (
      <Ctn_block_content
        key={content_prj.key}
        story_prj={content_prj[1]}
        faq_prj={content_prj[2]}
        cmt_prj={content_prj[3]}
      />
    );
  }
}

//comment

function Cpn_comment_of_prj(get) {
  return (
    <div
      style={{
        margin: "30px 0",
        padding: "20px",
        border: "2px solid rgb(188, 172, 172)",
      }}
    >
      <div className="cmt_info">
        <div className="cmt_avatar">
          <img src={get.cmt.avatar} alt="" />
        </div>
        <div className="cmt_name">{get.cmt.name}</div>
      </div>
      <div className="cmt_content">{get.cmt.comment}</div>
    </div>
  );
}

function print_comment_of_prj(cmt_of_prj) {
  // console.log(cmt_of_prj);
  if (cmt_of_prj !== null) {
    // cmt_of_prj = cmt_of_prj.reverse();
    return (
      <div>
        {cmt_of_prj.map((temp) => (
          <Cpn_comment_of_prj key={temp._id} cmt={temp} />
        ))}
      </div>
    );
  }
}

//===============================

function Ctn_block_content(prj) {
  const [commentInput, setCommentInput] = useState({
    comment: "",
    slug_temp: "",
    avatar: "",
    name: "",
  });

  const { state_user } = useContext(AppContext);
  const navigate = useNavigate();

  const onChangeHandle = (e) => {
    setCommentInput({ ...commentInput, [e.target.name]: e.target.value });
  };

  const onSubmitHandle = (e) => {
    try {
      e.preventDefault();
      var comment = commentInput.comment;
      var slug_temp = prj.story_prj[0].slug;
      var avatar = state_user.user.temp.img_author;
      var name = state_user.user.temp.name_author;

      axios.post("/create_project/save_comment", {
        comment,
        slug_temp,
        avatar,
        name,
      });

      document.querySelector("#comment").value = "";
    } catch (error) {
      // setErrorMessage(error.response.data.message);
    }
  };

  function close_all_block() {
    var block_story = document.querySelector(".block_story");
    var block_FAQ = document.querySelector(".block_FAQ");
    var block_comments = document.querySelector(".block_comments");
    var block_statistic = document.querySelector(".block_statistic");
    block_FAQ.classList.remove("open");
    block_story.classList.remove("open");
    block_comments.classList.remove("open");
    block_statistic.classList.remove("open");
  }

  function open_story() {
    var block_story = document.querySelector(".block_story");
    close_all_block();
    block_story.classList.add("open");
  }

  function open_FAQ() {
    var block_FAQ = document.querySelector(".block_FAQ");
    close_all_block();
    block_FAQ.classList.add("open");
  }

  function open_comments() {
    var block_comments = document.querySelector(".block_comments");
    close_all_block();
    block_comments.classList.add("open");
  }

  function open_statistic() {
    var block_statistic = document.querySelector(".block_statistic");
    close_all_block();
    block_statistic.classList.add("open");
  }

  //post data comment
  return (
    <div className="ctn_content_detail_prj">
      <div className="header_detail_prj">
        <div className="story" onClick={open_story}>
          Story
        </div>
        <div className="FAQ" onClick={open_FAQ}>
          FAQ
        </div>
        <div className="comments" onClick={open_comments}>
          Comments
        </div>
        <div className="statistic" onClick={open_statistic}>
          Statistic
        </div>
      </div>
      <div className="body_detail_prj">
        <div className="left_body_prj">
          <div className="connect">
            <i className="fa-brands fa-connectdevelop"></i>
            <p>PRO4 connects creators with backers to fund projects.</p>
          </div>
          <div className="easy">
            <i className="fa-brands fa-stack-exchange"></i>
            <p>Easy exchange environment for startups.</p>
          </div>
          <div className="target">
            <i
              className="fa-solid fa-comments-dollar"
              style={{ color: "rgb(134, 134, 100)" }}
            ></i>
            <p>
              You’re only charged if the project meets its funding goal by the
              campaign deadline.
            </p>
          </div>
        </div>
        <div className="right_body_prj">
          <div className="block_story open">
            <h1>Story</h1>
            {prj.story_prj.map((str) => {
              return (
                <div>
                  <div className="img_story">
                    <img
                      style={{ borderRadius: "20px" }}
                      src={require(`../../public/img/imgproject/${str.image1}`)}
                    />
                  </div>
                  <h2>{str.title1}</h2>
                  <div className="img_story" style={{}}>
                    <img
                      style={{ borderRadius: "20px" }}
                      src={require(`../../public/img/imgproject/${str.image2}`)}
                    />
                  </div>

                  <p>{str.content1}</p>
                  <p>{str.content2}</p>
                  <h2>{str.title2}</h2>
                  <p>{str.content3}</p>
                  <div className="img_story" style={{}}>
                    <img
                      style={{ borderRadius: "20px" }}
                      src={require(`../../public/img/imgproject/${str.image3}`)}
                    />
                  </div>
                  <div className="img_story" style={{}}>
                    <img
                      style={{ borderRadius: "20px" }}
                      src={require(`../../public/img/imgproject/${str.image4}`)}
                    />
                  </div>

                  <p>{str.content4}</p>
                  <p>{str.content5}</p>
                  <div className="img_story" style={{}}>
                    <img
                      style={{ borderRadius: "20px" }}
                      src={require(`../../public/img/imgproject/${str.image5}`)}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="block_FAQ">
            <h1>Frequently Asked Questions</h1>
            {prj.faq_prj.map((faq) => {
              return (
                <div className="bl_FAQ_question">
                  <div className="bl_question">
                    <div style={{ fontSize: "20px" }}>{faq.question}</div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <i className="fa-solid fa-arrow-right-to-bracket"></i>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="block_comments">
            <h1>Comment</h1>
            <div className="comment_action">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <i
                  className="fa-solid fa-photo-film img_comment"
                  style={{ color: "#319545" }}
                ></i>

                <i
                  className="fa-solid fa-face-grin-squint status_comment"
                  style={{ color: "#d2a32d" }}
                ></i>
                <form
                  method="POST"
                  style={{ width: "100%" }}
                  onSubmit={onSubmitHandle}
                >
                  <label for="comment"></label>
                  <input
                    onChange={onChangeHandle}
                    name="comment"
                    id="comment"
                    style={{ width: "80%" }}
                    type="text"
                    className="in_cmt"
                    placeholder="Viết bình luận vào đây . "
                  />
                  <button type="submit" className="submit_comment">
                    Send
                  </button>
                </form>
              </div>
            </div>

            {print_comment_of_prj(prj.cmt_prj)}
          </div>

          <div className="block_statistic">
            <div className="line_statistic">
              <h2 style={{ margin: "20px 0" }}>
                <i className="fa-solid fa-sun" style={{ margin: "0 10px" }}></i>{" "}
                INTERACTIVE
              </h2>
              <div style={{ width: "100%" }}>
                <Cpn_Chart data="dataInteractive" />
              </div>
              <h2 style={{ margin: "40px 0" }}>
                <i className="fa-solid fa-sun" style={{ margin: "0 10px" }}></i>{" "}
                CASH FLOW
              </h2>
              <div style={{ width: "100%" }}>
                <Cpn_Chart data="dataCash" />
              </div>
            </div>
          </div>

          <div className="block_end">
            <p>
              Looking for more information ? Check the project{" "}
              <a href="" style={{ color: "#05ce78;" }}>
                FAQ
              </a>{" "}
              <i className="fa-solid fa-clipboard-question"></i>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Cpn_create_project() {
  const [data_cr_prj, setData_cr_prj] = useState(null);

  const location = useLocation();

  //fix

  axios
    .get(`http://localhost:5000${location.pathname}`)
    .then((res) => res.data)
    .then((data) => {
      setData_cr_prj(data);
    });

  $(document).ready(function () {
    $(window).scroll(function () {
      var left_body_prj = document.querySelector(".left_body_prj");
      var header_detail_prj = document.querySelector(".header_detail_prj");
      var body_detail_prj = document.querySelector(".body_detail_prj");
      var right_body_prj = document.querySelector(".right_body_prj");

      var body = $("html, body").scrollTop();
      var ctn_content_detail_prj_top = $(".ctn_content_detail_prj").offset()
        .top;
      var header_top = $("header").offset().top;
      var ctn_footer_top = $(".ctn__footer").offset().top;

      if (ctn_content_detail_prj_top < body) {
        if (ctn_footer_top - header_top <= window.screen.height) {
          Object.assign(left_body_prj.style, {
            position: "initial",
            display: "none",
          });
        } else {
          Object.assign(left_body_prj.style, {
            position: "fixed",
            display: "block",
          });
        }
        Object.assign(body_detail_prj.style, {
          justifyContent: "flex-end",
        });
        Object.assign(left_body_prj.style, {
          position: "fixed",
          top: "120px",
          left: "0",
        });
      } else if (ctn_content_detail_prj_top >= body) {
        
        Object.assign(body_detail_prj.style, {
          justifyContent: "center",
        });
        Object.assign(left_body_prj.style, {
          position: "initial",
          display: "block",
        });
      }
    });
  });

  

  return (
    <div>
      {/* <ComponentDidMount /> */}
      {print_main_project(data_cr_prj == null ? null : data_cr_prj[0])}
      {print_block_content(data_cr_prj == null ? null : data_cr_prj)}
    </div>
  );
}
