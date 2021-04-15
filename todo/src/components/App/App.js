import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
  state = {
      isError: false,
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
  };

  onClickDone = id => {
    const newListItems = this.state.items.map(item => {
      const newItem = { ...item };

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    });

    this.setState({ items: newListItems })
  };

  onClickDelete = id => this.setState(state => ({ items: state.items.filter(item => item.id !== id)}));

  onClickBox = isDone => {
    if ( isDone === true ) {
      this.setState(state => ({
      clickbox: state.clickbox + 1
      }))
    }
  };

  onClickAdd = value => {
    if ( value !== '') {
      this.setState(state => ({ 
        items: [
          ...state.items,
              {
                value,
                isDone: false,
                id: state.count + 1
              }
        ],
        count: state.count + 1,
        isError: false
      }))
} else {
  this.setState(state => ({
    isError: true
  })) 
  }
}

  render() {
    return (
      <div className = { styles.wrap }>
        <h1 className = { styles.title }>TODOLIST</h1>
        <InputItem 
          onClickAdd = { this.onClickAdd }
          isError = { this.state.isError } 
        />
        <ItemList items = { this.state.items } 
        onClickDone = { this.onClickDone } 
        onClickDelete = { this.onClickDelete } 
        />
        <Footer count = { this.state.count }/>
      </div>);
    }
};

export default App; 