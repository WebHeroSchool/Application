import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';


import Todo from '../Todo/Todo';
import About from '../About/About';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import ContactsOutlinedIcon from '@material-ui/icons/ContactsOutlined';
import ModeLogo from './img/ModeLogo.ico';
import russiaLogo from './img/russiaLogo.ico';
import UsaLogo from './img/UsaLogo.ico';
import doc from './img/document.gif'

import Contacts from '../Contacts/Contacts';
import styles from './App.module.css';

import classnames from 'classnames';
import { ThemeProvider } from '@material-ui/core/styles';
import { themeDark, themeLight, useStyles } from './Themes';
import { setLanguage } from './i18n';
import { useTranslation } from 'react-i18next';



const App = () => {
  const initialState = {
  //  darkTheme: false,
    darkTheme: JSON.parse(localStorage.getItem('darkTheme')),
    lang: JSON.parse(localStorage.getItem('language')),
    isLoading: true,
  };

  const { t } = useTranslation();
  const classes = useStyles();
  const [ darkTheme, setDarkTheme ] = useState(initialState.darkTheme);
  const [ lang, setLang ] = React.useState(initialState.lang);
  const [ isLoading, setIsLoading ] = useState(initialState.isLoading);

  useEffect(() => {
    localStorage.setItem('darkTheme', JSON.stringify(darkTheme));
    localStorage.setItem('language', JSON.stringify(lang));
    setTimeout(() => {
      setIsLoading(false)
    }, 3000);
  });

  const langChange = (event) => {
    setLang(event.target.value);
  };

  if (isLoading) {
    return (
    <div style = {{ margin: 'auto' }} className = { styles.doc__wrap}>
      <div className = { styles.doc }>
        <img src = { doc } alt = 'doc' className = { styles.doc__logo } />  
      </div>
    </div>
            )
  } else {
  return (
  <Suspense fallback = 'Loading...'>
    <ThemeProvider theme = { darkTheme ? themeDark : themeLight }>
      <div className = { styles.app }>
        <Router>
          <Paper className = { styles.wrap }>
            <div className = { styles.sidebar }>
              <a href='https://webheroschool.ru' target = '_blank' rel = 'noreferrer'
                className={ styles.whs__link }
              >
                <div className={ styles.whs__logo }></div>
              </a>
              <MenuList className = { styles.menulist }>
                <NavLink to = '/' exact
                  className = { styles.link }
                  activeClassName = { styles.link__active }>
                    <AccountCircleOutlinedIcon className = { styles.abouticon } />   
                  { t ('description.about')}   
                </NavLink>
                <NavLink to = '/todo' 
                  className = { styles.link }
                  activeClassName = { styles.link__active }>      
                    <AssignmentTurnedInOutlinedIcon className = { styles.tasksicon } />              
                    { t ('description.tasks')}
                </NavLink>
                <NavLink to = '/contacts' 
                  className = { styles.link }
                  activeClassName = { styles.link__active }>
                      <ContactsOutlinedIcon className = { styles.contactsicon } />
                      { t ('description.contacts')}
                </NavLink>
                <div className = { styles.mode__container }>
                  <div className = { styles.mode }>
                    <img className = 
                      { classnames ({
                        [styles.mode__logo]: true,
                        [styles.selected__mode]: darkTheme
                      }) } 
                      src = { ModeLogo } 
                      alt = 'ModeLogo'
                      onClick = {() => setDarkTheme(!darkTheme)}>
                    </img>
                  </div>
                </div>
                <div className = { styles.lang__container }>
                  <FormControl className = { classes.formControl }>
                      <InputLabel id = "demo-simple-select-autowidth-label">{ t ('description.app__lang')}</InputLabel>
                        <Select
                          labelId = "demo-simple-select-autowidth-label"
                          id = "select" 
                          defaultValue = ''
                          displayEmpty
                          onChange = { setLanguage } 
                          onClick = { langChange }
                          autoWidth
                        >
                          <MenuItem value = { 'eng' }>
                            <img src = { UsaLogo } alt = 'UsaLogo' className = { styles.usa__logo } />English
                          </MenuItem>
                          <MenuItem value = { 'rus' }>
                            <img src = { russiaLogo } alt = 'russiaLogo' className = { styles.rus__logo } />Русский
                          </MenuItem>
                        </Select>
                    </FormControl>
                </div>
              </MenuList>
            </div>
            <Paper className = { styles.content }>
              <Route path = '/' exact component = { About } />
              <Route path = '/todo' component = { Todo } />
              <Route path = '/contacts' component = { Contacts } />
            </Paper>
          </Paper>
        </Router>
      </div>
    </ThemeProvider>
  </Suspense>);
  }
}

export default App;