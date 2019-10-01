import styled from 'styled-components';
import { colors, fontFamily } from '../../../styles/globalStyles';


export const Box = styled.div`
width: 30vw;
height: 25vh;
border: 2px dashed grey;
border-radius: 10px;
margin: 1rem;
overflow: auto;
justify-content: center;
justify-items: center;
`;
export const Span = styled.span`
width:300px;
font-family:${fontFamily.body}; 
`;
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 35vw;
height: 55vh;
background-color:${(props) => (props.color === 'white' ? colors.white : 'none')};
padding: 1rem;
`;
export const Main = styled.section`
display: flex;
width: 100vw;
justify-content: center;
`;
