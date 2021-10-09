import * as types from "../const/types";

const initialState = {
  isLoading: true,
  isSuccess: false,
  detailTalent: [],
};

const talentDetail = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_DETAIL_TALENT + "_BEGIN":
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_DETAIL_TALENT + "_SUCCESS":
      return {
        ...state,
        isSuccess: true,
        isLoading:false,
        detailTalent: payload,
      };
    case types.GET_DETAIL_TALENT + "_FAIL":
      return {
        ...state,
        isLoading:true,
        isSuccess:false,
        detailTalent:payload
      };
    default:
      return state;
  }
};

export default talentDetail;
