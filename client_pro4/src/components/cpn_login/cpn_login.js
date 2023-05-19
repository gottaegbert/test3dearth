import React, { useContext, useState } from "react";
import "./login_style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import $ from "jquery";
import "animate.css";
import axios from "axios";
import AppContext from "../AppContext";
import { useNavigate } from "react-router";

export default function Cpn_login() {
  const [checkUser, setCheckUser] = useState(null);

  const { dispatch } = useContext(AppContext);
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  axios
    .get(`http://localhost:5000/login`)
    .then((res) => res.data)
    .then((data) => {
      setCheckUser(data);
    });

  const onChangeHandle = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  function check_user(email, password) {
    let i = 0;
    checkUser.map((acount) => {
      if (acount.email == email && acount.password == password) {
        i++;
      }
    });
    if (i > 0) {
      return true;
    } else {
      return false;
    }
  }

  function get_user(email) {
    let i = 0,
      j = 0;
    checkUser.map((acount) => {
      j++;
      if (acount.email == email) {
        i = j;
      }
    });
    return checkUser[i - 1];
  }

  const onSubmitHandle = async (e) => {
    try {
      let temp;
      e.preventDefault();
      if (check_user(userInput.email, userInput.password) == true) {
        temp = get_user(userInput.email);

        let data = {
          email : temp.email,
          password : temp.password,
          img_author : temp.img_author,
          name_author : temp.name_author,
          _id : temp._id,
        }

        localStorage.setItem('user', JSON.stringify(data));

        dispatch({ type: "CURRENT_USER", payload: { temp } });
        navigate("../homepage");
      } else {
        console.log(2);
      }
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div style={{ marginTop: "1%" }}>
      <div class="main-container">
        <div class="login">
          <div class="login__form-container">
            <form
              method="POST"
              className="login__form"
              onSubmit={onSubmitHandle}
            >
              <p class="login__title">Sign In</p>
              <p class="login__decs">
                Professional Crowdfunding Platform - Let's explore !
              </p>
              {errorMessage && (
                <div className="error-message">Error : {errorMessage} </div>
              )}
              <label for="eamil">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="user@mail.com"
                value={userInput.email}
                onChange={onChangeHandle}
              />
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={userInput.password}
                onChange={onChangeHandle}
              />
              <p class="conditions">
                <a class="forgot" href="#">
                  Forgot password?
                </a>
              </p>
              <button type="submit">Sign In</button>
              <p class="mention-sign-up">
                Need a account?
                <a class="sign-up" href="sign_up" >
                  Sign up
                </a>
              </p>
            </form>
          </div>
          <img
            class="login__banner"
            src={require("../../public/img/imglogin/crownfuding.png")}
          />
        </div>
      </div>
    </div>
  );
}
