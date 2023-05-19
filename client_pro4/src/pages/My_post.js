import React from 'react';
import { Container } from "@material-ui/core";
// import Header from '../components/header_homepage';
import Cpn_my_post from '../components/cpn_product/cpn_my_post/cpn_my_post';
import Cpn_footer from '../components/cpn_footer/cpn_footer.js';
import Cpn_gototop from '../components/cpn_gototop/cpn_gototop';
import Cpn_left_nav from '../components/cpn_product/cpn_left_nav/cpn_left_nav';

export default function My_post() {
  return <Container maxWidth={false} className="" style={{margin:'0', padding: '0',backgroundColor: 'white',}}>
    <Cpn_my_post />

    <Cpn_gototop />
    <Cpn_footer />
  </Container>
}