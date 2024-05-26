import React, { useState } from "react";
import styles from "../css/My.module.css";
import CreditTable from "./CreditTable";

export default function EditInfo() {

  return (
    <div className={styles.page}>
      <div className={styles.infoUpdateContainer}>
        <div className={styles.updateContainer}>

          {/* Profiles */}
          <div className={styles.inputInfo}
            style={{ fontSize: "23px" }}>기본정보
            <div className={styles.inputInfo8}>
              학번: <span className={styles.viewValue}> 저장된 값</span></div>
            <div className={styles.inputInfo8}>
              전공 유형: <span className={styles.viewValue}>저장된 값</span></div>
            <div className={styles.inputInfo8}>
              전공: <span className={styles.viewValue}>저장된 값</span>
            </div>
            <div className={styles.inputInfo8}> 기타 사항: <span className={styles.viewValue}>저장된 값</span></div>
          </div>

          {/* Credits */}
          <div className={styles.inputInfo}
            style={{ fontSize: "23px", margin: "1rem 0 0 0" }}>취득학점
            {/* <CreditTable /> */}
          </div>

          <div className={styles.inputInfo}
            style={{ fontSize: "23px", margin: "1rem 0 0 0" }}>수강과목
            <div className={styles.inputInfo6}
              style={{ padding: "1rem 0" }}
            >
              <label className={styles.labelIndex}>전공 필수 과목</label>
              <label className={styles.labelIndex2}>교양 필수 과목</label>
              {/* <div>
                <div className={styles.subjectContainer2}>과목 리스트</div>
                <div className={styles.subjectContainer3}>과목 리스트</div>
              </div> */}
            </div></div>


          <div className={styles.inputInfo}
            style={{ fontSize: "23px", margin: "1rem 0 0 0" }}>기타사항
            <div className={styles.inputInfo8}> 졸업 시험/ 논문 통과 여부: <span className={styles.viewValue}>저장된 값</span></div>
            <div className={styles.inputInfo8}> 외국어 인증 점수 보유 및 제출 여부: <span className={styles.viewValue}>저장된 값</span></div>
          </div>
        </div>
      </div >
    </div >
  );
}