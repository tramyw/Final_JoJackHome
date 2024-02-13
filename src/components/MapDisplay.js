import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import iconUrl from "../dog_1049342.svg";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import styles from "./MapDisplay.module.css";

const customIcon = L.icon({
  iconUrl,
  shadowUrl,
  iconSize: [45, 45],
  iconAnchor: [12, 41],
  popupAnchor: [0, -41],
});

function MapDisplay() {
  const markers = [
    {
      position: [22.37368405, 114.11026608000796],
      address: "Superluck Industrial Centre Phase 2",
      org: "香港拯救貓狗協會HKSCDA",
      name: "realdogdog",
      species: "柴犬",
      gender: "男仔",
      age: "4歲",
      phone: 21800000,
      characteristics: " 藍色珠鏈",
      lost_location: "8月30日 晚上10:30在大坪走失, $2000 REWARD薄酬",
      src: "https://www.hkscda.com/img/logo.jpg",
    },
    {
      position: [22.36330235264489, 114.13267672061922],
      address: "Millennium Trade Centre",
      org: "Generation HK",
      name: "FEWD-9",
      species: "哈士奇",
      gender: "男仔",
      age: "4歲",
      phone: 21800000,
      characteristics: " 無頸帶, 長尾, 四隻腳都係白襪",
      lost_location: "係西環邨西苑台走失",
      src: "https://images.rawpixel.com/image_social_landscape/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdXB3azYxNzI4NjQyLXdpa2ltZWRpYS1pbWFnZS1rb3dyMjB5cy5qcGc.jpg",
    },
    {
      position: [22.363550400409355, 114.13270354270936],
      address: "Millennium Trade Centre",
      org: "Generation HK",
      name: "Jo2",
      species: "標準貴賓犬",
      gender: "男仔",
      age: "4歲",
      phone: 21800000,
      characteristics: "無頸帶, 長尾, 四隻腳都係白襪, 識得講人話",
      lost_location: "係西環邨西苑台走失",
      src: "./Imgs/jo2.png",
    },
    {
      position: [22.363371806063473, 114.13241922855379],
      address: "Millennium Trade Centre",
      org: "Generation HK",
      name: "Jack",
      species: "柴犬",
      gender: "男仔",
      age: "4歲",
      phone: 21800000,
      characteristics: "鍾意食炸雞同薯條, 腰痛, 常在海邊出没",
      lost_location: "1月10日 1:30pm 在大浪灣走失, $2000 薄酬",
      src: "./Imgs/jack.png",
    },
  ];
  function ImgaePopUp({
    src,
    name,
    phone,
    age,
    characteristics,
    lost_location,
    species,
  }) {
    return (
      <div className={styles["content-area"]}>
        <img className={styles["image"]} src={src} alt="dog" />
        <div className={styles["basic-info"]}>
          <div className={styles["name"]}>{name}</div>
          <div className={styles["age-and-species"]}>
            {age}, {species}
          </div>
        </div>
        <div className={styles["details-info"]}>
          <div className={styles["characteristics"]}>
            <div className={styles["sub-title"]}>特徵：</div>
            {characteristics}
          </div>
          <div className={styles["lost_location"]}>
            <div className={styles["sub-title"]}>走失資訊：</div>
            {lost_location}
          </div>
        </div>

        <div className={styles["contact-owner"]}>{`聯絡失主：${phone}`}</div>
      </div>
    );
  }

  return (
    <div>
      <MapContainer
        className={styles["map"]}
        center={[22.37071382920351, 114.121470451355]}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} icon={customIcon}>
            <Popup>
              <ImgaePopUp
                src={marker.src}
                name={marker.name}
                phone={marker.phone}
                characteristics={marker.characteristics}
                age={marker.age}
                lost_location={marker.lost_location}
                species={marker.species}
              />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapDisplay;
