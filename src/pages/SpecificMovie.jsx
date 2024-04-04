import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SpecificMovie = () => {
  const [currentMovieDetail, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
      .then(res => res.json())
      .then(data => setMovie(data));
  };

  return (
    <div className="max-w-screen-lg mx-auto py-8 px-4">
      {currentMovieDetail && (
        <>
          <div className="mb-8">
            <img
              className="w-full rounded-lg"
              src={`https://image.tmdb.org/t/p/original${currentMovieDetail.backdrop_path}`}
              alt={currentMovieDetail.original_title}
            />
          </div>
          <div className="text-2xl font-bold mb-4">{currentMovieDetail.original_title}</div>
          <div className="mb-4">{currentMovieDetail.tagline}</div>
          <div className="mb-4 text-gray-700">
            <span>{currentMovieDetail.vote_count} votes</span>
            <span className="mx-2">•</span>
            <span>{currentMovieDetail.runtime} mins</span>
            <span className="mx-2">•</span>
            <span>Release date: {currentMovieDetail.release_date}</span>
          </div>
          <div className="mb-4">
            {currentMovieDetail.genres.map(genre => (
              <span key={genre.id} className="mr-2 bg-red-700 px-2 py-1 rounded-md text-sm">{genre.name}</span>
            ))}
          </div>
          <div className="mb-8">
            <div className="font-bold mb-2">Synopsis</div>
            <div>{currentMovieDetail.overview}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default SpecificMovie;
