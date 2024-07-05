import Movie from './Movie';
import PropTypes from 'prop-types';

export default function MovieList({ category }) {
  const { data, ...rest } = category;

  return (
    <>
      {data.map((movie) => {
        return (
          <Movie
            key={movie.imdbID}
            onEventHandlers={rest}
            poster={movie.Poster}
            title={movie.Title}
            year={movie.Year}
            runtime={movie.Runtime}
            imdbRating={movie.imdbRating}
          />
        );
      })}
    </>
  );
}

MovieList.propTypes = {
  category: PropTypes.shape({
    type: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    onAddToWatchedHandler: PropTypes.func,
    onRemoveFromWatchedHandler: PropTypes.func,
  }).isRequired,
};
