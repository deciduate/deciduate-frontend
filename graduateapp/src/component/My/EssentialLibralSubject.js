import React, { useState } from 'react';
import styles from "../css/My.module.css";

export default function EssentialLiberalSubject() {

  const data = [
    { id: 0, title: '과목4' },
    { id: 1, title: '과목2' },
    { id: 2, title: '과목3' },
    { id: 3, title: '과목4' },
    { id: 4, title: '과목5' },
    { id: 5, title: '과목6' },
    { id: 6, title: '과목7' }
  ];

  const [checkedItems, setCheckedItems] = useState([]);

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckedItems(prev => [...prev, id]);
    }
    else {
      setCheckedItems(checkedItems.filter((el) => el !== id));
    }
  };

  return (
    <>
      <div>
        {data?.map((data, key) => (
          <div key={key}>
            <label>
              <input type='checkbox' name={'select-${data.id}'}
                onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
                checked={checkedItems.includes(data.id) ? true : false} />
            </label>
            <span>{data.title}</span>
          </div>



        ))}
      </div>
    </>
  );
}
