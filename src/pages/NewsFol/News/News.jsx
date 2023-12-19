import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsight from '../EditorsInsight/EditorsInsight';

const News = () => {
    const news = useLoaderData();
    const { image_url, details, title, category_id } = news;

    return (
        <div>
            <Card className='p-3'>
                <h3 className='mb-5'>Dragon News</h3>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className='text-dark'>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button className='mt-3' variant="danger">
                            <FaArrowLeft />
                            <span className='ms-2'>All news in this category</span>
                        </Button>
                    </Link>
                </Card.Body>
            </Card>

            <EditorsInsight></EditorsInsight>
        </div>
    );
};

export default News;