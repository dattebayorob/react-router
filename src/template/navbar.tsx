import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavBar: FC = () => (
    <StyledNav>
        <Link to="/">
            Sample
        </Link><br />
        <Link to="/another">
            Another Page
        </Link>
    </StyledNav>
)

const StyledNav = styled.nav`
    grid-area: 'nav'
`