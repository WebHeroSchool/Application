import React, { useState, useEffect } from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const App = () => {
  const initialState = {
      isError: false,
      filter: 'all',
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
      count: 4,
      clickbox: 0 
  };

const [ items, setItems ] = useState(initialState.items);
const [ count, setCount ] = useState(initialState.count);
const [ isError, setIsError ] = useState(initialState.isError);
//const [ filter, setFilter ] = useState(initialState.filter);
const [ clickbox, setClickBox ] = useState(initialState.clickbox);

useEffect(() => {
  console.log('mount');
});

useEffect(() => {
  console.log('update');
});

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
    setCount((count) => count - 1 )
  };

  const onClickBox = isDone => {
        setClickBox((clickbox) => clickbox + 1);
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

  if ( value !== '') {
  setIsError(false)
  setCount((count) => count + 1); 
  setItems(newItems)
  } else {
  setIsError(true)
  }  
};

/*const filterItems = (items, filter) => {
  if (filter === 'All') {
    return items;
  } else if (filter === 'Inprogress') {
    return items.filter((item) => !item.isDone);
  } else if (filter === 'Completed') {
    return items.filter((item) => item.isDone);
  }
};

const filterChange = (filter) => {
  setFilter(filter);
}*/

    return (
      <div className = { styles.wrap }>
        <h1 className = { styles.title }>TODOLIST</h1>
        <InputItem 
          onClickAdd = { onClickAdd }
          isError = { isError } 
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
        />
      </div>);
}

export default App; 