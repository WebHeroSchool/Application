import React from 'react';
import Item from '../Item/Item';
import PropTypes from 'prop-types';
import notes from './img/notes.ico'
import styles from './ItemList.module.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Trans } from 'react-i18next';


const ItemList = ({ items, onClickDone, onClickDelete, dragStartHandler, dragEndHandler, dragOverHandler, dropHandler, sortItems, editItem, newValue, setNewValue, newItemValue }) => {
    if (items.length === 0) {
        return (
            <div className = { styles.empty__wrapper}>
                <img src = { notes } alt = 'Error' className = { styles.empty__logo } />
                <h3 className = { styles.empty__text}><Trans i18nKey = "description.ItemList">It is the best time to fill your list up!</Trans></h3>
            </div>
        )
    } else {
        return (<div className = { styles.wrapperlist }>
            <TransitionGroup component = 'ul' className = { styles.list }>
                { items.sort(sortItems).map(item => item.isVisible &&
                <CSSTransition
                key = { item.id }
                classNames = { 'item' }
                timeout = { 800 }
                >
                    <li className = { styles.list__item }
                        onDragStart = { (e) => dragStartHandler(e, item) }
                        onDragLeave = { (e) => dragEndHandler(e) }
                        onDragEnd = { (e) => dragEndHandler(e) }
                        onDragOver = { (e) => dragOverHandler(e) }
                        onDrop = { (e) => dropHandler(e, item) }
                        draggable = { true }>
                        <Item 
                            value = { item.value } 
                            isDone = { item.isDone } 
                            id = { item.id }
                            onClickDone = { onClickDone } 
                            onClickDelete = { onClickDelete }
                            isEditing = { item.isEditing }
                            editItem = { editItem }
                            newValue = { newValue }
                            setNewValue = { setNewValue }
                            newItemValue = { newItemValue }
                        />
                    </li>
                </CSSTransition> )}
            </TransitionGroup>
        </div>);
    }
}

ItemList.propTypes = {
    items: PropTypes.oneOfType ([
        PropTypes.array,
        PropTypes.string
    ])
}

 export default ItemList; 
 