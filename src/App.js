import React, { useEffect } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./route/router";
import { useDispatch } from "react-redux";
import { getAllCompany, getAllPic, getAllTalent, getAllTracker } from "./store/action/data";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllTalent())
    dispatch(getAllCompany())
    dispatch(getAllPic())
    dispatch(getAllTracker())
  }, [dispatch])
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
