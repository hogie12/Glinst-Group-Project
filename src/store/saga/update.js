import axios from "axios";
import * as types from "../const/types";
import { BASE_URL } from "../const/server";
import { put, takeEvery } from "redux-saga/effects";

function* updateTalent({id, name, email}) {
  try {
    const res = yield axios.put(`${BASE_URL}/talent/${id}`, {name, email});
    yield put({
      type: types.UPDATE_TALENT + "_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    console.log("ini error talent detail", error);
    yield put({
      type: types.UPDATE_TALENT + "_FAIL",
      payload:error.response
    });
  }
}

function* updateCompany({id, name, email}) {
  try {
    const res = yield axios.put(`${BASE_URL}/company/${id}`, {name, email});
    yield put({
      type: types.UPDATE_COMPANY + "_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    console.log("ini error talent detail", error);
    yield put({
      type: types.UPDATE_COMPANY + "_FAIL",
      payload:error.response
    });
  }
}

function* updatePic({id, name, email}) {
  try {
    const res = yield axios.put(`${BASE_URL}/pic/${id}`, {name, email});
    yield put({
      type: types.UPDATE_PIC + "_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    console.log("ini error talent detail", error);
    yield put({
      type: types.UPDATE_PIC + "_FAIL",
      payload:error.response
    });
  }
}

function* updateTracker({id, talent, company, pic, status}) {
  try {
    const res = yield axios.put(`${BASE_URL}/tracker/${id}`, {talent, company, pic, status});
    yield put({
      type: types.UPDATE_TRACKER + "_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    console.log("ini error talent detail", error);
    yield put({
      type: types.UPDATE_TRACKER + "_FAIL",
      payload:error.response
    });
  }
}


export function* watchUpdateTalent() {
  yield takeEvery(types.UPDATE_TALENT + "_BEGIN", updateTalent);
}
export function* watchUpdateCompany() {
  yield takeEvery(types.UPDATE_COMPANY + "_BEGIN", updateCompany);
}
export function* watchUpdatePic() {
  yield takeEvery(types.UPDATE_PIC + "_BEGIN", updatePic);
}
export function* watchUpdateTracker() {
  yield takeEvery(types.UPDATE_TRACKER + "_BEGIN", updateTracker);
}
