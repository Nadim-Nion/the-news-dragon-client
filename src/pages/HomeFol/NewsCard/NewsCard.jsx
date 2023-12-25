import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating';
import { Link } from 'react-router-dom';
import '@smastrom/react-rating/style.css';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, rating, total_view } = news;

    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
                <div className='ps-2 flex-grow-1'>
                    <p className='text-dark mb-0'>{author?.name}</p>
                    <p><small className='text-dark'>{moment(author?.published_date).format('YYYY-MM-D')}</small></p>
                </div>
                <div>
                    <FaRegBookmark />
                    <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text className='text-dark'>
                    {details.length < 250 ? <>{details}</> :
                        <>{details.slice(0, 250)}.... <Link className='text-danger text-decoration-none' to={`/news/${_id}`}>Read More</Link> </>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1 d-flex'>
                    <Rating style={{ maxWidth: 100 }} value={rating?.number} readOnly />
                    <span className='ps-2'>{rating?.number}</span>
                </div>
                <div>
                    <FaEye /> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;