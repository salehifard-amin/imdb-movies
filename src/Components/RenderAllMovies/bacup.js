import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { Pagination, Spin, spin } from "antd";
import { createSearchParams, Link, useSearchParams } from "react-router-dom";


export default function RenderAll() {

  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState({
    data: [],
    metadata: {
      current_page: 1,
      per_page: 1,
      page_count: 1,
      total_count: 1,
    },
  });

  const getApi = (parameter = 1) => {
    axios
      .get(`https://moviesapi.codingfront.dev/api/v1/movies?page=${parameter}`)
      .then((res) => {
        setMovieList(res.data);
        setLoading(false);
      })
      .catch((error) => {
        alert("Failed to receive data");
        setLoading(false);
      });
  };

  useEffect(() => {
    document.title= `250 Top Movies | Page=${ movieList.metadata.current_page }`;
    console.log(movieList.metadata.current_page);
  }, [movieList]);

  useEffect(() => {
    getApi(searchParams.get("page"));
  }, []);

  const changePage = (pageNumber, pageSize) => {
    getApi(pageNumber);
    setSearchParams(createSearchParams({ page: pageNumber }));
  };

  const renderFarm = () => {
    return movieList.data.map(({ id, title, poster }, index) => {
      return (
        <li key={id} className="list-item">
          <Link to={`/movies/${id}`}>
            <img src={poster} className="film-poster" />
            <div className="name">{title}</div>
          </Link>
        </li>
      );
    });
  };

  return (
    <Fragment>
      <Spin size="large" spinning={loading}>
        <div className="container">
          <ul className="list-items flex flex-wrap justify-between">
            {renderFarm()}
          </ul>
        </div>
      </Spin>
      {loading ? ( "" ) : (
        <Pagination
          defaultCurrent={movieList.metadata.current_page}
          total={movieList.metadata.total_count}
          pageSize={movieList.metadata.per_page}
          showSizeChanger={false}
          onChange={changePage}
          align="center"
        />
      )}
    </Fragment>
  );
}
