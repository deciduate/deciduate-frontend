import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Header/Navbar";
import Loading from "./component/loading/Loading";
import InsertBasic from "./component/basicInput/InsertBasic";
import My from "./component/My/My";
import BasicInfo from "./component/My/BasicInfo";
import CreditInfo from "./component/My/CreditInfo";
import SubjectInfo from "./component/My/SubjectInfo";
import EtcInfo from "./component/My/EtcInfo";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Loading />
      <My/>
      <BasicInfo />
      <CreditInfo />
      <SubjectInfo />
      <EtcInfo />
      <InsertBasic />
    </BrowserRouter>
  );
}

export default App;
