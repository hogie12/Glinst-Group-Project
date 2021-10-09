import { all } from "@redux-saga/core/effects";
import {
  watchTalentDetail,
  watchPicDetail,
  watchTrackerDetail,
  watchCompanyDetail,
} from "./detail";
import {
  watchAllCompany,
  watchAllTalent,
  watchAllPic,
  watchAllTracker,
} from "./data";
import {
  watchUpdatePic,
  watchUpdateTalent,
  watchUpdateCompany,
  watchUpdateTracker,
} from "./update";
import {
  watchCreatePic,
  watchCreateTalent,
  watchCreateCompany,
  watchCreateTracker,
} from "./create";
import {
  watchDeleteCompany,
  watchDeleteTalent,
  watchDeleteTracker,
  watchDeletePic,
} from "./delete";

export default function* rootSaga() {
  yield all([
    watchTalentDetail(),
    watchAllCompany(),
    watchAllPic(),
    watchAllTalent(),
    watchAllTracker(),
    watchPicDetail(),
    watchTalentDetail(),
    watchCompanyDetail(),
    watchTrackerDetail(),
    watchCreateCompany(),
    watchCreateTalent(),
    watchCreatePic(),
    watchCreateTracker(),
    watchUpdateTalent(),
    watchUpdateCompany(),
    watchUpdatePic(),
    watchUpdateTracker(),
    watchDeleteTalent(),
    watchDeleteCompany(),
    watchDeletePic(),
    watchDeleteTracker(),
  ]);
}
