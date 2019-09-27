import React from 'react';
import '../styles/reset.css';

// icon testing
// svgs downloaded from: https://material.io/resources/icons
import Arrow from './common/icons/Arrow';
import Avatar from './common/icons/Avatar';
import Calendar from './common/icons/Calendar';
import Tick from './common/icons/Tick';

import styled from 'styled-components';
import { breakpoint, colors, fontFamily, font } from '../styles/globalStyles'


const Main = styled.main`
  @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  font-family: ${fontFamily.body};
`;

const Title = styled.h1`
  font-size: ${font.massive};
  font-family: ${fontFamily.main};
  font-weight: 600;
  margin-bottom: 2rem;
`;

const Paragraph = styled.p`
  font-weight: 400;
  font-size: ${font.small};
  @media only screen and (min-width: ${breakpoint.Xsmall}) {
    font-size: ${font.med};
  }
`;

const Container = styled.section`
  padding: 1rem;
  margin: 0 auto;
  max-width: ${breakpoint.massive};
`;

const IconContainer = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: ${breakpoint.tablet};
`;

function App() {
  return (
   <Main>
     <Container>
      <Title>And so it begins!!!!!!</Title>
      <Paragraph>Here is a paragraph with Roboto font</Paragraph>
     </Container>

     <IconContainer>
      <Arrow />
      <Arrow width={60} fill={colors.confirm}/>
      <Avatar/>
      <Avatar width={75} fill={colors.primary}/>
      <Tick/>
      <Tick width={75} fill={colors.cancel}/>
      <Calendar/>
      <Calendar width={75} fill={colors.accent}/>
     </IconContainer>

   </Main>
  );
}

export default App;
