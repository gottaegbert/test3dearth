import React from 'react';
import { Container } from "@material-ui/core";
import CpnMess from '../components/mess/Cpn_mess.js';

export default function Mess() {
  return <Container maxWidth={false} className="" style={{margin:'0', padding: '0',backgroundColor: 'white',}}>
    <CpnMess />
  </Container>
}
