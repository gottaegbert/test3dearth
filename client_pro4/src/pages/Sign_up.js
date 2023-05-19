import React from 'react';
import { Container } from "@material-ui/core";
import Cpn_sign_up from '../components/cpn_login/cpn_sign_up/cpn_sign_up';

export default function Homepage() {
  return <Container maxWidth={false} className="" style={{margin:'0', padding: '0',backgroundColor: 'white',}}>
    <Cpn_sign_up />
  </Container>
}
