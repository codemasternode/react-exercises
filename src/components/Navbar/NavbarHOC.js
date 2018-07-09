import React from 'react'


export const NavbarHOC = (test, Authenticated, UnAuthenticated) => props => (
    test ? <Authenticated {...props} /> : <UnAuthenticated {...props} />
)