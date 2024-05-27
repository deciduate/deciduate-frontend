import React, { useEffect, useState } from "react";
import styles from "../css/My.module.css";
import { Link } from "react-router-dom";

export default function My() {
  const infoIndex = [
    "내 정보",
    "기본 정보",
    "취득 학점",
    "수강 과목",
    "졸업 시험/논문 | 외국어 인증",
  ];

  const [message, setMessage] = useState("미등록");
  const [updateState, setUpdateState] = useState("등록하기");
  const [hasEdited, setHasEdited] = useState(false); // true 면 등록완료-수정하기로 바뀜
  const [isRegistered, setIsRegistered] = useState(false);

  const handleEdited = () => {
    setHasEdited(true);
  };

  useEffect(() => {
    if (isRegistered) {
      setMessage("등록 완료");
      setUpdateState("상세 보기");
    } else {
      setMessage("미등록");
      setUpdateState("등록하기");
    }
  }, [isRegistered]);

  useEffect(() => {
    if (hasEdited) {
      setIsRegistered(true);
    }
  }, [hasEdited]);

  return (
    <div className={styles.page}>
      <span className={styles.cheerUp}>졸업까지 달려봅시다!</span>
      <div
        className={styles.infoContainer}
        style={{ margin: "1rem 0 -1rem 0" }}
      >
        <div
          className={styles.infoIndex}
          style={{
            fontSize: "35px",
            color: "#ffffff",
            padding: "1.2rem 0 0 20px",
          }}
        >
          {infoIndex[0]}
        </div>
        <Link to="/MY/ViewMy">
          <button className={styles.updateAction}>상세보기</button>
        </Link>
      </div>

      <div className={styles.infoIndexContainer}>
        <div className={styles.infoContainer}>
          <div className={styles.infoIndex}>
            {infoIndex[1]} <br />
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
            {infoIndex[2]} <br />
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
            {infoIndex[3]} <br />
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
            {infoIndex[4]} <br />
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
