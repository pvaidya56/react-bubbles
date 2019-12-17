import React, { Component } from 'react';

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} 
    render={props => 
    localStorage.getItem("token") ? (
        <Component {...props} />)
        : (
            <Redirect to="/login" />
        )
    } />
);