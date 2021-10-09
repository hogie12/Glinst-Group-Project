import * as types from "../const/types";

const initialState = {
  isLoading: true,
  isSuccess: false,
  detailPic: [],
};

const picDetail = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_DETAIL_PIC + "_BEGIN":
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_DETAIL_PIC + "_SUCCESS":
      return {
        ...state,
        isSuccess: true,
        isLoading:false,
        detailPic: payload,
      };
    case types.GET_DETAIL_PIC + "_FAIL":
      return {
        ...state,
        isLoading:true,
        isSuccess:false,
        detailPic:payload
      };
    default:
      return state;
  }
};

export default picDetail;
