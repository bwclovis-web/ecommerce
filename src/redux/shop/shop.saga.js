import {takeLatest, call, put} from 'redux-saga/effects';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.config';
import {fetchCollectionsSuccess, fetchCollectionsError} from './shop.actions';

import types from './shop.types';

export function* fetchCollectionAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch(err) {
        yield put(fetchCollectionsError(err.message))
    }
}

export function* fetchCollectionStart() {
    yield takeLatest(types.FETCH_COLLECTIONS_START, fetchCollectionAsync)
}