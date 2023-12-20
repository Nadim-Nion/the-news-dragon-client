import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";


const Header = () => {
    return (
        <Container className='mb-4'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p className='text-dark'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-light bg-dark' speed={80}>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights:  Brazil vs Croatia   !  Match Highlights:  Argentina vs Netherlands  !   Match Highlights: France vs England as........
                </Marquee>
            </div>

        </Container>
    );
};

export default Header;