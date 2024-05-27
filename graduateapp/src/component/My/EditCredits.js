import React, { useState } from "react";
import styles from "../css/My.module.css";
import EditMenu from "./EditMenu";
import { Link } from "react-router-dom";


export default function EditInfo() {



  return (
    <div className={styles.page}>
      <div className={styles.infoUpdateContainer}>
        <EditMenu />

        <div className={styles.updateContainer}>
          <div className={styles.inputInfo}>
            구분 및 이수 학점

            <div className={styles.container}>
              <div className={styles.inputInfoContainer1}>
                <div className={styles.inputInfo2}>
                  <div className={styles.inputInfo4}>1전공</div> &nbsp;
                  <label><input className={styles.inputInfo5} type="number" min="0" /></label></div>

                <div className={styles.inputInfo2}>
                  <div className={styles.inputInfo4}>이중전공</div> &nbsp;
                  <label><input className={styles.inputInfo5} type="number" min="0"/></label></div>

                <div className={styles.inputInfo2}>
                  <div className={styles.inputInfo4}>2전공</div> &nbsp;
                  <label><input className={styles.inputInfo5} type="number" min="0"/></label></div>


                <div className={styles.inputInfo2}>
                  <div className={styles.inputInfo4}>실외</div> &nbsp;
                  <label><input className={styles.inputInfo5} type="number" min="0"/></label></div>

                <div className={styles.inputInfo2}>
                  <div className={styles.inputInfo4}>교양</div>&nbsp;
                  <label><input className={styles.inputInfo5} type="number" min="0"/></label></div>

                <div className={styles.inputInfo2}>
                  <div className={styles.inputInfo4}>부전공</div> &nbsp;
                  <label><input className={styles.inputInfo5} type="number" min="0"/></label></div>

                <div className={styles.inputInfo2}>
                  <div className={styles.inputInfo4}>교직</div> &nbsp;
                  <label><input className={styles.inputInfo5} type="number" min="0"/></label></div>

                <div className={styles.inputInfo2}>
                  <div className={styles.inputInfo4}>자선</div> &nbsp;
                  <label><input className={styles.inputInfo5} type="number" min="0"/></label></div>
              </div>


              <div className={styles.inputInfoContainer2}>
                <div className={styles.inputInfo2}>
                  <div className={styles.inputInfo4}>총취득</div> &nbsp;
                  <label><input className={styles.inputInfo5} type="number" min="0"/></label></div>
                <div className={styles.inputInfo2}>
                  <div className={styles.inputInfo4}>총평점</div> &nbsp;
                  <label><input className={styles.inputInfo5} type="number" min="0"/></label></div>
              </div>


            </div>


            <br />
            <Link to="/MY"><button className={styles.Completed}>수정 완료하기</button></Link>

          </div>
        </div>
      </div>
    </div>

  );
}
