import Carousel from "react-material-ui-carousel";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Banner.css";
import { Paper } from "@mui/material";

function Banner(props) {
  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      src: "./BannerImgs/banner.jpeg",
      link: "https://www.google.com",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      src: "./BannerImgs/banner2.jpeg",
      link: "https://www.youtube.com",
    },
  ];

  return (
    <div className="banner-wrapper">
      <Carousel
        NextIcon={<ArrowForwardIosIcon />}
        PrevIcon={<ArrowBackIosNewIcon />}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}

function Item(props) {
  return (
    <>
      <a
        href={props.item.link}
        target="_blank"
        rel="noreferrer"
        //   style={{ display: "flex", justifyContent: "center" }}
      >
        <Paper className="carousel-paper">
          <img
            className="image-wrapper"
            alt="banner photos"
            src={props.item.src}
          />
        </Paper>
        <div className="text-layer">
          <div className="banner-title">{props.item.name}</div>
          <div className="banner-content">{props.item.description}</div>
        </div>
      </a>
    </>
  );
}
export default Banner;
