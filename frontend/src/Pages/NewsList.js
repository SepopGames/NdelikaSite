import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Container, Card, ListGroup } from 'react-bootstrap';

const NewsList = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/news/')
            .then(response => {
                console.log(response.data);  // Проверьте данные
                setNews(response.data);
            })
            .catch(error => {
                console.error("Ошибка при загрузке новостей:", error);
            });
    }, []);

    return (
        <Container className="mt-4" style={{ paddingTop: '148px' }}>
            <h1 className="mb-4">Новости</h1>
            <ListGroup>
                {news.map(item => (
                    <ListGroup.Item key={item.id} className="mb-3">
                        <Card>
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.content}</Card.Text>
                                <Card.Text>
                                    <small className="text-muted">
                                        Дата создания: {new Date(item.created_at).toLocaleDateString()}
                                    </small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
};

export default NewsList;