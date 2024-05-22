import React, { useState } from "react";
import styles from "../css/My.module.css";
import { Link } from "react-router-dom";

export default function My() {
  const infoIndex = [
    "기본 정보",
    "취득 학점",
    "수강 과목",
    "졸업 시험/논문 | 외국어 인증",
  ];

  const [message, setMessage] = useState("미등록");

  const [updateInfo, setUpdateInfo] = useState("등록하기");

  return (
    <div className={styles.page}>
      <span className={styles.cheerUp}>졸업까지 달려봅시다!</span>
      <div className={styles.infoIndexContainer}>
        <div className={styles.infoContainer}>
          <div className={styles.infoIndex}>
            {infoIndex[0]} <br />
            <span className={styles.updateState}>{message}</span>
          </div>
          <Link to="/MY/BasicInfo">
            <button className={styles.updateAction}>{updateInfo}</button>
          </Link>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.infoIndex}>
            {infoIndex[1]} <br />
            <span className={styles.updateState}>{message}</span>
          </div>
          <Link to="/MY/CreditInfo">
            <button className={styles.updateAction}>{updateInfo}</button>
          </Link>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.infoIndex}>
            {infoIndex[2]} <br />
            <span className={styles.updateState}>{message}</span>
          </div>
          <Link to="/MY/SubjectInfo">
            <button className={styles.updateAction}>{updateInfo}</button>
          </Link>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.infoIndex}>
            {infoIndex[3]} <br />
            <span className={styles.updateState}>{message}</span>
          </div>
          <Link to="/MY/EtcInfo">
            <button className={styles.updateAction}>{updateInfo}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
