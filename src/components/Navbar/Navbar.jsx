import React from 'react'
import { Navbar, NavbarBrand } from 'mdbreact'




const NavbarAuthenticated = (props) => (
    <Navbar color="indigo" dark>
        <NavbarBrand href="#">
            Authenticated
        </NavbarBrand>
    </Navbar>
)

const NavbarUnAuthenticated = () => (
    <Navbar color="indigo" dark>
        <NavbarBrand href="#">
            UnAuthenticated
        </NavbarBrand>
    </Navbar>
)

const NavbarHOC = (test, Authenticated, UnAuthenticated) => props => (
    test ? <Authenticated /> : <UnAuthenticated />
)


const test = true
const result = () => NavbarHOC(test, NavbarAuthenticated, NavbarUnAuthenticated)({ test })

export default result
