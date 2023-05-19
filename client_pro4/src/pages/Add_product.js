import React from "react";
import { Container } from "@material-ui/core";
// import Header from '../components/header_homepage';
import Cpn_footer from "../components/cpn_footer/cpn_footer.js";
import Cpn_add_product from "../components/cpn_product/add_product";

export default function Add_product() {
  return (
    <Container
      maxWidth={false}
      className=""
      style={{ margin: "0", padding: "0", backgroundColor: "#daf9ff4d" }}
    >
      <Cpn_add_product />
      <Cpn_footer />
    </Container>
  );
}
