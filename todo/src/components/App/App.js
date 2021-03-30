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
              id: 1
          },
          {
              value: 'Прописать README',
              isDone: false,
              id: 2
          },
          {
              value: 'Пофиксить баги',
              isDone: true,
              id: 3
          },
          {
              value: 'Сдать проект',
              isDone: false,
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

  render() {
    return (
      <div className = { styles.wrap }>
        <h1 className = { styles.title }>TODOLIST</h1>
        <InputItem />
        <ItemList items = { this.state.items } onClickDone = { this.onClickDone } />
        <Footer count = {this.state.count} />
      </div>);
    }
};

export default App; 