import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/InsertBasic.module.css";

function InsertBasic() {
  return (
    <>
      <div className={styles.InsertContainer}>
        <div className={styles.InsertTitle}>정보를 입력해주세요</div>
        <div className={styles.InsertSubContainer}>
          <div className={styles.ID}>
            <span>학번</span>
            <input type="number" />
          </div>
          <div className={styles.major}>
            <input
              type="radio"
              name="major"
              value="majorDeepening"
              defaultChecked
            />
            전공심화
            <input type="radio" name="major" value="Minor" />
            부전공
            <input type="radio" name="major" value="doubleMajor" />
            이중전공
            <input type="radio" name="major" value="deepeningPlusSubmajor" />
            전공심화+부전공
          </div>
          <div className={styles.majors}>
            전공
            <input type="text" />
          </div>
          <div className={styles.subMajor}>
            전공2
            <input type="text" />
          </div>
          <div className={styles.text}>*해당하면 선택해주세요</div>
          <div className={styles.major}>
            <input
              type="radio"
              name="entrance"
              value="Transfer"
              defaultChecked
            />
            편입생
            <input type="radio" name="entrance" value="foreignerType" />
            외국인 전형 입학
          </div>
        </div>
      </div>
    </>
  );
}
export default InsertBasic;
