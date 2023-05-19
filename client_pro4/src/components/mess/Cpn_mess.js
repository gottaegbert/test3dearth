import React, { useContext, useEffect, useRef, useState } from "react";
import "./Cpn_mess.css";

import AppContext from "../AppContext";
import Conversation from "../conversations/Conversations";
import Messa from "../messa/messa";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ChatOnline from "../chatOnline/ChatOnline";
import axios from "axios";
import { io } from "socket.io-client";
import Picker from "emoji-picker-react";

export default function CpnMess() {
  const { state_user } = useContext(AppContext);
  const [conversation, setconversation] = useState([]);
  const [currentchat, setcurrentchat] = useState(null);
  const [messages, setmessages] = useState([]);
  const [newmessage, setnewmessage] = useState("");
  const [arrivalmessage, setArrivalmessage] = useState(null);
  const [onlineUsers, setOnlineUser] = useState([]);
  const [voice, setvoice] = useState(false);
  const socket = useRef();
  const scrollRef = useRef();
  const [showPicker, setShowPicker] = useState(false);
  const [imgUser, setImgUser] = useState("");
  const onEmojiClick = (event, emojiObject) => {
    setnewmessage((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalmessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
    const dataUser = JSON.parse(window.localStorage.getItem("user")) || "";
    if (dataUser) {
      setImgUser(dataUser.img_author);
    }
  }, []);

  useEffect(() => {
    arrivalmessage &&
      currentchat?.members.includes(arrivalmessage.sender) &&
      setmessages((prev) => [...prev, arrivalmessage]);
  }, [arrivalmessage, currentchat]);

  useEffect(() => {
    socket.current.emit("addUser", state_user.user.temp._id);
    socket.current.on("getUsers", (users) => {
      setOnlineUser(users);
    });
  }, [state_user.user.temp]);

  useEffect(() => {
    const getConversation = async () => {
      try {
        const res = await axios.get(
          "/conversation/" + state_user.user.temp._id
        );
        setconversation(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversation();
  }, [state_user.user.temp._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("/message/" + currentchat?._id);
        setmessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentchat]);

  useEffect(() => {
    const getvoice = () => {
      if (voice) {
        window.SpeechRecognition =
          window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new window.SpeechRecognition();

        recognition.interimResults = true;

        recognition.addEventListener("result", (e) => {
          const text = Array.from(e.results)
            .map((result) => result[0])
            .map((result) => result.transcript)
            .join("");
          setnewmessage(text);
        });
        recognition.start();
      }
    };
    getvoice();
  }, [voice]);

  console.log(voice);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: state_user.user.temp._id,
      text: newmessage,
      conversationId: currentchat._id,
    };

    const receiverId = currentchat.members.find(
      (member) => member !== state_user.user.temp._id
    );

    socket.current.emit("sendMessage", {
      senderId: state_user.user.temp._id,
      receiverId,
      text: newmessage,
    });

    try {
      const res = await axios.post("/message", message);
      setmessages([...messages, res.data]);
      setnewmessage("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handlevoice = () => {
    setvoice(!voice);
  };

  return (
    <div className="mess">
      <div className="chatMenu">
        <div className="chatMenuWrapper" style={{ overflow: "hidden" }}>
          {/* <div className="taskbar">
            <div className="taskbar_wrap_img">
              <img src={imgUser} alt="" />
            </div>
            <div className="taskbar_wrap_icon">
              <i class="fa-solid fa-circle-radiation"></i>
              <i class="fa-solid fa-message"></i>
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
          </div> */}
          <div className="search_chat">
            <i className="fa-solid fa-magnifying-glass icon"></i>
            <input
              placeholder="search for friend..."
              className="chatMenuInput"
            ></input>
          </div>
          {conversation.map((c) => (
            <div onClick={() => setcurrentchat(c)}>
              <Conversation
                conversation={c}
                currentUser={state_user.user.temp}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          {currentchat ? (
            <>
              <div className="chatBoxTop">
                {messages.map((m) => (
                  <div ref={scrollRef}>
                    <Messa
                      message={m}
                      own={m.sender === state_user.user.temp._id}
                    />
                  </div>
                ))}
              </div>
              <div className="chatBoxBottom">
                <i
                  class="fa-solid fa-face-grin"
                  onClick={() => setShowPicker((val) => !val)}
                ></i>
                {showPicker && (
                  <Picker
                    pickerStyle={{
                      width: "25%",
                      position: "fixed",
                      top: "45%",
                    }}
                    onEmojiClick={onEmojiClick}
                  />
                )}
                <i class="fa-solid fa-microphone" onClick={handlevoice}></i>
                <i class="fa-solid fa-image"></i>
                <input
                  className="chatMessageInput"
                  placeholder="write something..."
                  onChange={(e) => setnewmessage(e.target.value)}
                  value={newmessage}
                ></input>
                <i
                  className="fa-solid fa-paper-plane chatSubmitButton"
                  onClick={handleSubmit}
                ></i>
                {/* <button className="chatSubmitButton" onClick={handleSubmit}>Send</button> */}
              </div>
            </>
          ) : (
            <span className="noConversationtext">
              Open a conversation to start a chat{" "}
            </span>
          )}
        </div>
      </div>
      <div className="chatOnline">
        <div className="chatOnlineWrapper" style={{ overflow: "hidden" }}>
          <ChatOnline
            onlineUsers={onlineUsers}
            currentId={state_user.user.temp._id}
            setcurrentchat={setcurrentchat}
          />
        </div>
      </div>
    </div>
  );
}
