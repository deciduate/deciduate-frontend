import { useState, useEffect } from "react";


const LoadingBar = ({value=0, onComplete=()=>{}})=>{
  const [percent, setPercent] = useState(value);

  useEffect(()=> {
    setPercent(Math.min(100, Math.max(value, 0)));

    if (value>=100){
      onComplete();
    }
  }, [value]);

return (
  <div className="loading">
    <span style={{color: "black"}}>
      {percent.toFixed()}%</span>
    <div 
      style={{width: '${percent}%'}}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percent.toFixed()}
      />
  </div>
  // 두 번째 div 통해서 회색 바 위에 청록색으로 로딩 표시되도록 하려 했는데 진행이 안 됨
);
};

export default LoadingBar;