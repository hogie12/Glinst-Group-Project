import * as types from "../const/types";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  dataCompany: [],
  message: [],
};

const companyData = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_COMPANY + "_BEGIN":
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_COMPANY + "_SUCCESS":
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
        dataCompany: payload,
      };
    case types.GET_COMPANY + "_FAIL":
      return {
        ...state,
        isError: true,
        isLoading: false,
        message: payload,
      };
    case types.CREATE_COMPANY + "_BEGIN":
      return {
        ...state,
      };
    case types.CREATE_COMPANY + "_SUCCESS":
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };
    case types.CREATE_COMPANY + "_FAIL":
      return {
        ...state,
        isError: true,
        isLoading: false,
        message: payload,
      };
    case types.DELETE_COMPANY + "_BEGIN":
      return {
        ...state,
      };
    case types.DELETE_COMPANY + "_SUCCESS":
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };
    case types.DELETE_COMPANY + "_FAIL":
      return {
        ...state,
        isError: true,
        isLoading: false,
        message: payload,
      };
    case types.UPDATE_COMPANY + "_BEGIN":
      return {
        ...state,
      };
    case types.UPDATE_COMPANY + "_SUCCESS":
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };
    case types.UPDATE_COMPANY + "_FAIL":
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
      };
    default:
      return state;
  }
};

export default companyData;
