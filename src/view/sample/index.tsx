import React, { FC } from 'react'
import { RedirectLabel } from '../../components/redirectLabel'

export const Sample: FC = () => {
    return (
        <RedirectLabel
            nextLabel={"Another"}
            nextUrl={"/another"}/>
    )
}