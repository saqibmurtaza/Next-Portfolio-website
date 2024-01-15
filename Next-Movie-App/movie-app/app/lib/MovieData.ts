import React from "react";

export type Movie = {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}

export type MovieApiResponse = {
    Search: Movie[]; // Assuming Movie is the type for an individual movie
    totalResults: string;
    Response: string;
  };
  

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=86298ef8';

export const MovieData = async (title:string) : Promise<MovieApiResponse>=> {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data : MovieApiResponse= await response.json();
    return data;
}
