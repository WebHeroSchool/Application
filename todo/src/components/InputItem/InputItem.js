import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';
import Button from '@material-ui/core/Button';

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
    <Button variant="contained" color="primary" className = { styles.create }>
      Create
    </Button>
</div>)

export default InputItem; 

          