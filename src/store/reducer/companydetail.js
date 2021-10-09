import * as types from "../const/types";

const initialState = {
  isLoading: true,
  isSuccess: false,
  detailCompany: [],
};

const companyDetail = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_DETAIL_COMPANY + "_BEGIN":
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_DETAIL_COMPANY + "_SUCCESS":
      return {
        ...state,
        isSuccess: true,
        isLoading:false,
        detailCompany: payload,
      };
    case types.GET_DETAIL_COMPANY + "_FAIL":
      return {
        ...state,
        isLoading:true,
        isSuccess:false,
        detailCompany:payload
      };
    default:
      return state;
  }
};

export default companyDetail;
