import React, { useEffect, useState } from "react";
import gamedino from "../../assets/gamemaindino.png";
import styles from "./Game.module.css";
import { useLocation, Link, useNavigate } from "react-router-dom";

var select = [0, 0];
var noselect = 1;
var yesselect = 0;

const Game = (props, balance_type) => {
  const [counter, setCounter] = React.useState(0);

  const navigate = useNavigate();
  const { state } = useLocation(props);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchItems = async (value) => {
      const key = "balance_type";

      const response = await fetch(
        // "http://3.35.152.195/api/balance/selectBalance?balance_type=" + value,
        "http://3.35.152.195/api/balance/selectBalance?" + key + "=" + value,
        {
          method: "GET",
          headers: {
            "Conent-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {});
      console.log(key);
      console.log(value);
      console.log(state);
      console.log(response);
      // console.log(data);
    };
  }, []);

  const onClick = (balance_type) => {
    setCounter(counter + 1);
    navigate("/gameresult", { state: { select: balance_type } });
  };

  console.log(select);
  console.log(balance_type);
  return (
    <div className={styles.game_layout}>
      <div className={styles.game_title}>백런스게임</div>
      <div className={styles.game_subtitle}>
        백수라면 참을 수 없는 게임
        <br />단 한번의 최선의 선택, 차악의 선택 골라보자
      </div>
      <div>
        <img className={styles.game_image} src={gamedino} alt="디노캐릭터" />{" "}
      </div>
      {/* {items.map((balance, back_balance, balance_type, value) => ( */}
      <div className={styles.gamebutton_layout}>
        <div className={styles.game_butttonA}>
          <button
            className={styles.game_buttonitem}
            onClick={() => {
              onClick(yesselect);
            }}
            id="game_buttonA"
          >
            {/* {selectbalance.balance_type} */}
            나를 죽도록 싫어하는 원수와 <br />
            면접 스터디
          </button>
        </div>
        VS
        <div className={styles.game_butttonB} id="question_down">
          <button
            className={styles.game_buttonitem}
            onClick={(counter) => {
              onClick(noselect);
            }}
          >
            {" "}
            세상에서 제일 친한 친구와
            <br />
            함께 최종 면접
          </button>
        </div>{" "}
      </div>
      {/* ))} */}
    </div>
  );
};

export default Game;
