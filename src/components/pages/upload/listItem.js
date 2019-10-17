import React from 'react';
import styled from 'styled-components';
import deleteIcon from './deleteIcon.svg';
import { fontFamily, font, colors } from '../../../styles/globalStyles';

const Div = styled.li`
  width: 30vw;
  display: flex;
  background-color: ${props =>
    props.bg === 'yes' ? colors.white : colors.accent};
  font-family: ${fontFamily.body};
  font-size: ${font.small};
  list-style-type: none;
  padding: 0.2rem;
  > img {
    left: 0.5rem;
  }
  > div {
    margin-left: 0.8rem;
  }
`;

const Item = ({ text, onClick, bg }) => (
  <Div bg={bg}>
    <img src={deleteIcon} alt="remove item" onClick={e => onClick(e)} />
    <div>{text}</div>
  </Div>
);

export default Item;
