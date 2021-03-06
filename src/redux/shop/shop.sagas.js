import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  convertCollectionaSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import shopActionTypes from "./shop.types";
import { fetchCollectionFailure, fetchCollectionSuccess } from "./shop.actions";

function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionaSnapshotToMap, snapshot);
    yield put(fetchCollectionSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTION_START,
    fetchCollectionAsync
  );
}

export function* shopSaga() {
  yield all([call(fetchCollectionsStart)]);
}
