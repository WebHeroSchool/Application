import React, { useState, useEffect, Suspense } from 'react';
import { useTranslation } from 'react-i18next';


import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';

const Todo = () => {
  const initialState = {
      isError: false,
      isErrorSame: false,
      isSuccess: false,
      isEdited: false,
     /* items: [
          {
              value: 'Написать приложение',
              id: 1,
              order: 1,
              isVisible: true,
              isEditing: false
          },
          {
              value: 'Прописать README',
              id: 2,
              order: 2,
              isVisible: true,
              isEditing: false
          },
          {
              value: 'Пофиксить баги',
              id: 3,
              order: 3,
              isVisible: true,
              isEditing: false
          },
          {
              value: 'Сдать проект',
              id: 4,
              order: 4,
              isVisible: true,
              isEditing: false
          }
      ],*/
  
      items: JSON.parse(localStorage.getItem('items')) || [],
      count: JSON.parse(localStorage.getItem('count')) || 0,
    //  count: 0,
      newValue: '',
      filter: 'All',
      clickbox: 0 
  };

const { t } = useTranslation();

const [ items, setItems ] = useState(initialState.items);
const [ count, setCount ] = useState(initialState.count);
const [ isError, setIsError ] = useState(initialState.isError);
const [ isErrorSame, setIsErrorSame ] = useState(initialState.isErrorSame);
const [ isSuccess, setIsSuccess ] = useState(initialState.isSuccess);
const [ isEdited, setIsEdited ] = useState(initialState.isEdited);
const [ clickbox, setClickBox ] = useState(initialState.clickbox);
const [ filter, setFilter ] = useState(initialState.filter);
const [ currentItem, setCurrentItem ] = useState(initialState.null);
const [ newValue, setNewValue ] = useState(initialState.newValue);

useEffect(() => {
  localStorage.setItem('items', JSON.stringify(items));
  localStorage.setItem('count', JSON.stringify(count));
});

  const onClickDone = (id, isDone) => {
    const newListItems = items.sort(function(a, b){
      return b.id-a.id
    }).map(item => {
      const newItem = { ...item };

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    });

  if ( !isDone ) {
    setItems(newListItems)
    setClickBox((clickbox) => clickbox + 1)
  } else {
    setItems(newListItems)
    setClickBox((clickbox) => clickbox - 1)
    }
  };

  const onClickDelete = id => {
    const newItems = items.filter(item => item.id !== id);  

    setItems(newItems);
    
  if (count === 0) {
    setCount(count)
} else {
    setCount((count) => count - 1)
  }

    if (clickbox === 0) {
      setClickBox(clickbox)
  } else {
      setClickBox((clickbox) => clickbox - 1)
    }
  };

  const onClickDeleteDone = id => {
		const newItemList = items.filter(item => {
			return !item.isDone; 
		});
		  setItems(newItemList)
      setClickBox((clickbox) => clickbox = 0)
      setCount((count) => count - (count - newItemList.length))

	};


  let filterItems;

	switch (filter) {
    default:
			filterItems = items;
      break;
    case 'All':
			filterItems = items;
      break;
    case 'Completed':
			filterItems = items.filter(item => item.isDone);
			break;
    case 'In progress':
      filterItems = items.filter(item => !item.isDone);
	};

  const onFilterChange = filter => {
    items.sort(function(a, b){
      return b.id-a.id
    }); 
  setFilter(filter)
  }

	const counterCompleted = (items.filter((item) => item.isDone)).length;
  const counterInProgress = (items.filter((item) => !item.isDone)).length;


  const onClickAdd = value => {
    let isActive = true;
    const newItems = [
      ...items,
        {
          value,
          isDone: false,
          id: Date.now(),
          order: Date.now(),
          isVisible: isActive,
          isEditing: false
        }            
    ];

    newItems.reverse(function(a, b){
      return a.id-b.id
    });

    setTimeout(() => {
      setIsError(false)
      setIsErrorSame(false)
      setIsSuccess(false)
    }, 1500);

  const inputValidationSame = items.find(item => {
    return item.value === value;    
    });

    if (value === '' ) {
      setIsError(true)
      setItems(items)
    } else if (inputValidationSame) {
      setIsError(false)
      setIsErrorSame(true)
      setItems(items);
    } else {
      setIsError(false)
      setIsErrorSame(false)
      setIsSuccess(true)
      setCount((count) => count + 1)
      setItems(newItems)
    }

  };

  const dragStartHandler = (e, item) => {
    e.target.style.boxShadow = '0 5px 4px grey';
    setCurrentItem(item);
  };

  const dragEndHandler = e => {
    e.target.style.boxShadow = 'none';
  };

  const dragOverHandler = e => {
    e.preventDefault();
    e.target.style.boxShadow = '7px 6px 5px 3px grey';
  };

  const dropHandler = (e, item) => {
    e.preventDefault()

    setItems(items.map(elem => {
      if (elem.id === item.id) {
        return {...elem, order: currentItem.order}
      } else if (elem.id === currentItem.id) {
        return {...elem, order: item.order}
      }
      return elem
    }))
    e.target.style.boxShadow = 'none';
  };

  const sortItems = (a, b) => {
    if (a.order > b.order) {
      return 1
    } else {
      return -1
    }
  };

  const editItem = (id, value) => {
    const newItems = items.map(item => {
      const newItem = {...item};

      if (newItem.id === id) {
        newItem.isEditing = true;
      }

      return newItem;
    }); 

    setNewValue(value)
    setItems(newItems)
    
  };

  const newItemValue = (id, value) => {
    const newItems = items.map(item => {
      const newItem = {...item};

      if (newItem.id === id) {
        newItem.value = value;
        newItem.isEditing = false;
      }

      return newItem;
    }); 

    setNewValue('')
    setItems(newItems);
    setCount((count) => count - 1);

    setTimeout(() => {
      setIsError(false);
      setIsErrorSame(false);
      setIsSuccess(false);
      setIsEdited(false);
    }, 1500);

    const inputValidationSame = items.find(item => {
      return item.value === value;    
      });
  
      if (value === '' ) {
        setIsError(true);
        setItems(items);
      } else if (inputValidationSame) {
        setIsError(false);
        setIsErrorSame(true);
        setItems(items); 
      } else {
        setIsError(false);
        setIsErrorSame(false);
        setIsEdited(true);
        setCount((count) => count + 1);
        setItems(newItems);
      }

  }

    return (
      <Suspense fallback = 'Loading...'>
        <div className = { styles.wrap }>
          <h1 className = { styles.title }>{ t ('description.todolist__title')}</h1>
          <InputItem 
            onClickAdd = { onClickAdd }
            isError = { isError }
            isErrorSame = { isErrorSame } 
            isSuccess = { isSuccess }
            isEdited = { isEdited }
          />
          <ItemList 
            items = { filterItems } 
            onClickDone = { onClickDone } 
            onClickDelete = { onClickDelete }
            dragStartHandler = { dragStartHandler }
            dragEndHandler = { dragEndHandler }
            dragOverHandler = { dragOverHandler }
            dropHandler = { dropHandler }
            sortItems = { sortItems }
            editItem ={ editItem }
            newItemValue = { newItemValue }
            newValue={ newValue }
            setNewValue = { setNewValue }
          />
          <Footer
            count = { count }
            clickbox = { clickbox }
            filter = { filter }
            onFilterChange = { onFilterChange }
            counterCompleted = { counterCompleted }
            counterInProgress = { counterInProgress }
            onClickDeleteDone = { onClickDeleteDone }
            t = { useTranslation() }
          />
        </div>
      </Suspense>);
}

export default Todo; 