import React, { useState } from "react";
import styles from "./GameResult.module.css";
import SharegameSNS from "../Share/SharegameSNS";
import clipboard from "../../assets/clipboard.png";
import { saveAs } from "file-saver";
import domtoimage from "dom-to-image";
import GameCommentList from "./GameList";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const INITIAL_VALIES = {
  nickname: null,
  content: null,
};
const GameResult = (props) => {
  const [resulttime, setResultTime] = React.useState(false);
  const { state } = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(null);
  const [values, setValues] = useState(INITIAL_VALIES);
  console.log(values);
  const total = state.total;
  const rateA = state.rateA;
  const rateB = state.rateB;

  console.log(total);
  console.log(rateA);
  console.log(rateB);
  console.log(state.balance_type);
  const fetchItems = async () => {
    const response = await fetch("3.35.152.195/api/balance/createReply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        game_writter: values.nickname,
        game_content: values.content,
      }),
    })
      .then((response) => response.json())
      .then((response) => console.log(response));
  };

  const handleChange = (nickname, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [nickname]: value,
    }));
  };
  async function handleInputChange(e) {
    const { nickname, value } = e.target;
    handleChange(nickname, value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("content", values.content);
    formData.append("nickname", values.nickname);
  };
  const onDownloadBtn = () => {
    domtoimage.toBlob(document.querySelector(".card")).then((blob) => {
      saveAs(blob, "diary.png");
    });
  };
  return (
    <div className={styles.gameresult_layout}>
      {" "}
      <div className="card">
        {/* {result.total} */}
        <h1> {state.balance_type}</h1>
        <h1> {state.balance_id}</h1>
        <h1>{state.balanceResult}</h1>
        <div className={styles.game_title}>백런스게임</div>
        <div className={styles.game_subtitle}>
          백수라면 참을 수 없는 게임
          <br />단 한번의 최선의 선택, 차악의 선택 골라보자
        </div>
        <div className={styles.gameresult_line}>
          <div className={styles.bar_layout}>
            <div className={styles.barA}>
              {" "}
              <div> {rateA}</div>
            </div>
            A
            <div className={styles.barB}>
              <div>{rateB}</div>
            </div>
            B
          </div>
        </div>{" "}
        <div className={styles.shareSNS}>
          <span className={styles.SNS_header}>친구에게 공유하기</span>
          <div className={styles.snsbutton}>
            <SharegameSNS />{" "}
            {/* <button className="downBtn" onClick={onDownloadBtn}> </button> */}
            <img
              src={clipboard}
              className={styles.game_save}
              onClick={onDownloadBtn}
            />
          </div>
        </div>
      </div>
      <div className={styles.gameresult_gamecommentlayout}>
        <form className="Form" onSubmit={handleSubmit}>
          <div className={styles.submitgamescope}>
            <div className={styles.gamecommentnickname}>
              닉네임
              <input
                className={styles.gamecomment_nickname}
                name="nickname"
                value={values.nickname}
                onChange={handleInputChange}
                placeholder="닉네임을 입력해 주세요. (최대 8글자)"
              />{" "}
            </div>
            <div className={styles.gamecomment_text}>
              <textarea
                className={styles.gamecomment_textarea}
                name="content"
                value={values.content}
                onChange={handleInputChange}
                placeholder="&#13;&#10; 덧글 쓰기"
              />
            </div>
            <button
              className={styles.gamecommentsubmitbutton}
              onClick={handleSubmit}
            >
              입력
            </button>
          </div>{" "}
        </form>
      </div>
      <GameCommentList />
    </div>
  );
};

export default GameResult;
