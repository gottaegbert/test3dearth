import React ,{Component, useContext,useEffect,useState} from "react";
import "./cpn_edit.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import $ from "jquery";
import "animate.css";
import { Link } from "react-router-dom";
import AppContext from "../../AppContext";
import axios from "axios";
import { useLocation,useParams } from 'react-router-dom'
import { useNavigate } from "react-router";
import Button from '../../cpn_toast_message/button/Button'
import Toast from '../../cpn_toast_message/toast/Toast'
import ComponentDidMount from '../../scroll_top/win_scroll_top';
import { Cpn_loading } from "../../cpn_loading/cpn_loading";

function sleep(s) {
  return new Promise(function (resolve) {
    setTimeout(resolve, s);
  });
}

export default function Cpn_edit() {
  const { state_user } = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const [productInput, setProductInput] = useState({_id : "",name : "",name_author : `${state_user.user.temp.name_author}`, img_author : `${state_user.user.temp.img_author}` , infor : "", img1 : "" });
  const [list, setList] = useState([]);
  let toastProperties = null;
  const [loading ,setLoading ] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/product`)
      .then((res) => res.data)
      .then((data) => {
        data.map((rs) => {
          if (rs._id==params.id) {
            setProductInput({_id : rs._id,name : rs.name,name_author : `${state_user.user.temp.name_author}`, img_author : `${state_user.user.temp.img_author}` , infor : rs.infor, img1 : rs.img1 });
          }
        })
      });
  }, []);

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
      
      case 'update_delete_post':
        toastProperties = {
          id: list.length+1,
          title: 'NEW NOTIFICATION ! ',
          description: 'Successfully update post',
          backgroundColor: '#5cb85c'
        }
        break;

      default:
        toastProperties = [];
    }
    setList([...list, toastProperties]);
  };


  const onChangeHandle = (e) => {
    setProductInput({...productInput, [e.target.name] : e.target.value});
  }

  const onSubmitHandle = (e) => {
    try {
      e.preventDefault();
      var ctn__loading__home = document.querySelector(".ctn__loading__body");
      var btn_toast = document.querySelector('.btn_toast');

      var _id = productInput._id;
      var name = productInput.name;
      var name_author = productInput.name_author;
      var img_author = productInput.img_author;
      var infor = productInput.infor;
      var img1 = productInput.img1;

      sleep()
        .then(function() {
          axios.put(`/store/${_id}`,{_id,name,name_author,img_author,infor,img1})
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
      
    } catch (error) {
      // setErrorMessage(error.response.data.message);
    }
  }

  return (
    <div
      class="body_create_prj"
      style={{ display: "flex", justifyContent: "center", marginTop: "80px" }}
    >
      <ComponentDidMount />
      {loading ? <Cpn_loading/> : null} 

      <div
        style={{
          padding: "20px",
          backgroundColor: "white",
          width: "40%",
          borderRadius: "20px",
          border: "2px solid rgb(212, 179, 179)",
        }}
      >
        <div
          class="author"
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
            <img src={state_user.user.temp.img_author} alt="" />
            <div class="infor_author">
              <h3>{state_user.user.temp.name_author}</h3>
              <p>
                public <i class="fa-solid fa-earth-americas icon 3"></i>{" "}
              </p>
            </div>
          </div>
        </div>
        
        <form method="POST" onSubmit={onSubmitHandle}>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              margin: "0 30px",
            }}
          >
            <div class="infor">
              <input
                value={productInput.name}
                required="required"
                type="text"
                class="form-control"
                id="name"
                name="name"

                onChange={onChangeHandle}
              />
              <span>Name project</span>
            </div>
            <div hidden="true">
              <label for="name_author" class="form-label">
                Name author
              </label>
              <input
                type="text"
                class="form-control"
                id="name_author"
                value={state_user.user.temp.name_author}
                name="name_author"
              />
            </div>
            <div hidden="true">
              <label for="img_author" class="form-label">
                img_author
              </label>
              <input
                type="text"
                class="form-control"
                id="img_author"
                value={state_user.user.temp.img_author}
                name="img_author"
              />
            </div>
            <div class="infor">
              <input
                value={productInput.infor}
                required="required"
                type="text"
                class="form-control"
                id="infor"
                name="infor"

                onChange={onChangeHandle}
              />
              <span>Description</span>
            </div>
            <div class="infor">
              <input
                value={productInput.img1}
                style={{
                  height: "30px",
                  padding: "40px 0 150px 30px",
                  borderRadius: "5px",
                }}
                required="required"
                type="text"
                class="form-control"
                id="img1"
                name="img1"

                onChange={onChangeHandle}
              />
              <span>Copy link image for here</span>
            </div>
            <button type="submit" class="btn btn-primary">
              Update
            </button>

          </div>
        </form>
      </div>
          <Button handleClick={() => showToast('update_delete_post')}></Button>
          <Toast toastlist={list} position="buttom-right" setList={setList} />
      <div className="ctn__loading__body">
        <div className="ctn__loading">
          <div className="ctn__loading__content"></div>
        </div>
      </div>
    </div>
  );
}
