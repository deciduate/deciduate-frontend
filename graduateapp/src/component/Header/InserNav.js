import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/InsertNav.module.css";

export default function InsertNav() {
  return (
    <div className={styles.Container}>
      <div className={styles.InsertTitle}>정보 입력하기</div>
      <div className={styles.InsertSubTitleDiv}>
        <Link to="/InsertBasic" className={styles.SubTitle}>
          기본 정보입력
        </Link>
        <Link to="/StepInsert" className={styles.SubTitle}>
          사용자이수정보입력
        </Link>
      </div>
    </div>
  );
}
