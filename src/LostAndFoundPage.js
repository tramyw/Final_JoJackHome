import React from "react";
import NewNavbar from "./NewNavbar";
import Footer from "./components/Footer";
import MapDisplay from "./components/MapDisplay";
import MapButtons from "./components/MapButtons";

const LostAndFound = () => {
  return (
    <div>
      <NewNavbar />
      <MapButtons />
      <MapDisplay />
      <Footer />
    </div>
  );
};
export default LostAndFound;
