import axios from "axios";
import * as types from "../const/types";
import { BASE_URL } from "../const/server";
import { put, takeEvery } from "redux-saga/effects";

function* talentDetail({id}) {
  try {
    const res = yield axios.get(`${BASE_URL}/talent/${id}`);
    yield put({
      type: types.GET_DETAIL_TALENT + "_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    console.log("ini error talent detail", error);
    yield put({
      type: types.GET_DETAIL_TALENT + "_FAIL",
      payload:error.response
    });
  }
}
function* picDetail({id}) {
  try {
    const res = yield axios.get(`${BASE_URL}/pic/${id}`);
    yield put({
      type: types.GET_DETAIL_PIC + "_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    console.log("ini error PIC detail", error);
    yield put({
      type: types.GET_DETAIL_PIC + "_FAIL",
      payload:error.response
    });
  }
}
function* companyDetail({id}) {
  try {
    const res = yield axios.get(`${BASE_URL}/company/${id}`);
    yield put({
      type: types.GET_DETAIL_COMPANY + "_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    console.log("ini error CGET_DETAIL_COMPANY detail", error);
    yield put({
      type: types.GET_DETAIL_COMPANY + "_FAIL",
      payload:error.response
    });
  }
}
function* trackerDetail({id}) {
  try {
    const res = yield axios.get(`${BASE_URL}/tracker/${id}`);
    yield put({
      type: types.GET_DETAIL_TRACKER + "_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    console.log("ini error TRGET_DETAIL_TRACKER detail", error);
    yield put({
      type: types.GET_DETAIL_TRACKER + "_FAIL",
      payload:error.response
    });
  }
}

export function* watchTalentDetail() {
  yield takeEvery(types.GET_DETAIL_TALENT + "_BEGIN", talentDetail);
}
export function* watchPicDetail() {
  yield takeEvery(types.GET_DETAIL_PIC + "_BEGIN", picDetail);
}
export function* watchCompanyDetail() {
  yield takeEvery(types.GET_DETAIL_COMPANY + "_BEGIN", companyDetail);
}
export function* watchTrackerDetail() {
  yield takeEvery(types.GET_DETAIL_TRACKER + "_BEGIN", trackerDetail);
}