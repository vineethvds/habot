import Link from 'next/link';
import React from 'react';
import { Button, Dropdown, NavDropdown, SplitButton } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import style from './landingNav.module.css';

const Index = () => {
  return (
    <>
      <Navbar expand="lg" className={`${style.customNav}`}>
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '150px' }}
              navbarScroll
            >
            </Nav>
            <Form className={`${style.navFlex}`}>

              <Link href="">
                <a className={`${style.navLink}`}>How it works ? </a>
              </Link>
              <Link href="">
                <a className={`${style.navLink}`}>Become a partner </a>
              </Link>
              <Link href="">
                <a className={`${style.navLink}`}><svg className='me-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15V3M12 15L8 11M12 15L16 11M2 17L2.621 19.485C2.72915 19.9177 2.97882 20.3018 3.33033 20.5763C3.68184 20.8508 4.11501 20.9999 4.561 21H19.439C19.885 20.9999 20.3182 20.8508 20.6697 20.5763C21.0212 20.3018 21.2708 19.9177 21.379 19.485L22 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                  Download App</a>
              </Link>
              <button className={`${style.loginBtn}`}>Login / Sign up</button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Index;