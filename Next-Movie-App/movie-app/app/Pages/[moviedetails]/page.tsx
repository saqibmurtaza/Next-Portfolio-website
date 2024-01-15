import React from 'react';
import { useRouter } from 'next/router';
import { Movie } from '@/app/lib/MovieData';
import { MovieData } from '@/app/lib/MovieData';

interface MovieDetailsPageProps {
  movie: Movie;
}

const MovieDetailsPage: React.FC<MovieDetailsPageProps> = ({ movie }) => {
  const { Title, Year, imdbID, Type, Poster } = movie;

  return (
    <div>
      <h1>{Title}</h1>
      <p>Year: {Year}</p>
      <p>ID: {imdbID}</p>
      <p>Type: {Type}</p>
      <img src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400'} alt={Title} />
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { moviedetails } = params;
  
  // Fetch movie details using the IMDb ID
  const response = await MovieData(moviedetails as string);
  const movie: Movie = response.Search[0]; // Assuming it returns a single movie

  return {
    props: {
      movie,
    },
  };
}

export default MovieDetailsPage;
