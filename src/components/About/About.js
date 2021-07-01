import React from 'react';
import styles from './About.module.css';
import Repositories from '../Repositories/Repositories';
import errorLogo from './img/error.svg'
import LinearProgress from '@material-ui/core/LinearProgress';
import Card from '@material-ui/core/Card';
import locationLogo from './img/location.svg';
import { Octokit } from '@octokit/rest';
import { Trans } from 'react-i18next';

const octokit = new Octokit();



class About extends React.Component {
    state = {
        isLoading: true,
        error: null,
        userInfo: []
    };

    componentDidMount() {
        octokit.users.getByUsername({
            username: 'Antoha208'
        }).then(
            ({ data }) => {
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
            return (
                <div className = { styles.error__container }>
                    <img src = { errorLogo } alt='Error' className = { styles.error__logo } />
                    <h2 className = { styles.error__text }><Trans i18nKey = "description.about__text1">There is something wrong</Trans></h2>
                    <p className = { styles.error__text }><Trans i18nKey = "description.about__text2">The information is: { error.message }</Trans></p>
                </div>
                    )
        } else {
            return ( 
                <div className = { styles.wrap }>
                    <h1 className = { styles.title }>{ isLoading ? <LinearProgress /> : <Trans i18nKey = "description.about__title">'ABOUT'</Trans>}</h1>
                    <p className = { styles.profile }><b><Trans i18nKey = "description.about__profile">Profile</Trans></b></p>
                    <Card className= { styles.repo__wrapper }>
                        <div className = { styles.avatar__wrapper }>
                            <img src={ userInfo.avatar_url } alt='' className={ styles.avatar } />
                        </div>
                        <div className= { styles.repo }>
                            <h1 className = { styles.login }>{ userInfo.login }</h1>
                                <p className = { styles.bio }><Trans i18nKey = "description.about__bio">{ userInfo.bio }</Trans></p>
                                <p className = { styles.bio__art }><Trans i18nKey = "description.about__bio2">Already know what TODO</Trans></p>
                                <a className={ styles.location } href = 'https://www.google.com/maps/place/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3/@59.9399138,29.5342491,9z/data=!3m1!4b1!4m5!3m4!1s0x4696378cc74a65ed:0x6dc7673fab848eff!8m2!3d59.9310584!4d30.3609096?hl=ru-RU' target = '_blank' rel = 'noreferrer'>
                                    <img className = { styles.location__logo } src = { locationLogo } alt='location'></img>
                                    <b><Trans i18nKey = "description.about__location">{ `Location: ${ userInfo.location }` }</Trans></b>
                                </a>   
                        </div>
                    </Card>
                        <h3 className = { styles.repoTitle }><Trans i18nKey = "description.about__repoTitle">Repositories on github.com</Trans></h3>
                    <Card className= { styles.wrapper }>
                    { <Repositories /> }
                    </Card> 
                </div>
            );
        }    
    }
}

export default About; 