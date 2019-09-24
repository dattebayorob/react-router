import React, { FC } from 'react';

interface RedirectLabelProps {
    pathname: String;
    nextUrl: String;
    nextLabel: String;
    redirect: Function;
}

export const RedirectLabel: FC<RedirectLabelProps> = ({ redirect, pathname, nextUrl, nextLabel }) => (
    <div>
        You are on {pathname} <br/>
        <button onClick={() => redirect(nextUrl)}>
            Go to {nextLabel}
        </button>
    </div>
)