import React, { FC } from 'react'
import styled from 'styled-components'

export const Home: FC = ({ children }) => (
    <StyledDiv>
        {children}
    </StyledDiv>
)

const StyledDiv = styled.div`
    grid-area: 'home'
`