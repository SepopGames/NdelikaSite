import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Container, Card, ListGroup, Alert } from 'react-bootstrap';

const NewsList = () => {
    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('/api/news/') // Relative URL, proxied to http://127.0.0.1:8000/api/news/
            .then(response => {
                console.log('News data:', response.data);
                setNews(response.data);
                setError(null);
            })
            .catch(error => {
                console.error('Ошибка при загрузке новостей:', error.message);
                setError('Не удалось загрузить новости. Проверьте сервер или обратитесь к администратору.');
            });
    }, []);

    return (
        <Container className="mt-4" style={{ paddingTop: '148px' }}>
            <h1 className="mb-4">Новости</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <ListGroup>
                {news.length > 0 ? (
                    news.map(item => (
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
                    ))
                ) : (
                    !error && <ListGroup.Item>Нет доступных новостей.</ListGroup.Item>
                )}
            </ListGroup>
        </Container>
    );
};

export default NewsList;