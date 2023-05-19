import React from "react";
import "./style_product.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import $, { data } from "jquery";
import "animate.css";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import AppContext from "../AppContext";

import Cpn_left_nav from "./cpn_left_nav/cpn_left_nav";
import ComponentDidMount from "../scroll_top/win_scroll_top";

import Cpn_modal_profile from "./modal_profile/cpn_modal_profile";

const body = document.querySelector("body");
function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}

function check_link_data(temp) {
  if (temp[0] == "d" && temp[1] == "a" && temp[2] == "t" && temp[3] == "a") {
    return true;
  }
  return false;
}

function Ctn_product_get_data(get) {
  const [tym, setTym] = useState(0);
  const [comment, setComment] = useState([]);
  const [statusTym, setStatusTym] = useState(false);
  let dataInteractive = [];
  // const interactive = [
  //   {
  //     id_product: "628e11a28a591f811058e87b",
  //     tym: 10,
  //     comment: [
  //       {
  //         img: "content/Ecommerce/author/download.png",
  //         content: "Bai viet hay qua :))",
  //       },
  //     ],
  //   },
  // ];
  // localStorage.setItem("interactive", JSON.stringify(interactive));
  useEffect(() => {
    const response = localStorage.getItem("interactive");
    dataInteractive = JSON.parse(response) || [];
    dataInteractive.map((item, key) => {
      if (item.id_product == get.product._id) {
        setTym(item.tym);
        setComment(item.comment);
        setStatusTym(item.tymActive);
      }
    });
  }, []);
  function handle_heart(event, class1) {
    var heart = document.querySelector(`.${class1} .heart`);
    // if (heart.classList.contains("fa-regular")) {
    if (!statusTym) {
      setStatusTym(true);
      const newTym = tym + 1;
      setTym(newTym);
      // heart.classList.remove("fa-regular");
      // heart.classList.add("fa-solid");
      // Object.assign(heart.style, {
      //   color: "red",
      // });
      let isData = false;
      const response = localStorage.getItem("interactive");
      dataInteractive = JSON.parse(response) || [];
      dataInteractive.map((item, key) => {
        if (item.id_product == get.product._id) {
          isData = true;
          dataInteractive[key].tym = newTym;
          dataInteractive[key].tymActive = true;
          window.localStorage.setItem(
            "interactive",
            JSON.stringify(dataInteractive)
          );
        }
      });
      if (!isData) {
        const interactive = [
          ...dataInteractive,
          {
            id_product: get.product._id,
            tym: newTym,
            tymActive: true,
            comment: [],
          },
        ];
        window.localStorage.setItem("interactive", JSON.stringify(interactive));
      }
    } else {
      setStatusTym(false);
      const newTym = tym - 1;
      setTym(newTym);
      const response = localStorage.getItem("interactive");
      dataInteractive = JSON.parse(response) || [];
      dataInteractive.map((item, key) => {
        if (item.id_product == get.product._id) {
          dataInteractive[key].tym = newTym;
          dataInteractive[key].tymActive = false;
          window.localStorage.setItem(
            "interactive",
            JSON.stringify(dataInteractive)
          );
        }
      });
    }
  }

  const str = get.product.infor;
  const strcut = str.substr(0, 200) + "...";
  const [isShowreadmore, setisShowreadmore] = useState(false);

  const toogle = () => {
    setisShowreadmore((prev) => !prev);
  };

  function click_cmt(event, class_temp) {
    var ctn_comment = document.querySelector(`.${class_temp} .ctn_comment`);
    if (ctn_comment.classList.contains("open_cmt")) {
      ctn_comment.classList.remove("open_cmt");
    } else {
      ctn_comment.classList.add("open_cmt");
    }
  }

  const post_comment = (e) => {
    e.preventDefault();
    let isData = false;
    let input = document.querySelector(`.${get.product.slug} #input_comment`);
    let valueInput = input.value.trim();
    if (valueInput) {
      // get img author
      const dataUser = JSON.parse(localStorage.getItem("user"));
      const imgAuthor = dataUser.img_author;
      console.log(imgAuthor);
      const inputComment = {
        img: imgAuthor,
        content: valueInput,
      };
      const newComment = [inputComment, ...comment];
      setComment(newComment);
      input.value = "";

      // save to localStorage
      const response = localStorage.getItem("interactive");
      dataInteractive = JSON.parse(response) || [];
      dataInteractive.map((item, key) => {
        if (item.id_product == get.product._id) {
          isData = true;
          dataInteractive[key].comment = newComment;
          window.localStorage.setItem(
            "interactive",
            JSON.stringify(dataInteractive)
          );
        }
      });
      if (!isData) {
        const interactive = [
          ...dataInteractive,
          {
            id_product: get.product._id,
            tym: tym,
            comment: [
              {
                img: imgAuthor,
                content: valueInput,
              },
            ],
          },
        ];
        window.localStorage.setItem("interactive", JSON.stringify(interactive));
      }
    } else {
      input.value = "";
    }
  };
  return (
    <div class={`Infor ${get.product.slug}`}>
      <div class="author">
        {validURL(get.product.img_author) == false &&
        check_link_data(get.product.img_author) == false ? (
          <img src={require(`../../public/${get.product.img_author}`)} />
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
        <p>
          {isShowreadmore ? str : strcut}
          <span onClick={toogle}>{isShowreadmore ? "" : "Read more"}</span>{" "}
        </p>
        <div class="img-App">
          {validURL(get.product.img1) == false &&
          check_link_data(get.product.img1) == false ? (
            <img
              style={{ borderRadius: "10px" }}
              src={require(`../../public/${get.product.img1}`)}
            />
          ) : (
            <img
              style={{ borderRadius: "10px" }}
              src={get.product.img1}
              alt=""
            />
          )}
        </div>
      </div>
      <hr style={{ marginTop: "10px" }} />
      <div class="decription">
        <div class="emotion">
          {tym || 0}
          <i
            // class="heart fa-heart fa-regular"
            className={`heart fa-heart ${
              statusTym ? "fa-solid active" : "fa-regular"
            }`}
            onClick={(event) => handle_heart(event, get.product.slug)}
          ></i>
          {comment.length}
          <i
            class="fa-regular fa-comment"
            onClick={(event) => click_cmt(event, get.product.slug)}
          ></i>
          {Math.floor(Math.random() * 40) + 1}
          <i class="fa-solid fa-share-nodes"></i>
        </div>
        <div class="donate-investment">
          {get.product.slug == "" ? (
            <div>
              <p class="donate">Access</p>
              <div className="page_product_not_data">
                <hr />
              </div>
            </div>
          ) : (
            <Link to={`../create_project/${get.product.slug}`}>
              <p class="donate">Access</p>
            </Link>
          )}
          <Link to={"../Mess"} class="investment">
            Contact
          </Link>
        </div>
      </div>
      <div class="ctn_comment">
        <div class="bl__ctn_comment" style={{ width: "90%" }}>
          <img src={get.state_user.user.temp.img_author} class="avatar" />
          <form action="" onSubmit={post_comment}>
            <input
              type="text"
              id="input_comment"
              placeholder="Write a comment ... "
            />
            <button>
              <i class="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
        <div className="comment">
          <ul className="list_comment" style={{ marginTop: "20px" }}>
            {comment.map((item, index) => (
              <li key={index} className="comment-item">
                <img src={item.img} alt="" className="" />{" "}
                <span>{item.content}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function print_Ctn_product_get_data(data_product, state_user) {
  if (data_product !== null) {
    data_product = data_product.reverse();
    return (
      <div>
        {data_product.map((temp) => (
          <Ctn_product_get_data
            key={temp._id}
            product={temp}
            state_user={state_user}
          />
        ))}
      </div>
    );
  }
}

export default function Cpn_product() {
  const [data_product, setData_product] = useState(null);
  const navigate = useNavigate();
  const { state_user } = useContext(AppContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/product`)
      .then((res) => res.data)
      .then((data) => {
        setData_product(data);
      });
  }, []);

  function profile_hoang() {
    let cpn_modal_profile = document.querySelector(".cpn_modal_profile.hoang");
    Object.assign(cpn_modal_profile.style, {
      display: "flex",
    });
  }
  function profile_hung() {
    let cpn_modal_profile = document.querySelector(".cpn_modal_profile.hung");
    Object.assign(cpn_modal_profile.style, {
      display: "flex",
    });
  }

  // function trans_profile_user(e) {
  //   e.preventDefault();
  //   console.log(123);
  //   navigate(`../profile_user/${slug}`)
  // }

  return (
    <div>
      <ComponentDidMount />
      <div class="page">
        <Cpn_left_nav />

        <div class="center_page">
          {print_Ctn_product_get_data(data_product, state_user)}
          <div class="Infor AI">
            <div class="author">
              <img
                src={require("../../public/content/AI/author/242671915_948353739079553_3477742332105636451_n.jpg")}
              />
              <div class="infor_author">
                <span>Trần Văn Khang</span>
                <p>
                  1h <i class="fa-solid fa-earth-americas icon 3"></i>{" "}
                </p>
              </div>
            </div>
            <div class="info-des">
              <p>Dự án được thực hiện bởi team Pro4! </p>
              <p>Giới thiệu sơ lược:</p>
              <p>
                Smart Edge là giải pháp phân tích video đa vật thể, áp dụng mô
                hình học sâu để biến đổi các camera và các thiết bị kiểm soát
                quyền truy cập thông thường thành những hệ thống thông minh. Sản
                phẩm cho phép chuyển đổi hình ảnh thành thông tin chi tiết hữu
                ích để tạo ra các giá trị kinh doanh cho doanh nghiệp. Đặc biệt,
                áp dụng mô hình học sâu, sản phẩm có thể nhận diện khuôn mặt ổn
                định, kể cả khi người dùng đang sử dụng khẩu trang. Ngoài mục
                đích thương mại, với dòng sản phẩm này, VinAI hi vọng có thể
                chung tay bảo vệ sức khỏe cộng đồng trong bối cảnh đại dịch còn
                đang diễn biến phức tạp.
              </p>
              <div class="img">
                <div class="img1">
                  <img
                    class="item1"
                    src={require("../../public/content/AI/Smart Edge/Smart Edge.png")}
                    alt=""
                  />
                  <img
                    class="item2"
                    src={require("../../public/content/AI/Smart Mobility/Hình/Smart Mobility1.jpg")}
                    alt=""
                  />
                </div>
                <img
                  class="item3"
                  src={require("../../public/content/AI/Smart Mobility/Hình/Smart Mobility2.jpg")}
                  alt=""
                />
              </div>
            </div>
            <hr />
            <div class="decription">
              <div class="emotion">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-comment comment"></i>
                <i class="fa-solid fa-share-nodes"></i>
              </div>
              <div class="donate-investment">
                <Link to="../donate">
                  <p class="donate">Access</p>
                </Link>
                <p class="investment">Contact</p>
              </div>
            </div>

            <div class="ctn_comment" style={{ height: "100px" }}>
              <div class="bl__ctn_comment" style={{ width: "90%" }}>
                <img class="avatar" src="{{users.img_author}}"></img>
                <input type="text" placeholder="Viết bình luận ... " />
              </div>
            </div>
          </div>
          <div class="Infor Game">
            <div class="author">
              <img
                src={require("../../public/content/Game/author/14720536_1797565987159824_7956249866022643798_n_njek.jpg")}
                alt=""
              />
              <div class="infor_author">
                <span>Trực tiếp game</span>
                <p>
                  5h <i class="fa-solid fa-earth-americas icon 3"></i>{" "}
                </p>
              </div>
            </div>
            <div class="info-des">
              <p>Dự án được thực hiện bởi DUT team </p>
              <p>
                Thần Trùng (The Death) là dự án game kinh dị do DUT Studio (chỉ
                gồm 3 thành viên) sản xuất, lấy bối cảnh 100% tại Việt Nam.
                Fanpage studio:{" "}
                <a href="https://www.facebook.com/dutstudiovn">
                  {" "}
                  https://www.facebook.com/dutstudiovn{" "}
                </a>
                Trailer game có những hình ảnh rùng rợn, khán giả cân nhắc trước
                khi xem. Các nhân vật, tình huống và sự kiện trong video này đều
                là sản phẩm hư cấu. Mọi sự trùng hợp nếu có chỉ là ngẫu nhiên.
                Gameplay, nhân vật và bối cảnh trong trailer có thể sẽ được sửa
                đổi trong tương lai. Trong trailer có sử dụng một số hình ảnh
                tranh cổ động phòng chống dịch COVID - 19 (Bức tranh với thông
                điệp “Ở nhà là yêu nước” của họa sỹ Lê Đức Hiệp; tranh của họa
                sĩ Lưu Yên Thế) cùng với bài hát nổi tiếng "Đồi Thông Hai Mộ"
                của nhạc sĩ Hồng Vân và trình bày bởi ca sĩ Hoàng Oanh.
              </p>
              <div class="video-game">
                <video style={{ width: "100%" }} controls>
                  <source
                    src={require("../../public/content/Game/Thần trùng/than-trung-gameplay-trailer-game-kinh-di-viet-nam-vietnam-horror-game-dut-studio-2021.mp4")}
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            <hr />
            <div class="decription">
              <div class="emotion">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-comment comment1" onClick></i>
                <i class="fa-solid fa-share-nodes"></i>
              </div>
              <div class="donate-investment">
                <Link to="../donate">
                  {" "}
                  <p class="donate">Access</p>{" "}
                </Link>
                <p class="investment">Contact</p>
              </div>
            </div>
            <div class="ctn_comment_1" style={{ height: "100px" }}>
              <div class="bl__ctn_comment_1" style={{ width: "90%" }}>
                <img class="avatar" src="{{users.img_author}}"></img>
                <input type="text" placeholder="Viết bình luận ... " />
              </div>
            </div>
          </div>
          <div class="Infor Costume">
            <div class="author">
              <img
                src={require("../../public/content/Costume/author/20170417234658-thoi-trang-xuan-he-2017.jpg")}
                alt=""
              />
              <div class="infor_author">
                <span>Xuân Lê</span>
                <p>
                  6h <i class="fa-solid fa-earth-americas icon 3"></i>{" "}
                </p>
              </div>
            </div>
            <div class="info-des">
              <p>
                Trong vài năm trở lại đây, thời trang Việt đã có sự dịch chuyển
                đến với con đường bền vững. Các nhà thiết kế đã và đang quan tâm
                nhiều hơn đến các giải pháp giúp cho nền thời trang trở nên thân
                thiện hơn với môi trường thông qua nhiều hoạt động khác nhau, từ
                tận dụng chất liệu các loại chất liệu cũ đến sử dụng các phương
                pháp thiết kế mới, hay quan tâm đến công nghệ… nhằm biến cho sản
                phẩm thời trang vừa thân thiện với môi trường vừa gần gũi với
                chọn lựa mua sắm của khách hàng. Trên hành trình xanh hơn mỗi
                ngày đó, sự sáng tạo từ các các sinh viên thời trang cho đến các
                nhà thiết kế Việt thành danh, đã tạo nên những tác phẩm thú vị.
                Họ đã biến rác thải, vải thừa hay quần áo cũ thành những thiết
                kế đầy lãng mạn và mộng mơ. Nhà thiết kế Chung Thanh Phong cũng
                tạo nên trang phục cũng tạo nên những mẫu đầm dạ hội với bao ni
                lông và vỏ chai nhựa. Không dừng lại ở đó, thương hiệu More Than
                Blue của Christy tận dụng từng chút vải thừa để ra mắt bộ sưu
                tập Chắp vá sau những tháng giãn cách xã hội. Ấn tượng hơn với
                SAND khi biết được rằng SAND Thu Đông đã dùng những mét vải cuối
                cùng của kho lưu trữ hay bộ sưu tập Reborn của NTK Xuân Lê với
                sự kêu gọi đóng góp trang phục cũ từ cộng đồng. Cùng
                Style-Republik điểm qua những nét ấn tượng từ làn sóng
                “upcycling” của thời trang Việt.
              </p>
              <div class="img-Costume">
                <img
                  class="img_item1"
                  src={require("../../public/content/Costume/Upcycling/ntk-xuan-le-style-reborn-khanh-linh-deponline-01-20210410.jpeg")}
                  alt=""
                />
                <div class="img-item">
                  <img
                    class="img_item2"
                    src={require("../../public/content/Costume/Upcycling/ntk-xuan-le-style-reborn-khanh-linh-deponline-02-20210410.jpeg")}
                    alt=""
                  />
                  <img
                    class="img_item3"
                    src={require("../../public/content/Costume/Upcycling/ntk-xuan-le-style-reborn-khanh-linh-deponline-05-20210410.jpeg")}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <hr />
            <div class="decription">
              <div class="emotion">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-comment comment2" onClick></i>
                <i class="fa-solid fa-share-nodes"></i>
              </div>
              <div class="donate-investment">
                <Link to="../donate">
                  {" "}
                  <p class="donate">Access</p>{" "}
                </Link>
                <p class="investment">Contact</p>
              </div>
            </div>

            <div
              class="ctn_comment_2"
              style={{ height: "100px", position: "relative" }}
            >
              <div class="bl__ctn_comment_2" style={{ width: "90%" }}>
                <img class="avatar" src="{{users.img_author}}"></img>
                <input type="text" placeholder="Viết bình luận ... " />
              </div>
            </div>
          </div>
        </div>
        <div class="the_right_page">
          <ul class="investor_rankings">
            <p class="ranking"> Fundraiser </p>
            <li class="Investor 1">
              <Cpn_modal_profile
                avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTKVIm_is2xDLHgYn50kQsU3CwN2ciLIsbXQ&usqp=CAU"
                name="Trần Hoàng"
                className="hoang"
                img1="https://ksr-ugc.imgix.net/assets/038/426/574/03ec7008231ebcfc165dc077750354af_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1661814027&auto=format&frame=1&q=92&s=3a58a8b529d187eb070669f1fc0c54e2"
                img2="https://ksr-ugc.imgix.net/assets/038/236/299/ccb0487e6cfb1621f85e0576030081d1_original.png?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1660153901&auto=format&frame=1&q=92&s=6d80a2f06d0adb1ab2ec0493ffca53da"
                img3="https://ksr-ugc.imgix.net/assets/038/294/590/09ad09509b996f0785c0ef53afc4db76_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1660660067&auto=format&frame=1&q=92&s=b8a636b8ccdc2dba78858e8894433a9b"
              />
              <div
                className="profile_tran_hoang"
                style={{ boxShadow: "0 3px 0px 0px #9e9e9e91" }}
              >
                <div onClick={profile_hoang}>
                  <i
                    class="fa-solid fa-id-badge"
                    style={{ padding: "10px", fontSize: "30px" }}
                  ></i>
                </div>
                <i
                  class="fa-solid fa-message"
                  style={{ padding: "10px", fontSize: "30px" }}
                ></i>
              </div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTKVIm_is2xDLHgYn50kQsU3CwN2ciLIsbXQ&usqp=CAU"
                alt=""
              />
              <div class="infor_Investor">
                <span style={{ fontWeight: "bold" }}>Trần Hoàng</span>
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
              {/* modal quynh */}
              <Cpn_modal_profile
                avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQShaaO1hb0zEuFP4WAxq87I5CyqD6_jX1zaw&usqp=CAU"
                name="Quỳnh"
                className="quynh"
                img1="https://cdn.pixabay.com/photo/2019/06/30/21/25/smart-4308821__340.jpg"
                img2="https://cdn.pixabay.com/photo/2017/07/12/08/35/network-2496193__340.jpg"
                img3="https://ksr-ugc.imgix.net/assets/038/352/394/238056fb2ce1fb374adad01269859798_original.gif?ixlib=rb-4.0.2&w=680&fit=max&v=1661153136&gif-q=50&q=92&s=5ae2c1d4cb05ad0262c107078c9dac15"
              />
              <Cpn_modal_profile
                avatar="https://scr.vn/wp-content/uploads/2020/08/H%C3%ACnh-avt-Anime.jpg"
                name="Tịnh"
                className="hung"
                img1="https://ksr-ugc.imgix.net/assets/038/433/438/08ca844bf63e228d56ea6922f4076c1a_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1661865956&auto=format&frame=1&q=92&s=27966c84fc27bb395e0e35b10462368f"
                img2="https://ksr-ugc.imgix.net/assets/037/931/016/8e3f471e0bb2e072869f8a8bfeae0bc3_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1657627738&auto=format&frame=1&q=92&s=acec5278729ed9e09addca931f1a97da"
                img3="https://ksr-ugc.imgix.net/assets/038/409/741/5d01ae313806be5a14505ea5e0661695_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1661640408&auto=format&frame=1&q=92&s=0ef08b81062e7ca0fc71bf02a8906f3c"
              />
              <div
                className="profile_hung"
                style={{ boxShadow: "0 3px 0px 0px #9e9e9e91" }}
              >
                <div onClick={profile_hung}>
                  <i
                    class="fa-solid fa-id-badge"
                    style={{ padding: "10px", fontSize: "30px" }}
                  ></i>
                </div>
                <i
                  class="fa-solid fa-message"
                  style={{ padding: "10px", fontSize: "30px" }}
                ></i>
              </div>

              <img
                src="https://scr.vn/wp-content/uploads/2020/08/H%C3%ACnh-avt-Anime.jpg"
                alt=""
              />

              <div class="infor_Investor">
                <span style={{ fontWeight: "bold" }}>Duy Tịnh</span>
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
            <li class="Investor 3">
              <div
                className="profile_elon_musk"
                style={{ boxShadow: "0 3px 0px 0px #9e9e9e91" }}
              >
                <i
                  class="fa-solid fa-id-badge"
                  style={{ padding: "10px", fontSize: "30px" }}
                ></i>
                <i
                  class="fa-solid fa-message"
                  style={{ padding: "10px", fontSize: "30px" }}
                ></i>
              </div>

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgZU2l7s2qBB8wFeboN-0Di9ps9P-7LzOcsg&usqp=CAU"
                alt=""
              />
              <div class="infor_Investor">
                <span style={{ fontWeight: "bold" }}>Elon Musk</span>
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
                  src={require("../../public/content/App/Tích hợp thực tế tăng cường (AR)/Thực tế ảo.jpeg")}
                  alt=""
                />
                <div class="infor_project">
                  <span style={{ fontWeight: "bold" }}>
                    Tích hợp thực tế tăng cường (AR)
                  </span>
                </div>
              </li>
            </a>
            <a href="App">
              <li class="Project 2">
                <img
                  src={require("../../public/content/App/Công nghệ Beacon/Công nghệ Beacon.jpg")}
                  alt=""
                />
                <div class="infor_project">
                  <span style={{ fontWeight: "bold" }}>
                    Công nghệ Beacon Sự phát triển
                  </span>
                </div>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
