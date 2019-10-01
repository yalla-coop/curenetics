import React from 'react';
import styled from 'styled-components';
import cureneticsLogo from './curenetics_logo_2.png';
import { colors,breakpoint } from '../../../styles/globalStyles';

const Wrapper = styled.div`
    left: 0px;
    top: 0px;
    position: absolute;
    width: 100%;
    min-width: 18.75rem;
    color: ${colors.background};
`;

const WhiteBar = styled.div`
    margin:0;
    padding:0;
    height: 4.5rem;
    width: 100%;
    background: ${colors.white};
    top: 0;
    @media(max-width: 450px){
        height: 4rem;
     } 
`;

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
   height: 2.8125rem;
   width: 7.1875; 
   overflow: hidden;
   top: 0.875rem;
   left: 3.125rem;  

    @media ${breakpoint.Xsmall} {
        width: 100vw;
        align-items: center;
        border-left: none;
        height: 1.875rem;  
        top: 1rem;
        left: 1.25rem;
    }
}   
`;

const Nav = styled.a`
    position: absolute;
    right: 3.125rem;
    top: 1.625rem;
    text-align: right;
    height: 1.25rem;
    width: 4rem;
    list-style-type: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1.0625rem;
    line-height: 1.25rem;
    letter-spacing: 0.05em;
    text-decoration: none;
    color: ${colors.primary};
    @media only screen and (max-width: 480px){
        right: 1.4325rem;
        top: 1.6875rem;
      }
   }   
  `;

const Header = () => (
    <Wrapper>
        <WhiteBar><Logo src ={cureneticsLogo} alt="logo" /></WhiteBar>
        <ShadowBox />
    </Wrapper>
);

export default Header;
