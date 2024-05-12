import React, { useState } from "react";
import styles from "../css/My.module.css";
import UpdateInfoMenu from "./UpdateInfoMenu";


export default function EditInfo() {



  return (
    <div className={styles.page}>
      <div className={styles.infoUpdateContainer}>
        <UpdateInfoMenu />
        <div className={styles.updateContainer}>
          <div className={styles.majorTest}>
          졸업 시험/ 논문 통과 여부
          </div>
          <div className={styles.EnglishPass}>
          외국어 인증 점수 보유 및 제출 여부
          </div>


          <br /><br /><br />
          <button className={styles.Completed}>수정 완료하기</button>


      </div>
    </div>
  </div >
  );
}
