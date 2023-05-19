import React from 'react';
import { Container } from "@material-ui/core";

import Cpn_footer from '../components/cpn_footer/cpn_footer.js';
import Cpn_gototop from '../components/cpn_gototop/cpn_gototop';
import Cpn_details from '../components/cpn_details/cpn_details.js';

export default function Details() {
    return <Container maxWidth={false} className="" style={{margin:'0', padding: '0'}}>
        <Cpn_details />
    </Container>
}