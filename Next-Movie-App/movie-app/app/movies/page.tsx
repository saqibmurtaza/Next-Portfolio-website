'use client'

import React, { useEffect, useState } from "react";
import { MovieData } from "../lib/MovieData";
import { Movie } from "../lib/MovieData";
import MovieCard, { MovieCardProp } from "../component/MovieCard";
import { CiSearch } from "react-icons/ci";

const Movies = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [searchTerm, setSearcTerm] = useState('')

    const fetchedMovies = async (title:string) => {
        const data = await MovieData(title);
        console.log(data);
        setMovies(data.Search);
    }
    useEffect(()=>{
        fetchedMovies('batman')
    },[])
    return(
        <main>
            <div>
                <input placeholder="search movies" value={searchTerm}
                onChange={(e) =>(setSearcTerm(e.target.value))}
                onKeyDown={(e) => {
                    if (e.key === 'Enter'){
                        fetchedMovies(searchTerm)
                    }
                }}
                />
                <div onClick={() =>{fetchedMovies(searchTerm)}}><CiSearch/></div>
            </div>
            {
                movies?.length >0 ?
                movies.map((iterate) => (
                    <MovieCard key={iterate.imdbID} movies={movies}/>
                )) :
                <>
                <img src={'https://via.placeholder.com/400'}/>
                <div>Image Not Found</div>
                </>
                
                
            }
        </main>
        
    );
}
export default Movies;