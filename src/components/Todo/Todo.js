import React, { useState, useEffect } from 'react';


import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';

const Todo = () => {
  const initialState = {
      isError: false,
      isErrorSame: false,
      isSuccess: false,
      items: [
          {
              value: 'Написать приложение',
              id: 1
          },
          {
              value: 'Прописать README',
              id: 2
          },
          {
              value: 'Пофиксить баги',
              id: 3
          },
          {
              value: 'Сдать проект',
              id: 4
          }
      ],
      filter: 'All',
      count: 4,
      clickbox: 0 
  };

const [ items, setItems ] = useState(initialState.items);
const [ count, setCount ] = useState(initialState.count);
const [ isError, setIsError ] = useState(initialState.isError);
const [ isErrorSame, setIsErrorSame ] = useState(initialState.isErrorSame);
const [ isSuccess, setIsSuccess ] = useState(initialState.isSuccess);
const [ clickbox, setClickBox ] = useState(initialState.clickbox);
const [ filter, setFilter ] = useState(initialState.filter);

useEffect(() => {
  console.log('update') ;
});

useEffect(() => {
  console.log('mount');
}, []);

  const onClickDone = (id, isDone) => {
    const newListItems = items.map(item => {
      const newItem = { ...item };

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    });

  if (isDone === false) {
    setItems(newListItems);
    setClickBox((clickbox) => clickbox + 1);
  } else {
    setItems(newListItems);
    setClickBox((clickbox) => clickbox - 1);
    }
  };

  const onClickDelete = id => {
    const newItems = items.filter(item => item.id !== id);  

    setItems(newItems);
    setCount((count) => count - 1);
    setClickBox((clickbox) => clickbox - 1);
  };

  const onClickBox = isDone => {
        setClickBox((clickbox) => clickbox + 1);
  };

  const filterItems = e => {
    let filter;

    switch (e.target.value) {
      default:
        filter = items;
        break;
      case "Completed":
        filter = items.filter(item => item.isDone === true );
        break;
      case "In progress":
        filter = items.filter(item => item.isDone !== true );
        break;
      case "All":
        filter = items;
    }
    
//  console.log(items);

    setItems(filter);
    setFilter(items);
  };
  
const onClickAdd = value => {
  const newItems = [
    ...items,
      {
        value,
        isDone: false,
        id: count + 1
      }            
  ];

  items.forEach(item => {
    if ( value === '' ) {
      setIsError(true);
      setItems(items);
    } else if ( value === item.value ) {
      setIsErrorSame(true);
      setItems(items);
      console.log(item.value);
      console.log(value);
    } else {
      setIsError(false);
      setIsErrorSame(false);
      setIsSuccess(true);
      setCount((count) => count + 1);
      setItems(newItems);
    }
  });

};


    return (
      <div className = { styles.wrap }>
        <h1 className = { styles.title }>TODOLIST</h1>
        <InputItem 
          onClickAdd = { onClickAdd }
          isError = { isError }
          isErrorSame = { isErrorSame } 
          isSuccess = { isSuccess }
        />
        <ItemList 
          items = { items } 
          onClickDone = { onClickDone } 
          onClickDelete = { onClickDelete }
        />
        <Footer
          count = { count }
          clickbox = { clickbox }
          onClickBox = { onClickBox }
          filter = { filter }
          filterItems = { filterItems }
        />
      </div>);
}

export default Todo; 