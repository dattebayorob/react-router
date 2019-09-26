import React, { FC } from 'react';
import { useLocation, useHistory } from 'react-router';

interface RedirectLabelProps {
    nextUrl: string;
    nextLabel: string;
}

export const RedirectLabel: FC<RedirectLabelProps> = ({ nextUrl, nextLabel }) => {
    const { pathname } = useLocation()
    const { push } = useHistory()
    return (
    <div>
        You are on {pathname} <br/>
        <button onClick={() => push(nextUrl)}>
            Go to {nextLabel}
        </button>
    </div>
)}