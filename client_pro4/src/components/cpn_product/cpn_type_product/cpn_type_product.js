import React from "react";
import "./cpn_type_product.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import $ from "jquery";
import "animate.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cpn_left_nav from "../cpn_left_nav/cpn_left_nav.js";
import { useLocation,useParams } from "react-router-dom";
import ComponentDidMount from '../../scroll_top/win_scroll_top';

const body = document.querySelector("body");

function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}

function check_link_data(temp) {
  if (temp[0]=='d' && temp[1]=='a' && temp[2]=='t' && temp[3]=='a') {
    return true;
  }
  return false;
}

function Cpn_type(get) {
  return (
      <div class={`Infor ${get.product.name}`}>
        <div class="author">
          {validURL(get.product.img_author) == false &&
          check_link_data(get.product.img_author) == false ? (
            <img src={require(`../../../public/${get.product.img_author}`)} />
          ) : (
            <img src={get.product.img_author} alt="" />
          )}

          <div class="infor_author">
            <span>{get.product.name_author}</span>
            <p>
              1m <i class="fa-solid fa-earth-americas icon 3"></i>{" "}
            </p>
          </div>
        </div>
        <div class="info-des">
          <p>{get.product.infor}</p>
          <div class="img-App">
            {validURL(get.product.img1) == false &&
            check_link_data(get.product.img1) == false ? (
              <img src={require(`../../../public/${get.product.img1}`)} />
            ) : (
              <img src={get.product.img1} alt="" />
            )}
          </div>
        </div>
        <hr />
        <div class="decription">
          <div class="emotion">
            <i class="heart fa-heart fa-regular"></i>
            <i class="fa-regular fa-comment"></i>
            <i class="fa-solid fa-share-nodes"></i>
          </div>
          <div class="donate-investment">
            <a href="donate">
              <p class="donate">Donate</p>
            </a>
            <a href="mess" class="investment">
              Investment
            </a>
          </div>
        </div>

        <div class="ctn_comment" style={{ height: "100px" }}>
          <div class="bl__ctn_comment" style={{ width: "90%" }}>
            <img class="avatar" src="" />
            <form action="">
              <input type="text" placeholder="Write a comment ... " />
              <button>
                <i class="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
  );
}


function print_type_product(data_type_product,params_slug) {
  if (data_type_product != null) {
    data_type_product=data_type_product.reverse();
    return (
      <div>
        {data_type_product.map((data_type) => {
            if (data_type.name==params_slug) {
                return (
                    <Cpn_type key={data_type._id} product={data_type} />
                )
            }
        })}
      </div>
    );
  }
}

export default function Cpn_type_product() {
  const [data_product, setData_product] = useState(null);
  const params = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:5000/product`)
            .then((res) => res.data)
            .then((data) => {
                setData_product(data);
            });
    },  [])
  

  return (
    <div>
      <ComponentDidMount />
      <div className="page">
        <Cpn_left_nav />
        <div class="center_page" style={{width: '510px'}}>
          {print_type_product(data_product==null?null:data_product,params.slug)}
        </div>

        <div class="the_right_page">
          <ul class="investor_rankings">
            <p class="ranking"> Investor Rankings </p>
            <li class="Investor 1">
              <img
                src={require("../../../public/content/277822595_675257793692053_156162619594281754_n.jpg")}
                alt=""
              />
              <div class="infor_Investor">
                <span>Trần Hoàng</span>
                <div class="star">
                  <i
                    style={{ color: "rgb(255, 230, 0)" }}
                    class="fa-solid fa-star"
                  ></i>
                  <i
                    style={{ color: "rgb(255, 230, 0)" }}
                    class="fa-solid fa-star"
                  ></i>
                  <i
                    style={{ color: "rgb(255, 230, 0)" }}
                    class="fa-solid fa-star"
                  ></i>
                  <i
                    style={{ color: "rgb(255, 230, 0)" }}
                    class="fa-solid fa-star"
                  ></i>
                  <i
                    style={{ color: "rgb(255, 230, 0)" }}
                    class="fa-solid fa-star"
                  ></i>
                </div>
              </div>
            </li>
            <li class="Investor 2">
              <img
                src={require("../../../public/content/shark-hung-la-ai.jpg")}
                alt=""
              />
              <div class="infor_Investor">
                <span>Phạm Thanh Hưng</span>
                <div class="star">
                  <i class="fa-regular fa-star"></i>
                  <i
                    style={{ color: "rgb(255, 230, 0)" }}
                    class="fa-solid fa-star"
                  ></i>
                  <i
                    style={{ color: "rgb(255, 230, 0)" }}
                    class="fa-solid fa-star"
                  ></i>
                  <i
                    style={{ color: "rgb(255, 230, 0)" }}
                    class="fa-solid fa-star"
                  ></i>
                  <i
                    style={{ color: "rgb(255, 230, 0)" }}
                    class="fa-solid fa-star"
                  ></i>
                </div>
              </div>
            </li>
            <li class="Investor 3">
              <img
                src={require("../../../public/content/ElonMusk-2017-stageshot-9046-1650013535.jpg")}
                alt=""
              />
              <div class="infor_Investor">
                <span>Elon Musk</span>
                <div class="star">
                  <i class="fa-regular fa-star"></i>
                  <i
                    style={{ color: "rgb(255, 230, 0)" }}
                    class="fa-solid fa-star"
                  ></i>
                  <i
                    style={{ color: "rgb(255, 230, 0)" }}
                    class="fa-solid fa-star"
                  ></i>
                  <i
                    style={{ color: "rgb(255, 230, 0)" }}
                    class="fa-solid fa-star"
                  ></i>
                  <i
                    style={{ color: "rgb(255, 230, 0)" }}
                    class="fa-solid fa-star"
                  ></i>
                </div>
              </div>
            </li>
          </ul>

          <ul class="Top_project Top_project_fix">
            <hr />
            <p class="ranking"> Top Project</p>
            <a href="App">
              <li class="Project 1">
                <img
                  src={require("../../../public/content/App/Tích hợp thực tế tăng cường (AR)/Thực tế ảo.jpeg")}
                  alt=""
                />
                <div class="infor_project">
                  <span>Tích hợp thực tế tăng cường (AR)</span>
                </div>
              </li>
            </a>
            <a href="App">
              <li class="Project 2">
                <img
                  src={require("../../../public/content/App/Công nghệ Beacon/Công nghệ Beacon.jpg")}
                  alt=""
                />
                <div class="infor_project">
                  <span>Công nghệ Beacon Sự phát triển</span>
                </div>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
