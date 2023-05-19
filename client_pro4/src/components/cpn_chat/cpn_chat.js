// import React , { useContext } from "react";
// import "./cpn_chat.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import $ from "jquery";
// import "animate.css";

// import AppContext from "../AppContext";

// function sleep(s) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, s);
//   });
// }

// export default function () {
//   const {state_user} = useContext(AppContext);

//   function close_user() {
//     var leftSide = document.querySelector(".leftSide");
//     var rightSide = document.querySelector(".rightSide");
//     var rightSide_button = document.querySelector(".rightSide .header button");
//     var nav_icons = document.querySelector(".nav_icons");
//     sleep(0)
//       .then(function () {
//         Object.assign(leftSide.style, {
//           animationName: "close_leftSide",
//           animationDuration: "2s",
//           animationDirection: "normal",
//         });
//         Object.assign(rightSide.style, {
//           animationName: "open_rightUser",
//           animationDuration: "2s",
//           animationDirection: "normal",
//         });
//         Object.assign(nav_icons.style, {
//           display: "none",
//         });
//         return sleep(1800);
//       })
//       .then(function () {
//         Object.assign(rightSide_button.style, {
//           display: "block",
//         });
//         Object.assign(leftSide.style, {
//           display: "none",
//         });
//         Object.assign(rightSide.style, {
//           width: "100%",
//         });
//         Object.assign(leftSide.style, {
//           width: "0%",
//         });
//       });
//   }

//   function open_user() {
//     var close_open_user = document.querySelector(".close_open_user");
//     var leftSide = document.querySelector(".leftSide");
//     var rightSide = document.querySelector(".rightSide");
//     var rightSide_button = document.querySelector(".rightSide .header button");
//     var nav_icons = document.querySelector(".nav_icons");
//     sleep(0)
//       .then(function () {
//         Object.assign(rightSide_button.style, {
//           display: "none",
//         });
//         Object.assign(leftSide.style, {
//           display: "block",
//         });
//         Object.assign(leftSide.style, {
//           animationName: "open_leftSide",
//           animationDuration: "2s",
//           animationDirection: "normal",
//         });
//         Object.assign(rightSide.style, {
//           animationName: "close_rightUser",
//           animationDuration: "2s",
//           animationDirection: "normal",
//         });

//         return sleep(1800);
//       })
//       .then(function () {
//         Object.assign(nav_icons.style, {
//           display: "flex",
//         });
//         Object.assign(rightSide.style, {
//           width: "70%",
//         });
//         Object.assign(leftSide.style, {
//           width: "30%",
//         });
//       });
//   }

//   return (
//     <div>
//       <div class="main_page">
//         <div class="container">
//           <div class="leftSide">
//             {/* {{!-- header --}} */}
//             <div class="header">
//               <div class="userimg">
//                 <img src={state_user.user.temp.img_author} alt="" class="cover" />
//               </div>
//               <ul class="nav_icons">
//                 <li>
//                   <i class="fa-solid fa-compress" onClick={close_user}></i>
//                 </li>
//                 <li>
//                   <i class="fa-solid fa-message"></i>
//                 </li>
//                 <li>
//                   <i class="fa-solid fa-bars-staggered"></i>
//                 </li>
//               </ul>
//             </div>
//             {/* {{!-- search  --}} */}
//             <div class="search_chat">
//               <div>
//                 <input type="text" placeholder="Search or start new chat" />
//                 <ion-icon name="search-outline"></ion-icon>
//               </div>
//             </div>
//             {/* {{!-- chat list  --}} */}
//             <div class="chatlist">
//               <div class="block active">
//                 <div class="imgbx">
//                   <img
//                     src="https://nghesiviet.vn/storage/files/7/phamthanhhung/tieu-su-shark-hung3-768x768.jpg"
//                     alt=""
//                     class="cover"
//                   />
//                 </div>
//                 <div class="details">
//                   <div class="listHead">
//                     <h5> Phạm Thanh Hưng </h5>
//                     <p class="time">4:23</p>
//                   </div>
//                   <div class="message_p">
//                     <p> ok, i will get invest $3000 </p>
//                   </div>
//                 </div>
//               </div>
//               <div class="block active">
//                 <div class="imgbx">
//                   <img
//                     src="https://aphoto.vn/wp-content/uploads/2019/02/hinh8-19.jpg"
//                     alt=""
//                     class="cover"
//                   />
//                 </div>
//                 <div class="details">
//                   <div class="listHead">
//                     <h5> Trường Giang </h5>
//                     <p class="time">10:56</p>
//                   </div>
//                   <div class="message_p">
//                     <p>hello, how to investment for you? </p>
//                   </div>
//                 </div>
//               </div>
//               <div class="block unread">
//                 <div class="imgbx">
//                   <img
//                     src="https://nld.mediacdn.vn/thumb_w/540/2020/5/29/doi-hoa-tim-8-15907313395592061395682.png"
//                     alt=""
//                     class="cover"
//                   />
//                 </div>
//                 <div class="details">
//                   <div class="listHead">
//                     <h5> Trần Hoàng </h5>
//                     <p class="time">11:00</p>
//                   </div>
//                   <div class="message_p">
//                     <p> Hi, Can i invest for you $50000 </p>
//                     <b>2</b>
//                   </div>
//                 </div>
//               </div>

//               <div class="block active">
//                 <div class="imgbx">
//                   <img
//                     src="https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg"
//                     alt=""
//                     class="cover"
//                   />
//                 </div>
//                 <div class="details">
//                   <div class="listHead">
//                     <h5> Đức Hiếu </h5>
//                     <p class="time">10:56</p>
//                   </div>
//                   <div class="message_p">
//                     <p>hello, how to investment for you? </p>
//                   </div>
//                 </div>
//               </div>
//               <div class="block active">
//                 <div class="imgbx">
//                   <img
//                     src="https://baoquocte.vn/stores/news_dataimages/dieulinh/012020/29/15/nhung-buc-anh-dep-tuyet-voi-ve-tinh-ban.jpg"
//                     alt=""
//                     class="cover"
//                   />
//                 </div>
//                 <div class="details">
//                   <div class="listHead">
//                     <h5> Trần Khang </h5>
//                     <p class="time">5:25</p>
//                   </div>
//                   <div class="message_p">
//                     <p>Hi, are you ok? can i help you today </p>
//                   </div>
//                 </div>
//               </div>

//               <div class="block active">
//                 <div class="imgbx">
//                   <img
//                     src="https://znews-photo.zingcdn.me/w660/Uploaded/mdf_eioxrd/2021_07_12/2.jpg"
//                     alt=""
//                     class="cover"
//                   />
//                 </div>
//                 <div class="details">
//                   <div class="listHead">
//                     <h5> Bill Gate </h5>
//                     <p class="time">3:00</p>
//                   </div>
//                   <div class="message_p">
//                     <p>hello, how to investment for you? </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="rightSide">
//             <div
//               class="header"
//               style={{ display: "flex", justifyContent: "left" }}
//             >
//               <button
//                 onClick={open_user}
//                 style={{
//                   display: "none",
//                   marginRight: "20px",
//                   borderRadius: "50%",
//                 }}
//               >
//                 <i
//                   style={{ fontSize: "20px", padding: "10px" }}
//                   class="fa-solid fa-user-plus"
//                 ></i>
//               </button>

//               <div class="imgText">
//                 <div class="userimg">
//                   <img
//                     src="https://nghesiviet.vn/storage/files/7/phamthanhhung/tieu-su-shark-hung3-768x768.jpg"
//                     alt=""
//                     class="cover"
//                   />
//                 </div>
//                 <h4>
//                   {" "}
//                   Phạm Thanh Hưng <br /> <span> Online </span>{" "}
//                 </h4>
//               </div>
//             </div>

//             <div class="chatBox">
//               <div class="message my_message">
//                 <p>
//                   Hi <br /> <span>12:15</span>
//                 </p>
//               </div>
//               <div class="message frnd_message">
//                 <p>
//                   Hello <br /> <span>12:15</span>
//                 </p>
//               </div>
//               <div class="message my_message">
//                 <p>
//                   can i help you <br /> <span>12:15</span>
//                 </p>
//               </div>
//               <div class="message frnd_message">
//                 <p>
//                   {" "}
//                   I think your project has a lot of potential <br />{" "}
//                   <span>12:15</span>
//                 </p>
//               </div>
//               <div class="message frnd_message">
//                 <p>
//                   {" "}
//                   i want invest for you <br /> <span>12:15</span>
//                 </p>
//               </div>
//               <div class="message my_message">
//                 <p>
//                   {" "}
//                   how wonderful!! <br /> <span>12:15</span>
//                 </p>
//               </div>
//               <div class="message my_message">
//                 <p>
//                   {" "}
//                   you can invest in the project and get a percentage <br />{" "}
//                   <span>12:15</span>
//                 </p>
//               </div>
//               <div class="message frnd_message">
//                 <p>
//                   {" "}
//                   I want to invest $3000 <br /> <span>12:15</span>
//                 </p>
//               </div>
//               <div class="message frnd_message">
//                 <p>
//                   {" "}
//                   how much % will i get <br /> <span>12:15</span>
//                 </p>
//               </div>
//               <div class="message my_message">
//                 <p>
//                   {" "}
//                   you will get 30% profit <br /> <span>12:15</span>
//                 </p>
//               </div>
//               <div class="message frnd_message">
//                 <p>
//                   {" "}
//                   ok, i will get invest $3000 <br /> <span>12:15</span>
//                 </p>
//               </div>
//             </div>
//             <div class="chatbox_input">
//               <ion-icon name="happy-outline"></ion-icon>
//               <ion-icon name="attach-outline"></ion-icon>
//               <input type="text" placeholder="Type a message" />
//               <ion-icon name="mic"></ion-icon>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
