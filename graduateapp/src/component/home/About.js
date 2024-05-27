import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/About.module.css";
import AboutImg from "../img/About.png";
import Clicks from "../img/Clicks.png";
import Gradcap from "../img/Gradcap.png";

function About() {
  return (
    <>
      <div className={styles.buttonContainer}>
        <button className={styles.sentenceContainer}>
          <div className={styles.textContainer}>
            <span className={styles.leftPart}>
              ‘졸업할 결심’은 외대 학우 분들이 졸업 요건을 한눈에 쉽게 알아볼 수
              있도록 도와줍니다!
            </span>
            <span className={styles.rightPart}>
              일일히 졸업요건을 찾아볼 필요없이 로그인 한 번으로, 학점 수정도
              쉽게 만들어 외대 학우 분들이 졸업할 그날까지 ‘졸업할 결심’이
              열심히 응원합니다 !!
            </span>
          </div>
        </button>
      </div>
      <div className={styles.imageContainer}>
        <img src={AboutImg} alt="About" className={styles.image} />
        <img src={Gradcap} alt="Cap" className={styles.capImage} />
        <p className={styles.text}>!ABOUT!</p>
      </div>
      <div>
        <button className={styles.biggerButton}>졸업 요건 확인하기</button>
        <img className={styles.click} src={Clicks} alt="Clicks" />
      </div>
    </>
  );
}
export default About;
