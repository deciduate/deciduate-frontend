import React, { useState } from "react";
import styles from "../css/newInput.module.css";
import MajorDropdown from "./MajorDropdown";
import InsertNav from "../Header/InserNav";

export default function NewInput() {
  const [selectedMajorType, setSelectedMajorType] = useState(null);

  return (
    <div className={styles.container}>
      <InsertNav />
      <div className={styles.infoUpdateContainer}>
        <div className={styles.updateContainer}>
          <div className={styles.inputContainer}>
            <p className={styles.hello}>기본 정보를 알려주세요</p>

            <div className={styles.student_no}>
              학번 (*ex. 24학번: 24 입력)
              <br />
              <label>
                <input
                  onInput={(e) => {
                    if (e.target.value.length > e.target.maxLength)
                      e.target.value = e.target.value.slice(
                        0,
                        e.target.maxLength
                      );
                  }}
                  type="number"
                  maxlength={2}
                  className={styles.inputStudent_no}
                />{" "}
              </label>
            </div>
            <br />

            <div className={styles.major_type}>
              <span className={styles.indexMajor_type}> 전공유형 </span> <br />
              <ul>
                <li>
                  <input
                    type="radio"
                    className={styles.selectMajor_type}
                    value={1}
                    checked={selectedMajorType === 1}
                    onChange={() => setSelectedMajorType(1)}
                  />{" "}
                  <span className={styles.selectMajor_type}>전공심화</span>
                </li>
                <li>
                  <input
                    type="radio"
                    className={styles.selectMajor_type}
                    value={2}
                    checked={selectedMajorType === 2}
                    onChange={() => setSelectedMajorType(2)}
                  />{" "}
                  <span className={styles.selectMajor_type}>이중전공</span>
                </li>
                <li>
                  <input
                    type="radio"
                    className={styles.selectMajor_type}
                    value={3}
                    checked={selectedMajorType === 3}
                    onChange={() => setSelectedMajorType(3)}
                  />{" "}
                  <span className={styles.selectMajor_type}>부전공</span>
                </li>
                <li>
                  <input
                    type="radio"
                    className={styles.selectMajor_type}
                    value={4}
                    checked={selectedMajorType === 4}
                    onChange={() => setSelectedMajorType(4)}
                  />{" "}
                  <span className={styles.selectMajor_type}>
                    전공심화+부전공
                  </span>
                </li>
              </ul>
            </div>
            <br />

            <div>
              {selectedMajorType === 1 && (
                <div className={styles.student_no}>
                  전공
                  <div className={styles.inputInfo3}>
                    <MajorDropdown />
                  </div>{" "}
                  <br />
                </div>
              )}
              {selectedMajorType === 2 && (
                <>
                  <div className={styles.student_no}>
                    전공
                    <div className={styles.inputInfo3}>
                      <MajorDropdown />
                    </div>
                  </div>
                  <div className={styles.student_no}>
                    전공2
                    <div className={styles.inputInfo3}>
                      <MajorDropdown />
                    </div>{" "}
                    <br />
                  </div>
                </>
              )}
              {selectedMajorType === 3 && (
                <>
                  <div className={styles.student_no}>
                    전공
                    <div className={styles.inputInfo3}>
                      <MajorDropdown />
                    </div>
                  </div>
                  <div className={styles.student_no}>
                    전공2
                    <div className={styles.inputInfo3}>
                      <MajorDropdown />
                    </div>{" "}
                    <br />
                  </div>
                </>
              )}
              {selectedMajorType === 4 && (
                <>
                  <div className={styles.student_no}>
                    전공
                    <div className={styles.inputInfo3}>
                      <MajorDropdown />
                    </div>
                  </div>
                  <div className={styles.student_no}>
                    전공2
                    <div className={styles.inputInfo3}>
                      <MajorDropdown />
                    </div>{" "}
                    <br />
                  </div>
                </>
              )}
            </div>

            <div className={styles.etcInfo}>
              기타사항 <br />
              <ul>
                <li>
                  <input
                    type="radio"
                    className={styles.etcInfo_type}
                    name="entrance"
                    value="Transfer"
                  />
                  <span className={styles.etcInfo_type}>편입생</span>
                </li>
                <li>
                  <input
                    type="radio"
                    className={styles.etcInfo_type}
                    name="entrance"
                    value="foreignerType"
                  />
                  <span className={styles.etcInfo_type}>
                    외국인 입학 전형자
                  </span>
                </li>
                <li>
                  <input
                    type="radio"
                    className={styles.etcInfo_type}
                    name="entrance"
                    value="none"
                    defaultChecked
                  />
                  <span className={styles.etcInfo_type}>해당 없음</span>
                </li>
              </ul>
            </div>
          </div>

          <br />
          <br />
          <br />

          <div className={styles.submitContainer}>
            <button className={styles.submitButton}>등록하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}
