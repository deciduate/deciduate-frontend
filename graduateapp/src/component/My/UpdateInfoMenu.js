import React, { useState } from "react";
import styles from "../css/My.module.css";


export default function UpdateInfo() {

  return (
    <div className={styles.updateInfoMenu}>
      <p className={styles.cheerUp}>수정을 완료하면 정확한 결과를 알 수 있어요!</p>
      <div className={styles.indexContainer}>
        <button className={styles.editInfo}>기본 정보</button>
        <button className={styles.editInfo}>취득 학점</button>
        <button className={styles.editInfo}>수강 과목</button>
        <button className={styles.editInfo}>기타 정보</button>
      </div>
    </div>

  );
}