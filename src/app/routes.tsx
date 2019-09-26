import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Sample } from '../view/sample'
import { Another } from '../view/another'

export const Routes: React.FC = () => (
    <Switch>
        <Route exact path="/">
            <Sample />
        </Route>
        <Route path="/another" component={Another} />
    </Switch>
)