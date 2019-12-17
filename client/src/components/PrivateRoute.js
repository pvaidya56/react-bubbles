import React, { Component } from 'react';
import BubblePage from './BubblePage'
import { Route, Redirect } from 'react-router-dom'
 const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} 
    render={props => 
    localStorage.getItem("token") ? (
        <BubblePage {...props} />)
        : (
            <Redirect to="/" />
        )
    } />
);

export default PrivateRoute