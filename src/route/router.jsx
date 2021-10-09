import React from "react";
import SidebarPage from "../component/sidebar/sidebar";
import { Switch, Route } from "react-router-dom";
import TalentPage from "../pages/talent";
import CompanyPage from "../pages/company";
import PicPage from "../pages/pic";
import TrackerPage from "../pages/tracker/tracker";

export default function Router() {
  return (
    <div>
      <SidebarPage>
        <Switch>
          <Route exact path="/">
            <TalentPage />
          </Route>
          <Route path="/company">
            <CompanyPage/>
          </Route>
          <Route path="/pic">
            <PicPage/>
          </Route>
          <Route path="/tracker">
            <TrackerPage/>
          </Route>
          <Route path="*">not found</Route>
        </Switch>
      </SidebarPage>
    </div>
  );
}
