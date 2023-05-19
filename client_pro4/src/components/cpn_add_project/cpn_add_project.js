import React from "react";
import "./cpn_add_project.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import $ from "jquery";
import "animate.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Input, { Textarea } from "../Input/cpn_input";
import img_blank from "../../public/img/img_blank/img_blank.jpg";
import ComponentDidMount from "../scroll_top/win_scroll_top";
const body = document.querySelector("body");

//promise
function sleep(s) {
  return new Promise(function (resolve) {
    setTimeout(resolve, s);
  });
}

export default function Cpn_add_project() {
  let id_image = 0,
    id_title = 0,
    id_content = 0,
    id_faq = 0;

  const navigate = useNavigate();

  const [projectInput, setProjectInput] = useState({
    img_big: "",
    main_title: "",
    main_content: "",
    title_money_pledged: "",
  });

  const [faqInput, setFaqInput] = useState({
    question1: "",
    question2: "",
    question3: "",
  });

  const [storyInput, setStoryInput] = useState({
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "",
    title1: "",
    title2: "",
    title3: "",
    title4: "",
    title5: "",
    title6: "",
    title7: "",
    content1: "",
    content2: "",
    content3: "",
    content4: "",
    content5: "",
    content6: "",
    content7: "",
  });

  function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "a");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "e");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "i");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "o");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "u");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "y");
    str = str.replace(/Đ/g, "d");
    str = str.replace(/H/g, "h");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
      ""
    );
    str = str.replace(/ + /g, " ");
    str = str.trim();

    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    return str;
  }

  const onChangeHandle = (e) => {
    console.log(e.target.name);
    setProjectInput({ ...projectInput, [e.target.name]: e.target.value });
  };

  const onChangeHandle_faq = (e) => {
    setFaqInput({ ...faqInput, [e.target.name]: e.target.value });
  };

  const onChangeHandle_story = (e) => {
    setStoryInput({ ...storyInput, [e.target.name]: e.target.value });
  };

  const onSubmitHandle_main = (e) => {
    try {
      e.preventDefault();
      var img_big = projectInput.img_big;
      var main_title = projectInput.main_title;
      var main_content = projectInput.main_content;
      var title_money_pledged = projectInput.title_money_pledged;

      if (img_big.match(/fakepath/)) {
        // update the file-path text using case-insensitive regex
        img_big = img_big.replace(/C:\\fakepath\\/i, "");
      }

      axios.post("/post_project_created/store", {
        img_big,
        main_title,
        main_content,
        title_money_pledged,
      });
    } catch (error) {
      // setErrorMessage(error.response.data.message);
    }
  };

  const onSubmitHandle_faq = (e) => {
    try {
      e.preventDefault();
      var question_data = [];
      var slug_temp = removeVietnameseTones(projectInput.main_title);
      slug_temp = slug_temp.replace(/ /g, "-");

      var question = faqInput.question1;
      question_data.push({ question, slug_temp });
      question = faqInput.question2;
      question_data.push({ question, slug_temp });
      question = faqInput.question3;
      question_data.push({ question, slug_temp });
      // var slug_temp = projectInput.main_title;
      console.log(question);

      axios.post("/post_project_created/faq", { question_data });
    } catch (error) {
      // setErrorMessage(error.response.data.message);
    }
  };

  const onSubmitHandle_story = (e) => {
    try {
      e.preventDefault();

      var ctn_loading = document.querySelector(".ctn__loading__body");

      var image1 = storyInput.image1;
      var image2 = storyInput.image2;
      var image3 = storyInput.image3;
      var image4 = storyInput.image4;
      var image5 = storyInput.image5;
      var title1 = storyInput.title1;
      var title2 = storyInput.title2;
      var title3 = storyInput.title3;
      var content1 = storyInput.content1;
      var content2 = storyInput.content2;
      var content3 = storyInput.content3;
      var content4 = storyInput.content4;
      var slug_temp = removeVietnameseTones(projectInput.main_title);
      slug_temp = slug_temp.replace(/ /g, "-");

      if (image1.match(/fakepath/)) {
        // update the file-path text using case-insensitive regex
        image1 = image1.replace(/C:\\fakepath\\/i, "");
        image2 = image2.replace(/C:\\fakepath\\/i, "");
        image3 = image3.replace(/C:\\fakepath\\/i, "");
        image4 = image4.replace(/C:\\fakepath\\/i, "");
        image5 = image5.replace(/C:\\fakepath\\/i, "");
      }

      sleep(0)
        .then(function () {
          ctn_loading.classList.add("open__load");
          axios.post("/post_project_created/story", {
            image1,
            image2,
            image3,
            image4,
            image5,
            title1,
            title2,
            title3,
            content1,
            content2,
            content3,
            content4,
            slug_temp,
          });
          return sleep(1000);
        })
        .then(function () {
          ctn_loading.classList.remove("open__load");
          navigate(`../create_project/${slug_temp}`);
        });
    } catch (error) {
      // setErrorMessage(error.response.data.message);
    }
  };

  $(function () {
    $("#img_big").change(function () {
      var fileInput = this;
      if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          $("#image").attr("src", e.target.result);
        };

        reader.readAsDataURL(fileInput.files[0]);
      }
    });
    $("#input_image1").change(function () {
      var fileInput = this;
      if (fileInput.files && fileInput.files[0]) {
        var reader1 = new FileReader();

        reader1.onload = function (e) {
          $("#image1").attr("src", e.target.result);
        };

        reader1.readAsDataURL(fileInput.files[0]);
      }
    });
    $("#input_image2").change(function () {
      var fileInput = this;
      if (fileInput.files && fileInput.files[0]) {
        var reader2 = new FileReader();

        reader2.onload = function (e) {
          $("#image2").attr("src", e.target.result);
        };

        reader2.readAsDataURL(fileInput.files[0]);
      }
    });
    $("#input_image3").change(function () {
      var fileInput = this;
      if (fileInput.files && fileInput.files[0]) {
        var reader3 = new FileReader();

        reader3.onload = function (e) {
          $("#image3").attr("src", e.target.result);
        };

        reader3.readAsDataURL(fileInput.files[0]);
      }
    });
    $("#input_image4").change(function () {
      var fileInput = this;
      if (fileInput.files && fileInput.files[0]) {
        var reader4 = new FileReader();

        reader4.onload = function (e) {
          $("#image4").attr("src", e.target.result);
        };

        reader4.readAsDataURL(fileInput.files[0]);
      }
    });
    $("#input_image5").change(function () {
      var fileInput = this;
      if (fileInput.files && fileInput.files[0]) {
        var reader5 = new FileReader();

        reader5.onload = function (e) {
          $("#image5").attr("src", e.target.result);
        };

        reader5.readAsDataURL(fileInput.files[0]);
      }
    });
    $("#input_image6").change(function () {
      var fileInput = this;
      if (fileInput.files && fileInput.files[0]) {
        var reader6 = new FileReader();

        reader6.onload = function (e) {
          $("#image6").attr("src", e.target.result);
        };

        reader6.readAsDataURL(fileInput.files[0]);
      }
    });
    $("#input_image7").change(function () {
      var fileInput = this;
      if (fileInput.files && fileInput.files[0]) {
        var reader7 = new FileReader();

        reader7.onload = function (e) {
          $("#image7").attr("src", e.target.result);
        };

        reader7.readAsDataURL(fileInput.files[0]);
      }
    });
    $("#input_image8").change(function () {
      var fileInput = this;
      if (fileInput.files && fileInput.files[0]) {
        var reader8 = new FileReader();

        reader8.onload = function (e) {
          $("#image8").attr("src", e.target.result);
        };

        reader8.readAsDataURL(fileInput.files[0]);
      }
    });
  });

  // handle nav header

  function close_all() {
    // close main post
    let btn_preview_template = document.querySelector("#btn-preview-template");
    Object.assign(btn_preview_template.style, {
      display: " none",
    });
    if (document.querySelector(".main_post")) {
      Object.assign(document.querySelector(".main_post").style, {
        display: "none",
      });
      Object.assign(document.querySelector(".story_post").style, {
        display: "none",
      });
      Object.assign(document.querySelector(".FAQ_post").style, {
        display: "none",
      });
    }
  }

  function open_over_view() {
    close_all();
    if (document.querySelector(".main_post")) {
      Object.assign(document.querySelector(".main_post").style, {
        display: "flex",
      });
    }
  }

  function open_story() {
    close_all();
    if (document.querySelector(".story_post")) {
      Object.assign(document.querySelector(".story_post").style, {
        display: "flex",
      });
    }
  }

  function open_faq() {
    close_all();
    if (document.querySelector(".FAQ_post")) {
      Object.assign(document.querySelector(".FAQ_post").style, {
        display: "flex",
      });
    }
  }

  // PREVIEW MODAL
  // close all tab into modal
  function close_all_tab_into_modal() {
    // close main post
    if (document.querySelector("#modal_preview_story")) {
      Object.assign(document.querySelector(".overview_into_review").style, {
        display: "none",
      });
      Object.assign(
        document.querySelector(".ctn_content_detail_prj .body_detail_prj")
          .style,
        {
          display: "none",
        }
      );
    }
  }

  // open tab modal overview
  function open_tab_modal_overview() {
    close_all_tab_into_modal();
    if (document.querySelector(".overview_into_review")) {
      Object.assign(document.querySelector(".overview_into_review").style, {
        display: "flex",
      });
    }
  }
  // open tab modal story
  function open_tab_modal_story() {
    close_all_tab_into_modal();
    if (document.querySelector(".body_detail_prj")) {
      Object.assign(
        document.querySelector(".ctn_content_detail_prj .body_detail_prj")
          .style,
        {
          display: "flex",
        }
      );
    }
  }

  function onClick_close_preview() {
    var preview = document.querySelector("#modal_preview");
    if (document.querySelector("#modal_preview")) {
      Object.assign(preview.style, {
        display: "none",
      });
    }
  }
  function onClick_close_previewStory() {
    var previewStory = document.querySelector("#modal_preview_story");
    if (previewStory) {
      Object.assign(previewStory.style, {
        display: "none",
      });
    }
  }
  function onClick_close_previewStory_template() {
    var previewStory = document.querySelector("#modal_preview_story_template");
    if (previewStory) {
      Object.assign(previewStory.style, {
        display: "none",
      });
    }
  }
  function onClick_open_previewStory() {
    var previewStory = document.querySelector("#modal_preview_story_template");
    if (previewStory) {
      Object.assign(previewStory.style, {
        display: "flex",
      });
    }
  }

  $(document).ready(() => {
    // overview
    ProjectPostingPreview();
    function ProjectPostingPreview() {
      $("#preview").on("click", () => {
        $("#modal_preview .info_preview h2").text($("#main_title").val());
        $("#modal_preview .info_preview h4").text($("#main_content").val());
        $(
          "#modal_preview .info_preview .ctn_pledged_backers .pledged .title"
        ).text(`pledged of $` + $("#title_money_pledged").val() + ` goal`);
        $("#modal_preview .info_preview .percent_complete").text(
          `0 % of ` + $("#title_money_pledged").val() + ` $`
        );
        $(".main_prj_video").attr("src", $("#image").attr("src"));
        $("#modal_preview").css({
          display: "flex",
        });
      });
    }
    // story
    ProjectPostingStoryPreview();
    function ProjectPostingStoryPreview() {
      $("#previewStory").on("click", () => {
        // render data to preview story
        $("#preview_story_header1").text($("#form_story #input_story_1").val());
        $("#preview_story_desc1").text($("#form_story #input_story_2").val());
        $("#preview_story_desc2").text($("#form_story #input_story_3").val());
        $("#preview_story_header2").text($("#form_story #input_story_4").val());
        $("#preview_story_desc3").text($("#form_story #input_story_5").val());
        $("#preview_story_desc4").text($("#form_story #input_story_6").val());
        $("#preview_story_desc5").text($("#form_story #input_story_7").val());
        $("#preview_story_img1").attr(
          "src",
          $("#form_story #image1").attr("src")
        );
        $("#preview_story_img2").attr(
          "src",
          $("#form_story #image2").attr("src")
        );
        $("#preview_story_img3").attr(
          "src",
          $("#form_story #image3").attr("src")
        );
        $("#preview_story_img4").attr(
          "src",
          $("#form_story #image4").attr("src")
        );
        $("#preview_story_img5").attr(
          "src",
          $("#form_story #image5").attr("src")
        );
        $("#modal_preview_story").css({
          display: "flex",
        });
        // render data to preview overview
        $(".overview_into_review .info_preview h2").text(
          $("#main_title").val()
        );
        $(".overview_into_review .info_preview h4").text(
          $("#main_content").val()
        );
        $(
          ".overview_into_review .info_preview .ctn_pledged_backers .pledged .title"
        ).text(`pledged of $` + $("#title_money_pledged").val() + ` goal`);
        $(".overview_into_review .info_preview .percent_complete").text(
          `0 % of ` + $("#title_money_pledged").val() + ` $`
        );
        $(".main_prj_video").attr("src", $("#image").attr("src"));
      });
    }
  });

  //FAQ
  function add_faq() {
    let question_FAQ = document.querySelector(".question_FAQ");
    id_faq++;
    const div_faq = document.createElement("div");
    // div_faq.innerHTML = `<textarea onchange="test()" id="question" name="question" type="text" style="height: 80px;border_radius:20px;width: 80%;font-size : 30px; padding: 20px;margin: 10px;" placeholder="Write for question"></textarea>`;
    div_faq.innerHTML =
      "<textarea onChange={" +
      onChangeHandle_faq() +
      "} name='question' type='text' ></textarea>";
    question_FAQ.appendChild(div_faq);
  }

  //story
  function add_story_title() {
    let title_content_image = document.querySelector(".title_content_image");
    id_title++;

    close_all_edit();

    Object.assign(title_content_image.style, {
      display: " initial",
    });

    const div_title = document.createElement("div");
    div_title.innerHTML = `<textarea name="title${id_title}" type="text" style="height: 80px;border_radius:20px;width: 80%;font-size : 30px; padding: 20px;margin: 10px;" placeholder="Title"></textarea>`;
    title_content_image.appendChild(div_title);
  }

  function add_story_content() {
    let title_content_image = document.querySelector(".title_content_image");

    Object.assign(title_content_image.style, {
      display: " initial",
    });

    id_content++;
    const div_content = document.createElement("div");
    div_content.innerHTML = `<textarea name="content${id_content}" type="text" style="border-radius: 10px; height: 20px;word-break: break-word; width: 90%;font-size : 20px; padding: 30px 10px 140px 30px;margin: 10px;" placeholder="Content"></textarea>`;
    title_content_image.appendChild(div_content);
  }

  function add_story_image() {
    let title_content_image = document.querySelector(".title_content_image");

    id_image++;

    Object.assign(title_content_image.style, {
      display: " initial",
    });

    const div_image = document.createElement("div");
    div_image.innerHTML = `<div style="display: flex; flex-direction: column;">
    <img style="margin: 0 auto; z-index: 1" src="" alt="" id="image_${id_image}" width="300" height="300">
    <input name="image${id_image}" style="width: 80%;margin: 20px auto 60px auto;" type="file" class="form-control" id="img_big" name="img_big"
            accept="image/gif , image/jpeg, image/png" placeholder="image">
    </div>
    `;
    title_content_image.appendChild(div_image);
  }

  const close_all_edit = () => {
    let temp_state_cr_prj = document.querySelector(".temp_state_cr_prj");
    let title_content_image = document.querySelector(".title_content_image");
    let input_add_str = document.querySelector(".input_add_str");
    let btn_preview_template = document.querySelector("#btn-preview-template");
    Object.assign(btn_preview_template.style, {
      display: " none",
    });
    Object.assign(temp_state_cr_prj.style, {
      display: " none",
    });

    Object.assign(title_content_image.style, {
      display: " none",
    });

    Object.assign(input_add_str.style, {
      display: " none",
    });
  };

  const o_template_prj = () => {
    close_all_edit();
    let input_add_str = document.querySelector(".input_add_str");
    let btn_preview_template = document.querySelector("#btn-preview-template");
    Object.assign(btn_preview_template.style, {
      display: " flex",
    });
    Object.assign(input_add_str.style, {
      display: " flex",
    });
  };

  const o_img_edit = () => {
    close_all_edit();
    let temp_state_cr_prj = document.querySelector(".temp_state_cr_prj");

    Object.assign(temp_state_cr_prj.style, {
      display: " initial",
    });
  };

  $(document).ready(function () {
    $(window).scroll(function () {
      var body = $("html, body").scrollTop();
      var ctn_footer_top = $(".ctn__footer").offset().top;
      var header_top = $("header").offset().top;
      var button_add_str = document.querySelector(".button_add_str");

      if (ctn_footer_top - header_top <= window.screen.height) {
        Object.assign(button_add_str.style, {
          display: "none",
        });
      } else {
        Object.assign(button_add_str.style, {
          display: "flex",
        });
      }
    });
  });

  return (
    <div>
      {/* <div style={{ width: "100%", height: "80px", zIndex: "0" }}>
        <img
          src={require("../../public/img/imgbackground/background_page_3.webp")}
          style={{
            position: "fixed",
            width: "100%",
            top: "0",
            left: "0",
            zIndex: "0",
          }}
          alt=""
        />
      </div> */}

      {/* <ComponentDidMount /> */}
      <div class="nav_main_post">
        <ul>
          <div class="over_view" onClick={open_over_view}>
            <i class="fa-solid fa-eye"></i>
            OVER VIEW
          </div>
          <div class="faq" onClick={open_faq}>
            <i class="fa-solid fa-file-circle-question"></i>
            FAQ
          </div>
          <div class="story" onClick={open_story}>
            <i class="fa-solid fa-book-open-reader"></i>
            STORY
          </div>
          <div class="rewards" onclick="open_rewards()">
            <i class="fa-solid fa-gifts"></i>
            REWARDS
          </div>
        </ul>
      </div>
      {/* over view */}
      <div class="main_post">
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            width: "70%",
          }}
        >
          <form method="POST" onSubmit={onSubmitHandle_main}>
            <div class="form-group">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                  for="img_big"
                >
                  PROJECT IMAGE
                </label>
                <p style={{ textAlign: "center", padding: "20px 0" }}>
                  Add an image that clearly represents your project. Choose one
                  that looks good at different sizes—it’ll appear on your
                  project page, across the Kickstarter website and mobile apps,
                  and (when shared) on social channels.
                </p>
                <p style={{ textAlign: "center", padding: "20px 0" }}>
                  Your image should be at least 1024x576 pixels. It will be
                  cropped to a 16:9 ratio.
                </p>
                <label
                  htmlFor="img_big"
                  style={{
                    margin: "0 auto",
                    zIndex: "1",
                  }}
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZo8HJXlzsEbcnfi6ciTTC9I1SF8Pb0wY6A&usqp=CAU"
                    style={{ border: "2px dashed" }}
                    alt=""
                    id="image"
                    width="300"
                    height="300"
                  />
                </label>
                <input
                  style={{
                    width: "80%",
                    margin: "20px auto 60px auto",
                    display: "none",
                  }}
                  type="file"
                  class="form-control"
                  id="img_big"
                  name="img_big"
                  onChange={onChangeHandle}
                  accept="image/gif , image/jpeg, image/png"
                />
              </div>
              <hr style={{ width: "70%", margin: "60px auto 0px" }} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "60px",
                }}
              >
                <label
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                  for="main_title"
                >
                  PROJECT TITLE
                </label>
                <p style={{ textAlign: "center", padding: "20px 0" }}>
                  Write a clear, brief title and subtitle to help people quickly
                  understand your project. Both will appear on your project and
                  pre-launch pages.
                </p>
                {/* edit input */}
                <Input
                  idInput="main_title"
                  name="main_title"
                  onChange={onChangeHandle}
                  placeholder="Write about project title"
                ></Input>
                {/* <div style={{ position: "relative" }}>
                  <input
                    required="required"
                    type="text"
                    class="form-control"
                    id="main_title"
                    name="main_title"
                    style={{
                      padding: "20px 30px",
                      fontSize: "20px",
                      borderRadius: "20px",
                      border: "2px solid rgb(189, 167, 167)",
                    }}
                    placeholder=""
                    onChange={onChangeHandle}
                  />
                  <span>Write about project title</span>
                </div> */}
              </div>
              <hr style={{ width: "70%", margin: "60px auto 0 " }} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "60px",
                }}
              >
                <label
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                  for="main_content"
                >
                  GENERAL INTRODUCTION
                </label>
                <p style={{ textAlign: "center", padding: "20px 0" }}>
                  Potential backers will also see them if your project appears
                  on category pages, search results, or in emails we send to our
                  community.
                </p>
                <Input
                  idInput="main_content"
                  name="main_content"
                  onChange={onChangeHandle}
                  placeholder="Write about general introduction"
                ></Input>
                {/* <div style={{ position: "relative" }}>
                  <input
                    required="required"
                    type="text"
                    class="form-control"
                    id="main_content"
                    name="main_content"
                    style={{
                      marginBottom: "80px",
                      padding: "20px 30px",
                      fontSize: "20px",
                      borderRadius: "20px",
                      border: "2px solid rgb(189, 167, 167)",
                    }}
                    placeholder=""
                    onChange={onChangeHandle}
                  />
                  <span>Write about general introduction</span>
                </div> */}
              </div>
              <hr style={{ width: "70%", margin: "60px auto 0 " }} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "60px 0",
                }}
              >
                <label
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                  for="title_money_pledged"
                >
                  FUNDING GOAL
                </label>
                <p style={{ textAlign: "center", padding: "10px 0" }}>
                  Set an achievable goal that covers what you need to complete
                  your project.
                </p>
                <p style={{ textAlign: "center", padding: "10px 0 20px 0" }}>
                  Funding is all-or-nothing. If you don’t meet your goal, you
                  won’t receive any money.
                </p>
                <Input
                  idInput="title_money_pledged"
                  name="title_money_pledged"
                  onChange={onChangeHandle}
                  placeholder="Write about funding goal"
                ></Input>
                {/* <div style={{ position: "relative" }}>
                  <input
                    required="required"
                    type="text"
                    class="form-control"
                    id="title_money_pledged"
                    name="title_money_pledged"
                    style={{
                      padding: "20px 30px",
                      fontSize: "20px",
                      borderRadius: "20px",
                      border: "2px solid rgb(189, 167, 167)",
                    }}
                    placeholder=""
                    onChange={onChangeHandle}
                  />
                  <span>Write about funding goal</span>
                </div> */}
              </div>
              <button
                style={{
                  padding: "10px 20px",
                  fontSize: "30px",
                  borderRadius: "10px",
                  border: "2px solid rgb(179, 164, 164)",
                }}
                onClick={open_faq}
                type="submit"
              >
                <i
                  class="fa-solid fa-arrow-right-to-bracket"
                  style={{ margin: "0 20px" }}
                ></i>
                NEXT
              </button>
            </div>
          </form>

          <div id="modal_preview">
            <div
              style={{ display: "flex", justifyContent: "right" }}
              onClick={onClick_close_preview}
            >
              <i
                class="fa-solid fa-circle-xmark"
                style={{ fontSize: "30px" }}
              ></i>
            </div>
            <div className="modal_preview_body">
              <div class="img_preview">
                <img class="main_prj_video" />
              </div>

              <div class="info_preview">
                <h5>FUNDING</h5>
                <h2></h2>
                <h4></h4>
                <div class="ctn_statistic">
                  <div class="ctn_pledged_backers">
                    <div class="pledged">
                      $<span>0</span>
                      <div class="title"></div>
                    </div>
                    <div class="backers">
                      <span>0</span>
                      <div class="title">backers</div>
                    </div>
                  </div>
                </div>
                <div class="complete_figures">
                  <div class="complete"></div>
                </div>
                <div class="percent_complete"></div>
                <div class="form_donate">
                  <button class="support_this">SUPPORT THIS</button>
                  <button class="follow">FOLLOW</button>
                  <div class="ctn_social">
                    <i
                      class="fa-brands fa-facebook"
                      style={{ color: "#39579a" }}
                    ></i>
                    <i
                      class="fa-brands fa-telegram"
                      style={{ color: "#38b3f1" }}
                    ></i>
                    <i
                      class="fa-brands fa-twitter"
                      style={{ color: "#1d9bf0" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            id="preview"
            style={{
              padding: "10px 20px",
              borderRadius: "10px",
              border: "2px solid rgb(179, 164, 164)",
            }}
          >
            <i
              class="fa-solid fa-eye"
              style={{ margin: "0 20px", borderRadius: "10px" }}
            ></i>
            PREVIEW
          </button>
        </div>
      </div>

      <div class="FAQ_post">
        <div style={{ width: "70%" }}>
          <div style={{ display: "flex", flexDirection: "row-reverse" }}>
            <button
              style={{
                fontSize: "30px",
                padding: "10px 20px",
                border: "2px solid rgb(183, 170, 170)",
                borderRadius: "10px",
                marginBottom: "40px",
              }}
              onClick={add_faq}
            >
              <i class="fa-solid fa-plus"></i>
              ADD QUESTION
            </button>
          </div>
          <form class="ctn_FAQ" method="POST" onSubmit={onSubmitHandle_faq}>
            <div class="question_FAQ">
              <Input
                placeholder="Write for FAQ"
                name="question1"
                idArea="question"
                onChange={onChangeHandle_faq}
              ></Input>
              <hr style={{ width: "70%", margin: "60px auto" }} />
              <Input
                placeholder="Write for FAQ"
                name="question2"
                idArea="question"
                onChange={onChangeHandle_faq}
              ></Input>
              <hr style={{ width: "70%", margin: "60px auto " }} />
              <Input
                placeholder="Write for FAQ"
                name="question3"
                idArea="question"
                onChange={onChangeHandle_faq}
              ></Input>
            </div>
            <button
              type="submit"
              onClick={open_story}
              style={{
                fontSize: "30px",
                padding: "10px 20px",
                border: "2px solid rgb(183, 170, 170)",
                borderRadius: "10px",
                marginTop: "40px",
                float: "right",
              }}
            >
              <i class="fa-solid fa-arrow-right-to-bracket"></i>
              NEXT
            </button>
          </form>
        </div>
      </div>
      {/* story */}

      <div class="story_post" style={{ minHeight: "274px" }}>
        <div style={{ width: "80%", display: "flex", justifyContent: "right" }}>
          <div class="button_add_str">
            <button onClick={o_img_edit} id="btn_edit">
              <i class="fa-solid fa-pen-fancy"></i>
              EDIT
            </button>
            <button onClick={add_story_title} id="btn_title">
              <i class="fa-solid fa-book-open-reader"></i>
              ADD TITLE
            </button>
            <button onClick={add_story_content} id="btn_content">
              <i class="fa-solid fa-file-lines"></i>
              ADD CONTENT
            </button>
            <button onClick={add_story_image} id="btn_image">
              <i class="fa-solid fa-photo-film"></i>
              ADD IMAGE
            </button>
            <button onClick={o_template_prj} id="btn_template">
              <i class="fa-solid fa-clipboard-list"></i>
              TEMPLATE
            </button>
          </div>
          <div style={{ width: "80%", position: "relative" }}>
            <div className="temp_state_cr_prj">
              <div className="image_temp_state">
                <img src="https://www.adobe.com/content/dam/dx-dc/images/acrobat/online/riverflow-items/s_illu_edit-pdf_452x320.svg" />
              </div>
            </div>
            <div className="title_content_image"></div>
            <form method="POST" onSubmit={onSubmitHandle_story} id="form_story">
              <div
                id="btn-preview-template"
                onClick={() => {
                  onClick_open_previewStory();
                }}
              >
                Preview template
              </div>
              <div class="input_add_str">
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <label
                    htmlFor="input_image1"
                    style={{
                      padding: "0 160px",
                      margin: "0 auto",
                      zIndex: "1",
                    }}
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZo8HJXlzsEbcnfi6ciTTC9I1SF8Pb0wY6A&usqp=CAU"
                      alt=""
                      id="image1"
                      width="300"
                      height="300"
                      className="input_image"
                    />
                  </label>
                  <input
                    onChange={onChangeHandle_story}
                    name="image1"
                    style={{
                      width: "80%",
                      margin: "20px auto 60px auto",
                      display: "none",
                    }}
                    type="file"
                    class="form-control"
                    id="input_image1"
                    accept="image/gif , image/jpeg, image/png"
                    placeholder="image"
                  />
                  <hr style={{ width: "70%", margin: "60px auto" }} />
                  <Textarea
                    onChange={onChangeHandle_story}
                    name="title1"
                    type="text"
                    placeholder="Title"
                    idArea="input_story_1"
                  ></Textarea>
                  <hr style={{ width: "70%", margin: "60px auto" }} />
                  <label
                    htmlFor="input_image2"
                    style={{
                      padding: "0 160px",
                      margin: "0 auto",
                      zIndex: "1",
                    }}
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZo8HJXlzsEbcnfi6ciTTC9I1SF8Pb0wY6A&usqp=CAU"
                      alt=""
                      id="image2"
                      width="300"
                      height="300"
                      className="input_image"
                    />
                  </label>
                  <input
                    onChange={onChangeHandle_story}
                    name="image2"
                    style={{
                      width: "80%",
                      margin: "20px auto 60px auto",
                      display: "none",
                    }}
                    type="file"
                    class="form-control"
                    id="input_image2"
                    accept="image/gif , image/jpeg, image/png"
                    placeholder="image"
                  />
                  <hr style={{ width: "70%", margin: "60px auto" }} />
                  <Textarea
                    onChange={onChangeHandle_story}
                    name="content1"
                    type="text"
                    row={10}
                    placeholder="Content"
                    idArea="input_story_2"
                  ></Textarea>{" "}
                  <hr style={{ width: "70%", margin: "60px auto" }} />
                  <Textarea
                    onChange={onChangeHandle_story}
                    name="content2"
                    row={10}
                    placeholder="Content"
                    idArea="input_story_3"
                  ></Textarea>{" "}
                  <hr style={{ width: "70%", margin: "60px auto" }} />
                  <Textarea
                    onChange={onChangeHandle_story}
                    name="title2"
                    placeholder="Title"
                    idArea="input_story_4"
                  ></Textarea>{" "}
                  <hr style={{ width: "70%", margin: "60px auto" }} />
                  <Textarea
                    onChange={onChangeHandle_story}
                    name="content3"
                    row={10}
                    placeholder="Content"
                    idArea="input_story_5"
                  ></Textarea>{" "}
                  <hr style={{ width: "70%", margin: "60px auto" }} />
                  <label
                    htmlFor="input_image3"
                    style={{
                      padding: "0 160px",
                      margin: "0 auto",
                      zIndex: "1",
                    }}
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZo8HJXlzsEbcnfi6ciTTC9I1SF8Pb0wY6A&usqp=CAU"
                      alt=""
                      id="image3"
                      width="300"
                      height="300"
                      className="input_image"
                    />
                  </label>
                  <input
                    onChange={onChangeHandle_story}
                    name="image3"
                    style={{
                      width: "80%",
                      margin: "20px auto 60px auto",
                      display: "none",
                    }}
                    type="file"
                    class="form-control"
                    id="input_image3"
                    accept="image/gif , image/jpeg, image/png"
                    placeholder="image"
                  />{" "}
                  <hr style={{ width: "70%", margin: "60px auto" }} />
                  <label
                    htmlFor="input_image4"
                    style={{
                      padding: "0 160px",
                      margin: "0 auto",
                      zIndex: "1",
                    }}
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZo8HJXlzsEbcnfi6ciTTC9I1SF8Pb0wY6A&usqp=CAU"
                      alt=""
                      id="image4"
                      width="300"
                      height="300"
                      className="input_image"
                    />
                  </label>
                  <input
                    onChange={onChangeHandle_story}
                    name="image4"
                    style={{
                      width: "80%",
                      margin: "20px auto 60px auto",
                      display: "none",
                    }}
                    type="file"
                    class="form-control"
                    id="input_image4"
                    accept="image/gif , image/jpeg, image/png"
                    placeholder="image"
                  />{" "}
                  <hr style={{ width: "70%", margin: "60px auto" }} />
                  <Textarea
                    onChange={onChangeHandle_story}
                    name="title3"
                    row={10}
                    placeholder="Content"
                    idArea="input_story_6"
                  ></Textarea>{" "}
                  <hr style={{ width: "70%", margin: "60px auto" }} />
                  <Textarea
                    onChange={onChangeHandle_story}
                    name="content4"
                    row={10}
                    placeholder="Content"
                    idArea="input_story_7"
                  ></Textarea>{" "}
                  <hr style={{ width: "70%", margin: "60px auto" }} />
                  <label
                    htmlFor="input_image5"
                    style={{
                      padding: "0 160px",
                      margin: "0 auto 40px",
                      zIndex: "1",
                    }}
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZo8HJXlzsEbcnfi6ciTTC9I1SF8Pb0wY6A&usqp=CAU"
                      alt=""
                      id="image5"
                      width="300"
                      height="300"
                      className="input_image"
                    />
                  </label>
                  <input
                    onChange={onChangeHandle_story}
                    name="image5"
                    style={{
                      width: "80%",
                      margin: "20px auto 60px auto",
                      display: "none",
                    }}
                    type="file"
                    class="form-control"
                    id="input_image5"
                    accept="image/gif , image/jpeg, image/png"
                    placeholder="image"
                  />
                </div>
              </div>

              <button
                style={{
                  padding: "10px 20px",
                  fontSize: "30px",
                  borderRadius: "10px",
                  border: "2px solid rgb(179, 164, 164)",
                  float: "right",
                }}
                type="submit"
              >
                SEND
              </button>
            </form>
            {/* modal story */}
            <div className="ctn_content_detail_prj" id="modal_preview_story">
              <div
                className="modal_preview_btn_close"
                // style={{ display: "flex", justifyContent: "right" }}
                onClick={onClick_close_previewStory}
              >
                <i
                  class="fa-solid fa-circle-xmark"
                  style={{ fontSize: "30px" }}
                ></i>
              </div>
              <div className="header_detail_prj">
                {/* onClick={open_story} */}
                <div
                  className="story"
                  onClick={() => open_tab_modal_overview()}
                >
                  OverView
                </div>
                {/* onClick={open_FAQ} */}
                <div className="FAQ">FAQ</div>
                {/* onClick={open_comments} */}
                <div
                  className="comments"
                  onClick={() => open_tab_modal_story()}
                >
                  Story
                </div>
                {/* onClick={open_statistic} */}
                <div className="statistic">Statistic</div>
              </div>
              {/* overview modal into overview */}
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
                      You’re only charged if the project meets its funding goal
                      by the campaign deadline.
                    </p>
                  </div>
                </div>
                <div className="right_body_prj">
                  <div className="block_story open">
                    <h1>Story</h1>
                    <div>
                      <div className="img_story" alt="">
                        <img id="preview_story_img1" />
                      </div>
                      <h2 id="preview_story_header1"></h2>
                      <div className="img_story" style={{}}>
                        <img id="preview_story_img2" />
                      </div>

                      <p id="preview_story_desc1"></p>
                      <p id="preview_story_desc2"></p>
                      <h2 id="preview_story_header2"></h2>
                      <p id="preview_story_desc3"></p>
                      <div className="img_story" style={{}}>
                        <img id="preview_story_img3" />
                      </div>
                      <div className="img_story" style={{}}>
                        <img id="preview_story_img4" />
                      </div>

                      <p id="preview_story_desc4"></p>
                      <p id="preview_story_desc5"></p>
                      <div className="img_story" style={{}}>
                        <img id="preview_story_img5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* overview modal into review */}
              <div className="overview_into_review">
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <div class="img_preview">
                    <img class="main_prj_video" />
                  </div>
                  <div class="info_preview">
                    <h5>FUNDING</h5>
                    <h2></h2>
                    <h4></h4>
                    <div class="ctn_statistic">
                      <div class="ctn_pledged_backers">
                        <div class="pledged">
                          $<span>0</span>
                          <div class="title"></div>
                        </div>
                        <div class="backers">
                          <span>0</span>
                          <div class="title">backers</div>
                        </div>
                      </div>
                    </div>
                    <div class="complete_figures">
                      <div class="complete"></div>
                    </div>
                    <div class="percent_complete"></div>
                    <div class="form_donate">
                      <button class="support_this">SUPPORT THIS</button>
                      <button class="follow">FOLLOW</button>
                      <div class="ctn_social">
                        <i
                          class="fa-brands fa-facebook"
                          style={{ color: "#39579a" }}
                        ></i>
                        <i
                          class="fa-brands fa-telegram"
                          style={{ color: "#38b3f1" }}
                        ></i>
                        <i
                          class="fa-brands fa-twitter"
                          style={{ color: "#1d9bf0" }}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* template story */}
            <div
              className="ctn_content_detail_prj"
              id="modal_preview_story_template"
            >
              <div
                className="modal_preview_btn_close"
                // style={{ display: "flex", justifyContent: "right" }}
                onClick={onClick_close_previewStory_template}
              >
                <i
                  class="fa-solid fa-circle-xmark"
                  style={{ fontSize: "30px" }}
                ></i>
              </div>
              {/* overview */}
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
                      You’re only charged if the project meets its funding goal
                      by the campaign deadline.
                    </p>
                  </div>
                </div>
                <div className="right_body_prj">
                  <div className="block_story open">
                    <h1>Story</h1>
                    <div>
                      <div className="img_story" alt="">
                        <img
                          id=""
                          src={require(`../../public/img/imgproject/prj_img_main_1_6.jpg`)}
                        />
                      </div>
                      <h2>WHAT IS BED PILLOW ?</h2>
                      <div className="img_story" style={{}}>
                        <img
                          src={require(`../../public/img/imgproject/prj_img_main_1_2.jpg`)}
                        />
                      </div>

                      <p>
                        Bed Pillow is a pillow designed to always adapt to the
                        way you sleep. Its unique ergonomic shape and
                        high-quality materials ensure that your head is
                        positioned properly for a good night's sleep, regardless
                        of your sleeping position.
                      </p>
                      <p>
                        To get quality sleep, we need our whole body, especially
                        our head, neck, and spine, to be relaxed and in the
                        right position while we are in bed. The alignment of
                        these parts of our body is the best way to immerse
                        ourselves in a night of restful sleep.
                      </p>
                      <h2>OPTIMUM BREATHABILITY</h2>
                      <p>
                        We want to improve the quality of people's sleep
                        forever. That's why we have put all our efforts into
                        creating Bed Pillow with the latest state-of-the-art
                        technology and the best materials available to ensure
                        maximum performance of its unique properties for as long
                        as possible.
                      </p>
                      <div className="img_story" style={{}}>
                        <img
                          src={require(`../../public/img/imgproject/prj_img_main_1_3.jpg`)}
                        />
                      </div>
                      <div className="img_story" style={{}}>
                        <img
                          src={require(`../../public/img/imgproject/prj_img_main_1_4.jpg`)}
                        />
                      </div>

                      <p>
                        Bed Pillow is compatible with most commercial queen-size
                        pillow covers (IKEA, Bed Bath & Beyond, Pottery Barn…),
                        so you can match it with the rest of your bedroom.
                      </p>
                      <p>
                        Unlike other pillows on the market, the core of Bed
                        Pillow is composed of a single layer of memory foam with
                        different thicknesses. Thanks to this solution, we have
                        avoided the use of environmentally harmful glues and
                        have made Bed Pillow easier to recycle.
                      </p>
                      <div className="img_story" style={{}}>
                        <img
                          src={require(`../../public/img/imgproject/prj_img_main_1_5.jpg`)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              id="previewStory"
              style={{
                padding: "10px 20px",
                fontSize: "30px",
                borderRadius: "10px",
                border: "2px solid rgb(179, 164, 164)",
              }}
            >
              <i
                class="fa-solid fa-eye"
                style={{ margin: "0 20px", borderRadius: "10px" }}
              ></i>
              PREVIEW
            </button>
          </div>
        </div>
      </div>

      <div class="rewards_post"></div>

      <div style={{ height: "200px" }}></div>
    </div>
  );
}
