import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
display: none;
`;

const InputBox = ({ onChange }, ref) => (
    <Input
    type='file'
    name='file'
    accept='application/pdf'
    multiple={ true }
    onChange={ (e) => onChange(e) }
    ref={ ref }
    />
);
export default InputBox;
