import * as types from "../const/types";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  dataTracker: [],
  message: [],
};

const trackerData = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_TRACKER + "_BEGIN":
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_TRACKER + "_SUCCESS":
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
        dataTracker: payload,
      };
    case types.GET_TRACKER + "_FAIL":
      return {
        ...state,
        isError: true,
        isLoading: false,
        message: payload,
      };
    case types.CREATE_TRACKER + "_BEGIN":
      return {
        ...state,
        isLoading: true,
      };
    case types.CREATE_TRACKER + "_SUCCESS":
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };
    case types.CREATE_TRACKER + "_FAIL":
      return {
        ...state,
        isError: true,
        isLoading: false,
        message: payload,
      };
    case types.DELETE_TRACKER + "_BEGIN":
      return {
        ...state,
        isLoading: true,
      };
    case types.DELETE_TRACKER + "_SUCCESS":
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };
    case types.DELETE_TRACKER + "_FAIL":
      return {
        ...state,
        isError: true,
        isLoading: false,
        message: payload,
      };
    case types.UPDATE_TRACKER + "_BEGIN":
      return {
        ...state,
        isLoading: true,
      };
    case types.UPDATE_TRACKER + "_SUCCESS":
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };
    case types.UPDATE_TRACKER + "_FAIL":
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
      };
    default:
      return state;
  }
};

export default trackerData;
