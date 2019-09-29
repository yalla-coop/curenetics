import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from './common/logo/Logo';

const WhiteBar = styled.h2`
margin:0;
padding:0rem;
height: 4.5rem;
width: 100% ;
background:  #fff;
background: pink;
position:absolute;
top: 0 ;
`;

const Shadow = styled.section`
  background: #f4f4f9; /* pale grey */
  /* background: pink; */
  -webkit-box-shadow: inset 0px 18px 5px -13px rgba(232,232,232,1);
  -moz-box-shadow: inset 0px 18px 5px -13px rgba(232,232,232,1);
  box-shadow: inset 0px 18px 5px -13px rgba(232,232,232,1);
  height: 1rem;
  /* border: 1px dashed gray; */
  width: 100%;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

class Header extends Component {
  render() {
    return(
    <Wrapper>
      <Logo></Logo>
      <WhiteBar></WhiteBar>
      <Shadow></Shadow>
    </Wrapper>
  );
 }
}

export default Header;
