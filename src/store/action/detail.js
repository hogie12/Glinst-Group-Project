import * as types from "../const/types";

export const getDetailTalent = (id) => {
  return {
    type: types.GET_DETAIL_TALENT + "_BEGIN",
    id
  };
};

export const getDetailCompany = (id) => {
  return {
    type: types.GET_DETAIL_COMPANY + "_BEGIN",
    id
  };
};

export const getDetailPic = (id) => {
  return {
    type: types.GET_DETAIL_PIC + "_BEGIN",
    id
  };
};

export const getDetailTracker = (id) => {
  return {
    type: types.GET_DETAIL_TRACKER + "_BEGIN",
    id
  };
};

export const deleteTalent = (id) => {
  return {
    type: types.DELETE_TALENT + "_BEGIN",
    id
  };
};

export const deleteCompany = (id) => {
  return {
    type: types.DELETE_COMPANY + "_BEGIN",
    id
  };
};

export const deletePic = (id) => {
  return {
    type: types.DELETE_PIC + "_BEGIN",
    id
  };
};

export const deleteTracker = (id) => {
  return {
    type: types.DELETE_TRACKER + "_BEGIN",
    id
  };
};
