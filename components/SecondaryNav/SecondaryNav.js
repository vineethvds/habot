import React from 'react';
import style from './SecondaryNav.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Dropdown, SplitButton } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const SecondaryNav = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const home = router.asPath;
  console.log(router);


  return (

    <>
      <Navbar sticky="top" className={`${style.customNav}`} expand="lg">
        <Navbar.Brand href="#" className={`${style.logoStyle}`}>LOGO</Navbar.Brand>
        <Container fluid className={`${style.navFlex}`}>
          <Form className={`d-flex align-items-center justify-center ${style.navDisplay}`}>
            <div><svg width="33" height="35" viewBox="0 0 33 35" xmlns="http://www.w3.org/2000/svg" className={`${style.iconMobileView}`}>
              <path d="M32.75 11.0833V25.3333C32.75 27.075 31.2875 28.5 29.5 28.5H6.75L0.25 34.8333V6.33333C0.25 4.59167 1.7125 3.16667 3.5 3.16667H19.9125C19.75 3.64167 19.75 4.275 19.75 4.75C19.75 5.225 19.75 5.85833 19.9125 6.33333H3.5V25.3333H29.5V12.5083C30.6375 12.35 31.775 11.7167 32.75 11.0833ZM23 4.75C23 7.44167 25.1125 9.5 27.875 9.5C30.6375 9.5 32.75 7.44167 32.75 4.75C32.75 2.05833 30.6375 0 27.875 0C25.1125 0 23 2.05833 23 4.75Z" fill="white" />
            </svg>
            </div>
            <div className={`${style.icon}`} >
              <Dropdown>
                <Dropdown.Toggle className={style.dropdown2} variant="" id="dropdown-basic">
                  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="35" fill="white" className={`bi bi-bell ${style.iconMobileView}`} viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                  </svg>
                </Dropdown.Toggle>

                <Dropdown.Menu className={` ${style.dropdownCard}`}>
                  <div className={` ${style.NotificationHeader}`}>
                    <h2>4 New Notification</h2>
                    <Form>
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        label=""
                      />
                    </Form>
                  </div>
                  <div className={style.notificationBody}>
                    <div className={style.read}>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4" cy="4" r="4" fill="#FFA412" />
                      </svg>
                      <h3>Transaction completed</h3>
                      <p>1h</p>
                    </div>
                    <div className={style.unRead}>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4" cy="4" r="4" fill="#FFA412" />
                      </svg>
                      <h3>Transaction completed</h3>
                      <p>1h</p>
                    </div>
                  </div>
                </Dropdown.Menu>
              </Dropdown>


            </div>
            <div className={`d-flex  align-items-center `} ><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className={`bi bi-person-circle ${style.iconMobileView}`} viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg><span className={`m-0 p-0 mx-3 ${style.userNameShow}`}>David Brown</span><Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic" className={`${style.dropdownColor}`}>

                </Dropdown.Toggle>

                <Dropdown.Menu className={style.dropdownMenu}>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Form>
          <Navbar.Toggle aria-controls="navbarScroll" className='border-none'>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className={`ms-auto  my-2 mx-4 my-lg-0 text-center ${style.navLinkStyle}`}
              style={{ maxHeight: '180px' }}
            >
              {/* <Link href="/" >
                  <a className={home === "/" ? style.active : style.nonActive}>Dashboard</a>
                </Link> */}
              <Link href="/job-post">
                <a className={currentRoute === "/job-post" ? style.active : style.nonActive}>Job Post</a>
              </Link>
              {/* <Link href="/payment-history">
                  <a className={currentRoute === "/payment-history" ? style.active : style.nonActive}>Payment History</a>
                </Link>
                <Link href="/posted-job">
                  <a className={currentRoute === "posted-job" ? style.active : style.nonActive}>Posted Job</a>
                </Link> */}
            </Nav>
            <Form className={`d-flex align-items-center justify-center ${style.navHidden}`}>
              <div><svg width="27" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.75 11.0833V25.3333C32.75 27.075 31.2875 28.5 29.5 28.5H6.75L0.25 34.8333V6.33333C0.25 4.59167 1.7125 3.16667 3.5 3.16667H19.9125C19.75 3.64167 19.75 4.275 19.75 4.75C19.75 5.225 19.75 5.85833 19.9125 6.33333H3.5V25.3333H29.5V12.5083C30.6375 12.35 31.775 11.7167 32.75 11.0833ZM23 4.75C23 7.44167 25.1125 9.5 27.875 9.5C30.6375 9.5 32.75 7.44167 32.75 4.75C32.75 2.05833 30.6375 0 27.875 0C25.1125 0 23 2.05833 23 4.75Z" fill="#ffff" />
              </svg>
              </div>
              <div className={`${style.icon}`} >
                <Dropdown>
                  <Dropdown.Toggle className={style.dropdown2} variant="" id="dropdown-basic">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" fill="#ffff" className="bi bi-bell" viewBox="0 0 16 16">
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                    </svg>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={` ${style.dropdownCard}`}>
                    <div className={` ${style.NotificationHeader}`}>
                      <h2>4 New Notification</h2>
                      <Form>
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          label=""
                        />
                      </Form>
                    </div>
                    <div className={style.notificationBody}>
                      <div className={style.read}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="4" cy="4" r="4" fill="#FFA412" />
                        </svg>
                        <h3>Transaction completed</h3>
                        <p>1h</p>
                      </div>
                      <div className={style.unRead}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="4" cy="4" r="4" fill="#FFA412" />
                        </svg>
                        <h3>Transaction completed</h3>
                        <p>1h</p>
                      </div>
                      <div className={style.unRead}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="4" cy="4" r="4" fill="#FFA412" />
                        </svg>
                        <h3>Transaction completed</h3>
                        <p>1h</p>
                      </div>
                      <div className={style.unRead}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="4" cy="4" r="4" fill="#FFA412" />
                        </svg>
                        <h3>Transaction completed</h3>
                        <p>1h</p>
                      </div>
                      <div className={style.unRead}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="4" cy="4" r="4" fill="#FFA412" />
                        </svg>
                        <h3>Transaction completed</h3>
                        <p>1h</p>
                      </div>
                      <div className={style.unRead}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="4" cy="4" r="4" fill="#FFA412" />
                        </svg>
                        <h3>Transaction completed</h3>
                        <p>1h</p>
                      </div>
                      <div className={style.unRead}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="4" cy="4" r="4" fill="#FFA412" />
                        </svg>
                        <h3>Transaction completed</h3>
                        <p>1h</p>
                      </div>
                      <div className={style.unRead}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="4" cy="4" r="4" fill="#FFA412" />
                        </svg>
                        <h3>Transaction completed</h3>
                        <p>1h</p>
                      </div>
                      <div className={style.unRead}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="4" cy="4" r="4" fill="#FFA412" />
                        </svg>
                        <h3>Transaction completed</h3>
                        <p>1h</p>
                      </div>
                      <div className={style.unRead}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="4" cy="4" r="4" fill="#FFA412" />
                        </svg>
                        <h3>Transaction completed</h3>
                        <p>1h</p>
                      </div>
                      <div className={style.unRead}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="4" cy="4" r="4" fill="#FFA412" />
                        </svg>
                        <h3>Transaction completed</h3>
                        <p>1h</p>
                      </div>
                      <div className={style.unRead}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="4" cy="4" r="4" fill="#FFA412" />
                        </svg>
                        <h3>Transaction completed</h3>
                        <p>1h</p>
                      </div>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>


              </div>
              <div className={`d-flex  align-items-center `} ><svg xmlns="http://www.w3.org/2000/svg" width="29" height="35" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
              </svg><span className='m-0 p-0 mx-3'>David Brown</span><Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic" className={`${style.dropdownColor}`}>

                  </Dropdown.Toggle>

                  <Dropdown.Menu className={style.dropdownMenu}>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

  );
};

export default SecondaryNav;