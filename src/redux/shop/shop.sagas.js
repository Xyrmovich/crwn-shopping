import { takeLatest, call, put } from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { fetchCollectionsSuccess, fetchCollectionsFailure} from './shop.actions';

import ShopActionsType from './shop.types';

export function* fetchCollectionsAsync(){
    yield console.log('I am fired');
    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    }catch(error){
        yield put(fetchCollectionsFailure(error.message));
    };
}

export function* fetchCollectionsStart(){
    yield takeLatest(
        ShopActionsType.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync 
    );
}