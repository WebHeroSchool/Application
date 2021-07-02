import React from 'react';
import styles from './Item.module.css';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import classnames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


    const Item = ({ value, isDone, onClickDone, id, onClickDelete, newValue, setNewValue, editItem, newItemValue, isEditing }) => {

      if (isEditing) {
        return (
          <div className = { styles.container }
            onKeyPress={ (e) => {
              if (e.key === 'Enter') {
                newItemValue(id, newValue)
              }
            }
          }>
            <TextField
              id = 'standard-required'
              size= 'large'
              fullWidth
              style = {{ margin: 5 }}
              value = { newValue }
              onChange = { e => { setNewValue(e.target.value) }
            }
            />
          </div>
        )
      } else {
            return (
              <div className = { styles.container }
                onDoubleClick = { () => editItem(id, value) }>
                  <Checkbox
                    checked = { isDone }
                    color = "secondary" 
                    inputProps = {{ 'aria-label': 'controlled' }} 
                    onClick = {() => onClickDone(id, isDone)}
                  />
                  <span
                      className = { 
                          classnames ({
                              [styles.item]: true,
                              [styles.done]: isDone,
                          })
                      }>{ value }
                  </span>
                  <div>
                      <IconButton 
                          aria-label="delete" 
                          className = { styles.basket }
                          onClick = {() => onClickDelete(id)}
                      >   
                          <DeleteIcon />          
                      </IconButton>   
                  </div>
              </div>
        )
    }   
}

Item.defaultProps = {
    isDone: false,
};

Item.propTypes = {
    value: PropTypes.oneOfType ([
        PropTypes.string,
        PropTypes.number,
        PropTypes.func,
        PropTypes.object
    ]),
    isDone: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
};

export default Item;
