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
          {/* <Loading /> */}
          <Route path="/InsertBasic" element={<InsertBasic />} />
          <Route path="/StepInsert" element={<StepInsert />} />
          <Route path="/ViewMy" element={<ViewMy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
