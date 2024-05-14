import React, { useState } from "react";
import styles from "../css/My.module.css";
import UpdateInfoMenu from "./UpdateInfoMenu";
import SubjectInputRadio from "./SubjectInputRadio";
import { Link } from "react-router-dom";


export default function EditInfo() {


  return (
    <div className={styles.page}>
      <div className={styles.infoUpdateContainer}>
        <UpdateInfoMenu />
        <div className={styles.updateContainer}>
          <div className={styles.inputInfo}>
            <SubjectInputRadio /> 
          

          <br /><br /><br />
          <Link to="/MY"><button className={styles.Completed}>수정 완료하기</button></Link>


        </div>
      </div>
    </div>
  </div >
  );
}
