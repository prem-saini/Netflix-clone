import React, { useState, useEffect } from "react"
import requests from "../Request"
import "./Banner.css"
import axios from "../axios"

function Banner() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`)
            setMovies(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)

                ]
            );
            return request;
        }

        fetchData();

    }, [])
    console.log(movies);

    function turncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }
    return (
        <>
            <header className="banner" style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}>

                <div className="div_banner">
                    <h1 className="div_title">{movies?.title || movies?.name || movies?.original_name}</h1>
                    <div className="div_bannerbutton">
                        <button className="div_primary">Play</button>
                        <button className="div_primary">My List</button>
                    </div>
                    <h1 className="div_description">{turncate(movies?.overview, 150)}</h1>



                </div>
                <div className="banner--fadeBottom" />



            </header>


        </>
    )
}

export default Banner