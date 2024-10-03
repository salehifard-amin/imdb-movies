import axios from "axios";
import MainLayout from "../../Components/Layouts/MainLayout";
import "./style.css";
import { useEffect, useState } from "react";
import { createSearchParams, Link, useSearchParams } from "react-router-dom";
import { Card, Row, Col } from "antd";
import App from "../../Components/playGround";

export default function Search() {
  const [queryString, setQueryString] = useSearchParams();
  const [queryData, setQueryData] = useState({
    data: [],
    metadata: {},
  });

  const query = (event) => {
    if (event.target.value.length >= 3) {
      axios
        .get(
          `https://moviesapi.codingfront.dev/api/v1/movies?q=${event.target.value}`
        )
        .then((response) => {
          setQueryData(response.data);
          // updating query string by input value the user has typed:
          setQueryString(createSearchParams({ key: event.target.value }));
        })
        .catch((error) => {
          return "Wrong address";
        });
    }

    document.title = `Search for ${event.target.value}`;
  };

  useEffect(() => {
    document.title = "Search for movies";
    axios
      .get(
        `https://moviesapi.codingfront.dev/api/v1/movies?q=${queryString.get(
          "key"
        )}`
      )
      .then((response) => {
        setQueryData(response.data);
      })
      .catch((error) => {
        return "Wrong address";
      });
    console.log(queryString.get("key"));
  }, []);

  const renderFarm = () => {
    return queryData.data.map(({ id, title, poster, year, imdb_rating }) => {
      return (
        <Col span={6}>
          <Card key={id} className="search-item" bordered={false} hoverable>
            <Link to={`/movies/${id}`}>
              <img src={poster} />
              <h3 className="search-title">
                {title} {year}
              </h3>
            </Link>
          </Card>
        </Col>
      );
    });
  };

  return (
    <MainLayout>
      <div className="search-parent">
        <div className="container">
          <div className="flex flex-column flex-wrap">
            <h3 className="search-name"> Search</h3>
            <input
              onChange={query}
              className="input"
              type="text"
              placeholder="Please Enter Movie's Name.."
            />
          </div>
          <Row gutter={16}>{renderFarm()}</Row>
        </div>
      </div>
    </MainLayout>
  );
}
