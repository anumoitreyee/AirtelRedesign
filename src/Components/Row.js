import { MovieSharp } from "@material-ui/icons";
import React, {useState, useEffect } from "react";\
import axios from "./axios";

const base_url = "https://image.tmbd.org/t/p/original/";

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    // A snippet of code which runs based on a specific condition //
    useEffect(() => {
        // if [], run once when the row loads, and dont run again //
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;    
        }
        fetchData();
    }, [fetchUrl]);
     
    console.table(movies);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {/* several row_posters" */}

                {MovieSharp.map((movie) => (
                    <img
                    className="row_poster"
                    src={}

                ))}
            </div>
        </div>
    )

}