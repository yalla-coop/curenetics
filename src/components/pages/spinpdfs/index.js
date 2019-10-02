import React from 'react';
import { Header } from '../../common/Layout';
import Spinner from '../../common/icons/Spinner';
import { Title, Paragraph } from '../../common/Typography';


const Spinpdfs = () => (
  <>
    <Header isCenter>
      <Spinner width={96}/>
      <Title>Processing...</Title>
<Paragraph>We are currently analysing the data to extract the relevant medical entities.
      </Paragraph>
<Paragraph>This can take a few minutes so please do not refresh this page.
</Paragraph>
    </Header>
  </>
);

export default Spinpdfs;
