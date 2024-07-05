import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Movie({
  poster,
  title,
  year,
  runtime,
  imdbRating,
  onEventHandlers,
}) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovieDetails, setSelectedMovieDetails] = useState(null);
  const { type, onAddToWatchedHandler, onRemoveFromWatchedHandler } =
    onEventHandlers;

  const onMovieClick = () => {
    setShowModal(true);
    setSelectedMovieDetails((prevMovieDetails) => ({
      type,
      title,
      poster,
      year,
      runtime,
      imdbRating,
      ...prevMovieDetails,
    }));
  };

  const onModalClose = () => {
    setShowModal(false);
    setSelectedMovieDetails(null);
  };

  const onButtonClick = () => {
    if (selectedMovieDetails?.type === 'unwatched') {
      onAddToWatchedHandler(selectedMovieDetails);
    } else {
      onRemoveFromWatchedHandler(selectedMovieDetails);
    }
  };

  const buttonText =
    onEventHandlers.type === 'unwatched'
      ? 'Add to Watched'
      : 'Remove from Watched';

  return (
    <>
      <div
        onClick={onMovieClick}
        className="mb-5 flex cursor-pointer gap-5 rounded p-5 transition-all duration-300 ease-in-out hover:bg-slate-400"
      >
        <img src={poster} alt={title} className="h-48 w-32" />
        <div className="flex flex-col items-start justify-evenly">
          <p className="text-3xl font-bold text-white">{title}</p>
          <p className="text-xl text-white">{year}</p>
        </div>
      </div>

      {showModal && (
        <div
          onClick={onModalClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="max-w-2xl rounded-lg bg-white p-5 shadow-lg">
            <h2 className="mb-3 text-2xl font-bold">
              {selectedMovieDetails?.title}
            </h2>
            <img
              src={selectedMovieDetails?.poster}
              alt={selectedMovieDetails?.title}
              className="mb-3 w-full rounded"
            />
            <p className="mb-2">Year: {selectedMovieDetails?.year}</p>
            {selectedMovieDetails?.runtime && (
              <p className="mb-2">
                Runtime: {selectedMovieDetails.runtime} minutes
              </p>
            )}
            {selectedMovieDetails?.imdbRating && (
              <p className="mb-2">
                IMDB Rating: {selectedMovieDetails.imdbRating} / 10
              </p>
            )}
            {selectedMovieDetails?.userRating && (
              <p className="mb-2">
                Your Rating: {selectedMovieDetails.userRating} / 10
              </p>
            )}

            <div className="flex items-center justify-end gap-4">
              <button
                type="button"
                onClick={onButtonClick}
                className={`rounded px-4 py-2 font-bold text-white hover:bg-blue-700 ${
                  onEventHandlers.type === 'unwatched'
                    ? 'bg-green-500'
                    : 'bg-red-500'
                }`}
              >
                {buttonText}
              </button>

              <button
                type="button"
                onClick={onModalClose}
                className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

Movie.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  onEventHandlers: PropTypes.object.isRequired,
  runtime: PropTypes.number,
  imdbRating: PropTypes.number,
};
