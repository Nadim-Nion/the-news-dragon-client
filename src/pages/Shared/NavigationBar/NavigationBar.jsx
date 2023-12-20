import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaRegUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {

    const { user } = useContext(AuthContext);

    return (
        <Container className='mb-4'>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='pe-2 text-decoration-none' to="/category/0">Home</Link>
                            <Link className='pe-2 text-decoration-none' to="/about">About</Link>
                            <Link className='text-decoration-none' to="/career">Career</Link>
                            {/* <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link> */}
                        </Nav>
                        <Nav >
                            <div className='pe-2'>
                                {user &&
                                    <FaRegUserCircle style={{ fontSize: "2rem" }} />
                                }
                            </div>

                            {user ?
                                <Button variant="secondary">Log Out</Button>
                                :
                                <Link to="/login">
                                    <Button variant="secondary">Log In</Button>
                                </Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;