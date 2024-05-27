import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Header/Navbar";
import Loading from "./component/loading/Loading";
import InsertBasic from "./component/basicInput/InsertBasic";
import StepInsert from "./component/basicInput/StepInsert";
import My from "./component/My/My";
import Home from "./component/home/Home";
import EditProfiles from "./component/My/EditProfiles";
import EditCredits from "./component/My/EditCredits";
import EditSubjects from "./component/My/EditSubjects";
import EditExtras from "./component/My/EditExtras";
import ViewMy from './component/My/ViewMy';
import Result_NonPass from './component/Result/Result_NonPass';
import Result_Pass from './component/Result/Result_Pass';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MY" element={<My />} />
          <Route path="/MY/EditProfiles" element={<EditProfiles />} />
          <Route path="/MY/EditCredits" element={<EditCredits />} />
          <Route path="/MY/EditSubjects" element={<EditSubjects />} />
          <Route path="/MY/EditExtras" element={<EditExtras />} />
          <Route path="/MY/Loading" element={<Loading />} />
          <Route path="/InsertBasic" element={<InsertBasic />} />
          <Route path="/StepInsert" element={<StepInsert />} />
          <Route path="/MY/ViewMy" element={<ViewMy />} />
          <Route path='/MY/Result_NonPass' element={<Result_NonPass/>}/>
          <Route path='/MY/Result_Pass' element={<Result_Pass/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
