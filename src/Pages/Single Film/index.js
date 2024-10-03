import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MainLayout from "../../Components/Layouts/MainLayout";
import "./style.css";

export default function SingleFilm() {
  const [condition, setCondition] = useState(true);
  const [suggestionList, setSuggestionList] = useState([]);
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({
    id: "",
    title: "",
    poster: "",
    year: "",
    rated: "",
    released: "",
    runtime: "",
    director: "",
    writer: "",
    actors: "",
    plot: "",
    country: "",
    awards: "",
    metascore: "",
    imdb_rating: "",
    imdb_votes: "",
    imdb_id: "",
    type: "",
    website: "",
    language: "",
    ratings: "",
    dvd: "",
    box_office: "",
    production: "",
    response: "",
    genres: [],
    images: [],
  });

  const {
    title,
    poster,
    actors,
    awards,
    runtime,
    year,
    genres,
    type,
    released,
    imdb_id,
    images,
    imdb_rating,
    ratings,
  } = movieDetails;

  useEffect(
    function () {
      axios
        .get(`https://moviesapi.codingfront.dev/api/v1/movies/${movieId}`)
        .then(function (response) {
          setMovieDetails(response.data);
          setCondition(false);
        })
        .catch(function (error) {
          console.log(error);
          setCondition(false);
        });
      axios
        .get(
          `https://moviesapi.codingfront.dev/api/v1/movies?page=${parseInt(
            Math.random() * 21
          )}`
        )
        .then(function (res) {
          setSuggestionList(res.data.data);
          // console.log(response.data)
        })
        .catch(function (error) {
          console.log(error);
          setCondition(false);
        });
    },
    [movieId]
  );

  useEffect(
    function () {
      window.scrollTo(0, 0);
      document.title = `Watch ${movieDetails.title}`;
    },
    [movieDetails]
  );

  function renderSuggestion() {
    return suggestionList.map(function ({ title, id, poster }) {
      return (
        <div className="suggestion-items" key={id}>
          <Link to={`/movies/${id}`}>
            <img src={poster} />
            <div>{title}</div>
          </Link>
        </div>
      );
    });
  }

  function renderBackground() {
    return images.map(function (item) {
      return (
        <div className="image-position">
          <img className="bg-image" src={item} />
        </div>
      );
    });
  }

function renderRatings() {
  return JSON.parse(ratings).map( function( rate ) {
    return (<div> {rate.Value} {rate.Source} </div>);
  })
}

  return (
    <MainLayout>
      {condition ? (
        <h2 className="single-loading"> Loading please wait.. </h2>
      ) : (
        <div className="main-parent">
          <div className="bg-image-parent"> {renderBackground()} </div>
          <div className="holder flex flex-column align-center ">
            <h1 className="main-title"> {title} </h1>
            <div className="film-info">
              <img src={poster} className="poster" />
              <div className="film-details">
                <p className="imdb-rating"> imdb Rating :  <span> {imdb_rating} </span> </p>
                <p className="year font-bold"> {year} </p>
                <p className="genres font-bold">{genres.join(" | ")}</p>
                <p className="actors font-bold">Actors: {actors}</p>
                <p className="awards year font-bold">Global awards: {awards} </p>
                <a
                  href={`https://www.imdb.com/title/${imdb_id}`}
                  target="_blank"
                >
                  Go to IMDB
                </a>
              </div>
            </div>
          </div>
          <div className="container-full">
            <p className="also-like"> You May Also Like: </p>
            <div className="suggestion">{renderSuggestion()}</div>
          </div>
          {/* {renderRatings()} */}
        </div>
        
      )}
    </MainLayout>
  );
}
