import React from 'react';
import { Container } from "@material-ui/core";
import Cpn_login from '../components/cpn_login/cpn_login.js';

export default function Login() {
  return <Container maxWidth={false} className="" style={{margin:'0', padding: '0',backgroundColor: 'white',}}>
    <Cpn_login />
  </Container>
}