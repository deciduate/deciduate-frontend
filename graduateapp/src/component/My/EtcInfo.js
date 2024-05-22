import React, { useState } from "react";
import styles from "../css/My.module.css";
import UpdateInfoMenu from "./UpdateInfoMenu";
import ForeignLanguageTestRadio from "./ForeignLanguageTestRadio";
import GraduateTextCheckbox from "./GraduateTestCheckbox";
import { Link } from "react-router-dom";


export default function EditInfo() {


  return (
    <div className={styles.page}>
      <div className={styles.infoUpdateContainer}>
        <UpdateInfoMenu />
        <div className={styles.updateContainer}>
          <div className={styles.majorTest}>
            졸업 시험/ 논문 통과 여부
            <GraduateTextCheckbox />
          </div>
          <div className={styles.EnglishPass}>
            외국어 인증 점수 보유 및 제출 여부
            <ForeignLanguageTestRadio />
          </div>

          <br /><br /><br />
          <Link to="/MY"><button className={styles.Completed}>수정 완료하기</button></Link>


        </div>
      </div>
    </div >
  );
}
