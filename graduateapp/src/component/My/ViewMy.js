import React, { useState } from "react";
import styles from "../css/My.module.css";

export default function EditInfo() {

  const [selectedMajorType, setSelectedMajorType] = useState(null);

  return (
    <div className={styles.page}>
      <div className={styles.infoUpdateContainer}>
        <div className={styles.updateContainer}>
          <div className={styles.inputInfo}>
            학번 <br />
            <label><div className={styles.viewInfo}>
              저장된 학번</div></label></div>

          <div className={styles.inputInfo}>
            전공 유형:  저장된 전공 유형</div>

          {/* 전공심화일 떄 */}
          <div className={styles.inputInfo}>
            전공 <br />
            <label><div className={styles.viewInfo}>
              저장된 전공</div></label>
          </div>

          {/* 전공심화가 아닐 때 */}
          <div className={styles.inputInfo}>
            전공 <br />
            <label><div className={styles.viewInfo}>
              저장된 전공</div></label>
            <label><div className={styles.viewInfo}>
              저장된 전공2</div></label>
          </div>

          <div className={styles.inputInfo}> 기타 사항 <br />
            <label><div className={styles.viewInfo}>
              저장된 기타 사항</div></label>
          </div> <br />


          <div className={styles.BoxContainer}>
            <div className={styles.Box}>
              <div className={styles.contentTitle}>1전공</div>
              <div className={styles.content}></div>
            </div>
            <div className={styles.Box}>
              <div className={styles.contentTitle}>이중전공</div>
              <div className={styles.content}></div>
            </div>
            <div className={styles.Box}>
              <div className={styles.contentTitle}>2전공</div>
              <div className={styles.content}></div>
            </div>
            <div className={styles.Box}>
              <div className={styles.contentTitle}>실외</div>
              <div className={styles.content}></div>
            </div>
            <div className={styles.Box}>
              <div className={styles.contentTitle}>교양</div>
              <div className={styles.content}></div>
            </div>
            <div className={styles.Box}>
              <div className={styles.contentTitle}>부전공</div>
              <div className={styles.content}></div>
            </div>
            <div className={styles.Box}>
              <div className={styles.contentTitle}>교직</div>
              <div className={styles.content}></div>
            </div>
            <div className={styles.Box}>
              <div className={styles.contentTitle}>자선</div>
              <div className={styles.content}></div>
            </div>
            <div className={styles.Box}>
              <div className={styles.contentTitle}>총취득</div>
              <div className={styles.content}></div>
            </div>
            <div className={styles.Box}>
              <div className={styles.contentTitle}>총평점</div>
              <div className={styles.content}></div>
            </div>
          </div>

          <div className={styles.inputInfo6}>
            <label className={styles.labelIndex}>전공 필수 과목</label>
            <label className={styles.labelIndex2}>교양 필수 과목</label>
            <div>
              <div className={styles.subjectContainer2}>과목 리스트</div>
              <div className={styles.subjectContainer3}>과목 리스트</div>
            </div>
          </div>

          <div className={styles.majorTest}>
            졸업 시험/ 논문 통과 여부 <br/>
            < div className={styles.checkList1}>
            <div>본전공 통과 </div>
            <div>이중전공 통과 </div>
          </div></div>
          <div className={styles.EnglishPass}>
            외국어 인증 점수 보유 및 제출 여부
            <div className={styles.checkList1}>보유 및 제출 완료</div>
          </div>

        </div>
      </div >
    </div >
  );
}