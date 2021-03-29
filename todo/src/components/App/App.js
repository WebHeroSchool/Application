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
              isDone: true
          },
          {
              value: 'Прописать README',
              isDone: false
          },
          {
              value: 'Пофиксить баги',
              isDone: true
          },
          {
              value: 'Сдать проект',
              isDone: false
          }
      ]
  };

  render() {
    return (
      <div className = { styles.wrap }>
        <h1 className = { styles.title }>TODOLIST</h1>
        <InputItem />
        <ItemList items = { this.state.items } />
        <Footer count = {2} />
      </div>);
    }
};

export default App; 