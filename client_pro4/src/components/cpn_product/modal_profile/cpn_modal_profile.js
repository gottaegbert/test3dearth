import { Link } from "react-router-dom";
import "./cpn_modal_profile.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Cpn_prj_prf_user(props) {
  return (
    <div className="card_project_user">
      <div>
        <img src={props.image} alt="" />
      </div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}
function Cpn_blog(props) {
  return (
    <div class="Infor" style={{ margin: "0 auto 30px auto" }}>
      <div class="author">
        <img src={props.avatar} />
        <div class="infor_author">
          <span>{props.name}</span>
          <p>
            1h <i class="fa-solid fa-earth-americas icon 3"></i>{" "}
          </p>
        </div>
      </div>
      <div class="info-des">
        <p>{props.title || " Dự án được thực hiện bởi team Pro4!"}</p>
        <p>Giới thiệu sơ lược:</p>
        <p>{props.content}</p>
        <div class="img-modal_profile">
          <img class="item3" src={props.img} alt="" />
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
          <p class="investment">Investment</p>
        </div>
      </div>

      <div class="ctn_comment" style={{ height: "100px" }}>
        <div class="bl__ctn_comment" style={{ width: "90%" }}>
          <img class="avatar" src="{{users.img_author}}"></img>
          <input type="text" placeholder="Viết bình luận ... " />
        </div>
      </div>
    </div>
  );
}
export default function Cpn_modal_profile(props) {
  function exit_profile_hoang(className) {
    let cpn_modal_profile = document.querySelector(
      `.cpn_modal_profile.${className}`
    );
    Object.assign(cpn_modal_profile.style, {
      display: "none",
    });
  }
  return (
    <div className={`cpn_modal_profile ${props.className}`}>
      <div className="profile_header">
        <div className="header_avatar">
          <img src={props.avatar} />
        </div>
        <div className="header_title">
          <h2 style={{ margin: "2% 0 0 0" }}>{props.name}</h2>
          <div className="social_icon">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-telegram"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
        <div style={{ height: "100%", display: "flex" }}>
          <i
            style={{ fontSize: "30px", margin: "auto 0" }}
            class="fa-solid fa-right-from-bracket"
            onClick={() => exit_profile_hoang(props.className)}
          ></i>
        </div>
      </div>

      <div className="profile_body">
        <div class="ctn_about_me open">
          <div class="info_user" style={{ width: "50%" }}>
            <div class="label">
              <p style={{ margin: "20px 0", fontSize: "25px" }}>
                <button style={{border : 'none'}}>
                  <p>
                    Hi! Welcome to my wall
                  <i
                    class="fa-solid fa-pencil"
                    style={{
                      fontSize: "15px",
                      marginLeft: "20px",
                      marginBottom: "2.5px",
                    }}
                  ></i>
                  </p>
                </button>                
              </p>
              <hr style={{ width: "60%", margin: "20px auto" }} />
            </div>
            <div class="infor">
              <table>
                <tr>
                  <td>Name</td>
                  <td class="user_name">{props.name}</td>
                </tr>
                <tr>
                  <td>D.O.B</td>
                  <td class="user_dob">10/09/1972</td>
                </tr>
                <tr>
                  <td class="user_tel">Phone</td>
                  <td>+84 326 xxx xxxx</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td class="user_address">Ha Noi, Viet Nam</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td class="user_email">gianglt.21it@vku.udn.vn</td>
                </tr>
                <tr>
                  <td>Strength</td>
                  <td>Business, Invest</td>
                </tr>
              </table>
            </div>
          </div>
          <div style={{ margin: "150px 0" }} class="project_demo_user">
            <ul>
              <li style={{ zIndex: "6" }}>
                <a href="https://www.facebook.com/hungpham7968">
                  <span>
                    <i class="fa-brands fa-facebook-f"></i>
                  </span>
                  Facebook
                </a>
              </li>
              <li style={{ zIndex: "5" }}>
                <a href="#">
                  <span>
                    <i class="fa-brands fa-telegram"></i>
                  </span>
                  Telegram
                </a>
              </li>
              <li style={{ zIndex: "4" }}>
                <a href="#">
                  <span>
                    <i class="fa-brands fa-twitter"></i>
                  </span>
                  Twitter
                </a>
              </li>
              <li style={{ zIndex: "3" }}>
                <a href="#">
                  <span>
                    <i class="fa-brands fa-instagram"></i>
                  </span>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="profile_user_card">
          {/* <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="option_profile_user">
              <div class="icon_f">
                <i style={{fontSize: '14px',padding : '13px',borderRadius: '50% 0 0 50%', backgroundColor: 'rgb(189 232 255)'}} class="fa-solid fa-user"></i>
                <span class="tooltip_f" style={{backgroundColor : 'rgb(189 232 255)', borderRadius: '0 20px 20px 0',padding: '10px',fontSize: '14px',}}>ABOUT ME</span>
              </div>
              <div class="icon_f" >
                <i style={{fontSize: '14px',padding : '13px',borderRadius: '50% 0 0 50%', backgroundColor: 'rgb(189 232 255)'}} class="fa-solid fa-user"></i>
                <span class="tooltip_f" style={{backgroundColor : 'rgb(189 232 255)', borderRadius: '0 20px 20px 0',padding: '10px',fontSize: '14px',}}>POST</span>
              </div>
              <div class="icon_f" >
                <i style={{fontSize: '14px',padding : '13px',borderRadius: '50% 0 0 50%', backgroundColor: 'rgb(189 232 255)'}} class="fa-solid fa-user"></i>
                <span class="tooltip_f" style={{backgroundColor : 'rgb(189 232 255)', borderRadius: '0 20px 20px 0',padding: '10px',fontSize: '14px',}}>PROJECTS</span>
              </div>
              <div class="icon_f" >
                <i style={{fontSize: '14px',padding : '13px',borderRadius: '50% 0 0 50%', backgroundColor: 'rgb(189 232 255)'}} class="fa-solid fa-user"></i>
                <span class="tooltip_f" style={{backgroundColor : 'rgb(189 232 255)', borderRadius: '0 20px 20px 0',padding: '10px',fontSize: '14px',}}>
                  MORE
                  <i style={{marginLeft : '5px'}} class="fa-solid fa-caret-down"></i>
                </span>
              </div>
            
            </div>
          </div> */}

          <div>
            <div style={{display: 'flex',justifyContent : 'center'}}>
              <div style={{color : '#2e89ff',margin : '0 30px 30px 30px',fontSize : '25px',borderBottom : '3px solid #2e89ff'}}>
                <i style={{margin : '0 10px'}} class="fa-solid fa-file-shield"></i>
                MY POST
              </div>
              <div style={{margin : '0 30px 30px 30px',fontSize : '25px'}}>
                <i style={{margin : '0 10px'}} class="fa-solid fa-list"></i>
                MY PROJECTS
              </div>
            </div>
          </div>

          <Cpn_blog
            avatar={props.avatar}
            name={props.name}
            content="Smart Edge là giải pháp phân tích video đa vật thể, áp dụng mô
                hình học sâu để biến đổi các camera và các thiết bị kiểm soát
                quyền truy cập thông thường thành những hệ thống thông minh. Sản
                phẩm cho phép chuyển đổi hình ảnh thành thông tin chi tiết hữu
                ích để tạo ra các giá trị kinh doanh cho doanh nghiệp. Đặc biệt,
                áp dụng mô hình học sâu, sản phẩm có thể nhận diện khuôn mặt ổn
                định, kể cả khi người dùng đang sử dụng khẩu trang. Ngoài mục
                đích thương mại, với dòng sản phẩm này, VinAI hi vọng có thể
                chung tay bảo vệ sức khỏe cộng đồng trong bối cảnh đại dịch còn
                đang diễn biến phức tạp."
            title="Dự án được thực hiện bởi DUT team"
            img={props.img1}
          />
          <Cpn_blog
            avatar={props.avatar}
            name={props.name}
            content="Dự án được thực hiện bởi team Pro4! Giới thiệu sơ lược: Công nghệ Beacon không phải là khái niệm quá mới lạ, nhưng vẫn tạo được sức hút đối với sự phát triển của mobile app và được dự đoán sẽ trở nên phổ biến hơn trong năm 2022. Công nghệ này cung cấp một liên kết giữa thế giới trực tuyến và ngoại tuyến, tạo điều kiện cho người dùng mobile app tương tác với các cửa hàng thực, cho phép các doanh nghiệp tìm hiểu và nắm bắt được nhu cầu của khách hàng. Tính đến thời điểm hiện nay, ngành bán lẻ đã áp dụng công nghệ beacon vào rất nhiều khía cạnh trong quá trình kinh doanh. Nhiều nhà bán lẻ hiện đã sử dụng công nghệ này để thu thập thông tin về cách người mua hàng tương tác với cửa hàng thực. Từ đó, họ có thể theo dõi các mô hình mua sắm của khách hàng và phân phối những nội dung quảng cáo phù hợp nhất. Ngoài ra, công nghệ này cũng rất hữu ích trong việc điều hướng qua các trung tâm mua sắm sầm uất và một số cửa hàng nhỏ lẻ. Trong những năm tới, công nghệ beacon sẽ tiếp tục mở rộng khi ngày càng có nhiều nhà bán lẻ và các lĩnh vực khác đón nhận."
            img={props.img2}
            title="Dự án được thực hiện bởi VKU team"
          />
          <Cpn_blog
            avatar={props.avatar}
            name={props.name}
            title={props.title}
            content="Dự án được thực hiện bởi DUT team
Thần Trùng (The Death) là dự án game kinh dị do DUT Studio (chỉ gồm 3 thành viên) sản xuất, lấy bối cảnh 100% tại Việt Nam. Fanpage studio: https://www.facebook.com/dutstudiovn Trailer game có những hình ảnh rùng rợn, khán giả cân nhắc trước khi xem. Các nhân vật, tình huống và sự kiện trong video này đều là sản phẩm hư cấu. Mọi sự trùng hợp nếu có chỉ là ngẫu nhiên. Gameplay, nhân vật và bối cảnh trong trailer có thể sẽ được sửa đổi trong tương lai. Trong trailer có sử dụng một số hình ảnh tranh cổ động phòng chống dịch COVID - 19 (Bức tranh với thông điệp “Ở nhà là yêu nước” của họa sỹ Lê Đức Hiệp; tranh của họa sĩ Lưu Yên Thế) cùng với bài hát nổi tiếng của nhạc sĩ Hồng Vân và trình bày bởi ca sĩ Hoàng Oanh."
            img={props.img3}
          />

          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                textAlign: "center",
                fontSize: "25px",
                marginBottom: "30px",
              }}
            >
              See more . . .
            </div>
          </div>

          <div
            style={{
              marginBottom: "30px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <hr style={{ width: "70%" }} />
          </div>

          <div className="prj_profile_user">
            <h1 style={{ textAlign: "center" }}>My project</h1>
            <div
              style={{
                margin: "20px 0",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Cpn_prj_prf_user
                image="https://ksr-ugc.imgix.net/assets/038/081/016/648ce214c7c28da558eaf30f61f56d23_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1658869940&gif-q=50&lossless=true&s=8c68074e15b1fd239d8361d03ef93a54"
                title="Pruto: Mesh Action Sports Communicator with LED Light"
                content=" For Skiing, Yachting, Cycling and all Sports Players. Have Fun and Stay
        Connected, Go Adventure Boldly with Pruto!"
              />

              <Cpn_prj_prf_user
                image="https://ksr-ugc.imgix.net/assets/038/428/381/5cc4bbc8c36aca7efa33b741a26b2e2b_original.png?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1661827987&auto=format&frame=1&q=92&s=1a6da9db65a572852a69710f0328598d"
                title="Armed Fantasia & Penny Blood"
                content="Explore the westernpunk wilderness of Armed Fantasia and defeat the evil lurking within Penny Blood in this JRPG celebration!"
              />
            </div>
            <ul>
              <div
                style={{
                  border: "1px double #333",
                  width: "45%",
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#e4f8ff",
                  borderRadius: "100px",
                }}
              >
                <i
                  style={{ margin: "auto 0", fontSize: "15px" }}
                  class="fa-solid fa-backward"
                ></i>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <i
                  style={{ margin: "auto 0", fontSize: "15px" }}
                  class="fa-solid fa-forward"
                ></i>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
