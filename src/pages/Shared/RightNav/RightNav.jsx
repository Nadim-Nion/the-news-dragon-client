import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'
import './RightNav.css';

const RightNav = () => {
    return (
        <div>
            <h2>Login With</h2>
            <Button className='mb-2' variant="outline-primary"> <FaGoogle /> Login With Google</Button>
            <Button variant="outline-secondary"> <FaGithub /> Login With GitHub</Button>

            <div className='mt-4'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>

            <QZone></QZone>

            <div className='img-container'>
                <img src={bg} alt="" />
                <div className='text-overlay'>
                    <h4 className='mb-3'>Create an
                        <span className='amazing-txt'>Amazing</span>
                        <span className='np-txt'>Newspaper</span>
                    </h4>
                    <p>Discover thousands of <br />
                        options, easy to <br />
                        customize layouts, one- <br />
                        click to import demo <br />
                        and much more.</p>
                    <button className='btn btn-danger ms-3 mt-3'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;