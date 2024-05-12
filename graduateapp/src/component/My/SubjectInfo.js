import React, { useState } from "react";
import styles from "../css/My.module.css";
import UpdateInfoMenu from "./UpdateInfoMenu";


export default function EditInfo() {



  return (
    <div className={styles.page}>
      <div className={styles.infoUpdateContainer}>
        <UpdateInfoMenu />
        <div className={styles.updateContainer}>
          <div className={styles.inputInfo}>




          <br /><br /><br />
          <button className={styles.Completed}>수정 완료하기</button>


        </div>
      </div>
    </div>
  </div >
  );
}
