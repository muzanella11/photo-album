import React, { Component } from 'react'
import { IHeaderProps, IHeaderState } from './types'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

class Header extends Component<IHeaderProps, IHeaderState> {
  constructor (props: IHeaderProps) {
    super(props)
  }

  state = {
    accountMenus: [
      {
        name: 'profile',
        label: 'Profile',
        url: '/profile'
      },
      {
        name: 'favorite',
        label: 'My favorite',
        url: '/favorite'
      }
    ]
  }

  render () {
    return (
      <Navbar bg="light" expand="lg" className="c-header">
        <Navbar.Brand href="/">Photo Album</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            { 
              this.props.entries && this.props.entries.length > 0 
              ? this.props.entries.map((item, index) => 
                <Nav.Link href={item.url} key={index}>{item.label}</Nav.Link>
              )
              : ''
            }

            <NavDropdown title="Mark Otto" id="accountDropdownMobile" className="d-block d-md-none">
              { 
                this.state.accountMenus && this.state.accountMenus.length > 0 
                ? this.state.accountMenus.map((item, index) => 
                  <NavDropdown.Item href={item.url} key={index}>{item.label}</NavDropdown.Item>
                )
                : ''
              }
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end d-none d-md-none">
          <NavDropdown title="Mark Otto" id="accountDropdown" className="header__account">
            {
              this.state.accountMenus && this.state.accountMenus.length > 0 
              ? this.state.accountMenus.map((item, index) => 
                <NavDropdown.Item href={item.url} key={index}>{item.label}</NavDropdown.Item>
              )
              : ''
            }
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header
