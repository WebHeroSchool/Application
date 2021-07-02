import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';
import { Trans } from 'react-i18next';


const Footer = ({ count, clickbox, onFilterChange, onClickDeleteDone, counterCompleted, counterInProgress}) => (<div className = { styles.footer }>
<button className = { styles.tasks }><Trans i18nKey="description.footer1">Task(s) left:</Trans> { count }</button>
<div className = { styles.filter}>
    <button className = { styles.all }
    onClick = { () => onFilterChange('All') }><Trans i18nKey="description.footer2">All</Trans>
    <span className = { styles.allcounter}>{` (${ counterCompleted + counterInProgress }) `}</span>
    </button>
    <button className = { styles.completed }
    onClick = { () => onFilterChange('Completed') }><Trans i18nKey="description.footer3">Completed</Trans>
    <span className = { styles.completedcounter }>{` (${ counterCompleted }) `}</span>
    </button>
    <button className = { styles.inprogress }
    onClick = { () => onFilterChange('In progress') }><Trans i18nKey="description.footer4">In progress</Trans>
    <span className = { styles.inprogresscounter }>{` (${ counterInProgress }) `}</span>
    </button>
</div>
<button className = { styles.delete }
onClick = { onClickDeleteDone }
value = 'Delete completed'><Trans i18nKey="description.footer5">Delete completed:</Trans> { clickbox }</button>
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