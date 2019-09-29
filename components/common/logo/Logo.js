import React, { Component } from 'react';
import styled from 'styled-components';

var curenetics_logo = require('./curenetics_logo_2.png');

const Logo = styled.img`
  height: 45px;
  width: 115px;
  overflow: hidden;
  top: 20px;
  left: 50px;
  position: absolute;
`;

class Logo extends Component {
  render() {
    return(
    <Wrapper>
      <Logo><img src={curenetics_logo} alt="Curenetics logo" /></Logo>
    </Wrapper>
  );
 }
}

export default Logo;
