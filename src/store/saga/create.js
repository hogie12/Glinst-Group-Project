import axios from "axios";
import * as types from "../const/types";
import { BASE_URL } from "../const/server";
import { put, takeEvery } from "redux-saga/effects";

function* createTalent({ id, name, email }) {
  try {
    const res = yield axios.post(`${BASE_URL}/talent`, { id, name, email });
    yield put({
      type: types.CREATE_TALENT + "_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    console.log("ini error talent detail", error);
    yield put({
      type: types.CREATE_TALENT + "_FAIL",
      payload: error.response,
    });
  }
}

function* createCompany({ id, name, email }) {
  try {
    const res = yield axios.post(`${BASE_URL}/company`, { id, name, email });
    yield put({
      type: types.CREATE_COMPANY + "_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    console.log("ini error talent detail", error);
    yield put({
      type: types.CREATE_COMPANY + "_FAIL",
      payload: error.response,
    });
  }
}

function* createPic({ id, name, email }) {
  try {
    const res = yield axios.post(`${BASE_URL}/pic`, { id, name, email });
    yield put({
      type: types.CREATE_PIC + "_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    console.log("ini error talent detail", error);
    yield put({
      type: types.CREATE_PIC + "_FAIL",
      payload: error.response,
    });
  }
}

function* createTracker({ id, talent, company, pic, status }) {
  try {
    const res = yield axios.post(`${BASE_URL}/tracker`, {
      id,
      talent,
      company,
      pic,
      status,
    });
    yield put({
      type: types.CREATE_TRACKER + "_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    console.log("ini error talent detail", error);
    yield put({
      type: types.CREATE_TRACKER + "_FAIL",
      payload: error.response,
    });
  }
}

export function* watchCreateTalent() {
  yield takeEvery(types.CREATE_TALENT + "_BEGIN", createTalent);
}
export function* watchCreateCompany() {
  yield takeEvery(types.CREATE_COMPANY + "_BEGIN", createCompany);
}
export function* watchCreatePic() {
  yield takeEvery(types.CREATE_PIC + "_BEGIN", createPic);
}
export function* watchCreateTracker() {
  yield takeEvery(types.CREATE_TRACKER + "_BEGIN", createTracker);
}
