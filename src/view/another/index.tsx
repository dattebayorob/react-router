import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router'
import { RedirectLabel } from '../../components/redirectLabel'

interface AnotherProps extends RouteComponentProps {}

export const Another: FC<AnotherProps> = ({ history, location, match }) => {
    return (
        <RedirectLabel
            nextLabel={"Root"}
            nextUrl={"/"}
            pathname={location.pathname}
            redirect={history.push} />
    )
}