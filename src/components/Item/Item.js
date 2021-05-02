import React from 'react';
import styles from './Item.module.css';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import classnames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class Item extends React.Component {
  /*  componentDidMount() {
        this.interval = setInterval(() => console.log('Cut it out!'), 3000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }*/

    render() {
        const { value, isDone, onClickDone, id, onClickDelete } = this.props;

        return (<div className = { styles.container }>
            <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                onClick = {() => onClickDone(id, isDone)}
            />
            <span className = { 
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
        </div>);
    }
}   

Item.defaultProps = {
    isDone: false,
};

Item.propTypes = {
    value: PropTypes.oneOfType ([
        PropTypes.string,
        PropTypes.number
    ]),
    /*isDone: PropTypes.bool.isRequired,*/
    id: PropTypes.number.isRequired
};

export default Item;
