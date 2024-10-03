import { Col, Row } from "antd";
import "./style.css";
import { Fragment } from "react";

export default function TopActors() {
  const actorArray = [
    {
      image: "/images/Jack_Nicholson_2001.jpg",
      name: "Jack Nicholson",
    },
    {
      image: "/images/Ralph_Fiennes_retouched.jpg",
      name: "Ralph Fiennes",
    },
    {
      image: "/images/Daniel_Day_Lewis_26_May_2013.jpg",
      name: "Daniel Day-Lewis",
    },
    {
      image: "/images/Robert_De_Niro_Cannes_2016_2.jpg",
      name: "Robert De Niro",
    },
    {
      image: "/images/Al_Pacino.jpg",
      name: "Al Pacino",
    },
    {
      image: "/images/Dustin_Hoffman_Quartet_avp_2013_2.jpg",
      name: "Dustin Hoffman",
    },
  ];

  function renderFarm() {
    return actorArray.map(function ({ image, name }) {
      return (
        <Col span={4} className="actor-items">
          <div>
            <img src={image} />
          </div>
          <div className="actors-names">{name}</div>
        </Col>
      );
    });
  }
  return (
    <Fragment>
      <div className="topActor-title"> Top Actors </div>
      <div className="actors-container">
        <Row className="actors">{renderFarm()}</Row>
      </div>
    </Fragment>
  );
}
