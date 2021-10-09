import * as types from "../const/types";

const initialState = {
  isLoading: true,
  isSuccess: false,
  detailTracker: [],
};

const trackerDetail = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_DETAIL_TRACKER + "_BEGIN":
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_DETAIL_TRACKER + "_SUCCESS":
      return {
        ...state,
        isSuccess: true,
        isLoading:false,
        detailTracker: payload,
      };
    case types.GET_DETAIL_TRACKER + "_FAIL":
      return {
        ...state,
        isLoading:true,
        isSuccess:false,
        detailTracker:[]
      };   
    default:
      return state;
  }
};

export default trackerDetail;
