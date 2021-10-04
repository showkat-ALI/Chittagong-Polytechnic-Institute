import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import NaviGation from "./components/Navigation/NaviGation";
import Header from "./components/Header/Header";
import Alldepartments from "./components/AllDepartments/Alldepartments";
import Footer from "./components/Footer/Footer";
import PageNotFonund from "./components/PageNotFound/PageNotFonund";
import Aboutus from "./components/Aboutus/Aboutus";
import CoCurriCulams from "./components/CoCurriCulams/CoCurriCulams";

function App() {
  return (
    <div className="App">
      <Router>
        <NaviGation></NaviGation>

        <Switch>
          <Route exact path="/">
            <Header></Header>
          </Route>
          <Route path="/home">
            <Header></Header>
          </Route>
          <Route path="/departments">
            <Alldepartments></Alldepartments>
          </Route>
          <Route path="/about">
            <Aboutus></Aboutus>
          </Route>
          <Route path="/coCuriculam">
            <CoCurriCulams></CoCurriCulams>
          </Route>
          <Route path="*">
            <PageNotFonund></PageNotFonund>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
