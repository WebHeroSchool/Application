import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ todoItem }) => (<ul>
    <li><Item todoItem={ todoItem } /></li>
    <li><Item todoItem={ 'Прописать README' } /></li>
    <li><Item todoItem={ 'Пофиксить баги' } /></li>
    <li><Item todoItem={ 'Сдать проект' } /></li>
  </ul>);

  export default ItemList; 