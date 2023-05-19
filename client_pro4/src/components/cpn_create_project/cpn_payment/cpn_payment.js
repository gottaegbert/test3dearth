import "./Payment.css";
import "animate.css";
import $ from "jquery";

function Cpn_Payment({ func }) {
  const close_qr = () => {
    var modal_QR = document.querySelector(".modal_QR");
    Object.assign(modal_QR.style, {
      display: "none",
    });
  };

  const open_qr = () => {
    var modal_QR = document.querySelector(".modal_QR");
    Object.assign(modal_QR.style, {
      display: "flex",
    });
  };

  $(document).ready(function () {
    $(".modal_QR").addClass("animate__animated animate__fadeInUp");
    $(".payment_wrap").addClass("animate__animated animate__fadeInUp");
  });

  return (
    <div className="payment_wrap">
      <div className="payment_content">
        <div className="modal_QR" onClick={close_qr}>
          <div>
            <img src="data:image/png;base64,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" />
          </div>
        </div>

        <div className="payment_header">
          <div className="payment_headline">Add new payment method</div>
          <span className="payment_btn_back" onClick={func.handlerSwitch}>
            back
          </span>
        </div>
        <form action="" className="payment_form">
          <div className="payment_group">
            <label htmlFor="">Card number</label>
            <input
              name="input_cart_number"
              type="text"
              placeholder="1234 1234 1234 1234"
            />
          </div>
          <div className="payment_group expiration">
            <label htmlFor="">Expiration</label>
            <input type="text" placeholder="MM/YY" />
          </div>
          <div className="payment_group cvc">
            <label htmlFor="">CVC</label>
            <input type="text" placeholder="CVC" />
          </div>
          <div className="payment_group country">
            <label for="">Country</label>
            <select id="cars">
              <option value="Vietnam">Vietnam</option>
              <option value="US">US</option>
              <option value="China">China</option>
            </select>
          </div>
          <div className="payment_group checkbox">
            <input type="checkbox" />
            <label for="">Remember this payment method</label>
          </div>
        </form>

        <div className="payment_wrap_img">
          <div className="payment_img_content">
            <div className="payment_img-cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="payment_img_headline">
              Rewards aren't guaranteed.
            </div>
          </div>
        </div>
        <div className="payment_wrap_rules">
          <div className="payment_backer_img"></div>
          <div className="rules_content">
            <div className="rules_headline">
              Backing means supporting a creative project, regardless of the
              outcome.
            </div>
            <div className="rules_wrap_checkbox">
              <input type="checkbox" id="rules_wrap_checkbox" />
              <label className="rules_label" for="rules_checkbox">
                I understand that rewards or reimbursements aren’t guaranteed by
                either Kickstarter or the creator.
              </label>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            onClick={open_qr}
            class="QR"
            style={{
              borderRadius: "10px",
              backgroundColor: "#dddada",
              padding: "16px 0",
              textAlign: "center",
              width: "10%",
              color: "black",
              margin: "20px 0",
            }}
          >
            Scan QR
          </div>

          <div className="payment_submit" onClick={func.handlerMessageSuccess}>
            Pledge
          </div>
        </div>

        <div className="payment_policy">
          By submitting your pledge, you agree to Kickstarter's
          <a> Terms of Use,</a> and <a>Privacy Policy,</a>
          Privacy Policy
        </div>
      </div>
    </div>
  );
}

export default Cpn_Payment;
