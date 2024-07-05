// Hooks
import { useState } from 'react';

// Components
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import MovieSummary from './components/MovieSummary';
import MovieSection from './components/MovieSection';

// Mock data
import { tempMovieData, tempWatchedData } from './dummy/mockData';

// Utils
import moviesFilter from './utils/moviesFilter.util';
import MovieTotal from './components/MovieTotal';

export default function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(tempMovieData);
  const [watchedMovies, setWatchedMovies] = useState(tempWatchedData);

  const filteredTempMovieData = moviesFilter(movies, query);
  const filteredTempWatchedData = moviesFilter(watchedMovies, query);

  const onSearchMovies = (e) => {
    setQuery(e.target.value);
  };

  const onAddToWatched = (movie) => {
    console.log('Add to Watched:', movie);
    setWatchedMovies((prevMovies) => [...prevMovies, movie]);
  };

  const onRemoveFromWatched = (movie) => {
    console.log('Remove from Watched:', movie);
    setMovies((prevMovies) =>
      prevMovies.filter((m) => m.imdbID !== movie.imdbID),
    );
  };

  return (
    <>
      <div className="mb-10">
        <Navbar onSearchMoviesHandler={onSearchMovies} />
      </div>

      <div className="flex gap-10">
        <MovieSection>
          <MovieTotal data={filteredTempMovieData} />
          <MovieList
            category={{
              type: 'unwatched',
              data: filteredTempMovieData,
              onAddToWatchedHandler: onAddToWatched,
            }}
          />
        </MovieSection>

        <MovieSection>
          <MovieTotal data={filteredTempWatchedData} />
          <MovieSummary data={filteredTempWatchedData} />
          <MovieList
            category={{
              type: 'watched',
              data: filteredTempWatchedData,
              onRemoveFromWatchedHandler: onRemoveFromWatched,
            }}
          />
        </MovieSection>
      </div>
    </>
  );
}
