import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
>input{
    display: none;
}
`;


const SelectFiles = React.forwardRef(({ onChange, onClick }, ref) => (

        <Wrapper>
            <input
            type='file'
            name='files'
            accept='.pdf'
            multiple={ true }
            onChange={ (e) => { onChange(e); }}
            ref={ ref }
            />

            <button onClick={ () => onClick() }>
            +
            </button>

        </Wrapper>));

SelectFiles.displayName = 'SelectFiles';
SelectFiles.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SelectFiles;
