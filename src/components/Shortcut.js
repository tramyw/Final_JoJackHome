import React from "react";
import HKSCDA_info from "../HKSCDA_animal_info.json";
import styles from "./Shortcut.module.css";

function Shortcut(props) {
  return (
    <div className={styles["count-container"]}>
      <div className={styles["title"]}>現時本站收錄到嘅待領養主子數目：</div>
      <div className={styles["pet-wrapper"]}>
        <div className={styles["dog"]}>
          <img
            src="./icons/dog_icon.png"
            alt="dog icon"
            className={styles["dog-icon"]}
          ></img>
          <div className={styles["num-info"]}>
            待領養狗狗
            <div className={styles["num"]}>{HKSCDA_info.HKSCDA_dog.length}</div>
          </div>
        </div>
        <div className={styles["cat"]}>
          <img
            src="./icons/cat_icon.png"
            alt="cat icon"
            className={styles["cat-icon"]}
          ></img>
          <div className={styles["num-info"]}>
            待領養貓貓
            <div className={styles["num"]}>{HKSCDA_info.HKSCDA_cat.length}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shortcut;
