import React from 'react';
import styled from 'styled-components';
import cureneticsLogo from './curenetics_logo_2.png';
import cssReset from '../../../styles/reset.css';
import { colors } from '../../../styles/globalStyles';

const Wrapper = styled.div`
    left: 0px;
    top: 0px;
    position: absolute;
    width: 100%;
    min-width: 300px;
    color: ${colors.background};
`;

const WhiteBar = styled.div`
    margin:0;
    padding:0rem;
    height: 4.5rem;
    width: 100%;
    background: ${colors.white};
    top: 0;
    @media(max-width: 450px){
        height: 3rem;
     } 
`;
/* ShadowBox is under WhiteBar, shadow inset, so shadow goes to the edges */
const ShadowBox = styled.div`

    color: ${colors.background};
    -webkit-box-shadow: inset 0px 18px 5px -13px rgba(232,232,232,1);
    -moz-box-shadow: inset 0px 18px 5px -13px rgba(232,232,232,1);
    box-shadow: inset 0px 18px 5px -13px rgba(232,232,232,1);
    height: 1rem;
    width: 100%;
`;

const Logo = styled.img`
   position:absolute;
   height: 45px; 
   width: 115px; 
   overflow: hidden;
   top: 14px;
   left: 50px;  
   @media only screen and (max-width: 480px){
      width: 78px;
      height: 30px;  
      top: 22px;
      left: 20px;
    }
 }   
`;

const Nav = styled.a`
    position: absolute;
    right: 50px;
    top: 26px;
    text-align: right;
    height: 20px;
    width: 4rem;
    list-style-type: none;
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-decoration: none;
    color: ${colors.primary};
    @media only screen and (max-width: 480px){
        right: 23px;
        top: 27px;
      }
   }   
  `;

const Header = () => (
    <Wrapper>
        <WhiteBar><Logo src ={cureneticsLogo} alt="logo" /><Nav>HOME</Nav></WhiteBar>
        <ShadowBox />
    </Wrapper>
);

export default Header;
