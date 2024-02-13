import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage.js";
import AdoptionInfoPage from "./AdoptionInfoPage.js";
import CategoryPage from "./CategoryPage.js";
import AnimalsProfile from "./components/AnimalsProfile.js";
import AboutUs from "./AboutUs.js";
import Catcursor from "./catcursor.js";
//import Dogcursor from "./dogcursor.js";
//import Jojaccursor from "./jojaccursor.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Catcursor />
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/Home" element={<Homepage />} />
        <Route path="/Adoption_Info_Page" element={<AdoptionInfoPage />} />
        <Route path="/Category_Page" element={<CategoryPage />} />
        <Route
          path="Category_Page/:animal_Name"
          element={<AnimalsProfile />}
        ></Route>
        <Route path="/About_us" element={<AboutUs />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
