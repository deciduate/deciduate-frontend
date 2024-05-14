import React, {useState} from "react";
import styles from "../css/My.module.css";

export default function StudentInputRadio(){

  const [option, setOption]=useState('');

  const handleClickRadioButton = (e)=> {
      setOption(e.target.value)
  }

  return(

    <>
      <label className={styles.studentRadio}>
        <input
        type='radio'
        value='1'
        checked={option === "1"}
        onChange={handleClickRadioButton}/>
        편입생
      </label>
      <label className={styles.studentRadio}>
        <input
        type='radio'
        value='2'
        checked={option === '2'}
        onChange={handleClickRadioButton}/>
        외국인 전형 입학자
      </label>
      <label className={styles.studentRadio}ㄴ>
        <input
        type='radio'
        value='3'
        checked={option === '3'}
        onChange={handleClickRadioButton}/>
        해당 없음
      </label>
    </>
  ); 
}