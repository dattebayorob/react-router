import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router'
import { RedirectLabel } from '../../components/redirectLabel'

interface AnotherProps extends RouteComponentProps {}

export const Another: FC<AnotherProps> = () => {
    return (
        <RedirectLabel
            nextLabel={"Root"}
            nextUrl={"/"} />
    )
}