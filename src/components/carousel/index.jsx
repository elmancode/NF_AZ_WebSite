import React from "react";
import { Carousel } from "antd";
import "./index.scss";
import { Link } from "react-router-dom";
import Cover2 from "../../assets/cover/cover2.jpg"

const CarouselComponent = ({ data }) => {
  const staticData = [
    {
      coverImage:
        "https://scontent-fra5-1.xx.fbcdn.net/v/t31.18172-8/19237856_1574117375945771_3981505136596282702_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3xrQcj0p1dwQ7kNvgEFoElM&_nc_ht=scontent-fra5-1.xx&oh=00_AYA-A7H7slMlSKEhbGjb9o56RWR19ozRs_EtsjcVJIskMw&oe=6672EC0A",
      text: "Təbiət Dostları dünyanın yüzlərlə ölkəsində ətraf mühitin mühafizəsində töhvə vermək məqsədi ilə fəaliyyətdədir.",
      headText: "TƏBİƏT DOSTLARINA XOŞ GƏLMİSİNİZ",
    },
    {
      coverImage:
      Cover2,
        text: "2008-ci ildən ölkədə Velosipedin nəqliyyat vasitəsi kimi təşfiqi və təbliği ilə fəaliyyətdədir. ",
      headText: "EKOLOJİ NƏQLİYYATIN TƏBLİĞİ",
    },
    {
      coverImage:
        "https://scontent-fra3-1.xx.fbcdn.net/v/t39.30808-6/279267575_4986466628073121_7786928783407424108_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vT-XxXmdwlcQ7kNvgG0dugE&_nc_ht=scontent-fra3-1.xx&oh=00_AYDFIH_FkAeVq-WFaa_rvX_dnKoUJZVTiaPpzBpABgfXqA&oe=665136AF",
      text: "Ətraf mühitə qarşı daha da məsuliyyətli olmağa və bölgədə davamlı turizmin inkişafı isiqamətində açıq hava tədbirlərinin təşkili.",
      headText: "EKOTURİZM VƏ REKREASİYA",
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
                <div className="overlay"> salam</div>
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
