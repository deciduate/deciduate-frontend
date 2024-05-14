import React, { useState } from "react";
import styles from "../css/My.module.css";
import { Link } from "react-router-dom";


export default function UpdateInfo() {

  return (
    <div className={styles.updateInfoMenu}>
      <p className={styles.cheerUp}>수정을 완료하면 정확한 결과를 알 수 있어요!</p>
      <div className={styles.indexContainer}>
      <Link to="/MY/BasicInfo"><button className={styles.editInfo}>기본 정보</button></Link>
      <Link to="/MY/CreditInfo"><button className={styles.editInfo}>취득 학점</button></Link>
      <Link to="/MY/SubjectInfo"><button className={styles.editInfo}>수강 과목</button></Link>
      <Link to="/MY/EtcInfo"><button className={styles.editInfo}>기타 정보</button></Link>
      </div>
    </div>

  );
}