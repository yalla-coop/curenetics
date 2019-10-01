import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/globalStyles';

const Bu = styled.button`
   color: ${colors.white};
   position: absolute;
   width: 279.49px;
   height: 35.91px;
   left: 18.82px;
   top: 381px;
   background: ${colors.primary};
   border-radius: 6px;
   font-size: 1.1rem;
   @media only screen and (max-width: 480px){
    width 80%;
    padding: 0, 20px;
  }
}   
`;

const Button = ({ text }) => (
    <Bu>
        { text }
    </Bu>
);

export default Button;
