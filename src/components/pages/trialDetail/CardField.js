import React from 'react';
import styled from 'styled-components';
import {
  colors, font, fontFamily,
} from '../../../styles/globalStyles';


const isConfirmed = (confirmState) => {
  let color = colors.primary;
  let fontSize = font.small;
  switch (confirmState) {
    case true:
      color = colors.confirm;
      fontSize = font.Xlarge;
      break;
    case false:
      color = colors.cancel;
      fontSize = font.Xlarge;
      break;
    default:
      break;
  }
  return {
    color, fontSize,
  };
};

const CardFieldDiv = styled.div`
  flex-grow: ${({ flexGrow }) => flexGrow};
  color: ${({ confirmState }) => isConfirmed(confirmState).color};
  font-size: ${({ confirmState }) => isConfirmed(confirmState).fontSize};
  font-family: ${fontFamily.body};
`;


const CardField = ({ flexGrow = '1', confirmState, children }) => (
  <CardFieldDiv confirmState={confirmState} flexGrow={flexGrow}>
    {children}
  </CardFieldDiv>
);

export default CardField;
