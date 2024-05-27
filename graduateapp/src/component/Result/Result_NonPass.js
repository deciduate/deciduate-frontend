import React, { useState } from "react";
import styles from "../css/Result.module.css";
import moreInfo from "./moreInfo.png";

export default function Result_NonPass() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.page}>
        <div className={styles.cheerUp}>졸업까지 얼마 안 남았아요💪🏻</div>
        <div className={styles.resultContainer}>
          <div className={styles.specificResultContainer}>
            <div className={styles.needThisTitle}>
              학점을 <br/>보충해야 해요
            </div>
            <div className={styles.needThisItem}>
              내용입니다
            </div>
          </div>
          <div className={styles.specificResultContainer}>
          <div className={styles.needThisTitle}>
              전필 학점이 <br/> 부족해요
            </div>
            <div className={styles.needThisItem}>
              내용입니다
            </div>
          </div>
          <div className={styles.specificResultContainer}>
          <div className={styles.needThisTitle}>
            교필 학점이 <br/> 부족해요
            </div>
            <div className={styles.needThisItem}>
              내용입니다
            </div>
          </div>
          <div className={styles.specificResultContainer}>
          <div className={styles.needThisTitle}>
              졸시/졸논을 <br/>통과해야 해요
            </div>
            <div className={styles.needThisItem}>
              내용입니다
            </div>
          </div>
          <div className={styles.specificResultContainer}>
          <div className={styles.needThisTitle}>
              외국어 인증이 <br/>필요해요
            </div>
            <div className={styles.needThisItem}>
              내용입니다
            </div>
          </div>
        </div>

        <div className={styles.moreInfoContainer}>
          <span className={styles.moreInfoButton} onClick={() => setIsOpen(!isOpen)}>
            <span className={styles.moreInfo}>
              더 많은 정보가 필요하신가요?
              <span><img className={styles.moreInfoPic} src={moreInfo} alt="정보 바로가기" /></span>
            </span>
          </span>
          <span className={styles.ListContainer}>
            {isOpen && (
              <ul className={styles.moreInfoList}>
                <li className={styles.moreInfoListItem}><a className={styles.linkStyle1} href ="http://localhost:3000/subjectConditionPaper.xls">수강 유의 과목 확인하기</a></li>
                <li className={styles.moreInfoListItem}>
                  <a className={styles.linkStyle2} href ="http://localhost:3000/foreignCertificationPaper.pdf" download>외국어 인증 요건 확인하기</a></li>
              </ul>
            )}
          </span>
        </div>
      </div>
    </>
  );
}