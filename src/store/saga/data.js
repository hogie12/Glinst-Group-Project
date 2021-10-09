import axios from "axios";
import * as types from "../const/types";
import { BASE_URL } from "../const/server";
import { put, takeEvery } from "redux-saga/effects";

function* getAllTalent() {
  try {
    const res = yield axios.get(`${BASE_URL}/talent`);
    yield put({
      type: types.GET_TALENT + "_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    console.log("ini error talent", error);
    yield put({
      type: types.GET_TALENT + "_FAIL",
      payload: error.response,
    });
  }
}
function* getAllCompany() {
  try {
    const res = yield axios.get(`${BASE_URL}/company`);
    yield put({
      type: types.GET_COMPANY + "_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    console.log("ini error talent", error);
    yield put({
      type: types.GET_COMPANY + "_FAIL",
      payload: error.response,
    });
  }
}
function* getAllPic() {
  try {
    const res = yield axios.get(`${BASE_URL}/pic`);
    yield put({
      type: types.GET_PIC + "_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    console.log("ini error GET_PIC", error);
    yield put({
      type: types.GET_PIC + "_FAIL",
      payload: error.response,
    });
  }
}
function* getAllTracker() {
  try {
    const res = yield axios.get(`${BASE_URL}/tracker`);
    yield put({
      type: types.GET_TRACKER + "_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    console.log("ini error GET_TRACKER", error);
    yield put({
      type: types.GET_TRACKER + "_FAIL",
      payload: error.response,
    });
  }
}

export function* watchAllTalent() {
  yield takeEvery(types.GET_TALENT + "_BEGIN", getAllTalent);
}
export function* watchAllCompany() {
  yield takeEvery(types.GET_COMPANY + "_BEGIN", getAllCompany);
}
export function* watchAllPic() {
  yield takeEvery(types.GET_PIC + "_BEGIN", getAllPic);
}
export function* watchAllTracker() {
  yield takeEvery(types.GET_TRACKER + "_BEGIN", getAllTracker);
}
