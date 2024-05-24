import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Header/Navbar";
import Loading from "./component/loading/Loading";
import My from "./component/My/My";
import EditProfiles from "./component/My/EditProfiles";
import EditCredits from "./component/My/EditCredits";
import EditSubjects from "./component/My/EditSubjects";
import EditExtras from "./component/My/EditExtras";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/MY" element={<My />} />
        <Route path="/MY/EditProfiles" element={<EditProfiles />} />
        <Route path="/MY/EditCredits" element={<EditCredits />} />
        <Route path="/MY/EditSubjects" element={<EditSubjects />} />
        <Route path="/MY/EditExtras" element={<EditExtras />} />
        {/* <Loading /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
