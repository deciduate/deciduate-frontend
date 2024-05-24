import React from "react";
import styles from "../css/My.module.css";
import EditMenu from "./EditMenu";
import MajorDropdown from "./MajorDropdown";
import { Link } from "react-router-dom";


export default function EditInfo() {

  return (
    <div className={styles.page}>
      <div className={styles.infoUpdateContainer}>
        <EditMenu />
        <div className={styles.updateContainer}>
          <div className={styles.inputInfo}>
            학번 <br />
            <label><input className={styles.studentId} type="number" /></label>
          </div>

          <div className={styles.inputInfo}>
            전공 유형 <br />
            <input type="radio"
                name="major" value={1} />전공심화
            <input type="radio"
                name="major" value={2} />이중전공
            <input type="radio"
                name="major" value={3} />부전공
            <input type="radio"
                name="major" value={4} />
              전공심화+부전공
          </div>

          <div className={styles.inputInfo}>
            전공
            <div className={styles.inputInfo3}>
              <MajorDropdown /></div></div>
          <div className={styles.inputInfo}>
            전공2
            <div className={styles.inputInfo3}>
              <MajorDropdown /></div></div>
          <div className={styles.inputInfo}> 기타 사항 <br />
            <input type="radio"
              name="entrance" value="Transfer" />편입생
            <input type="radio"
              name="entrance" value="foreignerType" />외국인 전형 입학자
            <input type="radio"
              name="none" value="none" defaultChecked/>해당 없음
          </div> <br/>
          <Link to="/MY"><button className={styles.Completed}>수정 완료하기</button></Link>
        </div>
      </div>
    </div >
  );
}
