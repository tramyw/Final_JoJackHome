import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./AnimalList.module.css";
import { motion } from "framer-motion";

function AnimalList(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(calculateItemsPerPage());
  const lastIndex = currentPage * itemPerPage;
  const firstIndex = lastIndex - itemPerPage;
  const items = props.data.slice(firstIndex, lastIndex);
  const numberOfPages = Math.ceil(props.data.length / itemPerPage);
  const pageNum = [...Array(numberOfPages + 1).keys()].slice(1);

  useEffect(() => {
    function handleResize() {
      setItemPerPage(calculateItemsPerPage());
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(props.data);

  function previousPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function changeCurrentPage(chosenPage) {
    setCurrentPage(chosenPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function nextPage() {
    if (currentPage !== pageNum.length) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setCurrentPage(currentPage + 1);
    }
  }

  function calculateItemsPerPage() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1280) {
      return 16; // Show 16 items per page for large screens
    } else if (screenWidth >= 960) {
      return 12; // Show 12 items per page for medium screens
    } else {
      return 8; // Show 8 items per page for small screens
    }
  }
  //hi
  const cardVariants = {
    offscreen: {
      y: -40,
    },
    onscreen: {
      y: -75,

      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };
  return (
    <div>
      <div className={styles["image-list-container"]}>
        <div className={styles["image-list"]}>
          {items.map((el) => (
            <Link
              key={el.name}
              to={{
                pathname: `/Category_Page/${el.name}`,
              }}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div className={styles["image-wrapper"]} key={el.name}>
                <motion.div
                //animate={{ y: [-50, -80, -70] }}
                //variants={cardVariants}
                //transition={{ ease: "easeOut", duration: 2 }}
                >
                  <motion.button
                    className={styles["motion-button"]}
                    variants={cardVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    whileHover={{
                      y: -89,
                      scale: 1,
                      transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <img
                      src={`${el.image}?w=248&fit=crop&auto=format`}
                      alt={el.name}
                      className={styles["bio-image"]}
                    ></img>
                  </motion.button>
                </motion.div>
                <div className={styles["image-details"]}>
                  <img
                    className={styles["paper-box"]}
                    src="./Imgs/paperBox.svg"
                    alt="paper box"
                  ></img>
                  <div className={styles["pet-info"]}>
                    {/* Name, gender and age */}
                    <div className={styles["bioName"]}>{el.name}</div>
                    <div className={styles["more-details"]}>
                      <div className={styles["bio-gender-age"]}>
                        {el.gender === "女" ? (
                          <img
                            className={styles["gender-icon"]}
                            src="./icons/female.svg"
                            alt="female"
                          ></img>
                        ) : (
                          <img
                            className={styles["gender-icon"]}
                            src="./icons/male.svg"
                            alt="male"
                          ></img>
                        )}
                        {el.age}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <nav>
        <ul className={styles["pagination"]}>
          <li className={styles["page-item"]}>
            <button className={styles["page-item"]} onClick={previousPage}>
              {currentPage === 1 || numberOfPages === 0 ? "  " : "🐕 ⏪"}
            </button>
          </li>

          {pageNum.map((eachAnimal, index) => (
            <div>
              <li
                className={`page-item ${
                  currentPage === eachAnimal ? "active" : ""
                }`}
                key={index}
              >
                <button
                  className={styles["page-item"]}
                  onClick={() => changeCurrentPage(eachAnimal)}
                >
                  {eachAnimal}
                </button>
              </li>
            </div>
          ))}
          <li className={styles["page-item"]}>
            <button className={styles["page-item"]} onClick={nextPage}>
              {currentPage === pageNum.length || numberOfPages === 0
                ? "  "
                : "⏩ 🐈"}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AnimalList;
