import React, { useState } from "react";
import styles from "../css/My.module.css";
import UpdateInfoMenu from "./UpdateInfoMenu";
import MajorIndexDropdown from "./MajorIndexDropdown";
import MajorDropdown from "./MajorDropdown";
import MajorIndex2Dropdown from "./MajorIndex2Dropdown";
import StudentInputRadio from "./StudentInputRadio";
import { Link } from "react-router-dom";


export default function EditInfo() {

  const [transfer, setTransfer] = useState('false');
  const [foreigner, setForeigner] = useState('false');

  return (
    <div className={styles.page}>
      <div className={styles.infoUpdateContainer}>
        <UpdateInfoMenu />
        <div className={styles.updateContainer}>
          <div className={styles.inputInfo}>
            학번 <br />
            <label><input className={styles.studentId} type="number" /></label></div>

          <div className={styles.inputInfo}>
            전공 구분 및 학과
            <div className={styles.inputInfo2}>
              <MajorIndexDropdown />&nbsp;
              <div className={styles.inputInfo3}>
                <MajorDropdown /></div></div></div>

            <div className={styles.inputInfo}>
            전공 구분 및 학과
            <div className={styles.inputInfo2}>
              <MajorIndex2Dropdown />&nbsp;
              <div className={styles.inputInfo3}>
                <MajorDropdown /></div></div></div>

          <div className={styles.inputInfo}> 기타 사항 <br />
            <StudentInputRadio />

          </div>
          <br /><br />
          <Link to="/MY"><button className={styles.Completed}>수정 완료하기</button></Link>


        </div>
      </div>
    </div>
  );
}
