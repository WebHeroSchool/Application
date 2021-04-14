import React from 'react';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import classnames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const Item = ({ value, isDone, onClickDone, id, onClickDelete }) => (<div className = { styles.container }>
    <Checkbox
        defaultUnchecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        onClick = {() => onClickDone(id)}
    />
    <span className = { 
        classnames ({
            [styles.item]: true,
            [styles.done]: isDone,
        }) 
        }>{ value }
    </span>
    <div>
        <IconButton aria-label="delete" className = { styles.basket }>
            <DeleteIcon
            onClick = {() => onClickDelete(id)}
            />
        </IconButton>   
    </div>
</div>);

export default Item;
