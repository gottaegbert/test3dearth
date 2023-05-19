import React, { useContext } from "react";
import "./cpn_my_post.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import $, { data, event } from "jquery";
import "animate.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cpn_left_nav from "../../../components/cpn_product/cpn_left_nav/cpn_left_nav";
import AppContext from "../../AppContext";
import swal from 'sweetalert';
import { useNavigate } from "react-router";
import Button from '../../cpn_toast_message/button/Button'
import Toast from '../../cpn_toast_message/toast/Toast'
import ComponentDidMount from "../../scroll_top/win_scroll_top";
import { Cpn_loading } from "../../cpn_loading/cpn_loading";
import Cpn_modal_profile from "../modal_profile/cpn_modal_profile";

function sleep(s) {
  return new Promise(function (resolve) {
    setTimeout(resolve, s);
  });
}

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

export default function Cpn_my_post() {
  const { state_user } = useContext(AppContext);
  const [data_product, setData_product] = useState(null);
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  let toastProperties = null;
  const [ loading , setLoading ] = useState(false);
  
  useEffect(() => {
    axios
      .get(`http://localhost:5000/product`)
      .then((res) => res.data)
      .then((data) => {
        setData_product(data);
      });
  }, []);


  //=============-------------message (post)------------------====================
  
  const showToast = type => {
    switch(type) {
      case 'success_add_post':
        toastProperties = {
          id: list.length+1,
          title: 'NEW NOTIFICATION ! ',
          description: 'Successfully added post',
          backgroundColor: '#5cb85c'
        }
        break;
      case 'success_delete_post':
        toastProperties = {
          id: list.length+1,
          title: 'NEW NOTIFICATION ! ',
          description: 'Successfully delete post',
          backgroundColor: '#5cb85c'
        }
        break;
        
      default:
        toastProperties = [];
    }
    setList([...list, toastProperties]);
  };

  //handle update
 
  function handle_update(event , class_temp) {
    // console.log(class_temp);

    var update1 = document.querySelector(`.${class_temp} .update-drop`);
    console.log(update1);
    if (update1.classList.contains('open_up_del')){
      update1.classList.remove('open_up_del');
    } 
    else {
      update1.classList.add('open_up_del');
    }
  }

  
  function delete_p(event , _id){
    event.preventDefault();
    var ctn__loading__home = document.querySelector(".ctn__loading__body");
    var btn_toast = document.querySelector('.btn_toast');
    sleep() 
      .then(function() {
        axios.delete(`/store/${_id}`);
        btn_toast.click();
        setLoading(true);
        return sleep(1000)
      })
      .then(function() {

        return sleep(1000)
      })
      .then(function() {
        setLoading(false);
        navigate('../product',{replace : true});
      })
  };

  function print_post_user(total_post) {
    if (total_post != null) {
      return (
        <div>
          {total_post.map((post) => {
            if (state_user.user.temp.name_author == post.name_author) {
              // console.log(post._id);
              return (
                <div key={post._id} class={`Infor ${post.slug}`}>
                  <div class="author">
                    <img src={`${post.img_author}`} alt="" />
                    <div class="infor_author">
                      <span>{post.name_author}</span>
                      <p>
                        1m <i class="fa-solid fa-earth-americas icon 3"></i>
                      </p>
                    </div>
                  </div>
                  <div class="info-des">
                    <p>{post.infor}</p>
                    <div class="img-App">
                    {
                      validURL(post.img1)==false && check_link_data(post.img1)==false ? 
                      <img style={{borderRadius : '10px'}} src={require(`../../../public/${post.img1}`)} />
                      :
                      <img style={{borderRadius : '10px'}} src={post.img1} alt=""/>
                    }
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
                      <p class="investment">Investment</p>
                    </div>
                  </div>

                  {/* {{!-- update&dele --}} */}
                  <label for="project-input" class="drop-bars-btn" style={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{display: 'flex', justifyContent : 'flex-end', marginBottom: '20px'}}>
                      <i class="fa-solid fa-bars handle_nav_up_del" onClick={event => handle_update(event , post.slug)} style={{float : 'right'}}></i>
                    </div>
                    <ul className="update-drop" style={{listStyle: "none" }}>
                      <div class="menu_drop">
                        <li>
                          <Link to={`../product/${post._id}/edit`}> Update </Link>
                        </li>
                        <li>
                          <p id="b4" /*class={`${post._id}`}*/ onClick={event => delete_p(event , post._id)}>
                            Delete
                          </p>
                        </li>
                      </div>
                    </ul>
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    hidden="true"
                    class="project__input"
                    id="project-input"
                  />

                  {/* <!--comment--> */}
                  <div class="ctn_comment" style={{ height: "100px" }}>
                    <div class="bl__ctn_comment" style={{ width: "90%" }}>
                      <div class="avatar"></div>
                      <input type="text" placeholder="Viết bình luận ... " />
                    </div>
                  </div>
                  {/* <!--end_comment-->     */}
                </div>
              );
            }
          })}
        </div>
      );
    }
  }

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

  return (
    <div>
      <ComponentDidMount />
      {loading ? <Cpn_loading/> : null}
      <div class="page">
        <Cpn_left_nav />
        <div class="center_page">
          {print_post_user(data_product == null ? null : data_product.reverse())}

        </div>

        <div class="the_right_page">
          <ul class="investor_rankings">
            <p class="ranking"> Fundraiser </p>
            <li class="Investor 1">
              <Cpn_modal_profile
                avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTKVIm_is2xDLHgYn50kQsU3CwN2ciLIsbXQ&usqp=CAU"
                name="Trần Hoàng"
                className="hoang"
                img1="https://ksr-ugc.imgix.net/assets/038/505/949/e72affd4146df8170d19f52e13200900_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1662478083&auto=format&frame=1&q=92&s=a2973d4ad9143e6a15a75415db345fd5"
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
                  src={require("../../../public/content/App/Tích hợp thực tế tăng cường (AR)/Thực tế ảo.jpeg")}
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
                  src={require("../../../public/content/App/Công nghệ Beacon/Công nghệ Beacon.jpg")}
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
      <form method="POST" name="delete_form"></form>
      <Button handleClick={() => showToast('success_delete_post')}></Button>
      <Toast toastlist={list} position="buttom-right" setList={setList} />
      
    </div>
  );
}
