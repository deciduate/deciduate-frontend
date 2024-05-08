import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Header/Navbar";
import Loading from "./component/loading/Loading";
import InsertBasic from "./component/basicInput/InsertBasic";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Loading />
    </BrowserRouter>
  );
}

export default App;
