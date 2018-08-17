import React from 'react';
import { connect } from 'react-redux';
import {
    startGoogleLogin,
    startFacebookLogin,
    startGithubLogin,
    startTwitterLogin
} from '../actions/auth';

export const LoginPage = ({ startGoogleLogin, startFacebookLogin, startGithubLogin, startTwitterLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control.</p>
            <button className="button button--google-login" onClick={startGoogleLogin}> 
                <span className="button--soc-icon">
                    <img src="/images/google-ico.png" />
                </span>
                <span>
                    Login with Google
                </span>
            </button>
            <button className="button button--facebook-login" onClick={startFacebookLogin}>
                <span className="button--soc-icon">
                    <img src="/images/facebook-ico.png" />
                </span>
                <span>
                    Login with Facebook
                </span>
            </button>
            <button className="button button--github-login" onClick={startGithubLogin}>
                <span className="button--soc-icon">
                    <img src="/images/github-ico.png" />
                </span>
                <span>
                    Login with Github
                </span>
            </button>
            <button className="button button--twitter-login" onClick={startTwitterLogin}>
                <span className="button--soc-icon">
                    <img src="/images/twitter-ico.png" />
                </span>
                <span>
                    Login with Twitter
                </span>
            </button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startGoogleLogin: () => dispatch(startGoogleLogin()),
    startFacebookLogin: () => dispatch(startFacebookLogin()),
    startGithubLogin: () => dispatch(startGithubLogin()),
    startTwitterLogin: () => dispatch(startTwitterLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);