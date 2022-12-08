// import logo from './logo.svg';
import './App.css';
// import { MDBSwitch } from 'mdb-react-ui-kit';
import {useState} from "react";
import React from 'react';
// import NavBar from './NavBar.js';
// import LoginPopup from './LoginPopup.js';
import MainPage from './components/mainPage';
import Hangman from './components/Hangman';
// import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Modal from "./components/Modal"

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <MainPage />,
//   },
//   {
//     path: '/play',
//     element: <Hangman />,
//   },
// ])

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
  const [showModal, setShowModal] = useState(false);
  const [gameText, setGameText] = useState("");

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
      {/* <RouterProvider router={router} /> */}
      <Router>
        <Routes>
          <Route  path="/" element={<MainPage/>}/>
          <Route  path="/play" element={<Hangman setShowModal={setShowModal} setGameText={setGameText}/>}/>
        </Routes>
      </Router>
      
      {showModal && <Modal setShowModal={setShowModal} gameText={gameText}></Modal>}
       
      </div>
    </div>
  );
}

export default App;
