import React, {useState} from "react";
import styles from "../css/My.module.css";
import EditMenu from "./EditMenu";
import { Link } from "react-router-dom";
import MajorCompulsory from "./MajorCompulsory"

export default function EditInfo() {



  return (
    <div className={styles.page}>
      <div className={styles.infoUpdateContainer}>
        <EditMenu />
        <div className={styles.updateContainer}>
          <div className={styles.inputInfo}>
          <input type="radio"
              name="first" value="major_compulsory"/>전공 필수 과목
          <input type="radio"
              name="second" value="liberal_compulsory"/>교양 필수 과목





              
          <br /><br /><br />
          <Link to="/MY"><button className={styles.Completed}>수정 완료하기</button></Link>
        </div>
      </div>
    </div>
  </div >
  );
}
