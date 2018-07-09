import React from 'react'
import { Navbar, NavbarBrand, Container, NavbarNav } from 'mdbreact'

const NavbarAuthenticated = (props) => (
    <Navbar color="black">
        <Container>
            <NavbarBrand>
                Brand
            </NavbarBrand>
            <NavbarNav right>
                {props.user}
            </NavbarNav>
        </Container>
    </Navbar>
)

const NavbarUnAuthenticated = () => (
    <Navbar color="black">
        <Container>
            <NavbarBrand>
                Brand
            </NavbarBrand>
        </Container>
    </Navbar>
)

const NavbarHOC = (test, Authenticated, UnAuthenticated) => props => (
    test ? <Authenticated {...props} /> : <UnAuthenticated />
)


const test = true
const result = () => NavbarHOC(test, NavbarAuthenticated, NavbarUnAuthenticated)({ user: 'Marcin' })
export default result
