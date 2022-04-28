import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home /Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetails />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
