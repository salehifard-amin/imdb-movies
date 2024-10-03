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
    } = movieDetails;
  
   
    useEffect(function () {
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
        .get(`https://moviesapi.codingfront.dev/api/v1/movies?page=${ parseInt(Math.random() * 21)}`)
        .then(function (res) {
          setSuggestionList(res.data.data);
          // console.log(response.data)
        })
        .catch(function (error) {
          console.log(error);
          setCondition(false);
        });
    }, [movieId]);
  
    useEffect(function () {
        window.scrollTo( 0 , 0 );
      },
      [movieDetails]
    );
  
    function renderSuggestion() {
      return suggestionList.map(function ({ title, id, poster }) {
        return (
          <div key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </div>
        );
      });
    }
  
    return (
      <MainLayout>
        {condition ? (
          <h2> Loading please wait.. </h2>
        ) : (
          <div className="main-parent">
            <div className="holder flex flex-column align-center ">
              <h1 className="main-title"> {title} </h1>
              <img src={poster} className="poster" />
              <h3 className="actors">Actors: {actors}</h3>
              <h3 className="awards">Global awards: {awards} </h3>
              <h5> Duration: {runtime} </h5>
              <h5> {year} </h5>
              <h3>{genres.join(" | ")}</h3>
              <h3> {released} </h3>
              <a href={`https://www.imdb.com/title/${imdb_id}`} target="_blank">
                Go to IMDB
              </a>
            </div>
            <div className="suggestion">{renderSuggestion()}</div>
          </div>
        )}
      </MainLayout>
    );
  }