import React from "react";
import { Carousel } from "antd";
import "./index.scss";
import { Link } from "react-router-dom";

const CarouselComponent = ({ data }) => {
  const staticData = [
    {
      coverImage:
        "https://naturefriendsazerbaijan.org/assets/coverphoto-B9PG9wgl.jpg",
      text: "Təbiət Dostları dünyanın yüzlərlə ölkəsində ətraf mühitin mühafizəsində töhvə vermək məqsədi ilə fəaliyyətdədir.",
      headText: "TƏBİƏT DOSTLARINA XOŞ GƏLMİSİNİZ",
    },
    {
      coverImage:
        "https://naturefriendsazerbaijan.org/assets/coverphoto-B9PG9wgl.jpg",
      text: "Təbiət Dostları dünyanın yüzlərlə ölkəsində ətraf mühitin mühafizəsində töhvə vermək məqsədi ilə fəaliyyətdədir.",
      headText: "TƏBİƏT DOSTLARINA XOŞ GƏLMİSİNİZ 2",
    },
    {
      coverImage:
        "https://naturefriendsazerbaijan.org/assets/coverphoto-B9PG9wgl.jpg",
      text: "Təbiət Dostları dünyanın yüzlərlə ölkəsində ətraf mühitin mühafizəsində töhvə vermək məqsədi ilə fəaliyyətdədir.",
      headText: "TƏBİƏT DOSTLARINA XOŞ GƏLMİSİNİZ 3",
    },
  ];

  return (
    <div id="carousel" className="carousel">
      <Carousel autoplay autoplaySpeed={3000} effect="scrollx">
        {staticData?.map((e, i) => {
          return (
            <div className="cover" key={e?._id}>
              <Link to={`/`}>
                <img
                  src={`${e?.coverImage}`}
                  alt={i}
                  className="carouselImage"
                />
                <div className="carouselContent">
                  <p className="headText">{e?.headText}</p>
                  <h1>{e?.text}</h1>
                </div>
              </Link>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
