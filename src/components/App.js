import React from 'react';

// icon testing
// svgs downloaded from: https://material.io/resources/icons
import Arrow from './common/icons/Arrow';
import Avatar from './common/icons/Avatar';
import Calendar from './common/icons/Calendar';
import Tick from './common/icons/Tick';

import styled from 'styled-components';
import { breakpoint, colors } from '../styles/globalStyles'

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
   <div>
     And so it begins!!!!!!
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
   </div>
  );
}

export default App;
