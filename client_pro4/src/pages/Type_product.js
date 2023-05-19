import React from 'react';
import { Container } from "@material-ui/core";
// import Header from '../components/header_homepage';
import Cpn_type_product from '../components/cpn_product/cpn_type_product/cpn_type_product.js';
import Cpn_footer from '../components/cpn_footer/cpn_footer.js';
import Cpn_gototop from '../components/cpn_gototop/cpn_gototop';
import Cpn_bot_chat from '../components/cpn_bot_chat/cpn_bot_chat';


export default function Type_product() {
  return <Container maxWidth={false} className="" style={{margin:'0', padding: '0',backgroundColor: 'white',}}>
    <Cpn_type_product />
    <Cpn_gototop />
    <Cpn_bot_chat />
    <Cpn_footer />
  </Container>
}
