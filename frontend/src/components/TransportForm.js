import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function TransportForm() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [method, setMethod] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    const token = Cookies.get('csrftoken');
    if (token) {
      setCsrfToken(token);
    } else {
      console.error('CSRF-токен не найден в куки.');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      from,
      to,
      method,
      phone,
      email,
      comment,
    };

    try {
      const response = await axios.post('/api/submit-transport-request/', formData, {
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,
        },
      });
      if (response.status === 200) {
        setMessage('Заявка успешно отправлена!');
      } else {
        setMessage('Ошибка при отправке заявки.');
      }
    } catch (error) {
      setMessage('Ошибка при отправке заявки.');
      console.error('Error:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Рассчитать стоимость</h1>
      <div>
        <Form.Label>Откуда: </Form.Label>
        <Form.Control
          type="text"
          placeholder="Введите адрес"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          required
        />
      </div>
      <div style={{ paddingTop: '20px' }}>
        <Form.Label>Куда: </Form.Label>
        <Form.Control
          type="text"
          placeholder="Введите адрес"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          required
        />
      </div>
      <label style={{ paddingTop: '20px' }}>Метод перевозки:</label>
      {['radio'].map((type) => (
        <div key={`radio-${type}`} className="mb-3">
          <Form.Check
            type={type}
            id={`default-${type}`}
            label={`Автомобильные грузоперевозки FTL`}
            value="Автомобильные грузоперевозки_FTL"
            checked={method === 'Автомобильные грузоперевозки_FTL'}
            onChange={() => setMethod('Автомобильные грузоперевозки_FTL')}
          />
          <Form.Check
            type={type}
            id={`default-${type}`}
            label={`Автомобильные грузоперевозки LTL`}
            value="Автомобильные_грузоперевозки_LTL"
            checked={method === 'Автомобильные_грузоперевозки_LTL'}
            onChange={() => setMethod('Автомобильные_грузоперевозки_LTL')}
          />
          <Form.Check
            type={type}
            id={`default-${type}`}
            label={`Авиаперевозки`}
            value="Авиаперевозки"
            checked={method === 'Авиаперевозки'}
            onChange={() => setMethod('Авиаперевозки')}
          />
          <Form.Check
            type={type}
            id={`default-${type}`}
            label={`Морские и речные перевозки`}
            value="Морские_и_речные_перевозки"
            checked={method === 'Морские_и_речные_перевозки'}
            onChange={() => setMethod('Морские_и_речные_перевозки')}
          />
          <Form.Check
            type={type}
            id={`default-${type}`}
            label={`Негабаритные перевозки, заказ трала`}
            value="Тралл"
            checked={method === 'Тралл'}
            onChange={() => setMethod('Тралл')}
          />
        </div>
      ))}
      <div>
        <Form.Label>Телефон: </Form.Label>
        <Form.Control
          type="tel"
          placeholder="Введите номер телефона"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div style={{ paddingTop: '20px' }}>
        <Form.Label>Электронная почта: </Form.Label>
        <Form.Control
          type="email"
          placeholder="Введите ваш e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div style={{ paddingTop: '20px' }}>
        <Form.Label>Комментарий: </Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <Button variant="primary" type="submit">Отправить заявку</Button>
      {message && <p>{message}</p>}
    </Form>
  );
}

export default TransportForm;