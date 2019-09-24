import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router'
import { RedirectLabel } from '../../components/redirectLabel'

interface SampleProps extends RouteComponentProps{}

export const Sample: FC<SampleProps> = ({ location, history}) => {
    return (
        <RedirectLabel
            nextLabel={"Another"}
            nextUrl={"/another"}
            pathname={location.pathname}
            redirect={history.push} />
    )
}