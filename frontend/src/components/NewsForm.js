import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const NewsForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/news/', { title, content })
            .then(response => {
                console.log(response.data);
                setSuccess(true);
                setTitle('');
                setContent('');
            })
            .catch(error => {
                console.error(error);
                setSuccess(false);
            });
    };

    return (
        <Container className="mt-4">
            <h1 className="mb-4">Добавить новость</h1>
            {success && <Alert variant="success">Новость успешно добавлена!</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Заголовок</Form.Label>
                    <Form.Control
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Введите заголовок"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Содержание</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Введите содержание"
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Добавить новость
                </Button>
            </Form>
        </Container>
    );
};

export default NewsForm;