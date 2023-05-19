import React from 'react';
import { Container } from "@material-ui/core";
// import Header from '../components/header_homepage';
import Cpn_create_project from '../components/cpn_create_project/cpn_create_project';
import Cpn_footer from '../components/cpn_footer/cpn_footer.js';
import Cpn_gototop from '../components/cpn_gototop/cpn_gototop';

export default function Create_project() {
  return <Container maxWidth={false} className="" style={{margin:'0', padding: '0',backgroundColor: 'white',}}>
    <Cpn_create_project />
    <Cpn_gototop />
    <Cpn_footer />
  </Container>
}
