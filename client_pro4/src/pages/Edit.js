import React from 'react';
import { Container } from "@material-ui/core";
import Cpn_edit from '../components/cpn_product/cpn_edit/cpn_edit.js';
import Cpn_footer from '../components/cpn_footer/cpn_footer.js';

export default function Edit() {
  return <Container maxWidth={false} className="" style={{margin:'0', padding: '0',backgroundColor: 'white',}}>
    <Cpn_edit />
    <Cpn_footer />
  </Container>
}





















