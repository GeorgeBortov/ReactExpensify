import React from 'react';
import { connect } from 'react-redux';
import { firebase } from '../firebase/firebase';
import {
    startGoogleLogin,
    startFacebookLogin,
    startGithubLogin,
    startTwitterLogin
} from '../actions/auth';
import ConftrmAuthModal from './ConftrmAuthModal';
import { openModal, closeModal } from '../actions/modal';
export class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            credential: props.credential ? props.credential : '',
            currProvider: props.currProvider ? props.currProvider : ''
        }
    }
    openModal = () => {
        this.props.openModal();
    }
    closeModal= () => {
        this.props.closeModal();
    }
    getProviderForProviderId = (name) => {
        switch (name) {
            case 'google.com':
                return new firebase.auth.GoogleAuthProvider();
            case 'facebook.com':
                return new firebase.auth.FacebookAuthProvider();
            case 'github.com':
                return new firebase.auth.GithubAuthProvider();
            case 'twitter.com':
                return new firebase.auth.TwitterAuthProvider();
            default:
                return undefined;
        }
    }
    addNewAccount = () => {
        this.props.closeModal();
        firebase.auth().signInWithPopup(this.state.currProvider).then((result) => {
            result.user.linkAndRetrieveDataWithCredential(this.state.credential);
        });
    }
    auth = (provider) => {
        provider().catch(({ code, credential, email }) => {
            if (code === "auth/account-exists-with-different-credential") {
                this.setState(() => ({ credential }));
                firebase.auth().fetchSignInMethodsForEmail(email).then((methods) => {
                    const currProvider = this.getProviderForProviderId(methods[0]);
                    this.setState(() => ({ existAccount: methods[0] }));
                    this.setState(() => ({ currProvider }));
                    this.openModal();
                });                
            } else {
                console.log('Error: ', error);
            }
        });
    }
    render() {
        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    <h1 className="box-layout__title">Expensify</h1>
                    <p>It's time to get your expenses under control.</p>
                    <button className="button button--google-login" onClick={() => this.auth(this.props.startGoogleLogin)}>
                        <span className="button--soc-icon">
                            <img src="/images/google-ico.png" />
                        </span>
                        <span>
                            Login with Google
                        </span>
                    </button>
                    <button className="button button--facebook-login" onClick={() => this.auth(this.props.startFacebookLogin)}>
                        <span className="button--soc-icon">
                            <img src="/images/facebook-ico.png" />
                        </span>
                        <span>
                            Login with Facebook
                        </span>
                    </button>
                    <button className="button button--github-login" onClick={() => this.auth(this.props.startGithubLogin)}>
                        <span className="button--soc-icon">
                            <img src="/images/github-ico.png" />
                        </span>
                        <span>
                            Login with Github
                        </span>
                    </button>
                    <button className="button button--twitter-login" onClick={() => this.auth(this.props.startTwitterLogin)}>
                        <span className="button--soc-icon">
                            <img src="/images/twitter-ico.png" />
                        </span>
                        <span>
                            Login with Twitter
                        </span>
                    </button>
                </div>
                <ConftrmAuthModal
                    isOpen={this.props.modalStatus}
                    onRequestClose={this.closeModal}
                    onAuth={this.addNewAccount}
                    existAccount={this.state.existAccount}
                />
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    startGoogleLogin: () => dispatch(startGoogleLogin()),
    startFacebookLogin: () => dispatch(startFacebookLogin()),
    startGithubLogin: () => dispatch(startGithubLogin()),
    startTwitterLogin: () => dispatch(startTwitterLogin()),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal())
});

const mapStateToProps = (state, props) => ({  
    modalStatus: state.modal.modalIsOpen
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);