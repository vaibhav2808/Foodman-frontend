// import logo from './logo.svg';
import './App.css';
// import { MDBSwitch } from 'mdb-react-ui-kit';

import React from 'react';
// import NavBar from './NavBar.js';
// import LoginPopup from './LoginPopup.js';
import MainPage from './components/mainPage';
import Hangman from './components/Hangman';
import { createBrowserRouter, Route,RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/play',
    element: <Hangman />,
  },
])

// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
// } from 'reactstrap';

function App() {
  // const [collapsed, setCollapsed] = useState(true);

  // const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div >
      <div className="sm lg">
      {/* <Navbar color="dark" dark>
        
        <NavbarToggler onClick={toggleNavbar} className="ml-auto" />
        <NavbarBrand href="/" className="mx-auto">
          Hangman
        </NavbarBrand>
        <Collapse isOpen={!collapsed} navbar>
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
      </Navbar> */}

      {/* <LoginPopup /> */}
      {/* <MainPage /> */}
      <RouterProvider router={router} />
      
       
      </div>
    </div>
  );
}

export default App;
