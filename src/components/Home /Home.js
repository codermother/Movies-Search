import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
import { addMovies, getAllMovies } from "../../features/movies/movieSlice";
import "./Home.scss";
import MovieLists from "../MovieLists/MovieLists";

function Home() {
  const movies = useSelector(getAllMovies);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("pokemon");
  const [page, setPage] = useState(1);
  const [selectType, setSelectType] = useState(0);

  const optionChange = (e) => {
    setSelectType(e.target.value);
  };

  const fetchAllMovies = async () => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${searchText}&page=${page}`
    );
    dispatch(addMovies(response.data));
  };

  const fetchMovies = async () => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${searchText}&type=movie&page=${page}`
    );
    dispatch(addMovies(response.data));
  };

  const fetchSeries = async () => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${searchText}&type=series&page=${page}`
    );
    dispatch(addMovies(response.data));
  };

  const fetchEpisode = async () => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${searchText}&type=episode&page=${page}`
    );
    dispatch(addMovies(response.data));
  };

  useEffect(() => {
    if (selectType == 0) {
      fetchAllMovies();
    } else if (selectType == 1) {
      fetchMovies();
    } else if (selectType == 2) {
      fetchSeries();
    } else if (selectType == 3) {
      fetchEpisode();
    }
  }, [searchText, page, selectType]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mb-5 container">
      <div className="d-flex justify-content-center align-items-center mt-5 w-50 position-relative">
        <select
          className=" options position-absolute"
          onChange={optionChange}
          value={selectType}
        >
          <option value="0">All</option>
          <option value="1">Movies</option>
          <option value="2">Series</option>
          <option value="3">Episodes</option>
        </select>
        <input
          type="text"
          placeholder="Type to search..."
          className=" search-input w-100"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div className="d-flex mt-5 justify-content-center align-items-center flex-column w-75">
        <div className="movie-container row w-100">
          <div className="movies-header col-2 justify-content-center d-flex">
            IMDB ID
          </div>
          <div className="movies-header col-7  d-flex justify-content-center">
            Movie Title
          </div>
          <div className="movies-header col-3 d-flex justify-content-center">
            Movie Year
          </div>
        </div>

        {movies.Response === "True" && movies.Search.length > 0 ? (
          <>
            <MovieLists setPage={setPage} page={page} />
          </>
        ) : (
          <div className="mt-3 text-white">
            <h3>{movies.Error}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
