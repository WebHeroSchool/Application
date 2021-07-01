import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';
import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';
import { Trans } from 'react-i18next';


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
    const errorEmpty = this.props.isError;
    const errorSame = this.props.isErrorSame;
    const success = this.props.isSuccess;
    const edited = this.props.isEdited;
      let alert;
    
      if ( errorEmpty ) {
        alert = <Alert 
        severity = "error"><Trans i18nKey = "description.InputItem__empty">This field cannot be empty!</Trans>
        </Alert>
		  } else if ( errorSame ) {
        alert = <Alert 
        severity = "error"><Trans i18nKey = "description.InputItem__same">This task has already been added!</Trans>
        </Alert>
      } else if ( success ) {
        alert = <Alert 
        severity = "success"><Trans i18nKey = "description.InputItem__success">Your task was successfully added!</Trans>
        </Alert>
      } else if ( edited ) {
        alert = <Alert 
        severity = "warning"><Trans i18nKey = "description.InputItem__edited">Your task was successfully edited!</Trans>
        </Alert>
      } else {
        alert = ''
      };

    return (
    
        <div className = { styles.input }>
            <div className = { styles.alert }>
              { alert }
            </div>
          <TextField 
            id = "standard-helperText" 
            style = {{ marginRight: 11 }}
            fullWidth
            margin = "normal"
            InputLabelProps={{
              shrink: true
            }}
            value = { this.state.InputValue }
            onChange = {event => this.setState({ InputValue: event.target.value })}
          />
          <button 
            variant="contained" 
            color = "primary" 
            className = { styles.create }
            onClick = { this.onButtonClick } 
          >
            <Trans i18nKey = "description.InputItem__create">CREATE</Trans> 
          </button>
        </div>);
  }
};

InputItem.propTypes = {
  InputValue: PropTypes.oneOfType ([
    PropTypes.string
  ])
}

export default InputItem; 

          