import React from 'react'
import { Navbar, NavbarBrand, Container, NavbarNav } from 'mdbreact'
import { NavbarHOC } from './NavbarHOC'
import { connect } from 'react-redux'

function mapStateToProps({ loginStore }) {
    return {
        loginStore
    }
}

const NavbarAuthenticated = (props) => (
    <Navbar color="black">
        <Container>
            <NavbarBrand>
                Brand
            </NavbarBrand>
            <NavbarNav right>
                {props.loginStore.user}
            </NavbarNav>
        </Container>
    </Navbar>
)

const NavbarUnAuthenticated = (props) => (
    <Navbar color="black">
        <Container>
            <NavbarBrand>
                Brand
            </NavbarBrand>
            <NavbarNav right>
                
            </NavbarNav>
        </Container>
    </Navbar>
)


const result = state => NavbarHOC(state.loginStore.auth, NavbarAuthenticated, NavbarUnAuthenticated)(state)
export default connect(mapStateToProps)(result)
