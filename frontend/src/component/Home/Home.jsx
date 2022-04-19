import React from "react";
import styles from "./Home.module.css";
import minidino1 from "../../assets/minidino1.png";
import minidino2 from "../../assets/minidino2.png";
import minidino3 from "../../assets/minidino3.png";
import minidino4 from "../../assets/minidino4.png";
import minidino5 from "../../assets/minidino5.png";
import minidino6 from "../../assets/minidino6.png";
import background from "../../assets/background.png";
const Home = () => {
  return (
    <div className={styles.home_layout}>
      <div className={styles.homeline}>
        <div className={styles.dinoscope}>
          <div className={styles.col}>
            <a href="/story">
              {" "}
              <div className={styles.box} id="story">
                <img
                  src={minidino1}
                  alt="minidino1"
                  className={styles.minidino1}
                />
              </div>
            </a>{" "}
            <a href="/write">
              <div className={styles.box} id="diary">
                <img
                  src={minidino3}
                  alt="minidino3"
                  className={styles.minidino2}
                />
              </div>
            </a>
            <div className={styles.box}>
              <img
                src={minidino5}
                alt="minidino3"
                className={styles.minidino3}
              />
            </div>
          </div>
          <div className={styles.col} id="test">
            <a href="/test">
              {" "}
              <div className={styles.box}>
                <img
                  src={minidino2}
                  alt="minidino4"
                  className={styles.minidino4}
                />
              </div>
            </a>
            <div className={styles.box}>
              <img
                src={minidino4}
                alt="minidino5"
                className={styles.minidino5}
              />
              <a href="/story">
                <div className={styles.box}>
                  <img
                    src={minidino6}
                    alt="minidino6"
                    className={styles.minidino6}
                  />
                </div>
              </a>
            </div>
          </div>
        </div>{" "}
        <div>
          <p className={styles.footermargin}>디노를 눌러 백수 생활 엿보기</p>
        </div>
      </div>
    </div>
  );
};

export default Home;