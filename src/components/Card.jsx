import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from "react-router-dom";

const Cards = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="grid grid-cols-5 gap-4 ">
      {isLoading ? (
        <div className="col-span-5">
          <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
      ) : (
        <Link to={`/movie/${movie.id}`} className="col-span-5">
          <div className="bg-white rounded-lg shadow-md p-2  flex flex-col justify-between">
            <img
              className="w-full h-auto rounded-md"
              src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`}
              alt={movie ? movie.original_title : ""}
            />
            <div className="mt-4">
              <div className="font-semibold text-black  text-xl">{movie ? movie.original_title : ""}</div>
              <div className="text-gray-500 text-sm">{movie ? movie.release_date : ""}</div>
              <p className="mt-2 text-gray-700">{movie ? movie.overview.slice(0, 118) + "..." : ""}</p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Cards;
