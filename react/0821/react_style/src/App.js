import React from "react";
import styles from "./App.module.css";
import Question from "./Question";
import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";

// createGlobalStyle이라는 함수를 특정 상수에 지정
const GlobalStyle = createGlobalStyle`
${Normalize}
span {
color: red;
font-size: 12px}`;

const App = () => {
  return (
    <>
      {/* <Normalize /> */}
      <GlobalStyle />
      <span>Hello Styled components</span>
      <nav className={styles.box}>
        <ul>
          <li id="detail" className={styles.text}>
            상세정보
          </li>
          <li id="qa" className={styles.text}>
            Q&A
          </li>
          <li id="review" className={styles.text}>
            Review
          </li>
        </ul>
      </nav>
      <Question />
    </>
  );
};

export default App;
