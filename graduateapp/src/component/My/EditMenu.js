import React from "react";
import styles from "../css/My.module.css";
import { Link } from "react-router-dom";


export default function UpdateInfo() {

  return (
    <>
      <div className={styles.cheerUp2}>수정을 완료하면 정확한 결과를 알 수 있어요</div>
      <div className={styles.updateInfoMenu}>
        <div className={styles.indexContainer}>
          <Link to="/MY/EditProfiles"><button className={styles.editInfo}>기본 정보</button></Link>
          <Link to="/MY/EditCredits"><button className={styles.editInfo}>취득 학점</button></Link>
          <Link to="/MY/EditSubjects"><button className={styles.editInfo}>수강 과목</button></Link>
          <Link to="/MY/EditExtras"><button className={styles.editInfo}>기타 정보</button></Link>
        </div>
      </div>
    </>
  );
}