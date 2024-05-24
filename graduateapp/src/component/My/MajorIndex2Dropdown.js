import React, { useState } from "react";
import styles from "../css/My.module.css";



function CreditIndexDropdown() {

  const options = ['구분', '이중 전공', '부전공'];

  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("구분");

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownButton} onClick={(e) => setIsActive(!isActive)}>{selected}</div>
      {isActive && (
        <div className={styles.dropdownContents}>
          {options.map(option => (
            <div className={styles.dropdownItems} onClick={(e) => {
              setSelected(option)
              setIsActive(false)
            }}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div >
  );
}

export default CreditIndexDropdown;