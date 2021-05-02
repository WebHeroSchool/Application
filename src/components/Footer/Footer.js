import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const Footer = ({ count, clickbox, filterItems }) => (<div className = { styles.footer }>
<p className = { styles.tasks }>Task(s) left: { count }</p>
<div className = { styles.filter}>
    <button className = { styles.all }
    value = 'All'
    onClick = { filterItems }>All</button>
    <button className = { styles.completed }
    onClick = { filterItems }
    value = 'Completed'>Completed</button>
    <button className = { styles.inprogress }
    onClick = { filterItems }
    value = 'In progress'>In progress</button>
</div>
<button className = { styles.delete }
onClick = { filterItems }
value = 'Delete completed'>Delete completed: { clickbox }</button>
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