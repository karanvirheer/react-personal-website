import "./portfolio.scss";
import React, { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import { ListItem } from "@material-ui/core";
import {
  graphicDesignPortfolio,
  photographyPortfolio,
  programmingPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    { id: "programming", title: "Programming" },
    { id: "photography", title: "Photography" },
    { id: "graphic-design", title: "Graphic Design" },
    // { id: "wip", title: "Work in Progress" },
  ];

  useEffect(() => {
    switch (selected) {
      case "programming":
        setData(programmingPortfolio);
        break;
      case "photography":
        setData(photographyPortfolio);
        break;
      case "graphic-design":
        setData(graphicDesignPortfolio);
        break;
      default:
        setData(programmingPortfolio);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            info={item.info}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
