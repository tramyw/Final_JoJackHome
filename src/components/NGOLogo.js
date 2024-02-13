import React from "react";
import styles from "./NGOLogo.module.css";

const NGOLogo = () => {
  return (
    <div className={styles["LOGO-heading"]}>
      <h4 id={styles["LOGO-subheading"]}>合作伙伴:</h4>
      <span id={styles["subheading-text"]}>
        好歡迎更多獨立或大型機構搵我哋合作㗎！目標係成為全港最大既領養平台。
        <br />
        絕不收取中介費！！
      </span>
      <div className={styles["LOGO-wrapper"]}>
        <a
          href="https://hkscda.com/adoption/instructions"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="./icons/HKSCDA_logo.jpeg"
            className={styles["logo-one"]}
            alt="HKSCDA"
          />
        </a>
        <a
          href="https://www.spca.org.hk/zh-hant/what-we-do/adoption/adoption-process/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="./icons/HKSPCA_logo.jpeg"
            className={styles["logo-one"]}
            alt="HKSPCA"
          />
        </a>
        <a
          href="https://www.hk-aac.org.hk/image/data/pdf/dogs.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="./icons/HKAAC_logo.jpeg"
            className={styles["logo-one"]}
            alt="HKAAC"
          />
        </a>
        <a
          href="https://drive.google.com/file/d/18i9IPSWbWwd1Jypv3uaN4T5wnualOCRB/view"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="./icons/LAP_logo.jpeg"
            className={styles["logo-one"]}
            alt="LAP"
          />
        </a>
        <a
          href="https://www.saa.org.hk/zh/service.php?id=1"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="./icons/SAA_logo.jpeg"
            className={styles["logo-one"]}
            alt="SAA"
          />
        </a>
      </div>
    </div>
  );
};

export default NGOLogo;
