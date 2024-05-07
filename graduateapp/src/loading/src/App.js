import React, { useEffect, useState } from "react";
import Loadingbar from "./Loadingbar";
import "./style.css";

export default function App() {

  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(()=>{
    setInterval(()=>{
      setValue((val)=>val+1);
    }, 100);
  }, []);

  return (
    <div className="welcome">
      <h1>졸업이 가능한지 확인하고 있어요</h1>
      <h3>졸업할 결심이 {/*이름 변수 받기*/}님의 졸업을 도와드립니다</h3>
      <div className="app">
        <Loadingbar value={value} 
        onComplete={()=>setSuccess(true)}/>
      </div> 
      {/* <span>{success?"":""}</span> */} {/*success하면 결과 페이지로 넘어가기*/}
    </div>
  );
}