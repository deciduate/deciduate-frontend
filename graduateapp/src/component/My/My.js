import React, { useEffect, useState } from "react";
import styles from "../css/My.module.css";

export default function My() {


  const infoIndex = ['기본 정보', '취득 학점', '수강 과목', '졸업 시험/논문 | 외국어 인증'];

  const [message, setMessage] = useState("미등록");


  const [updateInfo, setUpdateInfo] = useState('등록하기');



  return (
    <div className={styles.page}>
      <p className={styles.cheerUp}>졸업까지 달려봅시다!</p>
      <div className={styles.infoIndexContainer}>
        <div className={styles.infoContainer}>
          <div className={styles.infoIndex}>{infoIndex[0]} <br />
            <span className={styles.updateState}>{message}</span></div>
          <button className={styles.updateAction}>{updateInfo}</button>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.infoIndex}>{infoIndex[1]} <br />
            <span className={styles.updateState}>{message}</span></div>
          <button className={styles.updateAction}
          >{updateInfo}</button>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.infoIndex}>{infoIndex[2]} <br />
            <span className={styles.updateState}>{message}</span></div>
          <button className={styles.updateAction}>{updateInfo}</button>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.infoIndex}>{infoIndex[3]} <br />
            <span className={styles.updateState}>{message}</span></div>
          <button className={styles.updateAction}>{updateInfo}</button>
        </div>
      </div >
    </div>
  );
}