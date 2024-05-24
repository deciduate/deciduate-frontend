import React from "react";
import styles from "../css/Result.module.css";
import moreInfo from "./moreInfo.png"

export default function resultPass() {

  return (
    <div className={styles.page}>
      <div className={styles.cheerUp}>졸업까지 얼마 안 남았아요💪🏻</div>
      <div className={styles.resultContainer}>

        <span className={styles.specificResultContainer}></span>
        <span className={styles.specificResultContainer}></span>
        <span className={styles.specificResultContainer}></span>
        <span className={styles.specificResultContainer}></span>

      </div>

      <span className={styles.moreInfo}>더 많은 정보가 필요하신가요?
        <span> <img className={styles.moreInfoPic} src={moreInfo}
        alt="정보 바로가기" /></span></span>

    </div>
  );

}