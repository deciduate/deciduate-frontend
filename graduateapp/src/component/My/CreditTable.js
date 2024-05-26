import React from "react";
import styles from "../css/My.module.css";

export default function Table() {

  return (

    <div className={styles.BoxContainer}>
      <div className={styles.Box}>
        <div className={styles.contentTitle}>1전공</div>
        <input type="number" className={styles.content}></input>
      </div>
      <div className={styles.Box}>
        <div className={styles.contentTitle}>이중전공</div>
        <input type="number" className={styles.content}></input>
      </div>
      <div className={styles.Box}>
        <div className={styles.contentTitle}>2전공</div>
        <input type="number" className={styles.content}></input>
      </div>
      <div className={styles.Box}>
        <div className={styles.contentTitle}>실외</div>
        <input type="number" className={styles.content}></input>
      </div>
      <div className={styles.Box}>
        <div className={styles.contentTitle}>교양</div>
        <input type="number" className={styles.content}></input>
      </div>
      <div className={styles.Box}>
        <div className={styles.contentTitle}>부전공</div>
        <input type="number" className={styles.content}></input>
      </div>
      <div className={styles.Box}>
        <div className={styles.contentTitle}>교직</div>
        <input type="number" className={styles.content}></input>
      </div>
      <div className={styles.Box}>
        <div className={styles.contentTitle}>자선</div>
        <input type="number" className={styles.content}></input>
      </div>
      <div className={styles.Box}>
        <div className={styles.contentTitle}>총취득</div>
        <input type="number" className={styles.content}></input>
      </div>
      <div className={styles.Box}>
        <div className={styles.contentTitle}>총평점</div>
        <input type="number" className={styles.content}></input>
      </div></div>

  )
}
