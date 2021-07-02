import React from 'react';
import styles from './Repositories.module.css';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import LinearProgress from '@material-ui/core/LinearProgress';
import forkLogo from './img/fork.svg'
import starLogo from './img/star.svg'
import errorLogo from './img/error.svg'
import { Trans } from 'react-i18next';

import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

class Repositories extends React.Component {
    state = {
      isLoading: true,
      isError: false,
      repoList: [],
      firstRep: 0,
      lastRep: 5
    }

    componentDidMount() {
        octokit.repos.listForUser({
          username: 'Antoha208'
          }).then(({ data }) => {
            this.setState({
              repoList: data,
              isLoading: false
            });
        }).catch(() => {
            this.setState({
              isLoading: false,
              isError: true,
            });
          });
      }

      buttonBack = () => {
        this.setState({
          firstRep: this.state.firstRep - 5,
          lastRep: this.state.lastRep - 5,
        });
      };
    
      buttonNext = () => {
        this.setState({
          firstRep: this.state.firstRep + 5,
          lastRep: this.state.lastRep + 5,
        });
      };

    render() {
        const { isLoading, isError, repoList, firstRep, lastRep } = this.state;
        return (
        <div className={ styles.wrap }>
          { isLoading ? <LinearProgress className={ styles.preloader }/> :
            <div className={ styles.inner }>
                { isError ? 
                  <div className = { styles.error__wrapper }>
                    <img src = { errorLogo } alt='Error' className = { styles.error__logo } />
                    <h2 className = { styles.error__text }><Trans i18nKey = "description.repositories__text1">There is something wrong</Trans></h2>
                  </div> :
                    <div>
                      { repoList.length === 0 ? 
                        <div className = { styles.error__wrapper }>
                          <img src = { errorLogo } alt = 'Error' className = { styles.error__logo } />
                          <h3 className = { styles.error__text }><Trans i18nKey = "description.repositories__text2">The repositories list is empty on </Trans><a href = 'www.github.com'>github.com</a></h3>
                        </div> :
                          <div>
                            { !isLoading && <ol className ={ styles.list }>
                              { repoList.slice(firstRep, lastRep).map(repo => (
                                    <li key = { repo.id } className = { styles.list__item }><Card className = { styles.cards }>
                                        <a href = { repo.html_url } className = { styles.name } target = '_blank' rel = 'noreferrer'><b className = { styles.name__text }>{ repo.name }</b></a>
                                        <div className = { styles.info }>
                                          <div className = { styles.info__language }>
                                            <div className = {
                                                classnames({
                                                    [styles.language]: true,
                                                    [styles.html]: repo.language === 'HTML',
                                                    [styles.css]: repo.language === 'CSS',
                                                    [styles.js]: repo.language === 'JavaScript',
                                                    [styles.typeScript]: repo.language === 'TypeScript',
                                                    [styles.text]: repo.language === 'Markdown',
                                                })}
                                                >
                                            </div>
                                            <p className = { styles.language__text }>{ repo.language }</p>
                                          </div>
                                            <div className = { styles.star }>
                                                <img src = { starLogo } className = { styles.star__logo } alt='Star' />
                                                <p className = { styles.count }>{ repo.stargazers_count }</p>
                                            </div>
                                            <div className={ styles.fork }>
                                                <img src={ forkLogo } className = { styles.fork__logo } alt='Fork' />
                                                <p className = { styles.count }>{ repo.forks }</p>
                                            </div>
                                            <p className={ styles.update }><Trans i18nKey = "description.repositories__update">Last update: </Trans>{new Date(repo.updated_at).toLocaleString('en-GB', {
                                                month: 'numeric',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                            </p>
                                        </div>
                                      </Card>
                                    </li>))}
                            </ol>}
                            <div className = { styles.nav }>
                              <button 
                                className = { classnames({
                                  [styles.button]: true,
                                  [styles.disabled]: firstRep === 0
                                })} 
                                disabled = { firstRep === 0 }
                                onClick={() => this.buttonBack()}
                              >
                                { '<<<' }
                              </button>
                              <button 
                                className = { classnames({
                                    [styles.button]: true,
                                    [styles.disabled]: repoList.length <= lastRep
                                })} 
                                onClick={() => this.buttonNext()}
                                disabled={ repoList.length <= lastRep }
                              >
                                { '>>>' }
                              </button>
                            </div>
                          </div>
                      }
                    </div>
                }
            </div>
          }
        </div>
    );
  } 
}
            /*<li className = { styles.repo }>
                <a href = { repo.html_url } className = { styles.link } target = '_blank'>{ repo.name }</a>
                <div className = { styles.info }>
                    <div
                        className = { classnames({
                            [styles.language]: true,
                            [styles.html]: repo.language === 'HTML',
                            [styles.css]: repo.language === 'CSS',
                            [styles.js]: repo.language === 'JavaScript',
                            [styles.typeScript]: repo.language === 'TypeScript',
                            [styles.empty]: repo.language === null,
                        })}
                    >    
                    </div>
                    <span
                        className = { classnames ({
                            [styles.language]: true,
                            [styles.languageEmpty]: repo.language === null,
                        })}
                    >
                        { repo.language }
                    </span>
                    <img className = { styles.star__logo } alt = 'star' src={ starLogo } />
                    <span className = { styles.star }>{ repo.stargazers_count }</span>
                    <img className = { styles.fork__logo } alt = 'fork' src = { forkLogo } />
                    <span className = { styles.fork }>{ repo.forks_count }</span>
                    <span className = { styles.date }>{`Last update ${new Date(repo.updated_at)}`}</span>
                </div>
            </li>
        )
    }
}
*/

export default Repositories;