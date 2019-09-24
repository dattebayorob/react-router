import React from 'react'
import styled from 'styled-components'

export const Container: React.FC = ({ children }) => (
    <StyledContainer>
        {children}
    </StyledContainer>
)

const StyledContainer = styled.div`
    display: grid;
    grid-template-areas:
        'nav nav header header header header',
        'nav nav home home home home',
        'nav nav home home home home';
    grid-gap: 10px;
    background-color: #2196F3;
    padding: 10px;

    & > div{
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
    }
`