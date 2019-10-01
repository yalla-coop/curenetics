import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
display: none;
`;

const InputBox = React.forwardRef(({ onChange }, ref) => (
    <Input
    type='file'
    name='file'
    accept='application/pdf'
    multiple={ true }
    onChange={ (e) => onChange(e) }
    ref={ ref }
    />
));
InputBox.displayName = InputBox;
export default InputBox;
