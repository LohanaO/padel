import React from 'react'
import './NavBar.css'
import { NavLink, Link } from 'react-router-dom'

import CardWidget from '../CardWidget/CardWidget'
import { Container, Nav, Navbar } from 'react-bootstrap'


 const NavBar = () => {
   
  return (
    <Navbar  expand="lg" className="header">
    
    
      <Container className='container-fluid'>
      
        <Navbar.Brand  >
        <Link to={"/"} style={{textDecoration:'none'}}>
        <h2 className='h2'>PADEL STORE  <img className='image' src={'../img/imagen.png'} alt='Logo Padel'/></h2>
      
    </Link>
        </Navbar.Brand>
        <Navbar.Toggle  className='hamb' aria-controls="basic-navbar-nav" />
  
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto li">
            <Nav.Link >
            <NavLink className='NavLink ' to={"/"}>Home</NavLink>
            </Nav.Link>
            <Nav.Link>
            <NavLink className='NavLink ' to={`/categoria/indumentaria`}>Indumentaria</NavLink>
            </Nav.Link>
            <Nav.Link>
            <NavLink className='NavLink ' to={`/categoria/paletas`}>Paletas</NavLink>
            </Nav.Link>
            <Nav.Link>
            <NavLink className='NavLink ' to={"/"}>Contacto</NavLink>
            </Nav.Link>
            </Nav>
            <CardWidget/>

        </Navbar.Collapse>
      </Container>
    </Navbar>
       
   
  )
}

export default NavBar

/*

 <nav className="navbar navbar-expand-lg ">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
               
              </li>
              <li className="nav-item">
                <NavLink className='Nav-link' to={`/categoria/indumentaria`}>Indumentaria</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='Nav-link' to={`/categoria/paletas`}>Paletas</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='Nav-link' to={"/"}>Contacto</NavLink>
              </li>
            </ul>
        </nav>
        <CardWidget/>

*/