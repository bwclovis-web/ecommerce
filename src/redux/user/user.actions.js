import {types} from '../types';

export const setCurrentUser = user => ({
    type: types.SET_CURRENT_USER,
    payload: user
});

export const googleSignInStart = () => ({
    type: types.GOOGLE_SIGN_IN_START,
});

export const googleSignInSucceess = user => ({
    type: types.GOOGLE_SIGN_IN_SUCCESS,
    payload: user
})

export const googleSignInFailure = err => ({
    type: types.GOOGLE_SIGN_IN_FAIL,
    payload: err
})

export const emailSignInStart = emailAndPassword => ({
    type: types.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

export const emailSignInSucceess = user => ({
    type: types.EMAIL_SIGN_IN_SUCCESS,
    payload: user
})

export const emailSignInFailure = err => ({
    type: types.EMAIL_SIGN_IN_FAIL,
    payload: err
})