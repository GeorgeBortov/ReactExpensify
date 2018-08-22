import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

const googleAuth = new firebase.auth.GoogleAuthProvider();
const googleAuthProvider = googleAuth.addScope('email');

const facebookAuth = new firebase.auth.FacebookAuthProvider();
const facebookAuthProvider = facebookAuth.addScope('email');

const githubAuth = new firebase.auth.GithubAuthProvider();
const githubAuthProvider = githubAuth.addScope('user:email');

const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

export { firebase,
    googleAuthProvider,
    facebookAuthProvider,
    githubAuthProvider,
    twitterAuthProvider,
database as default };