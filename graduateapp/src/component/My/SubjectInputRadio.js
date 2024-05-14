import React, {useState} from "react";
import styles from "../css/My.module.css";
import EssentialMajorSubject from './EssentialMajorSubject';
import EssentialLiberalSubject from "./EssentialLibralSubject";

export default function SubjectInputRadio(){

  const [option, setOption]=useState('');

  const handleClickRadioButton = (e)=> {
      setOption(e.target.value)
  }

  const [viewMajor, setViewMajor] = useState(false);
  const [viewLiberal, setViewLiberal] =useState(false); 

  return(

    <>
      <label className={styles.subjectRadio} onClick= {()=>setViewMajor(true)}> 
        <input
        type='radio'
        value='1'
        checked={option === "1"}
        onChange={handleClickRadioButton}/>
        전공 필수 과목
      </label>
      <label className={styles.subjectRadio} onClick= {()=>setViewLiberal(true)}>
        <input
        type='radio'
        value='2'
        checked={option === '2'}
        onChange={handleClickRadioButton}/>
        교양 필수 과목
      </label>
      <div>
        {/* {viewMajor ? <EssentialMajorSubject /> : (false)}
      {viewMajor ? <EssentialLiberalSubject /> : (false)} */}
      </div>
    </>
  ); 
}