import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ count, clickbox }) => (<div className = { styles.footer }>
Task(s) left: { count }

<div className = { styles.filter}>
    <a href= "" className = { styles.all }>All</a>
    <a href= "" className = { styles.completed }>Completed</a>
    <a href= "" className = { styles.inprogress }>In progress</a>
</div>
<a href= "" className = { styles.delete }>Delete completed: { clickbox }</a>
</div>);

Footer.defaultProps = {
    count: 0,
    clickbox: 0
};

export default Footer; 