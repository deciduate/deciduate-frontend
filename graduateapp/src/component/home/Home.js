import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.logo}>졸업할 결심</div>
        <div className={styles.menuDiv}>
          <div className={styles.menu}>
            {/* Provide a source for the image */}
            <img src="your-image-source.jpg" alt="Menu" />
            <span className={styles.menu}>Link</span>
          </div>
          <span className={styles.menu}>About</span>
          <span className={styles.menu}>MY</span>
        </div>
      </div>

      <div>
        <img className={styles.grad} src="./Cap.png" alt="Cap" />
        <button className={styles.circleButton}>졸업 진행중</button>
        <h2 className={styles.gradually}>마침내..</h2>
      </div>

      <div>
      <h1 className={styles.decision}>졸업할 결심</h1>
      <hr className={styles.horizontalLine}></hr>
      </div>

      <div>
        <button className={styles.biggerButton}>졸업 요건 확인하기</button>
        <img className={styles.click} src="./Clicks.png" alt="Clicks" />
      </div>

      <div>
        <button className={styles.firstButton}>
          <button className={styles.recButton}>
            <img className={styles.check} src="./Clicking.png" alt="Checks" />
          </button>
          <span className={styles.text}>학점관리가 어려우신 분</span>
        </button>
      </div>
    </>
  );
}

export default App;
