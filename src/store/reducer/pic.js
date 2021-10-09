import * as types from "../const/types";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  dataPic: [],
  message: [],
};

const picData = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PIC + "_BEGIN":
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_PIC + "_SUCCESS":
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
        dataPic: payload,
      };
    case types.GET_PIC + "_FAIL":
      return {
        ...state,
        isError: true,
        isLoading: false,
        message: payload,
      };
    case types.CREATE_PIC + "_BEGIN":
      return {
        ...state,
      };
    case types.CREATE_PIC + "_SUCCESS":
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };
    case types.CREATE_PIC + "_FAIL":
      return {
        ...state,
        isError: true,
        isLoading: false,
        message: payload,
      };
    case types.DELETE_PIC + "_BEGIN":
      return {
        ...state,
      };
    case types.DELETE_PIC + "_SUCCESS":
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };
    case types.DELETE_PIC + "_FAIL":
      return {
        ...state,
        isError: true,
        isLoading: false,
        message: payload,
      };
    case types.UPDATE_PIC + "_BEGIN":
      return {
        ...state,
      };
    case types.UPDATE_PIC + "_SUCCESS":
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };
    case types.UPDATE_PIC + "_FAIL":
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
      };
    default:
      return state;
  }
};

export default picData;
