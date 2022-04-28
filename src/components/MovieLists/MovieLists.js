import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { getAllMovies } from "../../features/movies/movieSlice";
import "./MovieLists.scss";

function MovieLists({ setPage, page, selectYear }) {
  const movies = useSelector(getAllMovies);
  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const filteredMovies =
    movies && movies.Search.filter((movie) => movie.Year === selectYear);

  console.log(filteredMovies.length < 10);
  return (
    <>
      {selectYear == 0
        ? movies.Search?.map((movie, index) => (
            <Link
              key={index}
              to={`/movie/${movie.imdbID}`}
              className="movie-container row w-100 text-decoration-none"
            >
              <div className="movie-list d-flex col-2 pt-2 pb-2 justify-content-center ">
                {movie.imdbID}
              </div>
              <div className="movie-list col-7 pt-2 pb-2">{movie.Title}</div>
              <div className="movie-list d-flex justify-content-center align-items-center col-3 pt-2 pb-2">
                {movie.Year}
              </div>
            </Link>
          ))
        : filteredMovies.map((movie, index) => (
            <Link
              key={index}
              to={`/movie/${movie.imdbID}`}
              className="movie-container row w-100 text-decoration-none"
            >
              <div className="movie-list d-flex col-2 pt-2 pb-2 justify-content-center ">
                {movie.imdbID}
              </div>
              <div className="movie-list col-7 pt-2 pb-2">{movie.Title}</div>
              <div className="movie-list d-flex justify-content-center align-items-center col-3 pt-2 pb-2">
                {movie.Year}
              </div>
            </Link>
          ))}
      <div className="d-flex justify-content-center align-items-center mt-3">
        <button className="border-0 bg-transparent" onClick={previousPage}>
          <ArrowBackIcon className="text-white pe-2" />
        </button>
        <div className="text-white">{page} </div>
        <button
          className="border-0 bg-transparent"
          onClick={() => {
            selectYear != 0 && filteredMovies.length < 10
              ? setPage(page)
              : setPage(page + 1);
          }}
        >
          <ArrowForwardIcon className="text-white ps-2" />
        </button>
      </div>
    </>
  );
}

export default MovieLists;
