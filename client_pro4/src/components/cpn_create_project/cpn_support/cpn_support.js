import "./Support.css";
import $ from "jquery";
import "animate.css";

function Cpn_Support({ func, img }) {
  $(document).ready(function () {
    $(".support_wrap").addClass("animate__animated animate__fadeInUp");
  })
  
  return (
    <div className="support_wrap">
      <div className="support_btn_close" onClick={func.handlerToggleSupport}>
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div className="support_container">
        <h2 className="support_heading">Pledge summary</h2>
        <div className="support_desc">
          We won’t charge you at this time. If the project reaches its funding
          goal, your payment method will be charged when the campaign ends.
          You’ll receive a confirmation email at tranduytinh369@gmail.com when
          your pledge is successfully processed.
        </div>
        <div className="support_info">
          <div className="support_info_img">
            <img src={img} alt="" />
          </div>
          <div className="support_info_body">
            <h5 className="support_info_name">Armed Fantasia & Penny Blood</h5>
            <div className="support_info_funded">
              <span className="support_info_percent">127%</span> funded
            </div>
            <div className="support_info_author">
              By <span className="info_author_name">Double Kickstarter</span>
            </div>
          </div>
        </div>
        <div className="support_pledge">
          <h3 className="support_pledge_heading">Your pledge</h3>
          <div className="support_pledge_content">
            <div className="pledge_content_wrap">
              <h5>Reward</h5>
              <p>No reward, I just want to support the project</p>
            </div>
            <div className="pledge_content_wrap bonus">
              <h5>Bonus</h5>
              <p>¥1,000.00</p>
            </div>
          </div>
        </div>
        <hr className="support_line" />
        <div className="support_total_money">
          <h5>Total amount</h5>
          <div>
            (about $7.22) <span>¥1,000.00</span>
          </div>
        </div>
        <button className="support_btn_next" onClick={func.handlerSwitch}>
          Next
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Cpn_Support;
