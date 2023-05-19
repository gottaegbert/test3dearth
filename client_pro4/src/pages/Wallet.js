import React from 'react';
import { Container } from "@material-ui/core";
import Cpn_wallet from '../components/cpn_wallet/cpn_wallet.js';
import Cpn_footer from '../components/cpn_footer/cpn_footer.js';
import Cpn_gototop from '../components/cpn_gototop/cpn_gototop';

export default function Wallet() {
  return <Container maxWidth={false} className="" style={{margin:'0', padding: '0',backgroundColor: 'white',}}>
    <Cpn_wallet />
    <Cpn_gototop />
    {/* <Cpn_footer /> */}
  </Container>
}
