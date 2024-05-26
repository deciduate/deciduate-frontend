import React, { useState, useRef } from "react";
import styles from "../css/Result.module.css";
import moreInfo from "./moreInfo.png";
import foreignCertification from "./foreignCertification.png";

export default function Result_NonPass() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();


  return (
    <>
      <div className={styles.page}>
        <div className={styles.cheerUp}>졸업까지 얼마 안 남았아요💪🏻</div>
        <div className={styles.resultContainer}>
          <span className={styles.specificResultContainer}></span>
          <span className={styles.specificResultContainer}></span>
          <span className={styles.specificResultContainer}></span>
          <span className={styles.specificResultContainer}></span>
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
                <li>수강 유의 과목 확인하기</li>
                <li>
                  <button className={styles.modalOpen} onClick={() => setModalOpen(true)}>
                    외국어 인증 요건 확인하기
                  </button>

                </li>
              </ul>
            )}
          </span>

          {modalOpen && (
            <div className={styles.modalContainer} ref={modalBackground}>
              <div className={styles.modalContent}>
                <button className={styles.modalCloseButton} onClick={() => setModalOpen(false)}>X</button>
                <img className={styles.fullscreenImage} src={foreignCertification} alt="외국어 인증" />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}