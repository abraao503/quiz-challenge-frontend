import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
    component: Component,
    userRequired,
    ...rest
}){
    const user = localStorage.getItem('user');

    if(!user && userRequired){
      return <Redirect to="/" />
    }

    return <Route {...rest} component={Component}/>
}
