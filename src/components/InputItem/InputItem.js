import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';


class InputItem extends React.Component {
  state = {
    InputValue: ''
  };

  onButtonClick = () => {
    this.setState ({
      InputValue: ''
    });

    this.props.onClickAdd(this.state.InputValue);
  }

  render() {
    //const { onClickAdd } = this.props;

    const errorEmpty = this.props.isError;
    const errorSame = this.props.isErrorSame;
    const success = this.props.isSuccess;
    
    
    let alert;

      if ( errorEmpty ) {
        alert = <Alert 
        severity="error">This field cannot be empty!
        </Alert>
		  } else if ( errorSame ) {
        alert = <Alert 
        severity="error">This task has already been added!
        </Alert>
      } else if ( success ) {
        alert = <Alert 
        severity="success">Your task successfully added!
        </Alert>
      } else {
        alert = ''
      }

    return (<div className = { styles.input }>
    
    <div>
      { alert }
    </div>

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
      value = { this.state.InputValue }
      onChange = {event => this.setState({ InputValue: event.target.value })}
    />

    <Button 
      variant="contained" 
      color="primary" 
      className = { styles.create }
      onClick = { this.onButtonClick } 
    >
      Create 
    </Button>
</div>);
  }
};

InputItem.propTypes = {
  InputValue: PropTypes.oneOfType ([
    PropTypes.string
  ])
}

export default InputItem; 

          