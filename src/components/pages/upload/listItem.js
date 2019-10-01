import React from 'react';
import styled from 'styled-components';
import deleteIcon from './deleteIcon.svg';
import { fontFamily, font } from '../../../styles/globalStyles';

const Div = styled.li`
width: 30vw;
display: flex;
font-family:${fontFamily.body};
font-size:${font.small};
list-style-type: none;
padding: 0.2rem;
>img{
    left: 0.5rem;
}
>div{
    margin-left: 0.8rem;
}
`;

const Item = ({ text, onClick }) => (
        <Div>
         <img src={ deleteIcon } onClick={ (e) => onClick(e)}/>
          <div>{ text }</div>
       </Div>

);


export default Item;
