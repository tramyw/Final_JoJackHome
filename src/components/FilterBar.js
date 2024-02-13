import React, { useState } from "react";
import HKSCDA_info from "../HKSCDA_animal_info.json";
// import HKSPCA_info from "../HKSPCA_animal_info.json";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AnimalList from "./AnimalList.js";
import Shortcut from "./Shortcut.js";
import styles from "./FilterBar.module.css";

function FilterBar() {
  let unfilteredInfo = [];
  for (let keys in HKSCDA_info) {
    unfilteredInfo.push(...HKSCDA_info[keys]);
  }

  const handleSpeciesChange = (e) => {
    setSelectedSpecies(e.target.value);
  };
  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  const handleChipChange = (e) => {
    setSelectedChip(e.target.value);
  };

  const handleCastratedChange = (e) => {
    setSelectedCastrated(e.target.value);
  };

  const [selectedSpecies, setSelectedSpecies] = useState("all");
  const [selectedGender, setSelectedGender] = useState("all");
  const [selectedChip, setSelectedChip] = useState("all");
  const [selectedCastrated, setSelectedCastrated] = useState("all");
  const [filteredList, setFilteredList] = useState([]);

  const handleFilterOnClick = () => {
    const newFilteredList = unfilteredInfo.filter((el) => {
      return (
        (selectedSpecies === "all"
          ? el.species === "dog" || el.species === "cat"
          : el.species === selectedSpecies) &&
        (selectedGender === "all"
          ? el.gender === "女" || el.gender === "男"
          : el.gender === selectedGender) &&
        (selectedChip === "all"
          ? el.chipped === "未植入" ||
            el.chipped === "已植入" ||
            el.chipped === "/"
          : el.chipped === selectedChip) &&
        (selectedCastrated === "all"
          ? el.castrated === "未絕育" ||
            el.castrated === "已絕育" ||
            el.castrated === "/"
          : el.castrated === selectedCastrated)
      );
    });
    setFilteredList(newFilteredList);
  };
  const handleClearOnClick = () => {
    setSelectedSpecies("all");
    setSelectedGender("all");
    setSelectedChip("all");
    setSelectedCastrated("all");
  };

  return (
    <div className={styles["categoryPage-container"]}>
      <Shortcut />
      <div className={styles["filterBar-wrapper"]}>
        <div className={styles["drop-down-wrapper"]}>
          <div className={styles["group"]}>
            <div className={styles["filterBar"]}>
              <FormControl fullWidth>
                <InputLabel
                  id={styles["speciesFiltering"]}
                  className={styles["selection"]}
                >
                  物種
                </InputLabel>
                <Select
                  labelId="speciesFiltering"
                  id={styles["chosenSpecies"]}
                  className={styles["selection"]}
                  label="品種"
                  onChange={handleSpeciesChange}
                  value={selectedSpecies}
                >
                  <MenuItem value="all" className={styles["option"]}>
                    所有
                  </MenuItem>
                  <MenuItem value="dog" className={styles["option"]}>
                    狗狗
                  </MenuItem>
                  <MenuItem value="cat" className={styles["option"]}>
                    貓貓
                  </MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className={styles["filterBar"]}>
              <FormControl fullWidth>
                <InputLabel
                  id="genderFiltering"
                  className={styles["selection"]}
                >
                  性別
                </InputLabel>
                <Select
                  labelId="genderFiltering"
                  id="chosenGender"
                  className={styles["selection"]}
                  label="性別"
                  onChange={handleGenderChange}
                  value={selectedGender}
                >
                  <MenuItem value="all" className={styles["option"]}>
                    所有
                  </MenuItem>
                  <MenuItem value="女" className={styles["option"]}>
                    女
                  </MenuItem>
                  <MenuItem value="男" className={styles["option"]}>
                    男
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className={styles["group"]}>
            <div className={styles["filterBar"]}>
              <FormControl fullWidth>
                <InputLabel id="chipFiltering" className={styles["selection"]}>
                  晶片
                </InputLabel>
                <Select
                  labelId="chipFiltering"
                  id="is_Chip"
                  className={styles["selection"]}
                  label="晶片"
                  onChange={handleChipChange}
                  value={selectedChip}
                >
                  <MenuItem value="all" className={styles["option"]}>
                    所有
                  </MenuItem>
                  <MenuItem value="未植入" className={styles["option"]}>
                    未植入
                  </MenuItem>
                  <MenuItem value="已植入" className={styles["option"]}>
                    已植入
                  </MenuItem>
                  <MenuItem value="/" className={styles["option"]}>
                    未知
                  </MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className={styles["filterBar"]}>
              <FormControl fullWidth>
                <InputLabel
                  id="castratedFiltering"
                  className={styles["selection"]}
                >
                  絕育
                </InputLabel>
                <Select
                  labelId="castratedFiltering"
                  id="is_castrated"
                  className={styles["selection"]}
                  label="絕育"
                  onChange={handleCastratedChange}
                  value={selectedCastrated}
                >
                  <MenuItem value="all" className={styles["option"]}>
                    所有
                  </MenuItem>
                  <MenuItem value="未絕育" className={styles["option"]}>
                    未絕育
                  </MenuItem>
                  <MenuItem value="已絕育" className={styles["option"]}>
                    已絕育
                  </MenuItem>
                  <MenuItem value="/" className={styles["option"]}>
                    未知
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <div className={styles["filterClearButton-wrapper"]}>
          <div className={styles["filterClearButton"]}>
            <button
              className={styles["filtering"]}
              id="filterBtn"
              onClick={handleFilterOnClick}
            >
              篩選
            </button>
          </div>
          <div className={styles["filterClearButton"]}>
            <button
              className={styles["clearAll"]}
              id="clearAllBtn"
              onClick={handleClearOnClick}
            >
              清除
            </button>
          </div>
        </div>
      </div>
      <div>
        <AnimalList
          data={filteredList.length > 0 ? filteredList : unfilteredInfo}
        />
      </div>
    </div>
  );
}

export default FilterBar;
