import React, { useEffect, useState } from "react";
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
  const [updateState, setUpdateState] = useState("등록하기");
  const [hasEdited, setHasEdited] = useState(false);

  useEffect(() => {
    if (hasEdited) {
      setMessage("등록 완료");
      setUpdateState("수정하기");
    } else {
      setMessage("미등록");
      setUpdateState("등록하기");
    }
  }, [hasEdited]);

  const handleEdited = () => {
    setHasEdited(true);
  };

  return (
    <div className={styles.page}>
      <span className={styles.cheerUp}>졸업까지 달려봅시다!</span>
      <div className={styles.infoIndexContainer}>
        <div className={styles.infoContainer}>
          <div className={styles.infoIndex}>
            {infoIndex[0]} <br />
            <span
              className={hasEdited ? styles.updateState : styles.updatedState}
            >
              {message}
            </span>
          </div>
          <Link to="/MY/EditProfiles">
            <button onClick={handleEdited} className={styles.updateAction}>
              {updateState}
            </button>
          </Link>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.infoIndex}>
            {infoIndex[1]} <br />
            <span
              className={hasEdited ? styles.updateState : styles.updatedState}
            >
              {message}
            </span>
          </div>
          <Link to="/MY/EditCredits">
            <button className={styles.updateAction}>{updateState}</button>
          </Link>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.infoIndex}>
            {infoIndex[2]} <br />
            <span
              className={hasEdited ? styles.updateState : styles.updatedState}
            >
              {message}
            </span>
          </div>
          <Link to="/MY/EditSubjects">
            <button className={styles.updateAction}>{updateState}</button>
          </Link>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.infoIndex}>
            {infoIndex[3]} <br />
            <span
              className={hasEdited ? styles.updateState : styles.updatedState}
            >
              {message}
            </span>
          </div>
          <Link to="/MY/EditExtras">
            <button className={styles.updateAction}>{updateState}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
