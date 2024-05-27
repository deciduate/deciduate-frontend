import React from "react";
import styles from "../css/My.module.css";
import CreditTable from "./CreditTable";
import { Link } from "react-router-dom";
import axios from "axios";
import EditNav from "../Header/EditNav";

export default function EditInfo() {
  return (
    <div className={styles.page}>
      <EditNav />
      {/* <div className={styles.cheerUp2}>등록한 정보를 확인해보세요</div> */}
      <div className={styles.infoUpdateContainer}>
        <div className={styles.updateContainer}>
          {/* Profiles */}
          <div>
            {" "}
            <h3
              className={styles.inputInfo9}
              style={{ fontSize: "23px", fontWeight: "Bold" }}
            >
              기본정보
            </h3>
            <div className={styles.inputInfo8}>
              학번: <span className={styles.viewValue}> </span>
            </div>
            <div className={styles.inputInfo8}>
              전공 유형: <span className={styles.viewValue}></span>
            </div>
            <div className={styles.inputInfo8}>
              전공: <span className={styles.viewValue}></span>
            </div>
            <div className={styles.inputInfo8}>
              {" "}
              기타 사항: <span className={styles.viewValue}></span>
            </div>
          </div>

          {/* Credits */}
          <div>
            {" "}
            <h3
              className={styles.inputInfo9}
              style={{
                fontSize: "23px",
                fontWeight: "Bold",
                margin: "1rem 0 0 0",
              }}
            >
              취득학점{" "}
            </h3>
            <div className={styles.inputInfo}>
              <CreditTable />
            </div>
          </div>

          {/* Subjects */}

          <div>
            {" "}
            <h3
              className={styles.inputInfo9}
              style={{
                fontSize: "23px",
                fontWeight: "Bold",
                margin: "1rem 0 0 0",
              }}
            >
              수강과목{" "}
            </h3>
            <div className={styles.inputInfo6} style={{ padding: "1rem 0" }}>
              <div></div>
              <label className={styles.labelIndex}>전공 필수 과목</label>
              <label className={styles.labelIndex2}>교양 필수 과목</label>
              <div>
                <div className={styles.subjectContainer2}>과목 리스트</div>
                <div className={styles.subjectContainer3}>과목 리스트</div>
              </div>
            </div>
          </div>

          <div>
            {" "}
            <h3
              className={styles.inputInfo9}
              style={{
                fontSize: "23px",
                fontWeight: "Bold",
                margin: "1rem 0 0 0",
              }}
            >
              기타사항{" "}
            </h3>
            <div className={styles.inputInfo8}>
              {" "}
              졸업 시험/ 논문 통과 여부:{" "}
              <span className={styles.viewValue}></span>
            </div>
            <div className={styles.inputInfo8}>
              {" "}
              외국어 인증 점수 보유 및 제출 여부:{" "}
              <span className={styles.viewValue}></span>
            </div>
            <br />
            <Link to="/MY">
              <button className={styles.Completed}>확인 완료</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
