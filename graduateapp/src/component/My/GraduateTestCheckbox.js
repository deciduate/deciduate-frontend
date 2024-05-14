import React, { useState } from 'react';
import styles from "../css/My.module.css";

export default function GraduateTextCheckbox(){

  const data =[
    { id: 0, title: '전공 / 전공 심화'},
    { id: 1, title: '이중 전공 / 부전공'}
  ];

  const [checkedItems, setCheckedItems]=useState([]);

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckedItems(prev=> [...prev, id]);
    }
    else {
      setCheckedItems(checkedItems.filter((el)=>el !==id));
    }
  };

  return(
    <div>
      {data?.map((data, key)=> (
        <div key={key}>
          <label>
            <input type='checkbox' name={'select-${data.id}'}
              onChange={(e)=>handleSingleCheck(e.target.checked, data.id)}
              checked={checkedItems.includes(data.id) ? true : false} />
          </label>
          <span>{data.title}</span>
        </div>



      ))}
    </div>

  );
}