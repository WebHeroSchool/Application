import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const App = () => {
  const items = [
    {
    value: 'Написать приложение'
    },
    {
    value: 'Прописать README'
    },
    {
    value: 'Пофиксить баги'
    },
    {
    value: 'Сдать проект'
    }
  ];
  
  return (
  <div>
    <h1>TODOLIST</h1>
    <InputItem />
    <ItemList items = { items } />
    <Footer count = {4} />
  </div>);
}
export default App; 