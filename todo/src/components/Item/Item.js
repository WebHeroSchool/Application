import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';

const Item = ({ value, isDone }) => (<div>
    <span className = { 
        classnames ({
            [styles.item]: true,
            [styles.done]: isDone
        }) 
        }>{ value }</span>
</div>);

export default Item;