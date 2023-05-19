import React from 'react';
import { Container } from "@material-ui/core";
// import Header from '../components/header_homepage';
import Cpn_footer from '../components/cpn_footer/cpn_footer.js';
import Cpn_add_project from '../components/cpn_add_project/cpn_add_project';

export default function Add_project() {
  return <Container maxWidth={false} className="" style={{margin:'0', padding: '0',backgroundColor: 'white'}}>
    <Cpn_add_project />
    <Cpn_footer />
  </Container>
}
