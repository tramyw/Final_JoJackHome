import { useParams } from "react-router-dom";
import HKSCDA_info from "../HKSCDA_animal_info.json";
import { Button, Stack } from "@mui/material";
import NewNavbar from "../NewNavbar";
import Footer from "./Footer";
import ImageG from "./ImageGallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styles from "../Profile.module.css";
import { motion } from "framer-motion";

function AnimalsProfile() {
  let { animal_Name } = useParams();
  let unfilteredInfo = [];
  for (let keys in HKSCDA_info) {
    unfilteredInfo.push(...HKSCDA_info[keys]);
  }
  let animalInfo = unfilteredInfo.filter((el) => el.name === animal_Name);
  return (
    <div>
      <NewNavbar />
      <br></br>
      <br></br>
      <div className={styles["content"]}>
        <ImageG data={animalInfo} />
        <motion.div animate={{ y: 50 }} transition={{ duration: 0.4 }}>
          <h1>{animalInfo[0].name}</h1>
          <h4>
            我係{animalInfo[0].gender}仔 {animalInfo[0].specis}, 我的歲數是{" "}
            {animalInfo[0].age}
          </h4>
          <h4>
            我現時
            {
              <em>
                <span className={styles["underline"]}>
                  {animalInfo[0].chipped}
                </span>
              </em>
            }
            晶片, 而且
            <em>
              <span className={styles["underline"]}>
                {animalInfo[0].castrated}
              </span>
            </em>
            ~
          </h4>
          <br></br>
          <p>
            性別: {animalInfo[0].gender}({animalInfo[0].castrated})
          </p>
          <p>歲數: {animalInfo[0].age}</p>
          <p>晶片: {animalInfo[0].chipped}</p>

          <br></br>
        </motion.div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.5 }}
        className={styles["adoptionButton"]}
      >
        <p>狗狗準備好返屋企，你準備好未?</p>
        <h3>領養前，停一停，諗一諗</h3>
        <Stack spacing={2}>
          <a href={`${animalInfo[0].href}`}>
            <Button id={styles["external-link"]} variant="contained">
              去了解我更多
            </Button>
          </a>
        </Stack>
      </motion.div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default AnimalsProfile;
