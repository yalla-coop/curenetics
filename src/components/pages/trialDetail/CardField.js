import React from 'react';
import styled from 'styled-components';
import {
  colors, font, fontFamily,
} from '../../../styles/globalStyles';

const CardFieldDiv = styled.div`
  flex-grow: ${({ flexGrow }) => flexGrow};
  color: ${colors.primary};
  font-size: ${font.small};
  font-family: ${fontFamily.body};
`;

const CardField = ({ flexGrow = '1', children }) => (
  <CardFieldDiv flexGrow={flexGrow}>
    {children}
  </CardFieldDiv>
);

export default CardField;
