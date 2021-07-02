import React from 'react';

import Card from '@material-ui/core/Card';
import styles from './Contacts.module.css';
import errorLogo from './img/error.svg'
import LinearProgress from '@material-ui/core/LinearProgress';
import gmailLogo from './img/gmail.svg';
import mailLogo from './img/mail.svg';
import telegramLogo from './img/telegram.svg';
import githubLogo from './img/github.svg';
import vkLogo from './img/vk.svg';
import upworkLogo from './img/upwork.svg';
import { Trans } from 'react-i18next';


import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

class Contacts extends React.Component {
  state = {
      isLoading: true,
      error: null,
      userInfo: []
  };

  componentDidMount() {
octokit.users.getByUsername({
  username: 'Antoha208'
}).then(
  ({data}) => {
  this.setState({ 
      userInfo: data,
      isLoading: false,
});
},
(error) => {
  this.setState({
      isLoading: true,
      error
  })
}

)
}
  
  render () {
    const { isLoading, error, userInfo } = this.state;

    if (error) {
        return <div className = { styles.error__container }>
        <img src = { errorLogo } alt='Error' className = { styles.error__logo } />
        <h2 className = { styles.error__text }><Trans i18nKey = "description.contacts__text1">There is something wrong</Trans></h2>
        <p className = { styles.error__text }><Trans i18nKey = "description.contacts__text2">The information is: { error.message }</Trans></p>
    </div>
    } else {
        return (
          <div className = { styles.wrap }>
            <h1 className = { styles.title }>{ isLoading ? <LinearProgress /> : <Trans i18nKey = "description.contacts__title">'CONTACTS'</Trans>}</h1>
            <Card className = { styles.container }>
              <div className = { styles.avatar__wrapper }>
                <img src = { userInfo.avatar_url } alt='' className = { styles.avatar } />
              </div>
              <div className = { styles.wrapper }>
                <div className = { styles.conctacts__wrapper }>
                  <p className = { styles.name }><b><Trans i18nKey = "description.contacts__name">{ userInfo.name }</Trans></b></p>
                  <div className = { styles.links__wrapper }>
                    <a className={ styles.tg } href = 'https://web.telegram.org/k/' target = '_blank' rel = 'noreferrer'>
                      <img className = { styles.tg__logo } src = { telegramLogo } alt = 'telegram'></img>
                      @Antoha208
                    </a>
                    <a className={ styles.gmail } href = 'mailto: aanton229@gmail.com' target = '_blank' rel = 'noreferrer'>
                      <img className = { styles.gmail__logo } src = { gmailLogo } alt = 'gmail'></img>
                      aanton229@gmail.com
                    </a> 
                    <a className={ styles.mail } href = 'mailto: anton_androsyak@mail.ru' target = '_blank' rel = 'noreferrer'>
                      <img className = { styles.mail__logo } src = { mailLogo } alt = 'mail'></img>
                      anton_androsyak@mail.ru
                    </a>
                  </div>
                </div>
                <div className = { styles.socials__wrapper}>
                  <a className={ styles.github } href = 'https://github.com/Antoha208'>
                      <img className = { styles.github__logo } src = { githubLogo } alt = 'github' target = '_blank' rel = 'noreferrer'></img>
                  </a>
                  <a className={ styles.vk } href = 'https://vk.com/antoha208' target = '_blank' rel = 'noreferrer'>
                      <img className={ styles.vk__logo } src = { vkLogo } alt = 'vk'></img>
                  </a>
                  <a className={ styles.upwork } href = 'https://www.upwork.com/'>
                      <img className = { styles.upwork__logo } src = { upworkLogo } alt = 'upwork' target = '_blank' rel = 'noreferrer'></img>
                  </a>
                </div>
              </div>  
            </Card>
          </div>
        );
    }    
  }   
} 
      

export default Contacts; 