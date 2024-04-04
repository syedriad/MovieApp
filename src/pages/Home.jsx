import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Card from '../components/Card';
import MoviesList from '../components/MoviesList';

function Home() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(()=> {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
      .then((res)=> res.json())
      .then((res)=> {
        console.log(res.results);
        setPopularMovies(res.results);
      });
  }, []);

  return (
    <div className='mb-0'>
      <div className='max-w-screen-lg mx-auto'>
        <Carousel
          showThumbs={false}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
          autoPlay={true}
          className="carousel"
        >
          {popularMovies.map((movies) => (
            <Link key={movies.id} to={`/movie/${movies.id}`} className='flex flex-col items-center justify-center'>
              <div className='h-64 sm:h-80 md:h-96'>
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movies && movies.backdrop_path}`} alt="" />
              </div>
              <div className='text-3xl mt-4'>{movies ? movies.original_title : ""}</div>
              <div className='text-lg'>Release Date: {movies ? movies.release_date : ""}</div>
              <div className='px-4 mt-4'>{movies ? movies.overview : ""}</div>
            </Link>
          ))}
        </Carousel>
      </div>

      <div className=' m-10  '>
        <MoviesList />
      </div>
    </div>
  );
}

export default Home;
