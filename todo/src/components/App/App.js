import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';


class App extends React.Component {
  state = {
      items: [
          {
              value: 'Написать приложение',
              isDone: true,
              isDelete: false,
              id: 1
          },
          {
              value: 'Прописать README',
              isDone: true,
              isDelete: false,
              id: 2
          },
          {
              value: 'Пофиксить баги',
              isDone: true,
              isDelete: false,
              id: 3
          },
          {
              value: 'Сдать проект',
              isDone: true,
              isDelete: false,
              id: 4
          }
      ],
      count: 2
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

  onClickDelete = id => {
    const newListItems = this.state.items.map(item => {
      const newItem = { ...item };
      
      if (item.id === id) {
        newItem.isDelete = !newItem.isDelete;
      }

      return newItem;
  });

  this.setState({ items: newListItems })
  };

  render() {
    return (
      <div className = { styles.wrap }>
        <h1 className = { styles.title }>TODOLIST</h1>
        <InputItem />
        <ItemList items = { this.state.items } onClickDone = { this.onClickDone } onClickDelete = { this.onClickDelete } />
        <Footer count = {this.state.count} />
      </div>);
    }
};

export default App; 