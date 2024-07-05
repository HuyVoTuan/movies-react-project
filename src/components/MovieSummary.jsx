import PropTypes from 'prop-types';

export default function MovieSummary({ data }) {
  const { totalWatchedMovies, totalUserRating, totalImdbRating, totalRuntime } =
    data.reduce(
      (acc, movie) => ({
        totalWatchedMovies: acc.totalWatchedMovies + 1,
        totalUserRating: acc.totalUserRating + movie.userRating,
        totalImdbRating: acc.totalImdbRating + movie.imdbRating,
        totalRuntime: acc.totalRuntime + movie.runtime,
      }),
      {
        totalWatchedMovies: 0,
        totalUserRating: 0,
        totalImdbRating: 0,
        totalRuntime: 0,
      },
    );

  // Calculate average ratings only if movies have been watched
  const averageUserRating =
    totalWatchedMovies > 0 ? totalUserRating / totalWatchedMovies : 0;
  const averageImdbRating =
    totalWatchedMovies > 0 ? totalImdbRating / totalWatchedMovies : 0;

  // Calculate total runtime with unit (avoid ternary for clarity)
  const totalRuntimeString = `${totalRuntime} ${totalRuntime > 0 ? 'mins' : 'min'}`;

  return (
    <div className="mb-8 flex flex-col rounded bg-[#A367B1] p-6">
      <p className="mb-2 py-3 text-4xl font-bold uppercase text-white">
        Movies you watched
      </p>
      <ul className="flex items-center justify-between text-2xl text-white">
        <li>
          <p>🎥 {totalWatchedMovies} movies</p>
        </li>
        <li>
          <p>⭐ {averageUserRating}</p>
        </li>
        <li>
          <p>🌟 {averageImdbRating}</p>
        </li>
        <li>
          <p>⏳ {totalRuntimeString}</p>
        </li>
      </ul>
    </div>
  );
}

MovieSummary.propTypes = {
  data: PropTypes.array.isRequired,
};
