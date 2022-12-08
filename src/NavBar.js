import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
  } from 'reactstrap';
//   import LoginPopup from './LoginPopup';

  class NavBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        toggleNavbar: true
      };
  
      this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
        console.log(this.state.toggleNavbar)
        this.setState({
            toggleNavbar: !this.state.toggleNavbar
        });
        console.log(this.state.toggleNavbar)
    }


    render() {
        const { call } = this.props;
        return (
        
            <div>
                <Navbar color="dark" dark>
                    <NavbarToggler className="ml-auto" onClick={this.toggle}/>
                    <NavbarBrand href="/" className="mx-auto">
                    Hangman
                    </NavbarBrand>
                    <Button className="mr-auto" onClick={call}>Login</Button>
                    <Collapse isOpen={!this.state.toggleNavbar} navbar>
                    <Nav navbar>
                        <NavItem>
                        <NavLink href="/login/">Login</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/scores/">
                            Scores
                        </NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
    
  }



export default NavBar;