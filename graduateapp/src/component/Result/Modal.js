import React, { useState } from "react";
import styles from "../css/Result.module.css";
import foreignCertification from "./foreignCertification.png";

export default function OpenModal(props) {
  const { open, close } = props;
  const [blurBackground, setBlurBackground] = useState(false);

  const closeModal = () => {
    close();
    setBlurBackground(false);
  };

  return (
    <div>
      <div className={open ? styles.blockBackground : styles.normalBackground}>
        <div className={open ? styles.openModal + " " + styles.modal : styles.modal}>
          {open && (
            <div className={styles.form}>
              <img className={styles.ImgModal} src={foreignCertification} alt="외국어 인증 요건" />
            </div>
          )}
          <button onClick={closeModal}>외국어 인증 요건 확인하기</button>
        </div>
      </div>
      {open && <div className={blurBackground ? styles.blur : ""}></div>}
    </div>
  );
}
