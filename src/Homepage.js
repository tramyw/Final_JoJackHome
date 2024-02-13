import React from "react";
import NewNavbar from "./NewNavbar.js";
import Banner from "./components/Banner";
import Footer from "./components/Footer.js";
import Shortcut from "./components/Shortcut.js";
import StarPet from "./components/StarPet.js";
import MapButtons from "./components/MapButtons.js";
import AdoptionCalendar from "./components/Calendar.js";
//import Catcursor from "./catcursor.js";
//import Dogcursor from "./dogcursor.js";
//import Jojaccursor from "./jojaccursor.js";

import MapDisplay from "./components/MapDisplay.js";
function Homepage() {
  return (
    <div>
      <NewNavbar />
      <StarPet />
      {/*<Banner />*/}

      {/* <Catcursor /> */}
      <Shortcut />
      <AdoptionCalendar />
      <MapButtons />
      <MapDisplay />
      <Footer />
    </div>
  );
}

export default Homepage;
