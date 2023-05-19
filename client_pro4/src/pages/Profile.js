import React from 'react';
import { Container } from "@material-ui/core";
import Cpn_profile from '../components/cpn_profile/cpn_profile';

export default function Profile() {
  return <Container maxWidth={false} className="" style={{margin:'0', padding: '0',backgroundColor: 'white',}}>
    <Cpn_profile />
  </Container>
}
