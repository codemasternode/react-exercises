import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Error } from './Error'


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest}
        render={(props) => (
            false
                ? <Component {...props} />
                : <Redirect to="/login" />
        )}

    />
)


function mapStateToProps({ loginStore }) {
    return {
        loginStore
    }
}

export default PrivateRoute