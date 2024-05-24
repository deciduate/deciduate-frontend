import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/StepInsert.module.css";
import creditImg from "../img/credit.svg";

function StepInsert() {
  return (
    <>
      <div className={styles.Container}>
        {/* step1 */}
        <div className={styles.step}>
          Step.1 취득학점 및 성적을 입력해주세요
        </div>
        <div className={styles.stepContainer}>
          <span>
            ➀ 종합정보시스템에 접속해주세요 ---
            <a href="https://wis.hufs.ac.kr/src08/jsp/index.jsp">
              한국외국어대학교 종합정보시스템 바로가기
            </a>
          </span>
          <span>➁ 종합정보시스템에 로그인하기</span>
          <span>➂ 성적/학점/졸업관리 &gt; 성적 취득 현황에 접속</span>
          <img src={creditImg} />
          <span>➃ 위 화면에 표시되는 값 입력하기</span>
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
            </div>
          </div>
        </div>

        {/* step2 */}
        <div className={styles.step}>
          Step.2 수강한 전공필수 과목/교양 필수 과목을 체크해주세요
        </div>
        <div className={styles.stepContainer2}>
          <div className={styles.Choice}>
            <span>➀ 전공필수과목</span>
            <div>
              <input type="radio" name="Major" value="전공" checked />
              <span>213refinement</span>
            </div>
          </div>
          <div className={styles.Choice}>
            <span>➁ 교양필수과목</span>
            <div>
              <input type="radio" name="refinement" value="교양" checked />
              <span>213refinement</span>
            </div>
          </div>
        </div>

        {/* step3 */}
        <div className={styles.step}>
          Step.3 전공 졸업시험/졸업논문에 통과하셨나요?
        </div>
        <div className={styles.stepContainer}>
          <div className={styles.Choice}>
            <div>
              <input type="radio" name="pass" value="통과여부" checked />
              <span>본전공통과</span>
            </div>
            <div>
              <input type="radio" name="pass" value="통과여부" checked />
              <span>이중전공통과</span>
            </div>
            <div>
              <input type="radio" name="pass" value="통과여부" checked />
              <span>해당없음</span>
            </div>
          </div>
        </div>

        {/* step4 */}
        <div className={styles.step}>
          Step.4 외국어 인증 완료했나요?
          <br />
          <span>
            *성적을 인증할 수 있는 ‘인증서 원본’을 최종학기 말까지 학사
            종합지원센터에 제출해야 합니다
          </span>
        </div>
        <div className={styles.stepContainer}>
          <div className={styles.Choice}>
            <div>
              <input type="radio" name="done" value="통과여부" checked />
              <span>Flex 551점 이상</span>
            </div>
            <div>
              <input type="radio" name="done" value="통과여부" checked />
              <span>TOEIC 645점 이상</span>
            </div>
            <div>
              <input type="radio" name="done" value="통과여부" checked />
              <span>장애학생 외국어 인증 면제</span>
            </div>
            <div>
              <input type="radio" name="done" value="통과여부" checked />
              <span>외국어 인증 대체 관점 통과</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default StepInsert;
