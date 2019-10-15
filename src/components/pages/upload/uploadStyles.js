import styled from 'styled-components';
import {
  colors,
  fontFamily,
  font,
  breakpoint,
} from '../../../styles/globalStyles';

// can have mulitple headers i believe...
export const CardHeader = styled.header`
  display: flex;
  align-items: center;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1rem;
`;

export const DottedBox = styled.div`
  height: 45vh;
  max-height: 300px;
  border: 2px dashed ${colors.grey};
  border-radius: 0.5rem;
  margin: 3rem 1rem;
  overflow: auto;
  justify-content: center;
  @media (min-width: ${breakpoint.tablet}) {
    height: 45vh;
    max-height: 400px;
  }
`;

export const Span = styled.span`
  display: flex;
  width: 30vw;
  justify-content: center;
  margin-top: 20vh;
  color: ${colors.disabled};
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap');
  font-family: ${fontFamily.body};
  font-size: ${font.large};
  font-weight: 300;
  @media (max-width: ${breakpoint.tablet}) {
    margin-top: 12vh;
    margin-left: 12vw;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 35vw;
  height: 55vh;
  background-color: ${props =>
    props.color === 'white' ? colors.white : 'none'};
  padding: 1rem;
`;
export const Main = styled.section`
  display: flex;
  width: 100vw;
  justify-content: center;
`;

export const Button = styled.button`
position: relative;
top: 9vh;
right: 12vw;
width: 5rem;
height: 5rem;
border: none;
border-radius: 50%;
outline: none;
color:${colors.white}
background-color:${colors.primary};
font-size: ${font.massive};
text-align: center;
z-index: 1;
@media(max-width:${breakpoint.tablet}){
    width: 4rem;
    height: 4rem;
    right: 28vw;
} 
`;
export const Tooltip = styled.span`
  visiability: hidden;
  width: 30vw;
  background-color: ${colors.background};
  text-align: center;
  padding: 1vw;
  border-radius: 5px;
`;
