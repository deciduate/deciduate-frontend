import React, { useState } from "react";
import styles from "../css/newInput.module.css";
import MajorDropdown from "./MajorDropdown";
import InsertNav from "../Header/InserNav";


export default function NewInput2() {

  const [selectedMajorType, setSelectedMajorType] = useState(null);

  return (

    <div className={styles.container}>
      <InsertNav />
      <div className={styles.infoUpdateContainer}>
        <div className={styles.updateContainer}>
          <div className={styles.inputContainer}>
            <p className={styles.hello}>
              사용자 이수 정보를 알려주세요
            </p>
            <div> 
              
            </div>



          <div>




          </div>

        
          </div>
        </div>
      </div>
    </div>

  );

}