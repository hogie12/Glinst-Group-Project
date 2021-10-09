import * as types from "../const/types";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  dataTalent: [],
  message: [],
};

const talentData = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_TALENT + "_BEGIN":
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_TALENT + "_SUCCESS":
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
        dataTalent: payload,
      };
    case types.GET_TALENT + "_FAIL":
      return {
        ...state,
        isError: true,
        isLoading: false,
        message: payload,
      };
    case types.CREATE_TALENT + "_BEGIN":
      return {
        ...state,
      };
    case types.CREATE_TALENT + "_SUCCESS":
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };
    case types.CREATE_TALENT + "_FAIL":
      return {
        ...state,
        isError: true,
        isLoading: false,
        message: payload,
      };
    case types.DELETE_TALENT + "_BEGIN":
      return {
        ...state,
      };
    case types.DELETE_TALENT + "_SUCCESS":
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };
    case types.DELETE_TALENT + "_FAIL":
      return {
        ...state,
        isError: true,
        isLoading: false,
        message: payload,
      };
    case types.UPDATE_TALENT + "_BEGIN":
      return {
        ...state,
      };
    case types.UPDATE_TALENT + "_SUCCESS":
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };
    case types.UPDATE_TALENT + "_FAIL":
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
      };
    default:
      return state;
  }
};

export default talentData;
