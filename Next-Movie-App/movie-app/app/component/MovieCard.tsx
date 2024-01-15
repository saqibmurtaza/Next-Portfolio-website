import React from "react";
import { Movie } from "../lib/MovieData";

export type MovieCardProp = {
    movies : Movie[]
};

const MovieCard : React.FC<MovieCardProp> = ({movies}) => {
    return(
        <div>
            {movies.map((iterate) => (
                <main>
                    <div>
                        <p>{iterate.Year}</p>
                    </div>
                    <div>
                        <img src={iterate.Poster !== 'N/A' ?
                        iterate.Poster :
                        'https://via.placeholder.com/400'} alt={iterate.Title} />
                    </div>
                    <div>
                        <span>{iterate.Type}</span>
                        <span>{iterate.Title}</span>
                    </div>
                </main>
            ))}
        </div>
    );
}
export default MovieCard;