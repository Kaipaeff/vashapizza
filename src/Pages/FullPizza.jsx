import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function FullPizza() {
  const [pizza, setPizza] = React.useState();
  console.log('pizza===========>>>>>>>>>>>>>>>', pizza);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(`https://6318d0cb6b4c78d91b2fe4ef.mockapi.io/items/${id}`);
        setPizza(data);
      } catch (error) {
        // alert('Ошибка получения данных с сервера');
        console.log(error);
      }
    }
    fetchPizza();
  }, [id]);

  if (!pizza) {
    return 'Loading...';
  }

  return (
    <div className='container'>
      <h1>{pizza.title}</h1>
      <img src={pizza.imageUrl} alt="pizza" />
      <p>Цена {pizza.price} руб.</p>
    </div>
  );
}
