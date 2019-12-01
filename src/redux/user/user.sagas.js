import {takeLatest, put,all, call} from 'redux-saga/effects';
import {types} from '../types';

import {googleProvider, auth, createUserProfile} from '../../firebase/firebase.config'

export function* googleSignInWorker() {
    console.log('%c [CALLED]', 'color:orange; background: purple',)
    try {
        const userRef = yield auth.signInWithPopup(googleProvider)
        console.log('%c [userRef]', 'color:orange; background: purple',userRef)
    } catch(err) {
        console.log('%c [err]', 'color:orange; background: purple',err)
    }
}

export function* googleSignInWatcher() {
    yield takeLatest(types.GOOGLE_SIGN_IN_START, googleSignInWorker)
}

export function* userSagas() {
    yield all([
        call(googleSignInWatcher)
    ])
} 