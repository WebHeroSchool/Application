import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';

const InputItem = () => (<div className = { styles.input }>
    <TextField 
    id="standard-helperText"
    style={{ margin: 8 }}
          placeholder="Add new task"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
    label="What would you want to add?"
    />
</div>)

export default InputItem; 

          