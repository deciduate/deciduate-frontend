import React from "react";
import styles from "../css/newInput.module.css";


export default function newInput() {

  return (

    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <div className={styles.student_no}>
          학번 (*ex. 24학번: 24 입력)<br />
          <label><input   type="number" maxlength="2"
            className={styles.inputStudent_no}></input> </label>


        </div>





      </div>
    </div>


  );

}