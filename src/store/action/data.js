import * as types from "../const/types";

export const getAllTalent = () => {
  return {
    type: types.GET_TALENT + "_BEGIN",
  };
};

export const getAllCompany = () => {
  return {
    type: types.GET_COMPANY + "_BEGIN",
  };
};

export const getAllPic = () => {
  return {
    type: types.GET_PIC + "_BEGIN",
  };
};

export const getAllTracker = () => {
  return {
    type: types.GET_TRACKER + "_BEGIN",
  };
};

export const createTalent = (id, name, email) => {
  return {
    type: types.CREATE_TALENT + "_BEGIN",
    id,
    name,
    email
  };
};

export const createCompany = (id, name, email) => {
  return {
    type: types.CREATE_COMPANY + "_BEGIN",
    id,
    name,
    email
  };
};

export const createPic = (id, name, email) => {
  return {
    type: types.CREATE_PIC + "_BEGIN",
    id,
    name,
    email
  };
};

export const createTracker = (id, talent, company, pic, status) => {
  return {
    type: types.CREATE_TRACKER + "_BEGIN",
    id,
    talent,
    company,
    pic,
    status
  };
};

export const updateTalent = (id, name, email) => {
  return {
    type: types.UPDATE_TALENT + "_BEGIN",
    id,
    name,
    email
  };
};

export const updateCompany = (id, name, email) => {
  return {
    type: types.UPDATE_COMPANY + "_BEGIN",
    id,
    name,
    email
  };
};

export const updatePic = (id, name, email) => {
  return {
    type: types.UPDATE_PIC + "_BEGIN",
    id,
    name,
    email
  };
};

export const updateTracker = (id, talent, company, pic, status) => {
  return {
    type: types.UPDATE_TRACKER + "_BEGIN",
    id,
    talent,
    company,
    pic,
    status
  };
};
