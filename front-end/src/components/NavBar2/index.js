import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Dropdown } from 'react-bootstrap';
import './style.css';

const CustomNavbar = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Navbar.Brand href="#home" className="brand-logo">NUTRICHEF</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto navbar-icons">
          {/* Botão de pesquisa */}
          <Button variant="link" className="nav-btn">
            <img src="search-icon.png" alt="Search" />
          </Button>
          
          {/* Botão de favoritos */}
          <Button variant="link" className="nav-btn">
            <img src="star-icon.png" alt="Favorites" />
          </Button>

          {/* Botão de perfil com dropdown */}
          <Dropdown align="end">
            <Dropdown.Toggle variant="link" className="nav-btn profile-btn">
              <img src="profile-icon.png" alt="Profile" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#action1">Perfil</Dropdown.Item>
              <Dropdown.Item href="#action2">Configurações</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#logout">Sair</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
