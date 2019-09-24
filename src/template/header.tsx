import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router'
import { RouteComponentProps } from 'react-router-dom'

const Header: React.FC< RouteComponentProps > = ({ location }) => (
    <StyledHeader>
        TOP { location.pathname.replace('/','')}
    </StyledHeader>
)

export default withRouter(Header)

const StyledHeader = styled.header`
    grid-area: 'header';
    text-align: center;
    font-size: 48px;
`