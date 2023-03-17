/* eslint-disable no-alert */
import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function FullPizza() {
  const [pizza, setPizza] = React.useState<{
    title: string,
    imageUrl: string,
    price: number,
  }>();

  const { id } = useParams();

  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(`https://6318d0cb6b4c78d91b2fe4ef.mockapi.io/items/${id}`);
        setPizza(data);
      } catch (error) {
        alert('Ошибка получения данных с сервера');
        console.log(error);
        navigate('/');
      }
    }
    fetchPizza();
  }, [id, navigate]);

  if (!pizza) {
    // eslint-disable-next-line react/jsx-filename-extension
    return <>Loading...</>;
  }

  return (
    <div className='container'>
      <h1>{pizza.title}</h1>
      <p onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>←назад</p>
      <img src={pizza.imageUrl} alt="pizza" />
      <p>Цена {pizza.price} руб.</p>
    </div>
  );
}
