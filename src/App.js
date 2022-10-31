import React from "react"
import './App.css';
import Banner from "./Banner/Banner";
import Header from "./Netflix/Header";
import requests from "./Request";
import Row from "./Row/Row";


function App() {
  return (
  

    <>
      <Header />
      <Banner />
      <Row title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals} />

      <Row title="Treading Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

    </>

  );
}

export default App;
