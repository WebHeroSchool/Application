import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const Footer = ({ count, clickbox, filterItems }) => (<div className = { styles.footer }>
<p className = { styles.tasks }>Task(s) left: { count }</p>
<div className = { styles.filter}>
    <p className = { styles.all }
    onCkick = { filterItems  }>All</p>
    <p className = { styles.completed }>Completed</p>
    <p className = { styles.inprogress }>In progress</p>
</div>
<p className = { styles.delete }>Delete completed: { clickbox }</p>
</div>);

Footer.defaultProps = {
    count: 0,
    clickbox: 0
};

Footer.propTypes = {
    count: PropTypes.number.isRequired,
    clickbox: PropTypes.number.isRequired 
};

export default Footer; 