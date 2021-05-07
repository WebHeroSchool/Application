import React from 'react';
import styles from './About.module.css';
import Alert from '@material-ui/lab/Alert';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Octokit } from '@octokit/rest';


const octokit = new Octokit();

class About extends React.Component {
    state = {
        isLoading: true,
        repoList: [],
        error: null,
        userInfo: []
    };

    componentDidMount() {
        octokit.repos.listForUser({
            username: 'Antoha208'
        }).then(
            ({ data }) => {
            this.setState ({
                repoList: data,
                isLoading: false
            });
        },
        (error) => {
            this.setState({
                isLoading: true,
                error
            })
        }
    )

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
        const { isLoading, repoList, error, userInfo } = this.state;

        if (error) {
            return <div className = {styles.alert }><Alert 
            severity="error">There is something wrong:
            </Alert> {error.message}</div>
        } else {
            return (
                <div className = { styles.wrap }>
                    <h1 className = { styles.title }>{ isLoading ? <LinearProgress /> : 'About'}</h1>
                    <div className= {styles.repo}>
                        <p className = { styles.login }><b>{userInfo.login}</b></p>
                        <img src={userInfo.avatar_url} alt='' className={styles.avatar} />
                        <h3 className = { styles.repoTitle }>My repositories:</h3>
                        {!isLoading && <ol>
                            {repoList.map(repo => (<li key = {repo.id}>
                                <a href={repo.clone_url} className={styles.repoLink}>{repo.name}</a>
                            </li>))}
                        </ol>}
                    </div>
                </div>
            );
        }    
    }  
} 

export default About; 