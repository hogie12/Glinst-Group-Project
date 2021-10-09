import { combineReducers } from "redux";
import talentData from "./talent";
import talentDetail from "./talentDetail";
import companyData from "./company";
import companyDetail from "./companydetail";
import picData from "./pic";
import picDetail from "./picDetail";
import trackerData from "./tracker";
import trackerDetail from "./trackerDetail";

export default combineReducers({
  talentData,
  talentDetail,
  companyData,
  companyDetail,
  picData,
  picDetail,
  trackerData,
  trackerDetail
});
