import React from "react";
import { Container } from "@material-ui/core";
import "animate.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style_bot_chat.css";
import $ from "jquery";

export default function Cpn_bot_chat() {
  // boxchat
  var body = document.querySelector("body");
  var coll = document.getElementsByClassName("collapsible");
  var messenger = body.querySelector(".messenger");

  function clickMessenger() {
    coll[0].classList.toggle("active");
    //lay elm ke tiep
    var content = coll[0].nextElementSibling;
    if (content.style.maxHeight) {
      Object.assign(coll[0].style, {
        display: "none",
      });
      content.style.maxHeight = null;
    } else {
      console.log(content.scrollHeight);
      Object.assign(coll[0].style, {
        display: "flex",
        justifyContent: "space-between",
      });
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }

  function clickMinimize() {
    var minimize = document.querySelector(".fa-window-minimize");

    minimize.addEventListener("click", function () {
      var content = coll[0].nextElementSibling;
      Object.assign(coll[0].style, {
        display: "none",
      });
      content.style.maxHeight = null;
    });
  }

  function getTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();

    if (hours < 10) {
      hours = "0" + hours;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
  }

  function handle_user() {
    var update1 = document.querySelector(`.user-drop`);

    if (update1.classList.contains("open1")) {
      update1.classList.remove("open1");
    } else {
      update1.classList.add("open1");
    }
  }

  function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
      return "paper";
    } else if (input == "paper") {
      return "scissors";
    } else if (input == "scissors") {
      return "rock";
    }

    // Simple responses
    if (input == "hello" || input == "Hello") {
      return "Hello , May I help you?";
    } else if (input == "goodbye" || input == "Goodbye" || input == "bye") {
      return "Thank you for using PRO4, see you soon!";
    } else if (
      input == "Which team wins the BWD contest?" ||
      input == "which team wins the BWD contest?" ||
      input == "Which team wins the BWD contest" ||
      input == "which team wins the BWD contest"
    ) {
      return "4i";
    } else {
      return "Try asking something else!";
    }
  }

  // tin nhan mac dinh dau tien
  function createMarkup(firstMessage) {
    return {__html: '<p className="botText"><span style="color: black">' + firstMessage + "</span></p>"};
  }  

  function firstBotMessage() {
    let firstMessage = "How's it going?";
    // document.getElementById("botStarterMessage").dangerouslySetInnerHTML=createMarkup( firstMessage);

    let time = getTime();

    $("#chat-timestamp").append(time);
  }

  firstBotMessage();

 // add tin nhan
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p className="botText" style="color : #000;font-family: Helvetica;font-weight: normal;font-size: 16px;text-align: left;"><span style="line-height: 1.5em;display: inline-block;background: #e0e0e0;padding: 10px;border-radius: 8px;border-bottom-left-radius: 2px;max-width: 80%;margin-left: 10px;animation: floatup .5s forwards">' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Xu li Lay text trong input va day len message
function getResponse() {
    //lay text
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "I love Code Palace!";
    }

    let userHtml = '<p className="userText" style="color: white;font-family: Helvetica;font-size: 16px;font-weight: normal;text-align: right;clear: both;"><span style="line-height: 1.5em;display: inline-block;background: #5ca6fa;padding: 10px;border-radius: 8px;border-bottom-right-radius: 2px;max-width: 80%;margin-right: 10px;animation: floatup .5s forwards">' + userText + '</span></p>';

    // tra ve focus ban dau
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    //lan ve UI chinh
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// xu li  gui tin nhan bot
function buttonSendText(sampleText) {
    let userHtml = '<p className="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);

    //scroll den view chinh
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    setTimeout(() => {
        getHardResponse(sampleText);
    }, 1000)
}


function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Heart clicked!");
}

// xu li su kien enter va day tin nhan
$("#textInput").keypress(function (e) {
    console.log('hi');
    if (e.which == 13) {
        getResponse();
    }
});
  return (
    <div>
      <div className="messenger" onClick={clickMessenger}>
        <i className="fa-brands fa-facebook-messenger"></i>
      </div>

      <div className="chat-bar-collapsible">
        <button id="chat-button" type="button" className="collapsible">
          <i
            id="chat-icon"
            style={{ color: "#fff" }}
            className="fa fa-fw fa-comments-o"
          ></i>
          Chat with PRO4!
          <i
            className="fa fa-window-minimize"
            aria-hidden="true"
            onClick={clickMinimize}
          ></i>
        </button>
        <div className="content">
          <div className="full-chat-block">
            {/* <!-- Message Container --> */}
            <div className="outer-container">
              <div className="chat-container">
                {/* <!-- Messages --> */}
                <div id="chatbox">
                  <h5 id="chat-timestamp"></h5>
                  <p id="botStarterMessage" className="botText">
                    <span>Loading...</span>
                  </p>
                </div>

                {/* <!-- User input box --> */}
                <div className="chat-bar-input-block">
                  <div id="userInput">
                    <input
                      id="textInput"
                      className="input-box"
                      type="text"
                      name="msg"
                      placeholder="Tap 'Enter' to send a message"
                    />
                    <p></p>
                  </div>

                  <div className="chat-bar-icons">
                    <i
                      id="chat-icon"
                      style={{ color: "#333" }}
                      className="fa-solid fa-paper-plane"
                      onClick={sendButton}
                    ></i>
                  </div>
                </div>

                <div id="chat-bar-bottom">
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
