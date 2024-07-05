import PropTypes from 'prop-types';

export default function Navbar({ onSearchMoviesHandler }) {
  return (
    <>
      {/* NAVBAR */}
      <div className="flex w-full items-center justify-between rounded bg-[#5D3587] p-6">
        <div>
          <p className="text-4xl text-white">
            🍟 <span className="inline-block font-bold">Movies</span>
          </p>
        </div>

        <div className="w-[450px] max-w-[550px]">
          <input
            type="text"
            placeholder="Search for film..."
            onChange={(e) => onSearchMoviesHandler(e)}
            className="w-full rounded bg-[#A367B1] p-4 text-2xl placeholder-white focus:outline-none focus:ring-2 focus:ring-[#A367B1] focus:ring-opacity-50"
          />
        </div>
      </div>
    </>
  );
}

Navbar.propTypes = {
  onSearchMoviesHandler: PropTypes.func.isRequired,
};
