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
    <div className="container">
      <p className='full-pizza-arrow' onClick={() => navigate(-1)}>←назад</p>
      <div className="full-pizza-wrappper">
        <div className='content-full-pizza'>
          <div className="content-left">
            <img className='full-pizza-img' src={pizza.imageUrl} alt="pizza" />
          </div>
          <div className="content-right">

            <h1 className='full-pizza-title'>{pizza.title}</h1>

            <p>Фирменный соус, моцарелла, цыпленок и томатный соус.
              Великолепная пицца "{pizza.title}" с куриной грудкой, помидорами,
              болгарским и острым перцем, зеленью, оливками, двумя видами сыра
              и острым соусом от "Ваша Пицца". Остро, обжигающе, запоминающийся вкус!</p>

            <h2>Цена: от {pizza.price} руб.</h2>

          </div>
       </div>
      </div>
    </div>
  );
}
