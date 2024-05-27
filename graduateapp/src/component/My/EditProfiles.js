import React, { useState } from "react";
import styles from "../css/My.module.css";
import EditMenu from "./EditMenu";
import MajorDropdown from "./MajorDropdown";
import { Link } from "react-router-dom";

export default function EditInfo() {

  const [selectedMajorType, setSelectedMajorType] = useState(null);

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
            <label>
              <input type="radio" name="major" value={1}
                checked={selectedMajorType === 1}
                onChange={() => setSelectedMajorType(1)} />전공심화
            </label>
            <label>
              <input type="radio" name="major" value={2}
                checked={selectedMajorType === 2}
                onChange={() => setSelectedMajorType(2)} />이중전공
            </label>
            <label>
              <input type="radio" name="major" value={3}
                checked={selectedMajorType === 3}
                onChange={() => setSelectedMajorType(3)} />부전공
            </label>
            <label>
              <input type="radio" name="major" value={4}
                checked={selectedMajorType === 4}
                onChange={() => setSelectedMajorType(4)} />전공심화+부전공
            </label></div>
            <div>
            {selectedMajorType === 1 &&
              <div className={styles.inputInfo}>
                전공
                <div className={styles.inputInfo3}>
                  <MajorDropdown /></div></div>}
            {selectedMajorType === 2 &&
              <>
                <div className={styles.inputInfo}>
                  전공
                  <div className={styles.inputInfo3}>
                    <MajorDropdown /></div></div>
                <div className={styles.inputInfo}>
                  전공2
                  <div className={styles.inputInfo3}>
                    <MajorDropdown /></div></div>
              </>}
              {selectedMajorType === 3 &&
              <>
                <div className={styles.inputInfo}>
                  전공
                  <div className={styles.inputInfo3}>
                    <MajorDropdown /></div></div>
                <div className={styles.inputInfo}>
                  전공2
                  <div className={styles.inputInfo3}>
                    <MajorDropdown /></div></div>
              </>}
              {selectedMajorType === 4 &&
              <>
                <div className={styles.inputInfo}>
                  전공
                  <div className={styles.inputInfo3}>
                    <MajorDropdown /></div></div>
                <div className={styles.inputInfo}>
                  전공2
                  <div className={styles.inputInfo3}>
                    <MajorDropdown /></div></div>
              </>}
          </div>

          <div className={styles.inputInfo}> 기타 사항 <br />
            <input type="radio"
              name="entrance" value="Transfer" />편입생
            <input type="radio"
              name="entrance" value="foreignerType" />외국인 전형 입학자
            <input type="radio"
              name="entrance" value="none" defaultChecked/>해당 없음
          </div> <br />
          <Link to="/MY"><button className={styles.Completed}>수정 완료하기</button></Link>
        </div>
      </div>
    </div >
  );
}
