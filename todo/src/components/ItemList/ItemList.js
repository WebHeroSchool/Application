import React from 'react';
import Item from '../Item/Item'

const ItemList = ({ todoItem }) => (<ul>
    <li><Item todoItem={ todoItem } /></li>
    <li><Item todoItem={ 'Пофиксить баги' } /></li>
    <li><Item todoItem={ 'Усвоить урок' } /></li>
    <li><Item todoItem={ 'Потренироваться' } /></li>
  </ul>);

  export default ItemList; 