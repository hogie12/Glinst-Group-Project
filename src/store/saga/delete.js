import axios from "axios";
import * as types from "../const/types";
import { BASE_URL } from "../const/server";
import { put, takeEvery } from "redux-saga/effects";

function* deleteTalent({id}) {
  try {
    const res = yield axios.delete(`${BASE_URL}/talent/${id}`);
    yield put({
      type: types.DELETE_TALENT + "_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    console.log("ini error talent detail", error);
    yield put({
      type: types.DELETE_TALENT + "_FAIL",
      payload:error.response
    });
  }
}
function* deletePic({id}) {
  try {
    const res = yield axios.delete(`${BASE_URL}/pic/${id}`);
    yield put({
      type: types.DELETE_PIC + "_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    console.log("ini error talent detail", error);
    yield put({
      type: types.DELETE_PIC + "_FAIL",
      payload:error.response
    });
  }
}
function* deleteCompany({id}) {
  try {
    const res = yield axios.delete(`${BASE_URL}/company/${id}`);
    yield put({
      type: types.DELETE_COMPANY + "_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    console.log("ini error DELETE_COMPANY detail", error);
    yield put({
      type: types.DELETE_COMPANY + "_FAIL",
      payload:error.response
    });
  }
}
function* deleteTracker({id}) {
  try {
    const res = yield axios.delete(`${BASE_URL}/tracker/${id}`);
    yield put({
      type: types.DELETE_TRACKER + "_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    console.log("ini error DELETE_TRACKER detail", error);
    yield put({
      type: types.DELETE_TRACKER + "_FAIL",
      payload:error.response
    });
  }
}

export function* watchDeleteTalent() {
  yield takeEvery(types.DELETE_TALENT + "_BEGIN", deleteTalent);
}
export function* watchDeleteCompany() {
  yield takeEvery(types.DELETE_COMPANY + "_BEGIN", deleteCompany);
}
export function* watchDeletePic() {
  yield takeEvery(types.DELETE_PIC + "_BEGIN", deletePic);
}
export function* watchDeleteTracker() {
  yield takeEvery(types.DELETE_TRACKER + "_BEGIN", deleteTracker);
}
