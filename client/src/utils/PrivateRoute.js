import React, { Component } from 'react';
import BubblePage from '../components/BubblePage'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} 
    render={props => 
    localStorage.getItem("token") ? (
        <BubblePage {...props} />)
        : (
            <Redirect to="/" />
        )
    } />
);