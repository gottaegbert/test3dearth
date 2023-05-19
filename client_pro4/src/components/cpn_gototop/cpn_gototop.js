import React from "react";
import "./style_gototop.css";
import $ from "jquery";
// import '../../public/js/homepage.js';

export default function Cpn_gototop() {
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
    <button onClick={topFunction} id="myBtn" title="Go to top">
      <i className="fa-solid fa-circle-arrow-up"></i>
    </button>
  );
}
